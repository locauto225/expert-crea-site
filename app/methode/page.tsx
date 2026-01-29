import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notre méthode",
  description:
    "Diagnostic → stratégie → production → accompagnement. Une méthode simple et cadrée pour livrer vite, bien, et obtenir des résultats.",
  alternates: { canonical: `${site.url}/methode` },
  openGraph: {
    title: "Méthode — EXPERT CRÉA",
    description:
      "Diagnostic → stratégie → production → accompagnement. Une méthode claire, orientée résultats.",
    url: `${site.url}/methode`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Pourquoi une méthode est importante ?",
    a: "Parce qu’elle évite les retours en arrière : objectifs clairs, livrables cadrés, validation à chaque étape. Résultat : plus rapide et plus rentable.",
  },
  {
    q: "Vous livrez une V1 rapidement ?",
    a: "Oui. On préfère livrer une V1 utile (site, SEO local, extranet léger) puis améliorer avec des itérations plutôt que de bloquer des mois.",
  },
  {
    q: "Comment se passe l’accompagnement ?",
    a: "On explique, on forme et on suit les résultats. L’objectif n’est pas seulement de livrer, mais de garantir l’adoption et l’impact.",
  },
];

export default function MethodePage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je veux un plan clair pour améliorer ma visibilité / organisation. Pouvez-vous m’accompagner ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Méthode", item: `${site.url}/methode` },
    ],
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
      <Breadcrumbs className="mb-2" items={[{ label: "Méthode", href: "/methode" }]} />

      {/* HERO (même famille que la page Avis) */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />

        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Méthode
            </span>
            <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Clarté • Suivi • Résultats
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Une méthode simple, cadrée, orientée résultats.
          </h1>

          <p className="max-w-2xl text-slate-600 md:text-lg leading-relaxed">
            On évite les projets flous. On définit un objectif, on propose une stratégie,
            puis on livre une V1 utile avant d’améliorer avec des itérations.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Demander un plan
            </Link>
            <Link
              href="#etapes"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Voir les 4 étapes
            </Link>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
            <div className="text-xs font-semibold tracking-wide text-slate-500">À retenir</div>
            <div className="mt-1 text-sm text-slate-700">
              V1 utile d’abord, puis amélioration continue. Objectifs clairs, livrables cadrés,
              et une progression visible sans bloquer l’activité.
            </div>
          </div>
        </div>
      </section>

      <section id="etapes" className="rounded-3xl border border-black/10 p-8 scroll-mt-28">
        <h2 className="text-xl font-bold">Les 4 étapes</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["1) Diagnostic", "Comprendre le besoin, la cible, la zone, les contraintes."],
            ["2) Stratégie", "Plan d’action : pages, contenus, outils, priorités."],
            ["3) Production", "Design + dev + tests : site, SEO local, extranet, supports."],
            ["4) Accompagnement", "Prise en main, suivi des résultats, optimisations."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="font-semibold">{t}</div>
              <div className="mt-2 text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Pourquoi ça marche</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>On va droit au résultat : conversion (demandes) et organisation (gain de temps)</li>
            <li>On réduit les risques : V1 + itérations</li>
            <li>On structure le contenu pour Google (SEO) et pour les humains (clarté)</li>
            <li>On accompagne : adoption par l’équipe</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Exemples de V1</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Site + pages services + CTA WhatsApp</li>
            <li>Google Maps optimisé + plan d’avis</li>
            <li>Extranet léger : suivi + documents + dashboard</li>
            <li>Templates supports : devis, signatures, visuels</li>
          </ul>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Voir les services
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 hover:opacity-95"
            >
              Voir des démos
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 p-8">
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

      <section className="rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">On te propose un plan clair</h2>
        <p className="mt-2 text-slate-600">
          Dis-nous ton secteur, ta ville/quartier et ton objectif (demandes, visibilité,
          organisation). On répond avec une stratégie et des étapes simples.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Contacter EXPERT CRÉA
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-green) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </div>
  );
}