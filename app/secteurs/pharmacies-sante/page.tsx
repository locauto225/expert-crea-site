import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Visibilité & organisation pour pharmacies en Côte d’Ivoire",
  description:
    "Pharmacies : Google Maps, SEO local, site crédible et outils simples (suivi, documents, tableaux de bord) pour gagner du temps et générer plus de demandes.",
  alternates: {
    canonical: `${site.url}/secteurs/pharmacies-sante`,
  },
  openGraph: {
    title: "Pharmacies & santé — Visibilité Google Maps & organisation",
    description:
      "Google Maps, SEO local, site crédible et outils simples pour mieux gérer l’activité et recevoir plus de demandes.",
    url: `${site.url}/secteurs/pharmacies-sante`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Google Maps peut-il vraiment apporter des clients à une pharmacie ?",
    a: "Oui. Beaucoup de recherches sont locales (quartier/ville). Une fiche optimisée (catégories, services, photos, horaires) + des avis réguliers et des infos cohérentes augmentent la visibilité et les appels/WhatsApp.",
  },
  {
    q: "Quelles infos doivent être visibles sur le site d’une pharmacie ?",
    a: "Adresse, horaires, contact direct, services (garde, livraison, conseils), localisation, FAQ (ex : documents nécessaires), et si possible des preuves (avis, photos).",
  },
  {
    q: "Peut-on recevoir des demandes via WhatsApp ?",
    a: "Oui. On met en place des CTA WhatsApp clairs (message pré-rempli) et un parcours simple. On peut aussi ajouter un formulaire de demande structuré.",
  },
  {
    q: "Quels outils de gestion sont utiles pour une pharmacie ?",
    a: "Selon l’activité : suivi des demandes, documents, tableaux de bord, alertes, ou un extranet simple pour mieux organiser les informations et éviter les pertes.",
  },
  {
    q: "Combien de temps pour une V1 ?",
    a: "Une V1 (fiche Google optimisée + page/site crédible + parcours WhatsApp) peut être lancée rapidement, puis on améliore ensuite (contenu, SEO, pages locales, outils).",
  },
];

export default function PharmaciesSantePage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je gère une pharmacie et je souhaite améliorer notre visibilité locale (Google Maps/SEO) et clarifier notre organisation. Pouvez-vous me proposer un plan clair et la meilleure première étape ?"
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
        name: "Pharmacies & santé",
        item: `${site.url}/secteurs/pharmacies-sante`,
      },
    ],
  };

  // ✅ Service schema enrichi (secteur pharmacie)
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Visibilité & organisation pour pharmacies",
    serviceType:
      "SEO local, Google Maps, site crédible, demandes WhatsApp, outils simples de suivi et organisation",
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
      name: "Pharmacies & acteurs de la santé",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "XOF",
      url: `${site.url}/secteurs/pharmacies-sante`,
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
          { label: "Pharmacies & santé", href: "/secteurs/pharmacies-sante" },
        ]}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Secteur • Pharmacies & santé • Google Maps • Organisation
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Plus de visibilité locale et une organisation claire pour votre pharmacie
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Google Maps, prises de contact simples (WhatsApp/appels) et outils légers
            pour mieux gérer l’activité au quotidien — sans complexifier l’existant.
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
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Google Maps</div>
              <div className="text-sm text-slate-600">Fiche + avis</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Conversion</div>
              <div className="text-sm text-slate-600">WhatsApp / appels</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Organisation</div>
              <div className="text-sm text-slate-600">Suivi & documents</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Google Maps & avis", "Optimisation de la fiche + cohérence des infos."],
          ["Site crédible", "Infos claires, contact, services, localisation."],
          ["Outils de gestion", "Suivi, documents, tableaux de bord, alertes."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-3xl border border-black/10 bg-white p-6">
            <div className="text-lg font-bold">{t}</div>
            <div className="mt-2 text-slate-600">{d}</div>
          </div>
        ))}
      </section>

      {/* CE QU’ON MET EN PLACE */}
      <section className="rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Ce qu’on met en place</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["Audit rapide", "Objectifs, zone, concurrence, points bloquants."],
            ["Google Maps", "Infos, catégories, services, photos, plan d’avis."],
            ["Site / page crédible", "Pages claires, CTA, localisation, FAQ."],
            ["Parcours WhatsApp", "Message pré-rempli, contact immédiat, formulaire si besoin."],
            ["Organisation (option)", "Suivi, documents, dashboard simple selon priorités."],
            ["Suivi mensuel", "Améliorations continues + reporting simple."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 p-5">
              <div className="font-semibold">{t}</div>
              <div className="mt-2 text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-black/10 p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-black/10 bg-slate-50 p-8">
        <div className="text-sm font-semibold text-slate-900">
          On vous propose une V1 simple et utile
        </div>
        <div className="mt-1 text-sm text-slate-600">
          Visibilité (SEO/Maps) + prise de contact + suivi basique si besoin.
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