import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Référencement SEO & Google Maps en Côte d’Ivoire",
  description:
    "SEO local, Google Maps (Google Business Profile), contenu et optimisation technique pour apparaître devant vos concurrents. Basés en Côte d’Ivoire, projets partout.",
  alternates: {
    canonical: `${site.url}/services/referencement-seo`,
  },
  openGraph: {
    title: "Référencement SEO & Google Maps en Côte d’Ivoire — EXPERT CRÉA",
    description:
      "SEO local, Google Maps, contenu et optimisation technique pour gagner en visibilité et générer des demandes.",
    url: `${site.url}/services/referencement-seo`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "En combien de temps voit-on des résultats en SEO ?",
    a: "Le SEO est progressif. On peut voir des signaux positifs en quelques semaines (indexation, amélioration technique, Google Maps). Pour des résultats solides sur des mots-clés concurrentiels, comptez souvent 2 à 4 mois, puis une progression continue.",
  },
  {
    q: "Le SEO local (Google Maps) marche-t-il en Côte d’Ivoire ?",
    a: "Oui. Pour beaucoup d’activités (hôtels, pharmacies, commerces, services), Google Maps est l’un des canaux les plus rentables : fiche optimisée, avis, contenus, cohérence des informations et pages locales sur le site.",
  },
  {
    q: "Avez-vous besoin d’accéder à mon site ?",
    a: "Oui, idéalement. On réalise un audit (technique + contenu + structure), puis on met en place les correctifs et le plan de contenus. Si vous n’avez pas de site, on peut créer une base SEO propre dès le départ.",
  },
  {
    q: "Qu’est-ce qui fait vraiment la différence contre la concurrence ?",
    a: "La différence se joue sur 4 points : une base technique rapide et propre, un positionnement clair (services/secteurs), des contenus utiles qui répondent aux recherches, et des preuves locales (Google Maps, avis, cohérence des informations).",
  },
  {
    q: "Proposez-vous un suivi mensuel ?",
    a: "Oui. Un bon SEO se pilote : suivi des positions, trafic, pages performantes, actions mensuelles (contenu, optimisation, Google Maps), et reporting simple.",
  },
];

