"use client";

import { useEffect, useRef } from "react";

/*
  Signature element: a geodesic "network core".
  Custom 3D projection on canvas, no dependencies.
  - icosphere vertices + edges
  - depth-fogged copper dots and hairline edges
  - slow rotation with lerped mouse parallax
  - "pulses" travel along random edges like requests through a system
  - respects prefers-reduced-motion, pauses when offscreen
*/

type Vec3 = [number, number, number] | number[];
type Edge = [number, number];
type Projected = { x: number; y: number; z: number; persp: number };

function buildIcosphere(subdivisions: number): { verts: number[][]; edges: Edge[] } {
  const t = (1 + Math.sqrt(5)) / 2;

  function normalize(v: Vec3): number[] {
    const l = Math.hypot(v[0], v[1], v[2]);
    return [v[0] / l, v[1] / l, v[2] / l];
  }

  let verts: number[][] = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ].map(normalize);

  let faces: number[][] = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];

  for (let s = 0; s < subdivisions; s++) {
    const cache = new Map<string, number>();
    const midpoint = (a: number, b: number): number => {
      const key = a < b ? `${a}_${b}` : `${b}_${a}`;
      const cached = cache.get(key);
      if (cached !== undefined) return cached;
      const va = verts[a];
      const vb = verts[b];
      const m = normalize([(va[0] + vb[0]) / 2, (va[1] + vb[1]) / 2, (va[2] + vb[2]) / 2]);
      verts.push(m);
      const idx = verts.length - 1;
      cache.set(key, idx);
      return idx;
    };
    const next: number[][] = [];
    for (const [a, b, c] of faces) {
      const ab = midpoint(a, b);
      const bc = midpoint(b, c);
      const ca = midpoint(c, a);
      next.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
    }
    faces = next;
  }

  const edgeSet = new Set<string>();
  const edges: Edge[] = [];
  for (const [a, b, c] of faces) {
    for (const [p, q] of [[a, b], [b, c], [c, a]] as Edge[]) {
      const key = p < q ? `${p}_${q}` : `${q}_${p}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([p, q]);
      }
    }
  }
  return { verts, edges };
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const { verts, edges } = buildIcosphere(2); // 162 verts, 480 edges

    let raf = 0;
    let running = true;
    let w = 0;
    let h = 0;
    let dpr = 1;

    // mouse parallax (lerped)
    let targetRX = 0;
    let targetRY = 0;
    let curRX = 0;
    let curRY = 0;

    // pulses traveling along edges
    const pulses: { edge: number; t: number; speed: number }[] = [];
    function spawnPulse() {
      pulses.push({
        edge: (Math.random() * edges.length) | 0,
        t: 0,
        speed: 0.008 + Math.random() * 0.012,
      });
    }
    for (let i = 0; i < 7; i++) spawnPulse();

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function onMove(e: PointerEvent) {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      targetRY = nx * 0.55;
      targetRX = ny * 0.4;
    }
    if (!reduced) window.addEventListener("pointermove", onMove, { passive: true });

    // pause when offscreen or tab hidden
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !reduced) loop();
    });
    io.observe(canvas);

    function project(v: number[], rotY: number, rotX: number): Projected {
      // rotate Y then X
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const x = v[0] * cy + v[2] * sy;
      let z = -v[0] * sy + v[2] * cy;
      const y = v[1] * cx - z * sx;
      z = v[1] * sx + z * cx;

      const scale = Math.min(w, h) * 0.34;
      const persp = 3.2 / (3.2 + z);
      return {
        x: w / 2 + x * scale * persp,
        y: h / 2 + y * scale * persp,
        z,
        persp,
      };
    }

    let t0 = performance.now();
    let baseRot = 0;

    function draw(now: number) {
      if (!ctx) return;
      const dt = Math.min((now - t0) / 16.7, 3);
      t0 = now;
      baseRot += 0.0016 * dt;

      curRX += (targetRX - curRX) * 0.04 * dt;
      curRY += (targetRY - curRY) * 0.04 * dt;

      const rotY = baseRot + curRY;
      const rotX = 0.28 + curRX;

      ctx.clearRect(0, 0, w, h);

      const p: Projected[] = new Array(verts.length);
      for (let i = 0; i < verts.length; i++) p[i] = project(verts[i], rotY, rotX);

      // edges, depth-fogged
      for (const [a, b] of edges) {
        const za = p[a].z;
        const zb = p[b].z;
        const depth = (za + zb) / 2; // -1 (front) .. 1 (back)
        const alpha = 0.02 + Math.max(0, 0.16 * (1 - (depth + 1) / 2));
        ctx.strokeStyle = `rgba(201, 139, 78, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p[a].x, p[a].y);
        ctx.lineTo(p[b].x, p[b].y);
        ctx.stroke();
      }

      // vertices as dots
      for (let i = 0; i < p.length; i++) {
        const front = 1 - (p[i].z + 1) / 2; // 1 front, 0 back
        const r = 0.7 + front * 1.5;
        const alpha = 0.12 + front * 0.65;
        ctx.fillStyle = `rgba(232, 177, 92, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p[i].x, p[i].y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pl = pulses[i];
        pl.t += pl.speed * dt;
        if (pl.t >= 1) {
          pulses.splice(i, 1);
          spawnPulse();
          continue;
        }
        const [a, b] = edges[pl.edge];
        const x = p[a].x + (p[b].x - p[a].x) * pl.t;
        const y = p[a].y + (p[b].y - p[a].y) * pl.t;
        const z = p[a].z + (p[b].z - p[a].z) * pl.t;
        const front = 1 - (z + 1) / 2;
        const glow = 0.35 + front * 0.65;
        ctx.fillStyle = `rgba(232, 177, 92, ${glow.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.6 + front * 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(232, 177, 92, ${(glow * 0.18).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, 6 + front * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      if (!running) return;
      raf = requestAnimationFrame((now) => {
        draw(now);
        loop();
      });
    }

    if (reduced) {
      // single static frame
      draw(performance.now());
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
