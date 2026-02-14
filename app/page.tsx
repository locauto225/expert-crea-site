import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import SunMark from "@/components/SunMark";
import { HomeContainer } from "@/components/HomeContainer";

export const metadata: Metadata = {
  title: "EXPERT CRÉA — Sites, visibilité Google & outils simples pour entreprises",
  description:
    "EXPERT CRÉA aide les entreprises à obtenir plus de demandes et à gagner du temps grâce à un site performant, une visibilité Google (Maps) et des outils simples. Côte d'Ivoire.",
  openGraph: {
    title: "EXPERT CRÉA — Des solutions digitales utiles, orientées résultats",
    description:
      "Plus de demandes, plus de clarté, moins de tâches manuelles : site, visibilité Google, outils simples. Côte d'Ivoire.",
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
    | "check"
    | "megaphone"
    | "trending"
    | "database"
    | "target"
    | "tools"
    | "award"
    | "users"
    | "zap"
    | "clock"
    | "star";
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
    case "megaphone":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 11l18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
        </svg>
      );
    case "trending":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M22 7L13.5 15.5 8.5 10.5 2 17" />
          <path d="M16 7h6v6" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "award":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" {...common} fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
  }
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-extrabold text-white/85">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="relative">

      {/* ═══════════════════════════════════════
          1) HERO — accroche, pas de CTA dur
      ═══════════════════════════════════════ */}
      <section
        id="hero"
        className="reveal hero-live hero-restart relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] z-0 flex min-h-0 items-start sm:min-h-svh sm:items-center overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 pb-6 text-white sm:pb-10 md:pb-12"
        // main a déjà pt-[var(--header-h)] globalement, donc ici on le compense avec -mt-[var(--header-h)], puis on remet un padding interne pour que le contenu ne passe pas sous le header.
        style={{
          marginTop: "calc(var(--header-h) * -1)",
          paddingTop: "calc(var(--header-h) + 1.5rem)",
        }}
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
            <circle cx="280" cy="210" r="260" fill="url(#heroHaloBlue)" className="hero-glow-blue" />
            <circle cx="980" cy="430" r="300" fill="url(#heroHaloGreen)" className="hero-glow-green" />
          </svg>
        </div>

        <div className="hero-spot pointer-events-none absolute inset-0" aria-hidden />

        <div className="hero-particles pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
          {[
            { left: 8, top: 18, s: 6, d: 0.0, t: 10.5, o: 0.18 },
            { left: 16, top: 62, s: 5, d: 0.6, t: 12.0, o: 0.14 },
            { left: 28, top: 32, s: 7, d: 1.2, t: 11.0, o: 0.16 },
            { left: 44, top: 74, s: 5, d: 0.9, t: 13.2, o: 0.12 },
            { left: 52, top: 24, s: 6, d: 1.8, t: 12.5, o: 0.14 },
            { left: 66, top: 58, s: 4, d: 0.3, t: 14.0, o: 0.10 },
            { left: 72, top: 20, s: 5, d: 1.5, t: 12.8, o: 0.13 },
            { left: 80, top: 70, s: 6, d: 2.1, t: 11.8, o: 0.12 },
            { left: 90, top: 40, s: 4, d: 0.75, t: 13.8, o: 0.10 },
            { left: 36, top: 12, s: 4, d: 2.4, t: 14.6, o: 0.10 },
          ].map((p, idx) => (
            <span
              key={idx}
              className="hero-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.s}px`,
                height: `${p.s}px`,
                opacity: p.o,
                animationDelay: `${p.d}s`,
                animationDuration: `${p.t}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-full"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,23,42,0.8) 60%, rgb(15,23,42) 100%)",
          }}
        />

        <HomeContainer className="relative">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur animate-in fade-in slide-in-from-top-4 duration-700 sm:text-xs">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-(--brand-green) animate-pulse" />
                Côte d&apos;Ivoire
                <SunMark size={18} tone="light" className="opacity-80" ariaLabel="" />
              </div>

              <h1 className="mt-3 text-xl leading-[1.15] font-extrabold tracking-tight sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Le digital qui fait fonctionner
                <br className="sm:hidden" />{" "}
                <span className="hero-highlight" id="hero-rotating">
                  l&apos;entreprise
                </span>
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-4 md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                On rend votre présence claire et utile — site, Google (Maps) et outils simples pour gagner du temps.
              </p>

              {/* Desktop: tags secteurs */}
              <div className="mt-3 hidden flex-wrap items-center gap-1.5 text-xs font-semibold text-white/70 sm:mt-4 sm:flex sm:gap-2 sm:text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-250">
                {["Multi-secteurs", "Commerce", "Services", "Santé", "BTP", "Restauration"].map((tag, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 sm:px-3 sm:py-1 ${
                      i >= 4 ? "hidden sm:inline-flex" : ""
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs — soft anchor as primary, contact as secondary text link */}
              <div className="mt-4 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <Link
                  href="#solutions"
                  className="group inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 ring-1 ring-white/10 hover:shadow-xl hover:shadow-(--brand-blue)/25 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                >
                  Voir ce qu&apos;on fait ↓
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/80 backdrop-blur hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                >
                  Ou nous contacter directement
                </Link>
              </div>

              <div className="mt-5 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur sm:mt-6 sm:inline-flex sm:px-4 sm:py-2 sm:text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                Réponse sous 24h — on vous dit quoi faire
              </div>

              {/* Mobile: bénéfices (compact summary replacing the 3D card) */}
              <div className="mt-4 flex flex-col gap-2 sm:hidden">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Icon name="map" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-white/80">Site clair & Google (Maps)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Icon name="bolt" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-white/80">Outils simples pour gagner du temps</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block lg:col-span-5 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              {/* 3D perspective wrapper */}
              <div className="hero-perspective" id="hero-card-wrap">
                {/* Floating orbs at different Z-depths — hidden on mobile */}
                <div
                  className="hero-depth-layer hero-depth-back pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full border border-white/5 bg-(--brand-blue)/8 blur-[1px] hidden lg:block"
                  aria-hidden
                />
                <div
                  className="hero-depth-layer hero-depth-back pointer-events-none absolute -right-8 top-1/3 h-14 w-14 rounded-full border border-white/5 bg-(--brand-green)/8 blur-[1px] hidden lg:block"
                  aria-hidden
                />
                <div
                  className="hero-depth-layer hero-depth-front pointer-events-none absolute -right-3 -bottom-4 h-10 w-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:block"
                  aria-hidden
                />
                <div
                  className="hero-depth-layer hero-depth-front pointer-events-none absolute left-8 -bottom-6 h-7 w-7 rounded-full bg-(--brand-blue)/10 backdrop-blur-sm border border-white/8 hidden lg:block"
                  aria-hidden
                />
                <div
                  className="hero-depth-layer hero-depth-mid pointer-events-none absolute -left-4 top-1/2 h-5 w-5 rounded-full bg-white/8 blur-[0.5px] hidden lg:block"
                  aria-hidden
                />

                {/* Main 3D card */}
                <div
                  className="hero-card relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/5 p-3 backdrop-blur-md sm:rounded-3xl sm:p-4"
                  id="hero-card-inner"
                >
                  {/* Shine / reflection layer */}
                  <div className="hero-shine pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0" aria-hidden />

                  {/* Edge highlight for 3D feel */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    aria-hidden
                    style={{
                      boxShadow:
                        "inset 0 1px 0 0 rgba(255,255,255,0.12), inset 0 -1px 0 0 rgba(0,0,0,0.2), 0 25px 60px -10px rgba(0,0,0,0.6), 0 50px 100px -20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
                    <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-(--brand-blue)/20 blur-2xl hero-pulse-slow" />
                    <div
                      className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-(--brand-green)/20 blur-2xl hero-pulse-slow"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>

                  <div className="relative z-[1]">
                    <div className="mt-0 rounded-xl border border-white/10 bg-black/20 p-2.5 sm:rounded-2xl sm:p-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:rounded-2xl sm:p-3">
                        <div className="flex items-center justify-between gap-2 sm:gap-3">
                          <div>
                            <div className="text-xs font-extrabold sm:text-sm">On part de l&apos;existant</div>
                            <div className="mt-0.5 text-[10px] font-semibold text-white/60 sm:mt-1 sm:text-xs">
                              On simplifie • sans tout casser
                            </div>
                          </div>
                          <span className="hidden items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/80 sm:inline-flex">
                            Mise en route rapide
                          </span>
                        </div>
                        <div className="mt-3 rounded-lg border border-white/10 bg-black/20 p-2.5 sm:mt-4 sm:rounded-xl sm:p-3">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <Pill>On part de l&apos;existant</Pill>
                            <span className="text-white/35">→</span>
                            <span className="inline-flex items-center rounded-full border border-(--brand-blue)/30 bg-(--brand-blue)/10 px-2 py-0.5 text-[10px] font-extrabold text-white sm:px-3 sm:py-1 sm:text-[11px]">
                              On simplifie
                            </span>
                            <span className="text-white/35">→</span>
                            <span className="inline-flex items-center rounded-full border border-(--brand-green)/30 bg-(--brand-green)/10 px-2 py-0.5 text-[10px] font-extrabold text-white sm:px-3 sm:py-1 sm:text-[11px]">
                              Vous gagnez du temps
                            </span>
                          </div>
                          <div className="mt-2 text-xs font-semibold text-white/60">Sans bloquer l&apos;activité.</div>
                        </div>
                        <div className="mt-3 grid gap-1.5 sm:mt-4 sm:gap-2">
                          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs">
                            <span className="font-semibold text-white/80">Moins de tâches manuelles</span>
                            <span className="font-semibold text-white/60">↑</span>
                          </div>
                          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs">
                            <span className="font-semibold text-white/80">Moins d&apos;oublis</span>
                            <span className="font-semibold text-white/60">↓</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-2.5 sm:mt-4 sm:rounded-2xl sm:p-3">
                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:h-10 sm:w-10 sm:rounded-2xl">
                          <Icon name="grid" className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <div>
                          <div className="text-xs font-extrabold text-white sm:text-sm">3 solutions selon votre besoin</div>
                          <div className="mt-0.5 text-xs text-white/75 sm:mt-1 sm:text-sm">
                            Visibilité • Demandes • Organisation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HomeContainer>

        {/* Hero scripts & styles */}
        <Script id="hero-cycle" strategy="afterInteractive">
          {`(() => {
  try {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    // Helper: restart CSS keyframe animations by toggling a gate class
    const restartAnimations = () => {
      hero.classList.remove('hero-restart');
      // force reflow so keyframes restart cleanly
      void hero.offsetHeight;
      hero.classList.add('hero-restart');
    };

    // Make restart callable from outside (home enter)
    const onHomeEnter = () => {
      try {
        hero.classList.add('hero-live');
        restartAnimations();
      } catch (e) {}
    };

    // Listen when we navigate back to Home (App Router cache)
    window.addEventListener('ec:home-enter', onHomeEnter);

    let wasVisible = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const visible = e.isIntersecting && e.intersectionRatio >= 0.55;

          if (visible) {
            hero.classList.add('hero-live');
            // If we are coming back into view, restart animations (one clean cycle)
            if (!wasVisible) restartAnimations();
            wasVisible = true;
          } else {
            hero.classList.remove('hero-live');
            wasVisible = false;
          }
        }
      },
      { threshold: [0, 0.25, 0.55, 0.8], rootMargin: '0px' }
    );

    io.observe(hero);

    window.addEventListener('pagehide', () => {
      try {
        window.removeEventListener('ec:home-enter', onHomeEnter);
        io.disconnect();
      } catch (e) {}
    });
  } catch (e) {}
})();`}
        </Script>
        <Script id="hero-rotating-word" strategy="afterInteractive">
          {`(() => {
  try {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const el = document.getElementById('hero-rotating');
    if (!el) return;

    const words = ["l'entreprise","les ventes","l'équipe","les demandes","le quotidien"];

    let i = 0;
    let isDeleting = false;
    let charIndex = words[0].length;
    let t = 0;

    const typeSpeed = 110;
    const deleteSpeed = 62;
    const holdFull = 1500;
    const holdEmpty = 520;

    const clear = () => {
      if (t) window.clearTimeout(t);
      t = 0;
    };

    const setText = (txt) => {
      el.textContent = txt;
      el.setAttribute('data-word', txt);
    };

    const tick = () => {
      const word = words[i];

      if (!isDeleting) {
        charIndex = Math.min(word.length, charIndex + 1);
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          isDeleting = true;
          t = window.setTimeout(tick, holdFull);
          return;
        }
        t = window.setTimeout(tick, typeSpeed);
        return;
      }

      charIndex = Math.max(0, charIndex - 1);
      setText(word.slice(0, charIndex));
      if (charIndex === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        t = window.setTimeout(tick, holdEmpty);
        return;
      }
      t = window.setTimeout(tick, deleteSpeed);
    };

    const start = () => {
      clear();
      i = 0;
      isDeleting = true;
      charIndex = words[0].length;
      setText(words[0]);
      t = window.setTimeout(tick, 700);
    };

    // First run
    start();

    // Restart when we re-enter Home
    const onHomeEnter = () => {
      try { start(); } catch (e) {}
    };
    window.addEventListener('ec:home-enter', onHomeEnter);

    window.addEventListener('pagehide', () => {
      try {
        window.removeEventListener('ec:home-enter', onHomeEnter);
        clear();
      } catch (e) {}
    });
  } catch (e) {}
})();`}
        </Script>
        <Script id="hero-spotlight" strategy="afterInteractive">
          {`(() => {
  try {
    const hero = document.getElementById('hero');
    const cardWrap = document.getElementById('hero-card-wrap');
    const cardInner = document.getElementById('hero-card-inner');
    if (!hero) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    if (!canHover) return;

    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
    let cardRx = 0, cardRy = 0, cRx = 0, cRy = 0;
    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      hero.style.setProperty('--dx', cx.toFixed(2));
      hero.style.setProperty('--dy', cy.toFixed(2));

      if (cardWrap) {
        cRx += (cardRx - cRx) * 0.08;
        cRy += (cardRy - cRy) * 0.08;
        cardWrap.style.transform = 'perspective(800px) rotateX(' + (-cRx).toFixed(2) + 'deg) rotateY(' + cRy.toFixed(2) + 'deg)';
      }

      if (Math.abs(tx - cx) > 0.01 || Math.abs(ty - cy) > 0.01 || Math.abs(cardRx - cRx) > 0.01 || Math.abs(cardRy - cRy) > 0.01) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      hero.style.setProperty('--hx', x.toFixed(0) + 'px');
      hero.style.setProperty('--hy', y.toFixed(0) + 'px');
      const nx = (x / r.width) * 2 - 1;
      const ny = (y / r.height) * 2 - 1;
      tx = clamp(nx * 10, -10, 10);
      ty = clamp(ny * 10, -10, 10);

      if (cardWrap) {
        const cr = cardWrap.getBoundingClientRect();
        const cNx = ((e.clientX - cr.left) / cr.width) * 2 - 1;
        const cNy = ((e.clientY - cr.top) / cr.height) * 2 - 1;
        cardRy = clamp(cNx * 8, -8, 8);
        cardRx = clamp(cNy * 5, -5, 5);

        if (cardInner) {
          const shineX = ((e.clientX - cr.left) / cr.width * 100).toFixed(0);
          const shineY = ((e.clientY - cr.top) / cr.height * 100).toFixed(0);
          cardInner.style.setProperty('--shine-x', shineX + '%');
          cardInner.style.setProperty('--shine-y', shineY + '%');
        }
      }

      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      tx = 0; ty = 0;
      cardRx = 0; cardRy = 0;
      hero.style.setProperty('--hx', '50%');
      hero.style.setProperty('--hy', '30%');
      if (!raf) raf = requestAnimationFrame(tick);
    };

    hero.style.setProperty('--hx', '50%');
    hero.style.setProperty('--hy', '30%');
    hero.addEventListener('pointermove', onMove, { passive: true });
    hero.addEventListener('pointerleave', onLeave, { passive: true });
    window.addEventListener('pagehide', () => { hero.removeEventListener('pointermove', onMove); hero.removeEventListener('pointerleave', onLeave); });
  } catch (e) {}
})();`}
        </Script>
        {/* (Hero section styles migrated to globals.css) */}
      </section>


      {/* ═══════════════════════════════════════
          2) STATS BANNER — crédibilité immédiate
      ═══════════════════════════════════════ */}
      <section className="reveal reveal-repeat reveal-mobile stats-band relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden bg-slate-900 py-8 sm:py-10 md:py-14">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-(--brand-blue)/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-(--brand-green)/8 blur-3xl" />
        </div>
        {/* Fondu sombre → clair (évite la bande blanche visible au scroll) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.65) 35%, rgba(246,247,245,0.65) 70%, rgba(246,247,245,1) 100%)",
          }}
        />
        <HomeContainer className="relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
          {[
            { value: "50+", label: "Entreprises accompagnées", icon: "users" as const },
            { value: "<24h", label: "Temps de réponse", icon: "clock" as const },
            { value: "6+", label: "Secteurs couverts", icon: "grid" as const },
            { value: "100%", label: "Solutions sur-mesure", icon: "target" as const },
          ].map((stat, idx) => (
            <div key={idx} className="stagger-item text-center">
              <div className="mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/50 sm:mb-3 sm:h-10 sm:w-10 sm:rounded-xl">
                <Icon name={stat.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="stat-num text-xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs font-medium text-white/45 sm:mt-1 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </HomeContainer>
      </section>

      {/* ═══════════════════════════════════════
          3) SOLUTIONS — problème → réponse concrète (fusion objectifs + packs)
      ═══════════════════════════════════════ */}
      <section id="solutions" className="reveal py-16 sm:py-20 scroll-mt-28">
        <HomeContainer>
          <div className="max-w-none">
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-4xl">
              Quel problème vous coûte le plus aujourd&apos;hui ?
            </h2>
            <p className="mt-1.5 max-w-3xl text-sm text-slate-700 sm:mt-2 sm:text-base md:text-lg">
              Trouvez votre situation — on vous montre exactement ce qu&apos;on met en place.
            </p>
          </div>

          {/* Option FNE — encart secondaire */}
          <div className="mt-4 rounded-2xl border border-(--brand-green)/20 bg-white/80 backdrop-blur p-4 sm:mt-6 sm:rounded-3xl sm:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--brand-blue)/10 text-(--brand-blue) sm:h-11 sm:w-11 sm:rounded-2xl">
                  <Icon name="shield" className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 sm:text-base">Conformité FNE : on vous met en règle sans bloquer l&apos;activité</div>
                  <div className="text-xs text-slate-600 sm:text-sm">Audit, plan simple, mise en place progressive — sans usine à gaz.</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-4 py-2 text-xs font-semibold text-white sm:text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
                >
                  J&apos;en ai besoin →
                </Link>
                <Link href="/services/conformite-fne" className="inline-flex items-center justify-center text-xs font-semibold text-(--brand-blue) underline underline-offset-4 hover:opacity-90 sm:text-sm">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-3">
            {[
              {
                id: "sol-visibilite",
                problem: "On ne nous trouve pas sur Google",
                problemSub: "Les clients cherchent… et tombent sur un concurrent.",
                icon: "map" as const,
                title: "Visibilité & présence locale",
                desc: "On met en place une présence claire (Google + pages utiles) pour être trouvé et rassurer.",
                items: [
                  "Fiche Google / Maps optimisée (infos, avis, cohérence)",
                  "Pages services claires + preuves (pour rassurer)",
                  "SEO local de base + structure propre",
                ],
                reco: "Commerce • Services • Restauration • Santé",
                gradient: "from-(--brand-blue) to-(--brand-blue)/80",
                shadow: "shadow-(--brand-blue)/20",
                glow: "bg-(--brand-blue)",
                check: "bg-(--brand-blue)/10 text-(--brand-blue)",
                link: "/services/referencement-seo",
              },
              {
                id: "sol-demandes",
                problem: "On a un site, mais il ne rapporte rien",
                problemSub: "Beaucoup d'infos… mais personne ne vous contacte.",
                icon: "trending" as const,
                title: "Site orienté demandes",
                desc: "Un site pensé pour transformer : message clair, preuves, CTA simples, et suivi des demandes.",
                items: [
                  "Pages orientées demandes (clarté + preuves)",
                  "Formulaire simple + WhatsApp / appel",
                  "Performance + suivi (pour mesurer ce qui marche)",
                ],
                reco: "Commerce • Services • Santé • BTP",
                gradient: "from-(--brand-green) to-(--brand-green)/80",
                shadow: "shadow-(--brand-green)/20",
                glow: "bg-(--brand-green)",
                check: "bg-(--brand-green)/10 text-(--brand-green)",
                link: "/services/creation-site-web",
              },
              {
                id: "sol-organisation",
                problem: "On perd du temps, tout est manuel",
                problemSub: "Excel + WhatsApp + oublis = stress quotidien.",
                icon: "database" as const,
                title: "Outils & organisation",
                desc: "On met un outil simple pour suivre votre activité (sans usine à gaz), et vos équipes adoptent vite.",
                items: [
                  "Suivi clair (clients, demandes, livraisons…)",
                  "Automatisations basiques (notifications, exports)",
                  "Mise en route progressive + accompagnement",
                ],
                reco: "Santé • Commerce • Services • Logistique",
                gradient: "from-slate-800 to-slate-900",
                shadow: "shadow-slate-900/20",
                glow: "bg-slate-700",
                check: "bg-slate-900/10 text-slate-700",
                link: "/services/extranet-outils-gestion",
              },
            ].map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                className="group relative overflow-hidden rounded-2xl border border-black/8 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full ${sol.glow}/6 blur-2xl group-hover:opacity-100 opacity-50 transition-opacity duration-500`} aria-hidden />
                <div className="relative">
                  {/* Le problème */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${sol.gradient} text-white shadow-lg ${sol.shadow} sm:h-12 sm:w-12 sm:rounded-2xl`}>
                      <Icon name={sol.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-extrabold text-slate-900 sm:text-base">❌ {sol.problem}</div>
                      <div className="mt-0.5 text-xs text-slate-500 sm:text-sm">{sol.problemSub}</div>
                    </div>
                  </div>

                  {/* Séparateur visuel problème → solution */}
                  <div className="my-4 flex items-center gap-2 sm:my-5">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs font-extrabold text-slate-400">CE QU&apos;ON MET EN PLACE</span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  {/* La solution */}
                  <div className="text-base font-extrabold text-slate-900 sm:text-lg">{sol.title}</div>
                  <p className="mt-1.5 text-sm text-slate-700 sm:mt-2 sm:text-base">{sol.desc}</p>

                  <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                    {sol.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${sol.check}`}>
                          <Icon name="check" className="h-2.5 w-2.5" />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-xs font-semibold text-(--brand-green)">{sol.reco}</div>

                  <div className="mt-4 flex flex-col gap-2 sm:mt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-4 py-2.5 text-xs font-semibold text-white sm:text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 transition-all duration-300 hover:shadow-lg hover:shadow-(--brand-blue)/20"
                    >
                      C&apos;est mon cas — on en parle →
                    </Link>
                    <Link href={sol.link} className="inline-flex items-center justify-center text-xs font-semibold text-(--brand-blue) underline underline-offset-4 hover:opacity-90 sm:text-sm">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </HomeContainer>
      </section>

      <div aria-hidden className="h-6 sm:h-10 md:h-14" />

      {/* ═══════════════════════════════════════
          4) COMMENT ON TRAVAILLE — fusion Approche + Méthode
      ═══════════════════════════════════════ */}
      <section className="reveal py-16 sm:py-20">
        <HomeContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-4xl">
                Comment ça se passe concrètement
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-700 sm:mt-3 sm:text-base md:text-lg">
                On part de votre fonctionnement réel, puis on simplifie — sans bloquer l&apos;activité.
              </p>

              {/* Les 3 étapes */}
              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {[
                  {
                    k: "01",
                    title: "On identifie le vrai blocage",
                    desc: "Échange rapide pour comprendre ce qui freine (visibilité, demandes, organisation).",
                    icon: "target" as const,
                  },
                  {
                    k: "02",
                    title: "On met une V1 en place",
                    desc: "Vous testez rapidement quelque chose d'utile — pas de projet interminable.",
                    icon: "zap" as const,
                  },
                  {
                    k: "03",
                    title: "On améliore avec vos retours",
                    desc: "Adoption, demandes, organisation : on ajuste au réel.",
                    icon: "tools" as const,
                  },
                ].map((step) => (
                  <div key={step.k} className="flex items-start gap-3 stagger-item sm:gap-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-(--brand-blue) to-(--brand-green) text-xs font-extrabold text-white shadow-md sm:h-10 sm:w-10 sm:text-sm">
                      {step.k}
                    </span>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 sm:text-base">{step.title}</div>
                      <div className="mt-0.5 text-xs text-slate-600 sm:text-sm">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engagements clés */}
              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                {[
                  { icon: "users" as const, label: "Simple à utiliser" },
                  { icon: "bolt" as const, label: "Sans arrêter l'activité" },
                  { icon: "shield" as const, label: "Conforme & sécurisé" },
                ].map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm">
                    <Icon name={tag.icon} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl sm:rounded-3xl">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
                  <Image
                    src="/home/home-dashboard.webp"
                    alt="Exemple d'interface claire : suivi, organisation"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 520px, 100vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-500">Une interface claire = adoption plus rapide par l&apos;équipe.</div>
            </div>
          </div>
        </HomeContainer>
      </section>

      <HomeContainer aria-hidden>
        <div className="h-px w-full bg-slate-200/70" />
      </HomeContainer>

      {/* ═══════════════════════════════════════
          5) PREUVES — témoignages + livrable
      ═══════════════════════════════════════ */}
      <section className="reveal py-16 sm:py-20">
        <HomeContainer>
          <div className="max-w-none">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">Des résultats concrets</h2>
            <p className="mt-1 max-w-3xl text-sm text-slate-600 sm:text-base">Ce que nos clients en disent.</p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">
            {[
              {
                initial: "K",
                name: "Koffi M.",
                role: "Gérant — Restauration",
                quote:
                  "Avant, on n'apparaissait pas sur Google Maps. Maintenant on est visible, les avis sont bons, et on reçoit des appels tous les jours.",
                grad: "from-(--brand-blue) to-(--brand-green)",
                corner: "from-(--brand-blue)/5",
              },
              {
                initial: "J",
                name: "Jean-Paul D.",
                role: "Gérant — Services BTP",
                quote:
                  "Notre site existait depuis 3 ans mais générait zéro demande. Après la refonte orientée conversion, on reçoit 8–12 demandes qualifiées par semaine.",
                grad: "from-(--brand-green) to-(--brand-blue)",
                corner: "from-(--brand-green)/5",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-4 sm:rounded-3xl sm:p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`pointer-events-none absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl ${t.corner} to-transparent rounded-bl-full sm:h-32 sm:w-32`} aria-hidden />
                <div className="relative">
                  <div className="flex items-center gap-0.5 text-(--brand-green) sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">&quot;{t.quote}&quot;</p>
                  <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3">
                    <div className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.grad} text-xs font-extrabold text-white sm:h-10 sm:w-10 sm:text-sm`}>
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">{t.name}</div>
                      <div className="text-xs font-semibold text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="group rounded-2xl border border-black/10 bg-white p-4 sm:rounded-3xl sm:p-6 hover:shadow-xl transition-all duration-500 md:col-span-2">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="rounded-xl bg-(--brand-blue)/10 p-1.5 text-(--brand-blue) sm:rounded-2xl sm:p-2">
                  <Icon name="award" className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Extrait d’un extranet réalisé</div>
                  <div className="text-xs font-semibold text-slate-600">Tableau de bord : trésorerie, alertes, indicateurs (exemple réel)</div>
                </div>
              </div>
              <div className="relative mt-3 overflow-hidden rounded-xl border border-black/10 sm:mt-4 sm:rounded-2xl">
                <div className="relative w-full aspect-[16/9] sm:aspect-[2/1]">
                  <Image
                    src="/home/demo-extranet-dashboard.png"
                    alt="Extrait d’un extranet réalisé : tableau de bord (trésorerie, alertes, indicateurs)"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 768px) 720px, 100vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-600">Extrait réel : simple, clair, et pensé pour être adopté par l&apos;équipe.</p>
                <Link href="/realisations" className="inline-flex items-center text-sm font-semibold text-(--brand-blue) hover:opacity-90 group">
                  Voir plus d&apos;exemples <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </HomeContainer>
      </section>

      <HomeContainer aria-hidden>
        <div className="h-px w-full bg-slate-200/70" />
      </HomeContainer>

      {/* ═══════════════════════════════════════
          6) CTA FINAL — maintenant le visiteur comprend
      ═══════════════════════════════════════ */}
      <section className="reveal home-band-dark relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/10 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/10 blur-3xl animate-pulse-slow" />
        </div>
        <HomeContainer className="py-16 sm:py-20">
          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">On vous aide à débloquer la situation</h2>
              <p className="mt-1 text-sm text-white/75 sm:text-base">
                Échange rapide, sans engagement. On regarde ensemble ce qui bloque et ce qu&apos;on peut simplifier.
              </p>
            </div>
            <div className="text-xs font-semibold text-white/70 sm:text-sm">Réponse sous 24h</div>
          </div>
          <div className="relative mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="cta-pulse inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-xs font-semibold text-white sm:text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,145,255,0.5)] active:scale-98"
            >
              Faire le point (gratuit, 2 min)
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-5 py-3 text-xs font-semibold text-white/80 backdrop-blur hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 sm:text-sm"
            >
              Consulter des exemples concrets
            </Link>
          </div>
        </HomeContainer>
      </section>

    </div>
  );
}