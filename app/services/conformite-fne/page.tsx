// ✅ Fichier : app/services/conformite-fne/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Conformité (FNE) en Côte d’Ivoire — sans stress",
  description:
    "Se mettre en conformité (dont la FNE) sans bloquer l’activité. Interfaçage avec vos outils existants, sécurisation des données, continuité d’activité et accompagnement.",
  alternates: { canonical: `${site.url}/services/conformite-fne` },
  openGraph: {
    title: "Conformité (FNE) sans stress — EXPERT CRÉA",
    description:
      "Adapter vos outils existants, sécuriser vos données et continuer à travailler sereinement — sans tout refaire.",
    url: `${site.url}/services/conformite-fne`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Est-ce que vous remplacez notre logiciel actuel ?",
    a: "Non. Notre approche privilégie l’adaptation et l’interfaçage : on connecte l’existant aux obligations (dont la FNE) sans repartir de zéro, sauf si c’est réellement nécessaire.",
  },
  {
    q: "Est-ce que ça va bloquer notre activité ?",
    a: "Non. On avance de façon progressive, avec une V1 utile rapidement, puis des ajustements. L’objectif est la continuité d’activité : pas d’arrêt brutal, pas de “big bang”.",
  },
  {
    q: "On n’est pas technique : est-ce que c’est compréhensible pour nous ?",
    a: "Oui. Chaque action est expliquée en termes simples et validée avec vous. On privilégie des solutions claires, utilisables par l’équipe, sans complexité inutile.",
  },
  {
    q: "Combien de temps pour être en place ?",
    a: "Cela dépend de vos outils et de votre organisation. Un diagnostic rapide permet de cadrer un plan. On peut livrer une première base en quelques jours/semaines, puis renforcer progressivement.",
  },
];

export default function ConformiteFnePage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je dois me mettre en conformité (FNE) sans bloquer mon activité. Pouvez-vous analyser notre situation et proposer un plan ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  // ✅ Service schema
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mise en conformité (FNE) & continuité d’activité",
    serviceType:
      "Interfaçage, organisation des données, sécurisation et accompagnement pour obligations réglementaires (dont la FNE)",
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
      url: `${site.url}/services/conformite-fne`,
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

  // ✅ Breadcrumb schema
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Conformité (FNE)",
        item: `${site.url}/services/conformite-fne`,
      },
    ],
  };

  return (
    <div className="space-y-16">
      <Breadcrumbs
        className="mb-2"
        items={[
          { label: "Services", href: "/services" },
          { label: "Conformité (FNE)", href: "/services/conformite-fne" },
        ]}
      />

      {/* HERO (même famille visuelle que SEO / Outils métiers) */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Service • Conformité • Continuité • Interfaçage
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Se mettre en conformité sans stress
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg leading-relaxed">
            Respecter les obligations (dont la FNE) sans bloquer votre activité.
            On adapte vos outils existants, on sécurise vos données et on vous accompagne
            — sans tout refaire.
          </p>

          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Idéal si vous devez être conforme, mais sans arrêter votre entreprise.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Parler de ma situation
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

          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {[
              ["Continuité", "Pas d’arrêt brutal"],
              ["Interfaçage", "On adapte l’existant"],
              ["Sécurité", "Données structurées"],
              ["Accompagnement", "Simple & expliqué"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-black/10 p-4">
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="text-sm text-slate-600">{d}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 max-w-2xl text-sm text-slate-600">
            Chaque action est expliquée. Rien n’est fait sans validation.
          </p>
        </div>
      </section>

      {/* PROBLÈME (dédramatiser) */}
      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Quand la conformité devient une source de stress</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Beaucoup d’entreprises veulent faire les choses correctement, mais se retrouvent
            bloquées par des outils non adaptés, des informations dispersées, et la peur de
            faire une erreur.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            <li>Outils existants non conformes ou difficiles à adapter</li>
            <li>Peur de mal faire, de se tromper, d’être sanctionné</li>
            <li>Données éparpillées (Excel, WhatsApp, mails, cahiers)</li>
            <li>Solutions trop complexes ou imposées brutalement</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Ce qu’on cherche à éviter</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Le problème n’est pas la conformité. Le problème, ce sont des outils mal intégrés
            à la réalité du terrain.
          </p>
          <div className="mt-4 rounded-2xl border border-black/10 bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-900">
              Notre principe : continuité d’activité.
            </div>
            <div className="mt-2 text-sm text-slate-600">
              On avance par étapes, sans bloquer l’entreprise, avec une V1 utile rapidement.
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE (différenciation) */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Notre approche : on ne remplace pas. On adapte.</h2>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
          Vous avez déjà des outils (Excel, logiciel, facturation, application, process interne) ?
          On ne repart pas de zéro. On met en place des solutions d’interfaçage pour connecter
          l’existant aux obligations (ex : FNE), sécuriser les données et structurer les flux.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["Adapter", "On part de votre fonctionnement réel."],
            ["Connecter", "Interfaçage avec l’existant."],
            ["Sécuriser", "Données claires, accès contrôlés."],
            ["Stabiliser", "Suivi et ajustements continus."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-sm font-semibold text-slate-900">{t}</div>
              <div className="text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CE QUE VOUS OBTENEZ + POUR QUI */}
      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Ce que vous obtenez concrètement</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Analyse de votre situation (outils, flux, contraintes)</li>
            <li>Mise en conformité progressive et sécurisée</li>
            <li>Interfaçage avec vos outils existants</li>
            <li>Organisation claire des données et des accès</li>
            <li>Traçabilité, sécurité et continuité</li>
            <li>Accompagnement à chaque étape</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Objectif : être conforme, sans perturber le quotidien.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Pour qui ?</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Entreprises et PME qui doivent répondre à des obligations (dont la FNE) et
            veulent rester opérationnelles, sans refonte brutale.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "Vous avez déjà un outil ou un système en place",
              "Vous voulez éviter une rupture ou un arrêt",
              "Vous cherchez une solution claire, expliquée, accompagnée",
              "Vous voulez sécuriser l’information et les accès",
            ].map((p) => (
              <li key={p} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-300" />
                <span className="leading-6">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-2xl border border-black/10 bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-900">À savoir</div>
            <div className="mt-2 text-sm text-slate-600 leading-relaxed">
              Si vous cherchez uniquement une solution imposée “clé en main” sans adaptation,
              ce service n’est probablement pas le plus adapté.
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODE (stagger) */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Méthode</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Diagnostic", "On cartographie vos outils et vos flux."],
            ["Cadrage", "On définit un plan clair, réaliste."],
            ["Mise en place", "Interfaçage + sécurité + V1 utile."],
            ["Suivi", "Ajustements, documentation, continuité."],
          ].map(([t, d]) => (
            <div key={t} className="stagger-item rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-sm font-semibold">{t}</div>
              <div className="text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (stagger) */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="stagger-item rounded-2xl border border-black/10 bg-white/70 p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL (1 principal + WhatsApp secondaire outline) */}
      <section className="rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">On regarde votre situation, simplement</h2>
        <p className="mt-2 max-w-3xl text-slate-600 leading-relaxed">
          Décrivez votre fonctionnement actuel (outils, équipe, flux). On vous répond avec
          un diagnostic clair et un plan réaliste — sans jargon.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Parler de ma situation
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