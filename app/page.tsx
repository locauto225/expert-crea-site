import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import SunMark from "@/components/SunMark";

export const metadata: Metadata = {
  title:
    "EXPERT CRÉA — Solutions digitales (sites, outils métiers, SEO local, interfaçage, conformité)",
  description:
    "EXPERT CRÉA aide les entreprises à structurer, sécuriser et développer leur activité grâce au digital : sites performants, SEO local, outils métiers/extranet, interfaçage et conformité. Côte d'Ivoire & international.",
  openGraph: {
    title: "EXPERT CRÉA — Des solutions digitales utiles pour les entreprises",
    description:
      "Sites performants, SEO local (Google Maps), outils métiers/extranet, interfaçage & conformité : des solutions utiles, adaptées au terrain, sans bloquer l'activité.",
    url: "/",
    type: "website",
  },
};

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name:
    | "spark"
    | "map"
    | "grid"
    | "shield"
    | "bolt"
    | "hand"
    | "arrow"
    | "warn"
    | "link"
    | "check";
  className?: string;
}) {
  const common = { className, fill: "none", stroke: "currentColor", strokeWidth: 2 };
  switch (name) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l1.2 4.6L18 8l-4.8 1.4L12 14l-1.2-4.6L6 8l4.8-1.4L12 2z" />
          <path d="M5 14l.8 2.8L9 18l-3.2 1.2L5 22l-.8-2.8L1 18l3.2-1.2L5 14z" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 21s7-4.4 7-11a7 7 0 10-14 0c0 6.6 7 11 7 11z" />
          <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "hand":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 11V6a1 1 0 112 0v5" />
          <path d="M9 11V5a1 1 0 112 0v6" />
          <path d="M11 11V6a1 1 0 112 0v5" />
          <path d="M13 11V7a1 1 0 112 0v4" />
          <path d="M15 11l2 1c1 .5 2 1.6 2 2.8V18c0 2-1.6 4-4 4H11c-2.8 0-4-2-4-4v-7c0-.6.4-1 1-1h0c.6 0 1 .4 1 1v2" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 12h12" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "warn":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
          <path d="M10.3 4.5l-8 14A2 2 0 004 21h16a2 2 0 001.7-3l-8-14a2 2 0 00-3.4 0z" />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 000-7.07 5 5 0 00-7.07 0L10 5" />
          <path d="M14 11a5 5 0 01-7.07 0L5.52 9.59a5 5 0 010-7.07 5 5 0 017.07 0L14 3" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
  }
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
        <Icon name="check" className="h-4 w-4" />
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function InterfacageSchema() {
  return (
    <div id="interfacage-schema" className="schema-anim rounded-3xl border border-black/10 bg-white p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-900">Schéma simple</div>
          <div className="text-sm text-slate-600">Outil existant → Interfaçage → Conformité</div>
        </div>
        <div className="text-xs font-semibold text-slate-500">Compréhension immédiate</div>
      </div>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
        <span className="h-2 w-2 rounded-full bg-(--brand-blue)" />
        Schéma — compréhension immédiate
      </div>

      {/* Mobile: version verticale */}
      <div className="mt-4 md:hidden">
        <div className="space-y-3">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-blue)/10 text-(--brand-blue)">
                <Icon name="grid" className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-bold text-slate-900">Outil existant</div>
                <div className="text-sm text-slate-600">Excel / logiciel / app</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-1">
            <span aria-hidden className="h-6 w-px rounded-full bg-black/10" />
          </div>

          <div className="rounded-2xl border border-(--brand-blue)/20 bg-(--brand-blue)/5 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-blue)/10 text-(--brand-blue)">
                <Icon name="link" className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-bold text-slate-900">Interfaçage Expert Créa</div>
                <div className="text-sm text-slate-600">Connexion • adaptation • automatisation</div>
                <div className="mt-1 text-xs font-semibold text-slate-500">Sans arrêter l'activité</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-1">
            <span aria-hidden className="h-6 w-px rounded-full bg-black/10" />
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-green)/10 text-(--brand-green)">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-bold text-slate-900">Conformité</div>
                <div className="text-sm text-slate-600">suivi • sécurité</div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          On connecte l'existant aux exigences de conformité{" "}
          <span className="font-semibold">sans arrêter l'activité</span>.
        </p>
      </div>

      {/* Desktop: schéma horizontal animé */}
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

          <g>
            <rect x="40" y="60" width="260" height="120" rx="20" fill="white" stroke="rgba(0,0,0,0.12)" />
            <rect x="350" y="40" width="260" height="160" rx="24" fill="url(#g1)" stroke="rgba(0,0,0,0.12)" />
            <rect x="660" y="60" width="260" height="120" rx="20" fill="white" stroke="rgba(0,0,0,0.12)" />
            <rect x="660" y="60" width="260" height="120" rx="20" className="ok-glow" />

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
              Sans arrêter l'activité
            </text>

            <text x="790" y="105" textAnchor="middle" fontSize="18" fill="rgba(15,23,42,0.95)" fontWeight="700">
              Conformité
            </text>
            <text x="790" y="135" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
              suivi • sécurité
            </text>

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

              <circle className="flow-dot d1" cx="300" cy="120" r="5" fill="currentColor" />
              <circle className="flow-dot d2" cx="610" cy="120" r="5" fill="currentColor" />
            </g>
          </g>
        </svg>
      </div>

      <Script id="interfacage-schema-io" strategy="afterInteractive">
        {`(() => {
  try {
    const host = document.getElementById('interfacage-schema');
    if (!host) return;

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      host.style.setProperty('--p1', '1');
      host.style.setProperty('--p2', '1');
      host.style.setProperty('--dot1o', '0');
      host.style.setProperty('--dot2o', '0');
      host.style.setProperty('--ok', '0');
      return;
    }

    let raf = 0;
    let running = false;

    const clamp01 = (n) => Math.max(0, Math.min(1, n));

    const update = () => {
      if (!running) return;

      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight || 0;

      const start = vh * 0.85;
      const end = -rect.height * 0.15;
      const p = clamp01((start - rect.top) / (start - end));

      const p1 = clamp01(p * 1.15);
      const p2 = clamp01((p - 0.18) * 1.18);

      const dot1o = clamp01(1 - Math.abs(p1 - 0.5) * 2) * 0.85;
      const dot2o = clamp01(1 - Math.abs(p2 - 0.5) * 2) * 0.85;

      const ok = clamp01((p2 - 0.15) * 1.2);

      host.style.setProperty('--p1', p1.toFixed(4));
      host.style.setProperty('--p2', p2.toFixed(4));
      host.style.setProperty('--dot1o', dot1o.toFixed(4));
      host.style.setProperty('--dot2o', dot2o.toFixed(4));
      host.style.setProperty('--ok', ok.toFixed(4));

      raf = window.requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries && entries[0];
        if (e && e.isIntersecting) {
          if (!running) {
            running = true;
            raf = window.requestAnimationFrame(update);
          }
        } else {
          running = false;
          if (raf) window.cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.05, rootMargin: '120px 0px 120px 0px' }
    );

    io.observe(host);
    return () => {
      running = false;
      if (raf) window.cancelAnimationFrame(raf);
      io.disconnect();
    };
  } catch (e) {}
})();`}
      </Script>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #interfacage-schema .flow-path,
          #interfacage-schema .flow-dot,
          #interfacage-schema .ok-glow {
            animation: none !important;
            transition: none !important;
            filter: none !important;
          }
          #interfacage-schema .flow-path { stroke-dashoffset: 0 !important; }
          #interfacage-schema .flow-dot { opacity: 0 !important; }
          #interfacage-schema .ok-glow { opacity: 0 !important; }
        }

        #interfacage-schema { --p1: 0; --p2: 0; --dot1o: 0; --dot2o: 0; --ok: 0; }

        #interfacage-schema .flow-path {
          stroke-dasharray: 90;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke-dashoffset 60ms linear;
          filter: drop-shadow(0 0 6px rgba(0, 145, 255, 0.22));
        }
        #interfacage-schema .flow-path.p1 { stroke-dashoffset: calc(90 * (1 - var(--p1))); }
        #interfacage-schema .flow-path.p2 { stroke-dashoffset: calc(90 * (1 - var(--p2))); }

        #interfacage-schema .flow-dot {
          transition: transform 60ms linear, opacity 80ms linear;
          filter: drop-shadow(0 0 6px rgba(0, 145, 255, 0.22));
        }
        #interfacage-schema .flow-dot.d1 {
          opacity: var(--dot1o);
          transform: translateX(calc(52px * var(--p1)));
        }
        #interfacage-schema .flow-dot.d2 {
          opacity: var(--dot2o);
          transform: translateX(calc(52px * var(--p2)));
        }

        #interfacage-schema .ok-glow {
          fill: rgba(0, 145, 255, 0.10);
          stroke: rgba(0, 145, 255, 0.28);
          opacity: var(--ok);
          transition: opacity 120ms linear;
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="home-unified">
      <div className="home-bg" aria-hidden />

      {/* 1) HERO */}
      <section
        id="hero"
        className="reveal relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] -mt-10 min-h-[78vh] overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-6 pb-14 pt-24 text-white md:-mt-14 md:min-h-[74vh] md:px-10 md:pb-16 md:pt-28"
      >
        <div className="hero-bg pointer-events-none absolute inset-0 opacity-[0.22]" aria-hidden>
          <svg className="h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              </pattern>
              <radialGradient id="heroHaloBlue" cx="50%" cy="50%" r="65%">
                <stop offset="0%" stopColor="rgba(0,145,255,0.30)" />
                <stop offset="60%" stopColor="rgba(0,145,255,0.10)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <radialGradient id="heroHaloGreen" cx="50%" cy="50%" r="65%">
                <stop offset="0%" stopColor="rgba(0,200,120,0.26)" />
                <stop offset="60%" stopColor="rgba(0,200,120,0.10)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
            </defs>
            <rect width="1200" height="600" fill="url(#heroGrid)" />
            <circle cx="280" cy="210" r="260" fill="url(#heroHaloBlue)" />
            <circle cx="980" cy="430" r="300" fill="url(#heroHaloGreen)" />
          </svg>
        </div>

        <div className="hero-spot pointer-events-none absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-linear-to-b from-transparent to-white" aria-hidden />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-(--brand-green)" />
                Côte d'Ivoire • terrain & efficacité
                <SunMark size={18} tone="light" className="opacity-80" ariaLabel="" />
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl">
                Le digital qui fait fonctionner <span className="hero-highlight">l'entreprise</span>.
              </h1>

              <p className="mt-4 max-w-2xl leading-relaxed text-white/75 md:text-lg">
                Sites qui génèrent des demandes, outils internes qui simplifient, conformité sans rupture.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30 transition-transform duration-150 will-change-transform hover:-translate-y-px active:scale-[0.98]"
                >
                  Décrire votre situation (2 min)
                </Link>

                <Link
                  href="/realisations"
                  className="inline-flex items-center justify-center text-sm font-semibold text-white/70 underline underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Voir des exemples concrets
                </Link>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
                Réponse sous 24h — sans engagement
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="hero-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
                  <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-(--brand-blue)/20 blur-2xl" />
                  <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-(--brand-green)/20 blur-2xl" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-white/70">Aperçu — flux simple (exemple)</div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-semibold text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-(--brand-blue)" />
                      En temps réel
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-white">Outil existant</div>
                        <div className="text-xs font-semibold text-white/60">Excel / logiciel / site existant</div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-extrabold">Interfaçage Expert Créa</div>
                            <div className="mt-1 text-xs font-semibold text-white/60">
                              Connexion • adaptation • automatisation
                            </div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-white/70">
                            V1
                          </div>
                        </div>

                        <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20 p-3">
                          <svg viewBox="0 0 420 120" className="h-auto w-full" aria-hidden>
                            <defs>
                              <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0" stopColor="rgba(0,145,255,0.92)" />
                                <stop offset="1" stopColor="rgba(0,200,120,0.92)" />
                              </linearGradient>
                            </defs>

                            <g>
                              <rect
                                x="16"
                                y="28"
                                width="120"
                                height="64"
                                rx="16"
                                fill="rgba(255,255,255,0.05)"
                                stroke="rgba(255,255,255,0.14)"
                              />
                              <rect
                                x="150"
                                y="20"
                                width="120"
                                height="80"
                                rx="18"
                                fill="rgba(255,255,255,0.07)"
                                stroke="rgba(0,145,255,0.22)"
                              />
                              <rect
                                x="284"
                                y="28"
                                width="120"
                                height="64"
                                rx="16"
                                fill="rgba(255,255,255,0.05)"
                                stroke="rgba(255,255,255,0.14)"
                              />

                              <path
                                d="M136 60 C146 60, 146 60, 150 60"
                                stroke="url(#heroLine)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="hero-flow"
                              />
                              <path
                                d="M270 60 C280 60, 280 60, 284 60"
                                stroke="url(#heroLine)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="hero-flow"
                              />

                              <circle cx="136" cy="60" r="5" fill="rgba(0,145,255,0.9)" className="hero-dot" />
                              <circle cx="270" cy="60" r="5" fill="rgba(0,200,120,0.9)" className="hero-dot2" />

                              <text
                                x="76"
                                y="62"
                                textAnchor="middle"
                                fontSize="12"
                                fill="rgba(255,255,255,0.86)"
                                fontWeight="700"
                              >
                                BASE
                              </text>
                              <text
                                x="210"
                                y="58"
                                textAnchor="middle"
                                fontSize="12"
                                fill="rgba(255,255,255,0.92)"
                                fontWeight="800"
                              >
                                SOLUTION
                              </text>
                              <text
                                x="344"
                                y="62"
                                textAnchor="middle"
                                fontSize="12"
                                fill="rgba(255,255,255,0.86)"
                                fontWeight="700"
                              >
                                RÉSULTAT
                              </text>
                            </g>
                          </svg>
                        </div>

                        <div className="mt-4 grid gap-2">
                          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
                            <span className="font-semibold text-white/80">Visibilité & demandes</span>
                            <span className="font-semibold text-white/55">OK</span>
                          </div>
                          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
                            <span className="font-semibold text-white/80">Organisation & suivi</span>
                            <span className="font-semibold text-white/55">Contrôlée</span>
                          </div>
                          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
                            <span className="font-semibold text-white/80">Sécurité & conformité</span>
                            <span className="font-semibold text-white/55">Actifs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full border-t border-white/10" aria-hidden />

        <Script id="hero-spotlight" strategy="afterInteractive">
          {`(() => {
  try {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let raf = 0;
    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left);
      const y = (e.clientY - r.top);

      hero.style.setProperty('--hx', x.toFixed(0) + 'px');
      hero.style.setProperty('--hy', y.toFixed(0) + 'px');

      const nx = (x / r.width) * 2 - 1;
      const ny = (y / r.height) * 2 - 1;
      tx = clamp(nx * 10, -10, 10);
      ty = clamp(ny * 10, -10, 10);

      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      hero.style.setProperty('--dx', cx.toFixed(2));
      hero.style.setProperty('--dy', cy.toFixed(2));
    };

    const onLeave = () => {
      tx = 0; ty = 0;
      hero.style.setProperty('--hx', '50%');
      hero.style.setProperty('--hy', '30%');
      if (!raf) raf = requestAnimationFrame(tick);
    };

    hero.style.setProperty('--hx', '50%');
    hero.style.setProperty('--hy', '30%');

    hero.addEventListener('pointermove', onMove, { passive: true });
    hero.addEventListener('pointerleave', onLeave, { passive: true });
  } catch (e) {}
})();`}
        </Script>

        <style>{`
          #hero{ --hx: 50%; --hy: 30%; --dx: 0; --dy: 0; }
          .hero-bg{
            transform: translate3d(calc(var(--dx) * -1px), calc(var(--dy) * -1px), 0);
            transition: transform 120ms ease-out;
            will-change: transform;
          }
          .hero-spot{
            background:
              radial-gradient(680px circle at var(--hx) var(--hy), rgba(0,145,255,0.18), transparent 58%),
              radial-gradient(560px circle at calc(var(--hx) + 120px) calc(var(--hy) + 140px), rgba(0,200,120,0.14), transparent 60%);
            mix-blend-mode: screen;
            opacity: 0.9;
            transform: translate3d(calc(var(--dx) * 1px), calc(var(--dy) * 1px), 0);
            transition: transform 140ms ease-out;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce){
            .hero-bg, .hero-spot{ transform: none !important; transition: none !important; }
          }
          .hero-highlight{
            background: linear-gradient(90deg, rgba(0,145,255,1) 0%, rgba(0,200,120,1) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            position: relative;
          }
          .hero-highlight::after{
            content:"";
            position:absolute;
            left:-6px; right:-6px;
            bottom:-6px;
            height:12px;
            border-radius:999px;
            background: linear-gradient(90deg, rgba(0,145,255,0.24) 0%, rgba(0,200,120,0.18) 100%);
            filter: blur(10px);
            opacity: .85;
            pointer-events:none;
          }

          @media (prefers-reduced-motion: no-preference){
            .hero-flow{
              stroke-dasharray: 40;
              animation: heroDash 2600ms ease-in-out infinite;
            }
            .hero-dot{ animation: heroDot 2600ms ease-in-out infinite; }
            .hero-dot2{ animation: heroDot2 2600ms ease-in-out infinite; }
            .hero-card{ animation: heroFloat 3600ms ease-in-out infinite; }
          }

          @keyframes heroDash{
            0%,100%{ opacity:.55; stroke-dashoffset:40; }
            40%{ opacity:1; stroke-dashoffset:10; }
            70%{ opacity:.75; stroke-dashoffset:0; }
          }
          @keyframes heroDot{
            0%,100%{ transform: translateX(0); opacity:.35; }
            50%{ transform: translateX(12px); opacity:.95; }
          }
          @keyframes heroDot2{
            0%,100%{ transform: translateX(0); opacity:.35; }
            50%{ transform: translateX(12px); opacity:.95; }
          }
          @keyframes heroFloat{
            0%,100%{ transform: translateY(0); }
            50%{ transform: translateY(-4px); }
          }
        `}</style>
      </section>

      <div className="home-divider" aria-hidden />

      {/* TRANSITION 1 */}
      <section className="reveal home-section">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-slate-900">Concrètement, ça veut dire quoi ?</span> Voici ce que vivent beaucoup d'entreprises ivoiriennes.
          </p>
        </div>
      </section>

      {/* 2) PROBLÈME */}
      <section className="reveal home-section">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                <Icon name="warn" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Les réalités du terrain</h2>
                <p className="mt-1 text-slate-600">
                  Aujourd'hui, beaucoup d'entreprises font face à des contraintes concrètes :
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              <Bullet>La conformité (FNE, etc.) complique la facturation et crée du stress</Bullet>
              <Bullet>Des outils existants non conformes ou mal adaptés</Bullet>
              <Bullet>Beaucoup de temps perdu entre Excel, WhatsApp, cahiers et logiciels isolés</Bullet>
              <Bullet>Des sites internet qui existent, mais ne génèrent aucune demande</Bullet>
              <Bullet>La peur de mal faire (erreurs, sanctions, blocage)</Bullet>
            </ul>

            <p className="mt-6 text-slate-700">
              Ce n'est pas un manque de volonté. Ce sont{" "}
              <span className="font-semibold">des problèmes d'outils et d'organisation</span>.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
              <div className="relative h-75 w-full lg:h-140 lg:max-h-155">
                <Image
                  src="/home/home-problemes-terrain.webp"
                  alt="Facturation, organisation et outils du quotidien en entreprise"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-divider" aria-hidden />

      {/* TRANSITION 2 */}
      <section className="reveal home-section">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-slate-900">Ces situations ne sont pas une fatalité.</span> Notre approche est différente.
          </p>
        </div>
      </section>

      {/* 3) POURQUOI NOUS / APPROCHE */}
      <section className="reveal home-section">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Terrain & efficacité. On construit ce qui simplifie.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-700 md:text-lg">
              Notre rôle n'est pas d'ajouter un outil de plus. C'est de résoudre des situations concrètes{" "}
              <span className="font-semibold">sans perturber l'activité</span>.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Icon name="hand" className="h-5 w-5 text-slate-900" />
                  <div className="text-sm font-extrabold text-slate-900">Simple à utiliser</div>
                </div>
                <div className="mt-1 text-sm text-slate-600">Compréhensible par vos équipes, sans usine à gaz.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Icon name="bolt" className="h-5 w-5 text-slate-900" />
                  <div className="text-sm font-extrabold text-slate-900">Sans arrêter l'activité</div>
                </div>
                <div className="mt-1 text-sm text-slate-600">Mise en place progressive, propre, sans rupture.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Icon name="shield" className="h-5 w-5 text-slate-900" />
                  <div className="text-sm font-extrabold text-slate-900">Conforme & sécurisé</div>
                </div>
                <div className="mt-1 text-sm text-slate-600">Conformité, données et process sécurisés.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Icon name="spark" className="h-5 w-5 text-slate-900" />
                  <div className="text-sm font-extrabold text-slate-900">V1 utile rapide</div>
                </div>
                <div className="mt-1 text-sm text-slate-600">Livrer vite, tester, ajuster — pas de projet interminable.</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
              <div className="relative h-75 w-full lg:h-130 lg:max-h-150">
                <Image
                  src="/home/home-dashboard.webp"
                  alt="Exemple d'interface claire : suivi, organisation, facturation"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">Une interface claire = adoption plus rapide par l'équipe.</div>
          </div>
        </div>
      </section>

      <div className="home-divider" aria-hidden />

      {/* TRANSITION 3 */}
      <section className="reveal home-section">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-slate-900">Ça donne quoi en pratique ?</span> Nos 4 solutions principales.
          </p>
        </div>
      </section>

      {/* 4) NOS 4 SOLUTIONS (UNIQUE SECTION) */}
      <section id="solutions" className="reveal home-section reveal-stagger space-y-4 scroll-mt-28">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight">4 besoins essentiels, 4 solutions</h2>
          <p className="mt-1 text-slate-600">Identifiez le besoin qui ressemble le plus à votre situation.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              href: "/services/referencement-seo",
              icon: "map" as const,
              title: "Attirer",
              badge: "Visibilité",
              color: "blue",
              desc: "Si vos clients ne vous trouvent pas : visibilité locale, crédibilité, présence Google.",
              tools: "SEO local • Google Maps • Site vitrine",
            },
            {
              href: "/services/creation-site-web",
              icon: "spark" as const,
              title: "Convertir",
              badge: "Demandes",
              color: "green",
              desc: "Si votre site existe mais ne génère rien : un site pensé pour recevoir et convertir des demandes.",
              tools: "Site orienté demandes • Identité • Supports",
            },
            {
              href: "/services/extranet-outils-gestion",
              icon: "grid" as const,
              title: "Structurer",
              badge: "Organisation",
              color: "green",
              desc: "Si l'organisation repose sur Excel / WhatsApp : outils internes, extranet, automatisations.",
              tools: "Outils internes • Extranet • Suivi",
            },
            {
              href: "/services/conformite-fne",
              icon: "shield" as const,
              title: "Sécuriser",
              badge: "Conformité",
              color: "blue",
              desc: "Si la conformité vous inquiète : interfaçage, FNE, données, tranquillité d'esprit.",
              tools: "Interfaçage • Conformité • Sécurisation",
            },
          ].map((need) => (
            <Link
              key={need.href}
              href={need.href}
              className="card-3d stagger-item group rounded-3xl border border-black/10 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                <div
                  className={
                    need.color === "blue"
                      ? "rounded-2xl bg-(--brand-blue)/10 p-2 text-(--brand-blue)"
                      : "rounded-2xl bg-(--brand-green)/10 p-2 text-(--brand-green)"
                  }
                >
                  <Icon name={need.icon} />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-lg font-bold">{need.title}</div>
                  <span
                    className={
                      need.color === "blue"
                        ? "inline-flex items-center rounded-full bg-(--brand-blue)/10 px-2.5 py-0.5 text-xs font-semibold text-(--brand-blue)"
                        : "inline-flex items-center rounded-full bg-(--brand-green)/10 px-2.5 py-0.5 text-xs font-semibold text-(--brand-green)"
                    }
                  >
                    {need.badge}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-slate-600">{need.desc}</p>
              <div className="mt-3 text-xs font-semibold text-slate-500">{need.tools}</div>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-(--brand-green)">
                Découvrir <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 bg-slate-50 p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-(--brand-green)/10 p-2 text-(--brand-green)">
              <Icon name="spark" className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">
                Souvent nécessaire : Identité visuelle & supports
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Pour inspirer confiance dès le premier contact. Ce travail accompagne souvent un site (Convertir), la
                visibilité (Attirer) et la cohérence des documents (Structurer / Sécuriser).
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/services/identite-visuelle-supports"
                  className="inline-flex items-center text-sm font-semibold text-(--brand-blue) hover:opacity-90"
                >
                  Voir le service →
                </Link>
                <Link
                  href="/realisations"
                  className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Exemples
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .card-3d {
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }
            .card-3d:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
            }
          }
        `}</style>
      </section>

      <div className="home-divider" aria-hidden />

      {/* TRANSITION 4 */}
      <section className="reveal home-section">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-slate-900">Un point clé :</span> on n'écrase pas l'existant. On l'adapte.
          </p>
        </div>
      </section>

      {/* 5) FOCUS INTERFAÇAGE */}
      <section className="reveal home-section">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
            <Icon name="link" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Vous avez déjà un outil ? On ne le remplace pas. On l'adapte.
            </h2>
            <p className="mt-1 text-slate-600">
              De nombreuses entreprises disposent déjà d'un logiciel, d'un système interne ou d'un outil métier.
            </p>
          </div>
        </div>

        <p className="mt-5 text-slate-700">
          Nous mettons en place des solutions <span className="font-semibold">d'interfaçage</span> pour connecter
          l'existant aux exigences actuelles de conformité, sans arrêter l'activité ni repartir de zéro.
        </p>

        <div className="mt-6">
          <InterfacageSchema />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {[
            { label: "Continuité", icon: "bolt" as const },
            { label: "Conformité", icon: "shield" as const },
            { label: "Gain de temps", icon: "spark" as const },
            { label: "Zéro rupture", icon: "check" as const },
          ].map((x) => (
            <div key={x.label} className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="flex items-center gap-2 text-slate-900">
                <span className="rounded-xl bg-slate-100 p-2">
                  <Icon name={x.icon} className="h-4 w-4" />
                </span>
                <div className="font-semibold">{x.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="home-divider" aria-hidden />

      {/* TRANSITION 5 */}
      <section className="reveal home-section">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-slate-900">Comment on procède ?</span> Notre méthode en 3 étapes.
          </p>
        </div>
      </section>

      {/* 6) MÉTHODE - AVEC TIMELINE ANIMÉE */}
      <section id="methode-timeline" className="timeline-anim reveal home-section space-y-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight">Une méthode simple, adaptée au terrain</h2>
          <p className="mt-1 text-slate-600">Pas de projets interminables. Pas de solutions compliquées.</p>
        </div>

        <div className="rounded-2xl bg-slate-50/60 p-6 md:p-8">
          <div className="relative grid gap-6 md:grid-cols-3">
            <svg
              className="timeline-line pointer-events-none absolute left-0 top-12 hidden h-1 w-full md:block"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
            >
              <line className="tl-stroke" x1="0" y1="1" x2="100" y2="1" stroke="rgba(15,23,42,0.12)" strokeWidth="2" />
            </svg>

            {[
              {
                k: "01",
                title: "On comprend votre situation réelle",
                desc: "On regarde le fonctionnement actuel, les contraintes, et ce qui bloque vraiment.",
                icon: "hand" as const,
              },
              {
                k: "02",
                title: "On livre une V1 utile rapidement",
                desc: "Vous voyez, vous testez, on ajuste — sans bloquer l'activité.",
                icon: "bolt" as const,
              },
              {
                k: "03",
                title: "On ajuste & on optimise",
                desc: "On améliore sur des retours concrets : adoption, visibilité, conversion, suivi.",
                icon: "spark" as const,
              },
            ].map((s, idx) => (
              <div
                key={s.k}
                className={`timeline-step step-${idx} stagger-item relative rounded-2xl border border-black/10 bg-white p-4 sm:p-5`}
              >
                <div className="flex items-center gap-3">
                  <span className="timeline-dot inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-extrabold text-white">
                    {s.k}
                  </span>
                  <span className="rounded-xl bg-slate-100 p-2 text-slate-900">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-4 text-lg font-bold text-slate-900">{s.title}</div>
                <div className="mt-1 text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-700">
            <span className="font-semibold">La première étape est toujours la même :</span> comprendre votre situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 transition-transform duration-150 will-change-transform hover:-translate-y-px active:scale-[0.98]"
          >
            Décrire votre situation (2 min)
          </Link>
        </div>

        <Script id="timeline-io" strategy="afterInteractive">
          {`(() => {
  try {
    const timeline = document.getElementById('methode-timeline');
    if (!timeline) return;

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      timeline.classList.add('no-anim');
      return;
    }

    const io = new IntersectionObserver((entries) => {
      const e = entries && entries[0];
      if (e && e.isIntersecting) {
        timeline.classList.add('is-active');
        io.disconnect();
      }
    }, { threshold: 0.3 });

    io.observe(timeline);
  } catch (e) {}
})();`}
        </Script>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            #methode-timeline .timeline-line,
            #methode-timeline .timeline-step,
            #methode-timeline .timeline-dot {
              animation: none !important;
            }
          }

          #methode-timeline .timeline-step,
          #methode-timeline .timeline-dot {
            opacity: 0;
          }

          #methode-timeline.no-anim .timeline-step,
          #methode-timeline.no-anim .timeline-dot {
            opacity: 1;
          }

          #methode-timeline .tl-stroke {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }

          #methode-timeline.is-active .tl-stroke {
            animation: tlDraw 1.2s ease forwards;
          }

          #methode-timeline.is-active .timeline-step.step-0 {
            animation: tlFadeIn 0.5s ease 0.3s forwards;
          }

          #methode-timeline.is-active .timeline-step.step-1 {
            animation: tlFadeIn 0.5s ease 0.7s forwards;
          }

          #methode-timeline.is-active .timeline-step.step-2 {
            animation: tlFadeIn 0.5s ease 1.1s forwards;
          }

          @keyframes tlDraw {
            to { stroke-dashoffset: 0; }
          }

          @keyframes tlFadeIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      <div className="home-divider" aria-hidden />

      {/* TRANSITION 6 */}
      <section className="reveal home-section">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-slate-900">Qu'est-ce que ça donne en vrai ?</span> Voici ce que disent nos clients.
          </p>
        </div>
      </section>

      {/* 7) PREUVES / TÉMOIGNAGES */}
      <section className="reveal home-section">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight">Ils nous font confiance</h2>
          <p className="mt-1 text-slate-600">
            Des entreprises ivoiriennes qui ont résolu leurs situations concrètes.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-900">
                M
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">Marie K.</div>
                <div className="text-xs font-semibold text-slate-600">Directrice — Distribution</div>
              </div>
            </div>
            <p className="mt-4 text-slate-700">
              "Expert Créa a simplifié notre facturation FNE en 2 semaines. Zéro blocage, tout a continué pendant la
              mise en place. On a gagné 15h par semaine."
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-900">
                J
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">Jean-Paul D.</div>
                <div className="text-xs font-semibold text-slate-600">Gérant — Services BTP</div>
              </div>
            </div>
            <p className="mt-4 text-slate-700">
              "Notre site existait depuis 3 ans mais générait zéro demande. Après la refonte orientée conversion, on
              reçoit 8-12 demandes qualifiées par semaine."
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-900">
                A
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">Amadou T.</div>
                <div className="text-xs font-semibold text-slate-600">DG — Import/Export</div>
              </div>
            </div>
            <p className="mt-4 text-slate-700">
              "L'interfaçage entre notre logiciel existant et les obligations FNE a été fait proprement. Pas de
              remplacement, juste une connexion qui marche."
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-(--brand-blue)/10 p-2 text-(--brand-blue)">
                <Icon name="spark" className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">Dernière réalisation</div>
                <div className="text-xs font-semibold text-slate-600">Interface de suivi & organisation</div>
              </div>
            </div>
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-black/10">
              <div className="relative h-48 w-full">
                <Image
                  src="/home/home-dashboard.webp"
                  alt="Interface de suivi et organisation"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 320px, 100vw"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Un exemple de livrable : simple, clair, adopté rapidement.</p>
            <Link
              href="/realisations"
              className="mt-3 inline-flex items-center text-sm font-semibold text-(--brand-blue) hover:opacity-90"
            >
              Voir plus d'exemples →
            </Link>
          </div>
        </div>
      </section>

      <div className="home-divider" aria-hidden />

      {/* 8) SIGNATURE */}
      <section className="reveal home-section">
        <p className="text-lg font-semibold text-slate-900">
          Nous ne vendons pas du digital.{" "}
          <span className="text-slate-700">
            Nous aidons les entreprises ivoiriennes à fonctionner et évoluer grâce au digital.
          </span>
        </p>
      </section>

      <div className="home-divider" aria-hidden />

      {/* 9) CTA FINAL */}
      <section className="reveal home-band-dark relative">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="home-section">
          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                On regarde votre cas, et on vous dit si c'est adapté.
              </h2>
              <p className="mt-1 text-white/75">
                Échange rapide, sans engagement. On vise une solution utile, pas un projet compliqué.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30 transition-transform duration-150 will-change-transform hover:-translate-y-px active:scale-[0.98]"
            >
              Décrire votre situation (2 min)
            </Link>

            <Link
              href="/realisations"
              className="inline-flex items-center justify-center text-sm font-semibold text-white/70 underline underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Consulter des exemples concrets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}