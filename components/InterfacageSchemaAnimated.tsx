"use client";

import { useEffect, useRef } from "react";

export default function InterfacageSchemaAnimated() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Show the full static schema without motion
      host.style.setProperty("--p1", "1");
      host.style.setProperty("--p2", "1");
      host.style.setProperty("--dot1o", "0");
      host.style.setProperty("--dot2o", "0");
      host.style.setProperty("--ok", "0");
      return;
    }

    let raf = 0;
    let running = false;

    const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

    const update = () => {
      if (!running) return;
      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight || 0;

      // Progress goes from 0 (just before entering) to 1 (after passing most of the block)
      const start = vh * 0.85;
      const end = -rect.height * 0.15;
      const p = clamp01((start - rect.top) / (start - end));

      // Stagger the two paths a bit
      const p1 = clamp01(p * 1.15);
      const p2 = clamp01((p - 0.18) * 1.18);

      // Dot visibility peaked around the middle for readability
      const dot1o = clamp01(1 - Math.abs(p1 - 0.5) * 2) * 0.85;
      const dot2o = clamp01(1 - Math.abs(p2 - 0.5) * 2) * 0.85;

      // Validation glow follows the second path
      const ok = clamp01((p2 - 0.15) * 1.2);

      host.style.setProperty("--p1", p1.toFixed(4));
      host.style.setProperty("--p2", p2.toFixed(4));
      host.style.setProperty("--dot1o", dot1o.toFixed(4));
      host.style.setProperty("--dot2o", dot2o.toFixed(4));
      host.style.setProperty("--ok", ok.toFixed(4));

      raf = window.requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          if (!running) {
            running = true;
            raf = window.requestAnimationFrame(update);
          }
        } else {
          running = false;
          if (raf) window.cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.05, rootMargin: "120px 0px 120px 0px" }
    );

    io.observe(host);
    return () => {
      running = false;
      if (raf) window.cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="schema-wrap">
      {/* En-tête (identique à ton composant actuel) */}
      <div className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-900">Schéma simple</div>
            <div className="text-sm text-slate-600">Outil existant → Interfaçage → Conformité / FNE</div>
          </div>
          <div className="text-xs font-semibold text-slate-500">Compréhension immédiate</div>
        </div>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-(--brand-blue)" />
          Schéma — compréhension immédiate
        </div>

        {/* Mobile : tu gardes ta version verticale telle quelle (zéro animation nécessaire) */}
        <div className="mt-4 md:hidden">
          {/* 👉 colle ici ton bloc mobile existant si tu veux garder exactement le rendu actuel */}
          <p className="text-sm text-slate-600">
            Sur mobile, on garde une version lisible et rapide.
          </p>
        </div>

        {/* Desktop : schéma horizontal animé */}
        <div className="mt-4 hidden overflow-hidden rounded-2xl border border-black/10 bg-linear-to-b from-slate-50 to-white p-4 md:block">
          <svg
            viewBox="0 0 960 240"
            className="h-auto w-full"
            role="img"
            aria-label="Schéma interfaçage : outil existant, interfaçage, conformité"
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="rgba(0,0,0,0.06)" />
                <stop offset="1" stopColor="rgba(0,0,0,0.02)" />
              </linearGradient>

              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
              </marker>
            </defs>

            {/* Cartes */}
            <g>
              <rect x="40" y="60" width="260" height="120" rx="20" fill="white" stroke="rgba(0,0,0,0.12)" />
              <rect x="350" y="40" width="260" height="160" rx="24" fill="url(#g1)" stroke="rgba(0,0,0,0.12)" />
              <rect x="660" y="60" width="260" height="120" rx="20" fill="white" stroke="rgba(0,0,0,0.12)" />

              {/* Glow de validation à droite (invisible tant que pas actif) */}
              <rect
                x="660"
                y="60"
                width="260"
                height="120"
                rx="20"
                className="ok-glow"
              />

              <text x="170" y="105" textAnchor="middle" fontSize="18" fill="rgba(15,23,42,0.95)" fontWeight="700">
                Outil existant
              </text>
              <text x="170" y="135" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
                Excel / logiciel / app
              </text>

              <text x="480" y="95" textAnchor="middle" fontSize="18" fill="rgba(15,23,42,0.95)" fontWeight="800">
                Interfaçage Expert Créa
              </text>
              <text x="480" y="125" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
                Connexion • adaptation • automatisation
              </text>
              <text x="480" y="152" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
                Sans arrêter l’activité
              </text>

              <text x="790" y="105" textAnchor="middle" fontSize="18" fill="rgba(15,23,42,0.95)" fontWeight="700">
                Conformité
              </text>
              <text x="790" y="135" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
                FNE • suivi • sécurité
              </text>
            </g>

            {/* Flèches + animation (stroke-dash) */}
            <g color="rgba(0,145,255,0.85)">
              <path
                d="M300 120 C320 120, 330 120, 350 120"
                className="flow-path p1"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                markerEnd="url(#arrow)"
              />
              <path
                d="M610 120 C630 120, 640 120, 660 120"
                className="flow-path p2"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                markerEnd="url(#arrow)"
              />

              {/* Petits “paquets de données” (points) */}
              <circle className="flow-dot d1" cx="300" cy="120" r="5" fill="currentColor" />
              <circle className="flow-dot d2" cx="610" cy="120" r="5" fill="currentColor" />
            </g>
          </svg>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          On connecte l’existant aux obligations (FNE) <span className="font-semibold">sans arrêter l’activité</span>.
        </p>
      </div>

      {/* CSS scoped ultra léger */}
      <style jsx>{`
        /* ---- Respect préférences accessibilité ---- */
        @media (prefers-reduced-motion: reduce) {
          .flow-path,
          .flow-dot,
          .ok-glow {
            animation: none !important;
            transition: none !important;
            filter: none !important;
          }
          /* Full lines visible, no moving dots/glow */
          .flow-path { stroke-dashoffset: 0 !important; }
          .flow-dot { opacity: 0 !important; }
          .ok-glow { opacity: 0 !important; }
        }

        .flow-path {
          stroke-dasharray: 90;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke-dashoffset 60ms linear;
        }

        /* Scroll progress drives each path */
        .flow-path.p1 { stroke-dashoffset: calc(90 * (1 - var(--p1, 0))); }
        .flow-path.p2 { stroke-dashoffset: calc(90 * (1 - var(--p2, 0))); }

        .flow-dot {
          transform: translateX(0);
          transition: transform 60ms linear, opacity 80ms linear;
        }
        .flow-dot.d1 {
          opacity: var(--dot1o, 0);
          transform: translateX(calc(52px * var(--p1, 0)));
        }
        .flow-dot.d2 {
          opacity: var(--dot2o, 0);
          transform: translateX(calc(52px * var(--p2, 0)));
        }

        .ok-glow {
          fill: rgba(0, 145, 255, 0.10);
          stroke: rgba(0, 145, 255, 0.28);
          opacity: var(--ok, 0);
          transition: opacity 120ms linear;
        }

        .flow-path,
        .flow-dot {
          filter: drop-shadow(0 0 6px rgba(0, 145, 255, 0.22));
        }
      `}</style>
    </div>
  );
}