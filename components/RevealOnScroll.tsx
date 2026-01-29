"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // ✅ Active le mode "JS ready" même si le Script du layout manque
    document.documentElement.classList.add("js");

    // ✅ Respect accessibilité : si reduce motion → tout visible
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    // ✅ Fallback vieux navigateurs → tout visible (anti blank)
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const isDesktop = window.matchMedia?.("(min-width: 1024px)")?.matches ?? false;

    // ✅ Si un élément est déjà dans le viewport, on le rend visible immédiatement
    // (évite les cas "retour navigation" où rien n’apparaît pendant un instant)
    const makeVisible = (el: HTMLElement) => {
      if (el.classList.contains("is-visible")) return;

      // Stagger optionnel : data-delay="80" (ms) — uniquement desktop
      if (isDesktop) {
        const delay = el.getAttribute("data-delay");
        if (delay) el.style.transitionDelay = `${Number(delay)}ms`;
      } else {
        // Sur mobile : pas de delay
        el.style.transitionDelay = "0ms";
      }

      el.classList.add("is-visible");
    };

    const inViewportNow = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.92 && r.bottom > vh * 0.08;
    };

    els.forEach((el) => {
      if (inViewportNow(el)) makeVisible(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            makeVisible(e.target as HTMLElement);
            io.unobserve(e.target); // 1 fois, sobre
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    // Observe seulement ceux qui ne sont pas déjà visibles
    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]); // relance à chaque navigation

  return null;
}