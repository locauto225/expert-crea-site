import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "PME & commerces : site, SEO local et organisation en Côte d’Ivoire",
  description:
    "Pour PME et commerces : site orienté conversion, SEO local (Google Maps) et outils simples (suivi, documents, dashboard) pour générer des demandes et mieux s’organiser.",
  alternates: {
    canonical: `${site.url}/secteurs/pme-commerces`,
  },
  openGraph: {
    title: "PME & commerces — Visibilité et organisation",
    description:
      "Site qui convertit, SEO local/Google Maps et outils de gestion simples pour structurer l’activité.",
    url: `${site.url}/secteurs/pme-commerces`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Qu’est-ce qui apporte le plus de demandes rapidement ?",
    a: "Le combo gagnant : une page/service claire avec CTA (WhatsApp/appel), une fiche Google Maps optimisée, et quelques pages ciblées (secteur + service) pour capter les recherches locales.",
  },
  {
    q: "Un site suffit-il pour être visible sur Google ?",
    a: "Un site est la base, mais la visibilité vient surtout d’une structure SEO propre + contenus utiles + Google Maps (avis, photos, informations cohérentes).",
  },
  {
    q: "Quels outils de gestion simples peuvent vraiment aider une PME ?",
    a: "Selon l’activité : suivi des demandes/devis, centralisation des documents, tableau de bord, alertes, et parfois un extranet léger avec accès par rôles.",
  },
  {
    q: "Peut-on commencer par une V1 puis améliorer ?",
    a: "Oui. On lance une V1 utile (site + conversion + base SEO), puis on ajoute des pages, du contenu, et des modules de gestion au fur et à mesure.",
  },
];

export default function PMECommercesPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je suis une PME / un commerce et je veux générer plus de demandes (site + SEO local) et mieux organiser mon activité. Pouvez-vous me dire par où commencer ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  // ✅ BreadcrumbList (URLs absolues)
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Secteurs", item: `${site.url}/secteurs` },
      {
        "@type": "ListItem",
        position: 3,
        name: "PME & commerces",
        item: `${site.url}/secteurs/pme-commerces`,
      },
    ],
  };

  // ✅ Service schema (secteur PME & commerces)
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Visibilité & organisation pour PME et commerces",
    serviceType:
      "Site web orienté conversion, SEO local (Google Maps), pages ciblées, outils simples de suivi et organisation",
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      telephone: site.phoneDisplay,
    },
    areaServed: {
      "@type": "Country",
      name: "Côte d’Ivoire",
    },
    audience: {
      "@type": "BusinessAudience",
      name: "PME, commerces, entrepreneurs",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "XOF",
      url: `${site.url}/secteurs/pme-commerces`,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-16">
      {/* ✅ Breadcrumbs */}
      <Breadcrumbs
        className="mb-2"
        items={[
          { label: "Secteurs", href: "/secteurs" },
          { label: "PME & commerces", href: "/secteurs/pme-commerces" },
        ]}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Secteur • PME & commerces • Conversion • SEO local
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Générer des demandes et mieux s’organiser
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Site orienté conversion, SEO local (Google Maps) et outils simples
            (suivi, documents, dashboard) pour gagner du temps et structurer
            l’activité.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Décrire ma situation
            </Link>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              WhatsApp (réponse rapide)
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-sm font-semibold">Conversion</div>
              <div className="text-sm text-slate-600">CTA + WhatsApp</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-sm font-semibold">SEO local</div>
              <div className="text-sm text-slate-600">Google & Maps</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-sm font-semibold">Organisation</div>
              <div className="text-sm text-slate-600">Suivi & documents</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈMES FRÉQUENTS */}
      <section className="reveal space-y-6">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Problèmes fréquents</h2>
          <p className="text-slate-600 md:text-lg leading-relaxed">
            Des demandes existent, mais elles se perdent ou n’arrivent pas. Ici, on remet un parcours simple et une organisation claire.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Site peu clair", "On ne comprend pas l’offre, ni quoi faire (appel, WhatsApp, formulaire)."],
            ["Google Maps sous-exploité", "Fiche incomplète, infos incohérentes, avis et photos pas travaillés."],
            ["Demandes mal suivies", "Messages WhatsApp / appels / réseaux… sans suivi ni priorisation."],
            ["Organisation chronophage", "Documents, devis, informations clients dispersés ou perdus."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl border border-black/10 bg-white p-6">
              <div className="text-lg font-bold">{t}</div>
              <div className="mt-2 text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PILIERS */}
      <section className="reveal grid gap-4 md:grid-cols-3">
        {[
          ["Site qui convertit", "CTA visibles, WhatsApp, formulaire simple."],
          ["SEO local", "Être trouvé sur Google + Google Maps."],
          ["Organisation", "Outils simples : suivi, documents, alertes."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-3xl border border-black/10 bg-white p-6">
            <div className="text-lg font-bold">{t}</div>
            <div className="mt-2 text-slate-600">{d}</div>
          </div>
        ))}
      </section>

      {/* LIVRABLES */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8">
        <h2 className="text-xl font-bold">Ce qu’on met en place (V1 rentable)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["Page(s) service(s)", "Offre claire + preuves + CTA (WhatsApp/appel)."],
            ["Google Maps", "Optimisation de la fiche + photos + plan d’avis."],
            ["Pages ciblées", "Secteur + service + FAQ pour capter des recherches."],
            ["Suivi & organisation", "Option : suivi des demandes, documents, dashboard simple."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="font-semibold">{t}</div>
              <div className="mt-2 text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-6">
        <div className="text-sm font-semibold text-slate-900">
          Vous voulez un cadrage clair (par quoi commencer) ?
        </div>
        <div className="mt-1 text-sm text-slate-600">
          Décrivez votre situation (activité + zone + objectif) — on vous répond avec la meilleure première étape.
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            Décrire ma situation
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            WhatsApp (réponse rapide)
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