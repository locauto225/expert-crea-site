import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Créer un site web qui convertit en Côte d’Ivoire",
  description:
    "Structure, pages indispensables, erreurs à éviter et CTA WhatsApp : guide pratique pour un site web qui génère des demandes en Côte d’Ivoire.",
  alternates: { canonical: `${site.url}/blog/site-web` },
  openGraph: {
    title: "Créer un site web qui convertit en Côte d’Ivoire",
    description:
      "Guide pratique : pages, structure et conversion (WhatsApp, formulaire) pour générer des demandes.",
    url: `${site.url}/blog/site-web`,
    siteName: site.name,
    type: "article",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Quelles pages sont indispensables pour une entreprise ?",
    a: "Accueil, Services, Réalisations/Preuves, À propos, Contact. Selon l’activité : pages secteurs, FAQ, et pages dédiées à une offre (landing).",
  },
  {
    q: "WhatsApp doit-il être visible partout ?",
    a: "Oui, surtout en Côte d’Ivoire : bouton WhatsApp, numéro cliquable et message pré-rempli augmentent fortement le taux de contact.",
  },
  {
    q: "Combien coûte un bon site web ?",
    a: "Ça dépend des pages, contenus et objectifs. Une V1 pro orientée conversion est souvent le meilleur ROI, puis on améliore progressivement (SEO, contenu, pages secteurs).",
  },
];

export default function BlogSiteWebPage() {
  const published = "2026-01-26";
  const title = "Créer un site web qui convertit en Côte d’Ivoire";
  const url = `${site.url}/blog/site-web`;

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
          Blog • Site web
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-sm font-semibold text-slate-500">
          Article basé sur des situations réelles observées chez des entreprises en Côte d’Ivoire.
        </p>
        <p className="max-w-3xl text-slate-600 md:text-lg">
          Un site “joli” ne suffit pas : il doit inspirer confiance et pousser à
          l’action. Voici une structure simple et rentable pour générer des demandes.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services/creation-site-web"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Service : création de site
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
        <h2>1) Le vrai objectif : transformer les visites en demandes</h2>
        <p>
          Dans beaucoup de secteurs, les clients ne cherchent pas “un site”, ils
          cherchent une solution : prix, localisation, crédibilité, contact rapide.
          Ton site doit donc guider vers une action : WhatsApp, appel, formulaire.
        </p>

        <h2>2) Les 5 pages qui convertissent le mieux</h2>
        <ul>
          <li><strong>Accueil</strong> : promesse claire + preuve + CTA.</li>
          <li><strong>Services</strong> : offres cadrées, bénéfices, livrables.</li>
          <li><strong>Réalisations / preuves</strong> : cas, démos, résultats attendus.</li>
          <li><strong>À propos</strong> : crédibilité, méthode, valeurs.</li>
          <li><strong>Contact</strong> : formulaire simple + WhatsApp + téléphone.</li>
        </ul>

        <h2>3) Les erreurs qui te coûtent des clients</h2>
        <ul>
          <li>WhatsApp caché ou absent</li>
          <li>Pas de preuves (cas, démos, photos, avis)</li>
          <li>Pages trop longues sans CTA</li>
          <li>Site lent / non optimisé mobile</li>
          <li>Un seul message “Contactez-nous” sans guidage</li>
        </ul>

        <h2>4) La checklist “conversion” (simple)</h2>
        <ul>
          <li>CTA visible au-dessus de la ligne de flottaison</li>
          <li>Bouton WhatsApp + message pré-rempli</li>
          <li>1 phrase : “qui on aide” + “quel résultat”</li>
          <li>Preuves : réalisations / démos / avis</li>
          <li>Contact en moins de 2 minutes</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Tu veux une V1 pro rapidement ?</h2>
        <p className="mt-2 text-slate-600">
          On te propose une structure claire (pages, contenus, CTA) et une version
          initiale orientée conversion, puis on améliore avec le SEO.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-green) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Être visible localement
          </Link>
          <Link
            href="/services/creation-site-web"
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