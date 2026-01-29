import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Création de site web en Côte d’Ivoire",
  description:
    "Sites vitrines, e-commerce et pages de vente pensés pour convertir. Design premium, performance, SEO de base et accompagnement. Basés en Côte d’Ivoire, projets partout.",
  alternates: {
    canonical: `${site.url}/services/creation-site-web`,
  },
  openGraph: {
    title: "Création de site web en Côte d’Ivoire — EXPERT CRÉA",
    description:
      "Sites vitrines, e-commerce et pages de vente pensés pour convertir. Design premium, performance, SEO de base et accompagnement.",
    url: `${site.url}/services/creation-site-web`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Combien de temps pour créer un site web ?",
    a: "Selon la complexité : une landing page peut être livrée en quelques jours, un site vitrine en 1 à 3 semaines, et un e-commerce en 3 à 6 semaines. Un planning est fixé dès le départ.",
  },
  {
    q: "Est-ce que le site sera bien référencé sur Google ?",
    a: "On met en place une base SEO propre (titres, structure, performance, indexation). Pour aller plus loin, on propose un accompagnement SEO avec contenus et optimisation continue.",
  },
  {
    q: "Peut-on gérer le site facilement après livraison ?",
    a: "Oui. On fournit une structure claire, des guides et un accompagnement. Selon le besoin, on peut intégrer un espace blog/actualités simple à mettre à jour.",
  },
  {
    q: "Travaillez-vous uniquement en Côte d’Ivoire ?",
    a: "Nous sommes basés en Côte d’Ivoire, et nous travaillons en présentiel ou à distance avec des entreprises partout.",
  },
];

export default function CreationSiteWebPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite créer/refondre un site web qui génère des demandes. Pouvez-vous me proposer un plan et une estimation ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  // ✅ Service schema (plus complet)
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Création de site web",
    serviceType: "Création / refonte de sites vitrines, e-commerce et pages de vente",
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      telephone: site.phoneDisplay,
    },
    areaServed: { "@type": "Country", name: "Côte d’Ivoire" },
    audience: { "@type": "BusinessAudience", name: "Entreprises & PME" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "XOF",
      url: `${site.url}/services/creation-site-web`,
    },
  };

  // ✅ FAQ schema
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // ✅ Breadcrumb schema (en plus du composant)
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Création de site web",
        item: `${site.url}/services/creation-site-web`,
      },
    ],
  };

  return (
    <div className="space-y-16">
      {/* ✅ Breadcrumbs */}
      <Breadcrumbs
        className="mb-2"
        items={[
          { label: "Services", href: "/services" },
          { label: "Création de site web", href: "/services/creation-site-web" },
        ]}
      />

      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Service • Site web • Conversion • Performance & SEO
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Création de site web en Côte d’Ivoire
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Un site rapide, clair et crédible : design premium, structure SEO, appels à l’action et accompagnement — pour générer des demandes, pas juste « exister ».
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Idéal si votre site doit générer des demandes, pas seulement être en ligne.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Décrire mon projet de site
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              WhatsApp (réponse rapide)
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Performance</div>
              <div className="text-sm text-slate-600">Rapide, mobile-first</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Conversion</div>
              <div className="text-sm text-slate-600">CTA, parcours clair</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">SEO propre</div>
              <div className="text-sm text-slate-600">Structure indexable</div>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm text-slate-600">
            On travaille sur du concret : pages services claires, vitesse, structure, formulaires/WhatsApp — pas du blabla.
          </p>
        </div>
      </section>

      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Ce que vous obtenez</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Design professionnel + identité cohérente</li>
            <li>Pages optimisées (rapidité, lisibilité, mobile)</li>
            <li>Structure SEO de base (titres, sections, indexation)</li>
            <li>CTA & formulaires orientés prise de contact</li>
            <li>Accompagnement et prise en main</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Pour qui ?</h2>
          <p className="mt-3 text-slate-600">
            Hôtels, pharmacies, PME, commerces et entrepreneurs qui veulent une
            présence en ligne crédible, capable de générer des demandes.
          </p>
          <div className="mt-4 text-sm text-slate-600">
            Basés en Côte d’Ivoire • Projets partout à distance
          </div>
        </div>
      </section>

      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">À savoir avant de lancer un site</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Ce service est conçu pour des entreprises qui attendent des demandes concrètes (appels, messages, formulaires),
          pas simplement un site « vitrine » pour être présent en ligne.
        </p>
        <p className="mt-2 max-w-3xl text-slate-600">
          Si votre priorité est uniquement l’esthétique ou un site sans objectif de contact, ce service n’est probablement pas le plus adapté.
          Notre approche privilégie la clarté, la performance et la conversion — pour que le site devienne un outil utile, pas une vitrine figée.
        </p>
      </section>

      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Méthode</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Diagnostic", "Objectifs, cible, contraintes."],
            ["Stratégie", "Arborescence, contenu, parcours."],
            ["Production", "Design + développement + tests."],
            ["Suivi", "Mises à jour, optimisation, résultats."],
          ].map(([t, d]) => (
            <div key={t} className="stagger-item rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-sm font-semibold">{t}</div>
              <div className="text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="stagger-item rounded-2xl border border-black/10 bg-white/70 p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Prêt à lancer votre site ?</h2>
        <p className="mt-2 text-slate-600">
          Dites-nous votre objectif et votre délai. On vous répond avec une
          proposition claire.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Décrire mon projet de site
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </div>
  );
}