export default function ReferencementSEOPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite améliorer mon référencement (SEO/Google Maps). Pouvez-vous me proposer un audit et un plan d’action ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  // ✅ BreadcrumbList (URLs absolues)
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Référencement SEO & Google Maps",
        item: `${site.url}/services/referencement-seo`,
      },
    ],
  };

  // ✅ Service schema enrichi
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Référencement SEO & Google Maps",
    serviceType:
      "SEO local, Google Maps (Google Business Profile), optimisation technique & contenu",
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
      url: `${site.url}/services/referencement-seo`,
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
      {/* ✅ Breadcrumbs visuel + JSON-LD */}
      <Breadcrumbs
        className="mb-2"
        items={[
          { label: "Services", href: "/services" },
          { label: "SEO & Google Maps", href: "/services/referencement-seo" },
        ]}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Service • SEO local • Google Maps • Contenu & technique
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Référencement SEO &amp; Google Maps en Côte d’Ivoire
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Soyez visible quand vos clients recherchent vos services : optimisation
            technique, contenus ciblés, SEO local et Google Maps (Google Business
            Profile) pour générer des demandes.
          </p>

          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            On travaille sur des actions concrètes : fiche Google, pages services, vitesse, contenu utile — pas du blabla.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Vérifier ma visibilité sur Google / Maps
            </Link>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              WhatsApp (réponse rapide)
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">SEO local</div>
              <div className="text-sm text-slate-600">Abidjan &amp; CI</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Google Maps</div>
              <div className="text-sm text-slate-600">Fiche optimisée &amp; avis</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Suivi</div>
              <div className="text-sm text-slate-600">Plan + reporting</div>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATION RÉELLE (CI) */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8 md:p-10">
        <h2 className="text-xl font-bold md:text-2xl">
          Quand vos clients vous cherchent… mais ne vous trouvent pas
        </h2>
        <p className="mt-3 max-w-3xl text-slate-700 md:text-lg leading-relaxed">
          En Côte d’Ivoire, beaucoup de décisions se prennent sur Google et Google Maps.
        </p>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
          Un client cherche « pharmacie Cocody », « hôtel Abidjan », « plombier Yopougon » ou « service + quartier ».
          S’il ne vous voit pas clairement, il appelle simplement un concurrent.
        </p>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
          Souvent, le problème n’est pas la qualité de votre service. C’est un manque de visibilité locale, de clarté ou
          de cohérence sur Google.
        </p>
      </section>

      {/* PROBLÈMES */}
      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">
            Pourquoi vous n’apparaissez pas devant vos concurrents
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Pages trop lentes / mal structurées</li>
            <li>Contenu insuffisant ou trop générique</li>
            <li>Google Maps non optimisé (infos, catégories, photos, avis)</li>
            <li>Aucune stratégie de mots-clés / secteur</li>
            <li>Pas de suivi mensuel ni d’actions régulières</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Notre approche</h2>
          <p className="mt-3 text-slate-600">
            On combine une base technique solide, un positionnement clair et du
            contenu utile. Le but : être visible sur Google et transformer cette
            visibilité en demandes (appels, WhatsApp, formulaires).
          </p>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <span className="font-semibold">Focus CI :</span> SEO local + Google
            Maps = très rentable pour hôtels, pharmacies, commerces et services.
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <h2 className="text-xl font-bold md:text-2xl">Ce service est particulièrement adapté si :</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 md:text-lg leading-relaxed">
          <li>vous êtes une entreprise locale (Abidjan ou autres villes en Côte d’Ivoire)</li>
          <li>vos clients vous cherchent déjà sur Google ou Google Maps</li>
          <li>votre site existe, mais ne génère pas d’appels ou de demandes</li>
          <li>votre fiche Google Maps est incomplète, inactive ou mal positionnée</li>
          <li>vous voulez des demandes concrètes, pas juste « être présent »</li>
        </ul>
        <div className="mt-5 rounded-2xl border border-black/10 bg-slate-50 p-4 text-sm text-slate-700">
          <span className="font-semibold">À savoir :</span> si votre activité ne dépend pas de recherches locales ou si
          vous cherchez uniquement de la notoriété, ce service n’est probablement pas le plus adapté.
        </div>
      </section>

      {/* CE QUE VOUS OBTENEZ */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Ce que vous obtenez</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Audit SEO (technique + contenu)</div>
            <p className="mt-2 text-sm text-slate-600">
              Vitesse, structure, indexation, titres, maillage interne,
              opportunités de mots-clés.
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Google Maps / Fiche établissement</div>
            <p className="mt-2 text-sm text-slate-600">
              Optimisation des informations, catégories, photos, posts, plan
              d’avis clients, cohérence NAP (Nom/Adresse/Téléphone).
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Plan de contenus</div>
            <p className="mt-2 text-sm text-slate-600">
              Pages services/secteurs + articles qui répondent aux recherches et
              renforcent votre autorité.
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Suivi & optimisation</div>
            <p className="mt-2 text-sm text-slate-600">
              Actions mensuelles + reporting simple : trafic, pages, demandes,
              axes d’amélioration.
            </p>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Méthode</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Diagnostic", "Audit SEO + objectifs + concurrence."],
            ["Plan", "Mots-clés, pages à créer, priorités."],
            ["Optimisation", "Technique, contenu, Google Maps."],
            ["Suivi", "Actions mensuelles + reporting."],
          ].map(([t, d]) => (
            <div key={t} className="stagger-item rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">{t}</div>
              <div className="text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="stagger-item rounded-2xl border border-black/10 p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MICRO-PROCESS (rassurance) */}
      <p className="reveal -mt-6 text-sm text-slate-600">
        Chaque action est expliquée. Rien n’est fait sans validation.
      </p>

      {/* CTA */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Vérifier ma visibilité</h2>
        <p className="mt-2 text-slate-600">
          Dites-nous votre secteur, votre zone (ville/quartier) et vos objectifs.
          On vous répond avec un diagnostic clair et un plan d’action réaliste.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Vérifier ma visibilité sur Google / Maps
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            WhatsApp
          </a>
        </div>
        <div className="mt-3 text-xs text-slate-500">
          <Link
            href="/contact"
            className="underline decoration-slate-300 underline-offset-4 hover:text-slate-700"
          >
            Demander un audit complet (après échange)
          </Link>
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