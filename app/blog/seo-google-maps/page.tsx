import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO local & Google Maps : être trouvé en Côte d’Ivoire",
  description:
    "Guide SEO local : Google Business Profile, avis, pages locales, mots-clés et actions simples pour apparaître sur Google Maps en Côte d’Ivoire.",
  alternates: { canonical: `${site.url}/blog/seo-google-maps` },
  openGraph: {
    title: "SEO local & Google Maps : être trouvé en Côte d’Ivoire",
    description:
      "Optimiser Google Maps + pages locales pour augmenter les demandes (WhatsApp / appels).",
    url: `${site.url}/blog/seo-google-maps`,
    siteName: site.name,
    type: "article",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Combien de temps pour voir des résultats SEO ?",
    a: "Souvent 4 à 12 semaines pour des signaux visibles (selon concurrence). Avec le SEO local, on peut parfois obtenir des gains plus rapides via la fiche Google.",
  },
  {
    q: "Les avis Google comptent vraiment ?",
    a: "Oui. La quantité, la qualité et la régularité des avis influencent la confiance et la performance locale (et la conversion).",
  },
  {
    q: "Je n’ai pas de site, est-ce utile ?",
    a: "Oui, mais un site améliore fortement la crédibilité et la conversion. La fiche Google seule peut générer des appels, mais un site augmente le taux de contact et permet de se positionner sur plus de mots-clés.",
  },
];

export default function BlogSEOGoogleMapsPage() {
  const published = "2026-01-26";
  const title = "SEO local & Google Maps : être trouvé en Côte d’Ivoire";
  const url = `${site.url}/blog/seo-google-maps`;

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: published,
    dateModified: published,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: url,
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
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-slate-500">
          Blog • SEO • Google Maps
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-sm font-semibold text-slate-500">
          Article basé sur des situations réelles observées chez des entreprises en Côte d’Ivoire.
        </p>
        <p className="max-w-3xl text-slate-600 md:text-lg">
          Beaucoup de clients cherchent “service + ville/quartier”. Le SEO local
          + Google Maps est l’un des meilleurs ROI en Côte d’Ivoire.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services/referencement-seo"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Service : SEO & Google Maps
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-green) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Décrire ma situation
          </Link>
        </div>
      </header>

      <section className="prose prose-slate max-w-none">
        <h2>1) La base : Google Business Profile (GBP)</h2>
        <ul>
          <li>Nom, catégorie, services : cohérents</li>
          <li>Adresse / zone : exacte</li>
          <li>Horaires : à jour</li>
          <li>Photos : régulières (avant/après, équipe, locaux)</li>
          <li>Posts : 1 à 2/mois (offres, nouveautés)</li>
        </ul>
        <p>
          Une fiche Google bien tenue peut générer des appels même sans site web.
        </p>

        <h2>2) Les avis : la preuve sociale locale</h2>
        <p>
          Mets en place un système simple : après prestation/achat, message WhatsApp
          demandant un avis (avec lien direct). L’objectif : régularité. 5 avis réguliers valent mieux que 50 avis d’un coup.
        </p>

        <h2>3) Le site : pages locales + pages offres</h2>
        <ul>
          <li>Une page par service “money” (landing)</li>
          <li>Une page par secteur (hôtel, pharmacie, PME…)</li>
          <li>Une page “ville” si pertinent (Abidjan, Yamoussoukro, etc.)</li>
          <li>FAQ (questions réelles des clients)</li>
        </ul>

        <h2>4) Le vrai KPI : demandes</h2>
        <p>
          SEO = trafic qualifié, mais le but c’est les demandes. CTA visibles,
          WhatsApp et formulaire court sont essentiels. Être visible sans demandes n’a aucun intérêt business.
        </p>
      </section>

      <section className="rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Checklist SEO local (simple)</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Fiche Google complète + photos</li>
          <li>Message “demande d’avis” prêt</li>
          <li>Pages services claires + CTA</li>
          <li>Pages secteurs + FAQ</li>
          <li>Suivi mensuel (améliorations)</li>
        </ul>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-green) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Être visible localement
          </Link>
          <Link
            href="/services/referencement-seo"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Voir le service
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </div>
  );
}