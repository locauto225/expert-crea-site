import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Solutions par secteur d'activité en Côte d'Ivoire",
  description:
    "Hôtellerie, santé, commerce, BTP, distribution, restauration : des solutions digitales adaptées à votre secteur. Site, SEO, outils métiers, conformité FNE.",
  alternates: { canonical: `${site.url}/secteurs` },
  openGraph: {
    title: "Solutions par secteur — EXPERT CRÉA",
    description:
      "Des solutions digitales adaptées à votre secteur d'activité en Côte d'Ivoire.",
    url: `${site.url}/secteurs`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const secteurs = [
  {
    title: "Hôtels & tourisme",
    slug: "hotels-tourisme",
    desc: "Plus de réservations directes, moins de dépendance aux plateformes. Visibilité locale, site qui convertit, outils de suivi.",
    services: ["SEO local & Google Maps", "Site orienté réservation", "Outils de gestion interne"],
    accent: "blue" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M9 7h1" /><path d="M14 7h1" /><path d="M9 11h1" /><path d="M14 11h1" />
        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
      </svg>
    ),
  },
  {
    title: "Pharmacies & santé",
    slug: "pharmacies-sante",
    desc: "Confiance en ligne, visibilité locale, informations claires pour les patients. Conformité et organisation adaptées au secteur.",
    services: ["Visibilité Google Maps", "Site professionnel & infos", "Conformité FNE"],
    accent: "green" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 2v4" /><path d="M16 2v4" /><path d="M12 10v6" /><path d="M9 13h6" />
        <rect x="4" y="4" width="16" height="18" rx="2" />
      </svg>
    ),
  },
  {
    title: "PME & commerces",
    slug: "pme-commerces",
    desc: "Générer des demandes concrètes, gagner du temps, structurer l'activité. Le digital au service de la croissance.",
    services: ["Site crédible qui convertit", "SEO local", "Outils internes si besoin"],
    accent: "blue" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    ),
  },
  {
    title: "BTP & construction",
    slug: "btp-construction",
    desc: "Montrer votre sérieux, décrocher des chantiers, suivre les projets. Visibilité et organisation pour le terrain.",
    services: ["Site vitrine pro + réalisations", "SEO local & appels d'offres", "Suivi chantiers & documents"],
    accent: "green" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" /><path d="M9 20v-5h6v5" />
        <path d="M9 12h1" /><path d="M14 12h1" />
      </svg>
    ),
  },
  {
    title: "Distribution & grossistes",
    slug: "distribution-grossistes",
    desc: "Gérer les commandes, les stocks, les clients. Un outil clair pour piloter la distribution sans papier.",
    services: ["Outil de suivi commandes", "Catalogue & prix en ligne", "Conformité FNE"],
    accent: "blue" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
      </svg>
    ),
  },
  {
    title: "Restauration",
    slug: "restauration",
    desc: "Être trouvé, donner envie, remplir la salle. Visibilité locale, menu en ligne, avis Google qui travaillent pour vous.",
    services: ["Google Maps & avis", "Site / menu en ligne", "Commande & réservation"],
    accent: "green" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
        <path d="M6 1v3" /><path d="M10 1v3" /><path d="M14 1v3" />
      </svg>
    ),
  },
];

export default function SecteursPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je cherche une solution adaptée à mon secteur d'activité. Pouvez-vous m'aider ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Secteurs", item: `${site.url}/secteurs` },
    ],
  };

  return (
    <Container>
      <div className="space-y-16 pt-20 pb-8 sm:space-y-24 sm:pt-24 sm:pb-12">

        {/* BREADCRUMB */}
        <Breadcrumbs
          className="mb-6 sm:mb-8"
          items={[{ label: "Secteurs", href: "/secteurs" }]}
        />


        {/* ─── HERO ─── */}
        <section className="reveal space-y-6">
          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              On connaît votre réalité terrain
            </h1>
            <p className="max-w-2xl text-slate-600 md:text-lg leading-relaxed">
              Chaque secteur a ses contraintes. On adapte nos services à votre façon de travailler — pas l&apos;inverse.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#secteurs"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
            >
              Trouver mon secteur ↓
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Mon secteur n&apos;est pas listé
            </Link>
          </div>
        </section>


        {/* ─── GRILLE SECTEURS ─── */}
        <section id="secteurs" className="reveal reveal-stagger space-y-8 scroll-mt-20">
          <div className="prose-container-left space-y-2">
            <h2 className="text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
              Choisissez votre secteur
            </h2>
            <p className="text-slate-600 leading-relaxed">
              On vous montre comment on adapte nos services à votre activité.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {secteurs.map((s) => (
              <Link
                key={s.slug}
                href={`/secteurs/${s.slug}`}
                className="stagger-item group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-black/15 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                {/* Accent bar top */}
                <span
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl ${
                    s.accent === "green" ? "bg-(--brand-green)" : "bg-(--brand-blue)"
                  }`}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                      s.accent === "green"
                        ? "bg-(--brand-green)/10 text-(--brand-green)"
                        : "bg-(--brand-blue)/10 text-(--brand-blue)"
                    }`}
                  >
                    {s.icon}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all group-hover:translate-x-0.5 ${
                      s.accent === "green"
                        ? "bg-(--brand-green)/10 text-(--brand-green)"
                        : "bg-(--brand-blue)/10 text-(--brand-blue)"
                    }`}
                  >
                    Voir
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                  </span>
                </div>

                <div className="font-bold text-slate-900 text-lg">{s.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.services.map((sv) => (
                    <span key={sv} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                      {sv}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>


        {/* ─── PAS DANS LA LISTE ─── */}
        <section className="reveal rounded-2xl border border-(--brand-blue)/12 bg-(--brand-blue)/4 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-(--brand-blue)/10 text-(--brand-blue)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
              </svg>
            </span>
            <div>
              <div className="font-bold text-slate-900">Votre secteur n&apos;est pas listé ?</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                Ces secteurs sont des exemples. Notre méthode s&apos;adapte à toute activité qui a besoin de visibilité, d&apos;un site efficace, d&apos;outils internes ou de conformité. Décrivez votre situation — on vous dit clairement ce qu&apos;on peut faire.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
                >
                  Décrire votre situation (2 min)
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* ─── CTA FINAL ─── dark */}
        <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 sm:p-10 text-white">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/18 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(0,145,255,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
                On s&apos;adapte à votre activité
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez ce que vous faites — on vous montre ce qu&apos;on peut mettre en place.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
            >
              Décrire votre situation (2 min)
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/40"
            >
              WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35"
            >
              Voir les services
            </Link>
          </div>
        </section>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      </div>
    </Container>
  );
}