"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
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
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
];

const navMobilePriority = [
  { href: "/contact", label: "Contact" },
];

const navMobileRest = [
  { href: "/services", label: "Services" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
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
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

type CSSVars = CSSProperties & {
  [key: `--${string}`]: string;
};

const HEADER_H = {
  base: 56, // mobile / default
  md: 60, // >=768px
  lg: 64, // >=1024px
} as const;

function HeaderV2() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement | null>(null);

  const [canHover, setCanHover] = useState(false);
  const hoverOpenTimer = useRef<number | null>(null);
  const hoverCloseTimer = useRef<number | null>(null);

  const OPEN_DELAY = 80;
  const CLOSE_DELAY = 140;

  const [headerH, setHeaderH] = useState<number>(HEADER_H.base);

  const whatsappHref = useMemo(() => {
    return "https://wa.me/2250706502490?text=Bonjour%20EXPERT%20CR%C3%89A%2C%20je%20souhaite%20d%C3%A9crire%20ma%20situation%20et%20voir%20si%20c%E2%80%99est%20adapt%C3%A9%20%C3%A0%20mon%20activit%C3%A9.";
  }, []);

  const clearOpenTimer = useCallback(() => {
    if (hoverOpenTimer.current) {
      window.clearTimeout(hoverOpenTimer.current);
      hoverOpenTimer.current = null;
    }
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (hoverCloseTimer.current) {
      window.clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
  }, []);

  const clearAllTimers = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();
  }, [clearOpenTimer, clearCloseTimer]);

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

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
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
    const root = document.documentElement;

    const compute = () => {
      const w = window.innerWidth;
      const h = w >= 1024 ? HEADER_H.lg : w >= 768 ? HEADER_H.md : HEADER_H.base;
      setHeaderH(h);
      root.style.setProperty("--header-h", `${h}px`);
    };

    compute();
    window.addEventListener("resize", compute, { passive: true });
    return () => window.removeEventListener("resize", compute);
  }, []);


  useEffect(() => {
    // Sur changement de page, on ferme TOUT (mobile + dropdowns)
    setOpen(false);
    setMegaOpen(false);
    clearAllTimers();
  }, [pathname, clearAllTimers]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMegaOpen(false);
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
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [megaOpen]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    // Si on passe en desktop (>= md), le menu mobile est caché via `md:hidden`.
    // On force donc la fermeture pour éviter un état "ouvert" invisible (et body bloqué).
    const mq = window.matchMedia("(min-width: 768px)");

    const closeIfDesktop = () => {
      if (mq.matches) {
        setOpen(false);
      }
    };

    closeIfDesktop();
    mq.addEventListener?.("change", closeIfDesktop);
    window.addEventListener("resize", closeIfDesktop, { passive: true });

    return () => {
      mq.removeEventListener?.("change", closeIfDesktop);
      window.removeEventListener("resize", closeIfDesktop);
    };
  }, []);

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
    clearAllTimers();
  }

  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  // Focus-visible: dark glass header only
  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-(--brand-green)";

  const interactiveBase = "transition-all duration-300 motion-reduce:transition-none";
  const buttonBase = "rounded-xl px-3 py-1 text-sm font-semibold";
  const linkBase = "group relative rounded-xl px-3 py-1 text-sm font-semibold";

  const cssVars: CSSVars = {
    "--mainH": `${headerH}px`,
    "--progH": `0px`,
  };

  // Mega width: robuste, jamais dépendant d’un scale Tailwind
  const megaW = "w-[min(720px,calc(100vw-2rem))]";

  const navItemClass = (active: boolean) =>
    cn(
      linkBase,
      interactiveBase,
      focusRing,
      active ? "text-white bg-white/12" : "text-white/80 hover:text-white hover:bg-white/10"
    );

  return (
    <div style={cssVars}>
      {/* OPTION C: Barre + Header = un seul bloc sticky */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[1000]",
          "isolate overflow-visible transition-all duration-300",
          "backdrop-blur-xl border-b border-white/8 text-white",
          "before:pointer-events-none before:absolute before:inset-0 before:opacity-100 before:bg-gradient-to-b before:from-white/6 before:to-transparent",
          // Top of Home: slightly darker glass so it nét look grey/washed
          // Scrolled / non-home: stronger contrast for readability
          scrolled || !isHome
            ? "bg-slate-950/92 shadow-[0_12px_36px_rgba(0,0,0,0.28)]"
            : "bg-slate-950/78"
        )}
      >
        {/* Main header row */}
        <div
          className="relative z-10 mx-auto flex items-center gap-2 px-4 sm:px-6 lg:px-8"
          style={{ height: `${headerH}px` }}
        >
          {/* Brand */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className={cn(
                "group flex items-center gap-3 transition-all duration-300",
                focusRing
              )}
              onClick={closeAll}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo.png"
                alt="EXPERT CRÉA"
                className={cn(
                  "h-9 w-9 md:h-10 md:w-10",
                  "object-contain rounded-xl transition-all duration-300",
                  "group-hover:scale-110 group-hover:rotate-6",
                  "ring-1 ring-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
                )}
              />

              <span className="hidden sm:block leading-[1.05] text-white">
                <span
                  className={cn(
                    "block whitespace-nowrap text-[14px] font-extrabold tracking-tight sm:text-lg transition-all duration-300",
                    "group-hover:tracking-wide"
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
            <nav className="flex items-center gap-2">
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
                    setMegaOpen((v) => !v);
                  }}
                  onFocus={() => {
                    openMegaNow();
                  }}
                  aria-expanded={megaOpen}
                  aria-haspopup="menu"
                  className={cn(
                    buttonBase,
                    "group relative inline-flex items-center gap-1",
                    interactiveBase,
                    focusRing,
                    servicesActive
                      ? "text-white bg-white/12"
                      : "text-white/80 hover:text-white hover:bg-white/10"
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
                      "absolute left-1/2 mt-2 -translate-x-1/2 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_28px_70px_rgba(2,6,23,0.14)]",
                      megaW,
                      "animate-in fade-in-0 zoom-in-95 duration-200"
                    )}
                  >
                    {/* ... (inchangé) */}
                    <div className="grid grid-cols-2">
                      <div className="p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="text-xs font-semibold tracking-wide text-slate-500">Services</div>
                          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-(--brand-blue)/10 to-(--brand-green)/10 px-2 py-0.5 text-[10px] font-bold text-(--brand-green)">
                            <Spark className="h-2.5 w-2.5" />
                            Concret
                          </div>
                        </div>

                        <div className="grid gap-2">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={closeAll}
                              className={cn(
                                "group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-4",
                                "hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
                                focusRing
                              )}
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
                                Découvrir{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/services"
                            onClick={closeAll}
                            className={cn(
                              "group inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) hover:gap-3 transition-all duration-300",
                              focusRing
                            )}
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
                            className={cn(
                              "group inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-3 text-sm font-semibold text-white",
                              "hover:opacity-95 hover:scale-105 hover:shadow-lg active:scale-100 transition-all duration-200",
                              focusRing
                            )}
                          >
                            <Spark className="group-hover:rotate-12 transition-transform duration-300" />
                            Décrire ma situation
                          </Link>

                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                              "group inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-green) px-4 py-3 text-sm font-semibold text-white",
                              "hover:opacity-95 hover:scale-105 hover:shadow-lg active:scale-100 transition-all duration-200",
                              focusRing
                            )}
                          >
                            <WhatsAppIcon />
                            WhatsApp / Devis rapide
                          </a>

                          <Link
                            href="/realisations"
                            onClick={closeAll}
                            className={cn(
                              "inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900",
                              "hover:bg-slate-50 hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200",
                              focusRing
                            )}
                          >
                            Voir des démos
                          </Link>
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
                      className={navItemClass(active)}
                    >
                      {it.label}
                      <span
                        className={cn(
                          "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-all duration-300",
                          "bg-gradient-to-r from-(--brand-blue) via-(--brand-green) to-transparent",
                          active
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75 group-hover:opacity-50 group-hover:scale-100"
                        )}
                      />
                    </Link>
                  );
                })}

            </nav>
          </div>

          {/* Actions droite */}
          <div className="flex shrink-0 items-center justify-end gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group hidden items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold md:inline-flex",
                interactiveBase,
                focusRing,
                "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-105"
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
                interactiveBase,
                focusRing
              )}
              onClick={closeAll}
            >
              <Spark className="group-hover:rotate-12 transition-transform duration-300" />
              Décrire ma situation
            </Link>

            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-xl border px-3.5 py-2 text-sm font-semibold md:hidden",
                interactiveBase,
                focusRing,
                "border-white/10 bg-white/5 text-white hover:bg-white/10"
              )}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <BurgerIcon open={open} tone="dark" />
            </button>
          </div>
        </div>

        {/* Removed hero-only bottom gradient line */}

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
              style={{ top: `calc(${headerH}px + var(--progH))` }}
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
                      className={cn(
                        "flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900",
                        "hover:bg-slate-50 active:scale-98 transition-all duration-200",
                        focusRing
                      )}
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
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-green) px-4 py-3 text-sm font-semibold text-white",
                      "hover:opacity-95 active:scale-98 transition-all duration-200",
                      focusRing
                    )}
                  >
                    <WhatsAppIcon />
                    WhatsApp / Devis rapide
                  </a>

                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-3 text-sm font-semibold text-white",
                      "hover:opacity-95 active:scale-98 transition-all duration-200",
                      focusRing
                    )}
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
                          focusRing,
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
      </header>
    </div>
  );
}

export { HeaderV2 };

export function Header() {
  return <HeaderV2 />;
}

export default HeaderV2;