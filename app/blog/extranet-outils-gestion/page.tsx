import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pourquoi un extranet / outil de gestion change une entreprise",
  description:
    "Extranet, dashboards, suivi et documents : comment gagner du temps, réduire les erreurs et structurer l’activité avec un outil simple.",
  alternates: { canonical: `${site.url}/blog/extranet-outils-gestion` },
  openGraph: {
    title: "Pourquoi un extranet / outil de gestion change une entreprise",
    description:
      "Gagner du temps, suivre les opérations et éviter les oublis avec un extranet.",
    url: `${site.url}/blog/extranet-outils-gestion`,
    siteName: site.name,
    type: "article",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Un extranet, c’est comme un ERP ?",
    a: "Un extranet peut être beaucoup plus simple qu’un ERP. On construit un outil sur-mesure : suivi, documents, tableaux de bord, rôles, et automatisations essentielles.",
  },
  {
    q: "Quel est le ROI d’un outil de gestion ?",
    a: "Moins d’erreurs, moins de pertes de temps, meilleure visibilité. Souvent, l’outil se rentabilise vite si l’activité a des opérations répétées (commandes, demandes, suivi).",
  },
  {
    q: "On peut démarrer petit ?",
    a: "Oui. On livre une V1 : un dashboard + 1 ou 2 modules essentiels, puis on itère selon les retours.",
  },
];

export default function BlogExtranetPage() {
  const published = "2026-01-26";
  const title = "Pourquoi un extranet / outil de gestion change une entreprise";
  const url = `${site.url}/blog/extranet-outils-gestion`;

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
          Blog • Extranet • Outils de gestion
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-sm font-semibold text-slate-500">
          Article basé sur des situations réelles observées chez des entreprises en Côte d’Ivoire.
        </p>
        <p className="max-w-3xl text-slate-600 md:text-lg">
          Beaucoup d’entreprises perdent du temps à cause de fichiers dispersés,
          WhatsApp non structuré, documents introuvables, et suivi manuel. Un extranet
          simple règle ça.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services/extranet-outils-gestion"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Service : extranet & outils
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
        <h2>1) Les symptômes d’une organisation “manuelle”</h2>
        <p>
          Infos dispersées (WhatsApp, Excel, papiers) et manque de suivi clair. Concrètement : des informations réparties entre plusieurs canaux, sans vue d’ensemble, avec des oublis et des doublons.
        </p>
        <ul>
          <li>Infos dispersées (WhatsApp, Excel, papiers)</li>
          <li>Pas de visibilité sur l’avancement</li>
          <li>Erreurs répétées / oublis</li>
          <li>Dépendance à une personne</li>
        </ul>

        <h2>2) Ce qu’une V1 d’extranet peut contenir</h2>
        <ul>
          <li>Dashboard (KPIs + alertes)</li>
          <li>Suivi des demandes / dossiers (statuts)</li>
          <li>Documents centralisés</li>
          <li>Rôles & accès (qui voit quoi)</li>
          <li>Exports (PDF/Excel) si besoin</li>
        </ul>
        <p>
          On peut (et on doit) démarrer petit : une V1 avec un dashboard + 1 ou 2 modules essentiels, puis itérer selon l’usage réel.
        </p>

        <h2>3) La stratégie “pro” : V1 → itérations</h2>
        <p>
          On démarre petit : 1 à 2 modules essentiels, puis on améliore selon les retours.
          C’est plus rapide, moins risqué, et plus rentable.
        </p>
      </section>

      <section className="rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Tu veux une V1 pro orientée organisation, rapidement ?</h2>
        <p className="mt-2 text-slate-600">
          On peut créer un prototype (écrans + parcours + structure) pour valider
          le besoin, puis développer la V1.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-green) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Décrire ma situation
          </Link>
          <Link
            href="/services/extranet-outils-gestion"
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