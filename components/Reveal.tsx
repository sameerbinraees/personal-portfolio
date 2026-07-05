"use client";

import { useEffect } from "react";

// One observer for every [data-reveal] element on the page.
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            const delay = target.getAttribute("data-reveal-delay");
            if (delay) target.style.transitionDelay = `${delay}ms`;
            target.classList.add("in-view");
            io.unobserve(target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
