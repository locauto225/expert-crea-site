"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";

const services = [
  {
    href: "/services/creation-site-web",
    title: "Création de site web",
    desc: "Sites orientés demandes — performance, clarté, conversion.",
    badge: "Demandes",
    isNew: false,
  },
  {
    href: "/services/referencement-seo",
    title: "SEO & Google Maps",
    desc: "Visibilité locale + fiche Google pour être trouvé et appelé.",
    badge: "SEO local",
    isNew: false,
  },
  {
    href: "/services/extranet-outils-gestion",
    title: "Outils métiers",
    desc: "Extranet, intranet, apps web/mobile — organisation et gain de temps.",
    badge: "Outils",
    isNew: true,
  },
  {
    href: "/services/conformite-fne",
    title: "Conformité (FNE)",
    desc: "Adapter l'existant, sécuriser et rester conforme — sans stress.",
    badge: "Conformité",
    isNew: false,
  },
];

const navDesktopMain = [
  { href: "/services", label: "Services", mega: true as const },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/realisations", label: "Réalisations" },
];

const navDesktopMore = [
  { href: "/avis", label: "Avis" },
  { href: "/methode", label: "Méthode" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

const navMobilePriority = [
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const navMobileRest = [
  { href: "/services", label: "Services" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/avis", label: "Avis" },
  { href: "/methode", label: "Méthode" },
  { href: "/a-propos", label: "À propos" },
];

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function BurgerIcon({ open, tone }: { open: boolean; tone?: "light" | "dark" }) {
  const bar = tone === "dark" ? "bg-white" : "bg-slate-900";
  return (
    <span aria-hidden="true" className="relative block h-4 w-5">
      <span
        className={cn(
          "absolute left-0 top-0 h-0.5 w-5 rounded transition-all duration-300",
          bar,
          open && "translate-y-1.75 rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1.75 h-0.5 w-5 rounded transition-all duration-300",
          bar,
          open ? "opacity-0 scale-75" : "opacity-100 scale-100"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-3.5 h-0.5 w-5 rounded transition-all duration-300",
          bar,
          open && "-translate-y-1.75 -rotate-45"
        )}
      />
    </span>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Spark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path d="M12 2l1.2 4.6L18 8l-4.8 1.4L12 14l-1.2-4.6L6 8l4.8-1.4L12 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 3.9 18.8L3 22l3.3-.9A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 12 21.5Zm5.2-6.6c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1s-.8.9-1 .1c-.2-.2-.8-.3-1.5-.9-.6-.6-1.1-1.3-1.2-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.8 2.8 4.4 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

type CSSVars = CSSProperties & {
  [key: `--${string}`]: string;
};

function HeaderV2() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement | null>(null);

  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const [canHover, setCanHover] = useState(false);
  const hoverOpenTimer = useRef<number | null>(null);
  const hoverCloseTimer = useRef<number | null>(null);

  // Announcement bar state (open -> full bar, collapsed -> thin identity strip)
  const [announcementMode, setAnnouncementMode] = useState<"open" | "collapsed">("open");

  const OPEN_DELAY = 80;
  const CLOSE_DELAY = 140;

  const ANN_OPEN_H = 40; // px (h-10)
  const ANN_COLLAPSED_H = 6; // px
  const PROG_H = 2; // px (h-0.5)
  const HEADER_H = 64; // px (h-16)

  const annH = announcementMode === "open" ? ANN_OPEN_H : ANN_COLLAPSED_H;

  function clearOpenTimer() {
    if (hoverOpenTimer.current) {
      window.clearTimeout(hoverOpenTimer.current);
      hoverOpenTimer.current = null;
    }
  }
  function clearCloseTimer() {
    if (hoverCloseTimer.current) {
      window.clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
  }
  function clearAllTimers() {
    clearOpenTimer();
    clearCloseTimer();
  }

  function scheduleOpenMega() {
    clearAllTimers();
    hoverOpenTimer.current = window.setTimeout(() => setMegaOpen(true), OPEN_DELAY);
  }
  function openMegaNow() {
    clearAllTimers();
    setMegaOpen(true);
  }
  function scheduleCloseMega() {
    clearAllTimers();
    hoverCloseTimer.current = window.setTimeout(() => setMegaOpen(false), CLOSE_DELAY);
  }

  const whatsappHref = useMemo(() => {
    return "https://wa.me/2250706502490?text=Bonjour%20EXPERT%20CR%C3%89A%2C%20je%20souhaite%20d%C3%A9crire%20ma%20situation%20et%20voir%20si%20c%E2%80%99est%20adapt%C3%A9%20%C3%A0%20mon%20activit%C3%A9.";
  }, []);

  // Persist announcement mode (stable UX)
  useEffect(() => {
    try {
      const v = window.localStorage.getItem("ec_announcement_mode");
      if (v === "open" || v === "collapsed") setAnnouncementMode(v);
    } catch {}
  }, []);
  useEffect(() => {
    try {
      window.localStorage.setItem("ec_announcement_mode", announcementMode);
    } catch {}
  }, [announcementMode]);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 6);

      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setCanHover(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMegaOpen(false);
        setMoreOpen(false);
        clearAllTimers();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Node)) return;

      if (megaOpen) {
        const el = megaRef.current;
        if (el && !el.contains(target)) {
          setMegaOpen(false);
          clearAllTimers();
        }
      }

      if (moreOpen) {
        const el = moreRef.current;
        if (el && !el.contains(target)) {
          setMoreOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [megaOpen, moreOpen]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    return () => {
      clearAllTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  function closeAll() {
    setOpen(false);
    setMegaOpen(false);
    setMoreOpen(false);
    clearAllTimers();
  }

  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");
  const moreActive = navDesktopMore.some((i) => isActive(i.href));
  const heroHeader = isHome && !scrolled;

  const heroMotionBase = heroHeader
    ? "transition-[transform,box-shadow,background-color] duration-300 ease-out will-change-transform motion-reduce:transition-none"
    : "";

  const heroMagnetHover =
    heroHeader && canHover ? "hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_16px_48px_rgba(0,0,0,0.32)]" : "";

  const heroPress =
    heroHeader ? "active:translate-y-0 active:scale-100 active:shadow-[0_10px_26px_rgba(0,0,0,0.20)]" : "";

  const cssVars: CSSVars = {
    "--annH": `${annH}px`,
    "--progH": `${PROG_H}px`,
  };

  return (
    <div style={cssVars}>
      {/* Announcement Bar (fixed): open -> full bar, collapsed -> thin strip */}
      <div className="fixed left-0 right-0 top-0 z-[70]">
        {announcementMode === "open" ? (
          <div className="relative bg-gradient-to-r from-(--brand-blue) via-(--brand-green) to-(--brand-blue) text-white">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex flex-1 items-center justify-center gap-2 text-sm font-medium">
                <TrendingUpIcon />
                <span className="hidden sm:inline">
                  <AnimatedCounter value={500} suffix="+" /> projets livrés • Réponse sous 24h
                </span>
                <span className="sm:hidden">Réponse sous 24h</span>
              </div>
              <button
                type="button"
                onClick={() => setAnnouncementMode("collapsed")}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Réduire l'annonce"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setAnnouncementMode("open")}
            aria-label="Réouvrir l'annonce"
            className="block h-[6px] w-full bg-gradient-to-r from-(--brand-blue) via-(--brand-green) to-(--brand-blue)"
          />
        )}
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed left-0 right-0 z-[65] h-0.5 bg-slate-200" style={{ top: "var(--annH)" }}>
        <div
          className="h-full bg-gradient-to-r from-(--brand-blue) via-(--brand-green) to-(--brand-blue) transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        style={{ top: "calc(var(--annH) + var(--progH))" }}
        className={cn(
          "header-accent sticky z-50",
          "relative backdrop-blur-xl transition-all duration-300",

          // Default (light)
          !heroHeader &&
            "border-b border-black/10 bg-white/80 bg-linear-to-r from-(--brand-blue)/4 via-white/80 to-(--brand-green)/4",

          // Home hero (dark glass)
          heroHeader &&
            "border-b border-white/10 bg-slate-950/30 bg-linear-to-r from-(--brand-blue)/10 via-slate-950/30 to-(--brand-green)/10 text-white",

          // Scrolled
          scrolled && "border-black/15 bg-white/95 text-slate-900 shadow-[0_12px_36px_rgba(2,6,23,0.08)]"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className={cn("group flex items-center gap-3 transition-all duration-300", heroHeader && "gap-3.5")}
              onClick={closeAll}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo.png"
                alt="EXPERT CRÉA"
                className={cn(
                  "h-11 w-11 object-contain rounded-xl transition-all duration-300",
                  "group-hover:scale-110 group-hover:rotate-6",
                  heroHeader && "bg-white/5 p-1 ring-1 ring-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.28)]"
                )}
              />

              <span className={cn("hidden sm:block leading-[1.05]", heroHeader && "text-white")}>
                <span
                  className={cn(
                    "block whitespace-nowrap text-[15px] font-extrabold tracking-tight sm:text-lg transition-all duration-300",
                    "group-hover:tracking-wide",
                    heroHeader && "tracking-[0.06em]"
                  )}
                >
                  <span className="text-(--brand-blue) group-hover:text-(--brand-green) transition-colors duration-300">
                    EXPERT
                  </span>{" "}
                  <span className="text-(--brand-green) group-hover:text-(--brand-blue) transition-colors duration-300">
                    CRÉA
                  </span>
                </span>
              </span>
            </Link>
          </div>

          {/* Nav centrée */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <nav
              className={cn(
                "flex items-center gap-2",

                // Home hero pill
                heroHeader &&
                  "hero-nav-pill relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-1.5 py-1 backdrop-blur-xl",

                heroHeader &&
                  "hover:bg-white/8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.26)] hover:-translate-y-0.5 hover:scale-102 active:translate-y-0 active:scale-100 active:shadow-[0_12px_34px_rgba(0,0,0,0.16)] transition-all duration-300 will-change-transform motion-reduce:transition-none"
              )}
            >
              {/* Mega Services */}
              <div
                className="relative"
                ref={megaRef}
                onMouseEnter={() => {
                  if (canHover) scheduleOpenMega();
                }}
                onMouseLeave={() => {
                  if (canHover) scheduleCloseMega();
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    clearAllTimers();
                    setMoreOpen(false);
                    setMegaOpen((v) => !v);
                  }}
                  onFocus={() => {
                    setMoreOpen(false);
                    openMegaNow();
                  }}
                  aria-expanded={megaOpen}
                  aria-haspopup="menu"
                  className={cn(
                    "group relative inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold",
                    heroHeader && "px-3.5",
                    heroMotionBase,
                    heroMagnetHover,
                    heroPress,
                    "transition-all duration-300",
                    servicesActive
                      ? heroHeader
                        ? "text-white bg-white/10"
                        : "text-slate-900 bg-slate-100"
                      : heroHeader
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  Services <ChevronDown open={megaOpen} />
                  <span
                    className={cn(
                      "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-all duration-300",
                      "bg-gradient-to-r from-(--brand-blue) via-(--brand-green) to-transparent",
                      servicesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    )}
                  />
                </button>

                {megaOpen && (
                  <div
                    role="menu"
                    onMouseEnter={() => {
                      if (canHover) clearAllTimers();
                    }}
                    onMouseLeave={() => {
                      if (canHover) scheduleCloseMega();
                    }}
                    className={cn(
                      "absolute left-1/2 mt-2 w-180 -translate-x-1/2 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_28px_70px_rgba(2,6,23,0.14)]",
                      "animate-in fade-in-0 zoom-in-95 duration-200"
                    )}
                  >
                    <div className="grid grid-cols-2">
                      <div className="p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="text-xs font-semibold tracking-wide text-slate-500">Services</div>
                          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-(--brand-blue)/10 to-(--brand-green)/10 px-2 py-0.5 text-[10px] font-bold text-(--brand-green)">
                            <Spark className="h-2.5 w-2.5" />
                            <AnimatedCounter value={500} suffix="+" />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={closeAll}
                              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                              {s.isNew && (
                                <span className="absolute top-2 right-2 animate-pulse rounded-full bg-gradient-to-r from-(--brand-blue) to-(--brand-green) px-2 py-0.5 text-[10px] font-bold text-white">
                                  NEW
                                </span>
                              )}
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <div className="text-sm font-extrabold text-slate-900">{s.title}</div>
                                  <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
                                </div>
                                <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 group-hover:bg-gradient-to-r group-hover:from-(--brand-blue)/10 group-hover:to-(--brand-green)/10 transition-all duration-300">
                                  {s.badge}
                                </span>
                              </div>
                              <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-(--brand-blue) opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                Découvrir <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/services"
                            onClick={closeAll}
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) hover:gap-3 transition-all duration-300"
                          >
                            Voir tous les services
                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>

                      <div className="border-l border-black/10 bg-gradient-to-b from-slate-50 to-white p-5">
                        <div className="text-sm font-extrabold text-slate-900">Un devis clair en 24h</div>
                        <p className="mt-2 text-sm text-slate-600">
                          On cadre ton besoin, on propose une stratégie, puis on livre une V1 utile rapidement.
                        </p>

                        <div className="mt-4 grid gap-2">
                          <Link
                            href="/contact"
                            onClick={closeAll}
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-3 text-sm font-semibold text-white hover:opacity-95 hover:scale-105 hover:shadow-lg active:scale-100 transition-all duration-200"
                          >
                            <Spark className="group-hover:rotate-12 transition-transform duration-300" />
                            Décrire ma situation
                          </Link>

                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-green) px-4 py-3 text-sm font-semibold text-white hover:opacity-95 hover:scale-105 hover:shadow-lg active:scale-100 transition-all duration-200"
                          >
                            <WhatsAppIcon />
                            WhatsApp / Devis rapide
                          </a>

                          <Link
                            href="/realisations"
                            onClick={closeAll}
                            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200"
                          >
                            Voir des démos
                          </Link>
                        </div>

                        <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 hover:shadow-md transition-shadow duration-300">
                          <div className="text-sm font-semibold text-slate-900">Ce qu'on optimise</div>
                          <ul className="mt-2 space-y-1 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                              <span className="text-(--brand-green)">✓</span> Conversion (CTA, parcours, confiance)
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-(--brand-green)">✓</span> SEO local (Google & Maps)
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-(--brand-green)">✓</span> Organisation (outils métiers, suivi)
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-(--brand-green)">✓</span> Conformité (FNE, interfaçage)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navDesktopMain
                .filter((n) => !("mega" in n))
                .map((it) => {
                  const active = isActive(it.href);
                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative rounded-xl px-3 py-2 text-sm font-semibold",
                        heroHeader && "px-3.5",
                        heroMotionBase,
                        heroMagnetHover,
                        heroPress,
                        "transition-all duration-300",
                        active
                          ? heroHeader
                            ? "text-white bg-white/10"
                            : "text-slate-900 bg-slate-100"
                          : heroHeader
                            ? "text-white/80 hover:text-white hover:bg-white/10"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      {it.label}
                      <span
                        className={cn(
                          "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-all duration-300",
                          "bg-gradient-to-r from-(--brand-blue) via-(--brand-green) to-transparent",
                          active ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-50 group-hover:scale-100"
                        )}
                      />
                    </Link>
                  );
                })}

              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => {
                    setMegaOpen(false);
                    clearAllTimers();
                    setMoreOpen((v) => !v);
                  }}
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                  className={cn(
                    "group relative inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold",
                    heroHeader && "px-3.5",
                    heroMotionBase,
                    heroMagnetHover,
                    heroPress,
                    "transition-all duration-300",
                    moreActive
                      ? heroHeader
                        ? "text-white bg-white/10"
                        : "text-slate-900 bg-slate-100"
                      : heroHeader
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  Plus <ChevronDown open={moreOpen} />
                  <span
                    className={cn(
                      "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-all duration-300",
                      "bg-gradient-to-r from-(--brand-blue) via-(--brand-green) to-transparent",
                      moreActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    )}
                  />
                </button>

                {moreOpen && (
                  <div
                    role="menu"
                    className={cn(
                      "absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_28px_70px_rgba(2,6,23,0.14)]",
                      "animate-in fade-in-0 slide-in-from-top-2 duration-200"
                    )}
                  >
                    <div className="p-2">
                      {navDesktopMore.map((it) => {
                        const active = isActive(it.href);
                        return (
                          <Link
                            key={it.href}
                            href={it.href}
                            onClick={closeAll}
                            className={cn(
                              "group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200",
                              active
                                ? "bg-gradient-to-r from-(--brand-blue)/10 to-(--brand-green)/10 text-slate-900"
                                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-0.5"
                            )}
                          >
                            {it.label}
                            <span className="text-(--brand-blue) transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Actions droite */}
          <div className="flex shrink-0 items-center justify-end gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group hidden items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold md:inline-flex",
                heroMotionBase,
                heroMagnetHover,
                heroPress,
                "transition-all duration-300",
                heroHeader
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-105"
                  : "border-black/10 bg-white text-slate-900 hover:bg-slate-50 hover:scale-105 hover:shadow-lg"
              )}
              aria-label="WhatsApp"
            >
              <span className="text-(--brand-green) group-hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon />
              </span>
              WhatsApp
            </a>

            <Link
              href="/contact"
              className={cn(
                "group hidden items-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-2 text-sm font-semibold text-white hover:opacity-95 md:inline-flex",
                heroMotionBase,
                heroMagnetHover,
                heroPress,
                "transition-all duration-300 hover:shadow-lg"
              )}
              onClick={closeAll}
            >
              <Spark className="group-hover:rotate-12 transition-transform duration-300" />
              Décrire ma situation
            </Link>

            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-semibold md:hidden transition-all duration-300",
                heroHeader ? "border-white/10 bg-white/5 text-white hover:bg-white/10" : "border-black/10 bg-white text-slate-900 hover:bg-slate-50"
              )}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <BurgerIcon open={open} tone={heroHeader ? "dark" : "light"} />
            </button>
          </div>
        </div>

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent transition-opacity duration-300",
            heroHeader && "opacity-100",
            !heroHeader && "opacity-0"
          )}
        />

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Fermer le menu"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200"
              onClick={() => setOpen(false)}
            />

            <div
              id="mobile-nav"
              style={{ top: `calc(var(--annH) + var(--progH) + ${HEADER_H}px)` }}
              className="fixed left-0 right-0 z-50 border-t border-black/10 bg-white animate-in slide-in-from-top-4 duration-300"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="mb-3 rounded-2xl border border-black/10 bg-gradient-to-br from-(--brand-blue)/5 to-(--brand-green)/5 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <TrendingUpIcon />
                    <span>Réponse sous 24h</span>
                  </div>
                  <div className="text-xs text-slate-600">Devis clair • V1 rapide • Accompagnement</div>
                </div>

                <div className="grid gap-3">
                  {navMobilePriority.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={closeAll}
                      className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:scale-98 transition-all duration-200"
                    >
                      {it.label}
                      <span className="text-(--brand-blue)">→</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 grid gap-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-green) px-4 py-3 text-sm font-semibold text-white hover:opacity-95 active:scale-98 transition-all duration-200"
                  >
                    <WhatsAppIcon />
                    WhatsApp / Devis rapide
                  </a>

                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-3 text-sm font-semibold text-white hover:opacity-95 active:scale-98 transition-all duration-200"
                  >
                    <Spark />
                    Décrire ma situation
                  </Link>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {navMobileRest.map((it) => {
                    const active = isActive(it.href);
                    return (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={closeAll}
                        className={cn(
                          "rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm transition-all duration-200 active:scale-98",
                          active
                            ? "font-semibold text-slate-900 bg-gradient-to-br from-(--brand-blue)/5 to-(--brand-green)/5"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        {it.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .hero-nav-pill::before {
            content: "";
            position: absolute;
            inset: -2px;
            pointer-events: none;
            opacity: 0.45;
            background: linear-gradient(
              110deg,
              transparent 0%,
              rgba(255, 255, 255, 0.09) 22%,
              rgba(0, 145, 255, 0.12) 42%,
              rgba(0, 200, 120, 0.1) 58%,
              rgba(255, 255, 255, 0.07) 72%,
              transparent 100%
            );
            transform: translateX(-60%);
            animation: heroPillShimmer 11s linear infinite;
          }

          .hero-nav-pill::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            border-radius: 16px;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.09), inset 0 -1px 0 rgba(0, 0, 0, 0.05);
            opacity: 1;
          }

          @keyframes heroPillShimmer {
            0% {
              transform: translateX(-60%);
            }
            100% {
              transform: translateX(60%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-nav-pill::before {
              animation: none !important;
              opacity: 0.16;
              transform: none;
            }
          }
        `}</style>
      </header>
    </div>
  );
}

export { HeaderV2 };

export function Header() {
  return <HeaderV2 />;
}

export default HeaderV2;