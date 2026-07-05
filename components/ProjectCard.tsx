"use client";

import { useRef, type PointerEvent, type ReactElement } from "react";
import type { MotifKey, Project } from "../lib/content";

const MOTIFS: Record<MotifKey, ReactElement> = {
  routes: (
    <svg viewBox="0 0 76 76" aria-hidden="true">
      <path d="M8 62 C 26 62, 26 14, 44 14 L 68 14" />
      <path d="M8 44 C 30 44, 34 30, 68 30" strokeDasharray="3 5" />
      <circle cx="8" cy="62" r="2.6" />
      <circle cx="68" cy="14" r="2.6" />
      <circle cx="68" cy="30" r="2.6" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 76 76" aria-hidden="true">
      <path d="M38 8 L 62 18 V 38 C 62 54 52 64 38 69 C 24 64 14 54 14 38 V 18 Z" />
      <path d="M28 38 L 35 45 L 50 29" />
    </svg>
  ),
  nodes: (
    <svg viewBox="0 0 76 76" aria-hidden="true">
      <circle cx="38" cy="16" r="4" />
      <circle cx="16" cy="52" r="4" />
      <circle cx="60" cy="52" r="4" />
      <circle cx="38" cy="40" r="4" />
      <path d="M38 20 V 36 M 35 43 L 19 49 M 41 43 L 57 49" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 76 76" aria-hidden="true">
      <rect x="12" y="12" width="22" height="22" rx="3" />
      <rect x="42" y="12" width="22" height="22" rx="3" />
      <rect x="12" y="42" width="22" height="22" rx="3" />
      <path d="M42 53 h 22 M 53 42 v 22" />
    </svg>
  ),
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 3.4).toFixed(2)}deg) rotateY(${(px * 4.2).toFixed(2)}deg) translateY(-2px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  return (
    <article
      ref={ref}
      className="project-card"
      data-reveal
      data-reveal-delay={String((index % 2) * 90)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="project-motif">{MOTIFS[project.motif] || MOTIFS.nodes}</div>
      <span className="project-kind">{project.kind}</span>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <ul className="project-points">
        {project.points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
      <div className="project-foot">
        <div className="chip-row">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        {project.link && (
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
            Visit <span className="arrow">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
