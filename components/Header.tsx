"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const services = [
  {
    href: "/services/creation-site-web",
    title: "Création de site web",
    desc: "Sites orientés demandes — performance, clarté, conversion.",
    badge: "Demandes",
  },
  {
    href: "/services/referencement-seo",
    title: "SEO & Google Maps",
    desc: "Visibilité locale + fiche Google pour être trouvé et appelé.",
    badge: "SEO local",
  },
  {
    href: "/services/extranet-outils-gestion",
    title: "Outils métiers",
    desc: "Extranet, intranet, apps web/mobile — organisation et gain de temps.",
    badge: "Outils",
  },
  {
    href: "/services/conformite-fne",
    title: "Conformité (FNE)",
    desc: "Adapter l’existant, sécuriser et rester conforme — sans stress.",
    badge: "Conformité",
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

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-5">
      <span
        className={cn(
          "absolute left-0 top-0 h-0.5 w-5 rounded bg-slate-900 transition",
          open && "translate-y-1.75 rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1.75 h-0.5 w-5 rounded bg-slate-900 transition",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-3.5 h-0.5 w-5 rounded bg-slate-900 transition",
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
      className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
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

export function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement | null>(null);

  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const [canHover, setCanHover] = useState(false);
  const hoverOpenTimer = useRef<number | null>(null);
  const hoverCloseTimer = useRef<number | null>(null);

  const OPEN_DELAY = 80;
  const CLOSE_DELAY = 140;

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

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 6);
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

  return (
    <header
      className={cn(
        "header-accent",
        scrolled && "header-accent--scrolled",

        "sticky top-0 z-50",
        "border-b border-black/10 backdrop-blur",
        "bg-white/70",
        "bg-linear-to-r from-(--brand-blue)/4 via-white/70 to-(--brand-green)/4",
        "transition-[background-color,box-shadow,border-color] duration-200",
        scrolled && "bg-white/92 border-black/15 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center gap-3" onClick={closeAll}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.png" alt="EXPERT CRÉA" className="h-11 w-11 object-contain" />

            <span className="hidden sm:block leading-[1.05]">
              <span className="block whitespace-nowrap text-[15px] font-extrabold tracking-tight sm:text-lg">
                <span className="text-(--brand-blue)">EXPERT</span>{" "}
                <span className="text-(--brand-green)">CRÉA</span>
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
                  "relative inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold transition",
                  servicesActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                Services <ChevronDown open={megaOpen} />
                <span
                  className={cn(
                    "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-opacity",
                    "bg-linear-to-r from-(--brand-blue) via-(--brand-green) to-transparent",
                    servicesActive ? "opacity-100" : "opacity-0"
                  )}
                />
              </button>

              {megaOpen ? (
                <div
                  role="menu"
                  onMouseEnter={() => {
                    if (canHover) clearAllTimers();
                  }}
                  onMouseLeave={() => {
                    if (canHover) scheduleCloseMega();
                  }}
                  className="absolute left-1/2 mt-2 w-180 -translate-x-1/2 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_24px_60px_rgba(2,6,23,0.12)]"
                >
                  <div className="grid grid-cols-2">
                    <div className="p-4">
                      <div className="mb-3 text-xs font-semibold tracking-wide text-slate-500">Services “money”</div>

                      <div className="grid gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={closeAll}
                            className="group rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="text-sm font-extrabold text-slate-900">{s.title}</div>
                                <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
                              </div>
                              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                                {s.badge}
                              </span>
                            </div>
                            <div className="mt-3 text-sm font-semibold text-(--brand-blue) opacity-0 transition group-hover:opacity-100">
                              Découvrir →
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-3">
                        <Link
                          href="/services"
                          onClick={closeAll}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue)"
                        >
                          Voir tous les services →
                        </Link>
                      </div>
                    </div>

                    <div className="border-l border-black/10 bg-linear-to-b from-slate-50 to-white p-5">
                      <div className="text-sm font-extrabold text-slate-900">Un devis clair en 24h</div>
                      <p className="mt-2 text-sm text-slate-600">
                        On cadre ton besoin, on propose une stratégie, puis on livre une V1 utile rapidement.
                      </p>

                      <div className="mt-4 grid gap-2">
                        <Link
                          href="/contact"
                          onClick={closeAll}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
                        >
                          <Spark />
                          Décrire ma situation
                        </Link>

                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-green) px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
                        >
                          <WhatsAppIcon />
                          WhatsApp / Devis rapide
                        </a>

                        <Link
                          href="/realisations"
                          onClick={closeAll}
                          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                          Voir des démos
                        </Link>
                      </div>

                      <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
                        <div className="text-sm font-semibold text-slate-900">Ce qu’on optimise</div>
                        <ul className="mt-2 space-y-1 text-sm text-slate-600">
                          <li>• Conversion (CTA, parcours, confiance)</li>
                          <li>• SEO local (Google & Maps)</li>
                          <li>• Organisation (outils métiers, suivi, documents)</li>
                          <li>• Conformité (FNE, interfaçage, continuité)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
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
                      "relative rounded-xl px-3 py-2 text-sm font-semibold transition",
                      active ? "text-slate-900" : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    {it.label}
                    <span
                      className={cn(
                        "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-opacity",
                        "bg-linear-to-r from-(--brand-blue) via-(--brand-green) to-transparent",
                        active ? "opacity-100" : "opacity-0"
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
                  "relative inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold transition",
                  moreActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                Plus <ChevronDown open={moreOpen} />
                <span
                  className={cn(
                    "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-opacity",
                    "bg-linear-to-r from-(--brand-blue) via-(--brand-green) to-transparent",
                    moreActive ? "opacity-100" : "opacity-0"
                  )}
                />
              </button>

              {moreOpen ? (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_60px_rgba(2,6,23,0.12)]"
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
                            "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition",
                            active
                              ? "bg-slate-50 text-slate-900"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          )}
                        >
                          {it.label}
                          <span className="text-(--brand-blue)">→</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </nav>
        </div>

        {/* Actions droite */}
        <div className="flex shrink-0 items-center justify-end gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 md:inline-flex"
            aria-label="WhatsApp"
          >
            <span className="text-(--brand-green)">
              <WhatsAppIcon />
            </span>
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-2 text-sm font-semibold text-white hover:opacity-95 md:inline-flex"
            onClick={closeAll}
          >
            <Spark />
            Décrire ma situation
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setOpen(false)}
          />

          <div id="mobile-nav" className="fixed left-0 right-0 top-16 z-50 border-t border-black/10 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="mb-3 rounded-2xl border border-black/10 bg-slate-50 px-4 py-3">
                <div className="text-sm font-semibold text-slate-900">Réponse sous 24h</div>
                <div className="text-xs text-slate-600">Devis clair • V1 rapide • Accompagnement</div>
              </div>

              <div className="grid gap-3">
                {navMobilePriority.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={closeAll}
                    className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-green) px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  <WhatsAppIcon />
                  WhatsApp / Devis rapide
                </a>

                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-blue) px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
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
                        "rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm transition",
                        active ? "font-semibold text-slate-900" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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
      ) : null}
    </header>
  );
}