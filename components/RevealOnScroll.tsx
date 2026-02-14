"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // ✅ Active le mode "JS ready" (permet d'appliquer les styles .reveal gated)
    document.documentElement.classList.add("js");

    // ✅ Quand on arrive (ou revient) sur la Home : relance les animations du hero
    if (pathname === "/") {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("ec:home-enter"));
      });
    }

    // ✅ Accessibilité : si reduce motion → tout visible (aucun observer)
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    // ✅ Fallback vieux navigateurs → tout visible (anti blank)
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // ✅ Mobile/tablet : aucun reveal (tout visible)
    const isDesktop = window.matchMedia?.("(min-width: 1024px)")?.matches ?? false;
    if (!isDesktop) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Helper: visible now (used to avoid "blank" on restore/back)
    const inViewportNow = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.92 && r.bottom > vh * 0.08;
    };

    const makeVisible = (el: HTMLElement) => {
      if (el.classList.contains("is-visible")) return;

      // Stagger optionnel : data-delay="80" (ms) — desktop only
      const delay = el.getAttribute("data-delay");
      if (delay) el.style.transitionDelay = `${Number(delay)}ms`;

      el.classList.add("is-visible");
    };

    // ✅ Si déjà visible au chargement/retour → visible immédiatement (sans logique scroll)
    els.forEach((el) => {
      if (inViewportNow(el)) makeVisible(el);
    });

    // ✅ Reveal pro : 1 seule fois, uniquement quand ça entre dans le viewport
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          makeVisible(el);
          io.unobserve(el); // one-shot (pro, stable)
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    // Observe seulement ceux qui ne sont pas déjà visibles
    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    return () => {
      io.disconnect();
    };
  }, [pathname]);

  return null;
}