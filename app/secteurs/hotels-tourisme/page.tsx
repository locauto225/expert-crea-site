import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Site web & visibilité pour hôtels en Côte d’Ivoire",
  description:
    "Aidez votre hôtel à générer plus de réservations directes : site rapide, pages qui convertissent, SEO local et Google Maps. Basés en Côte d’Ivoire, projets partout.",
  alternates: {
    canonical: `${site.url}/secteurs/hotels-tourisme`,
  },
  openGraph: {
    title: "Hôtels & tourisme — Site web, SEO local, réservations directes",
    description:
      "Site rapide et crédible, SEO local, Google Maps et parcours de réservation pour augmenter les demandes.",
    url: `${site.url}/secteurs/hotels-tourisme`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Comment augmenter les réservations directes (sans dépendre des plateformes) ?",
    a: "On travaille la crédibilité (photos, avis, pages claires), un parcours simple (WhatsApp / formulaire / téléphone), et le SEO local (Google Maps + pages dédiées). L’objectif : capter les recherches et transformer en demandes.",
  },
  {
    q: "Est-ce que vous pouvez intégrer une réservation en ligne ?",
    a: "Oui. Selon votre organisation, on peut intégrer un formulaire de pré-réservation (WhatsApp/email) ou une solution de réservation plus complète. On choisit ce qui est réaliste et rentable.",
  },
  {
    q: "Google Maps est vraiment important pour un hôtel ?",
    a: "Oui. Beaucoup de clients cherchent “hôtel + ville/quartier”. Une fiche bien optimisée (catégorie, photos, avis, infos) + un site cohérent améliore la visibilité et les demandes.",
  },
  {
    q: "Quelles pages sont indispensables pour un hôtel ?",
    a: "Accueil, chambres, services/équipements, galerie, localisation, contact, et idéalement des pages par type de client (business, tourisme, événements) + FAQ.",
  },
  {
    q: "En combien de temps peut-on lancer une V1 ?",
    a: "Une V1 professionnelle peut être livrée en 1 à 3 semaines selon le contenu (photos, texte, informations). On avance avec un planning clair.",
  },
];

export default function HotelsTourismePage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je gère un hôtel et je souhaite augmenter nos réservations directes (site + visibilité Google/Maps). Pouvez-vous me proposer un plan clair et la meilleure première étape ?"
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
        name: "Hôtels & tourisme",
        item: `${site.url}/secteurs/hotels-tourisme`,
      },
    ],
  };

  // ✅ Service schema enrichi (plus “pro”)
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Site web & visibilité pour hôtels",
    serviceType:
      "Création/refonte de site hôtelier, SEO local, Google Maps, pages de conversion, parcours de réservation",
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
      name: "Hôtels & acteurs du tourisme",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "XOF",
      url: `${site.url}/secteurs/hotels-tourisme`,
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
          { label: "Hôtels & tourisme", href: "/secteurs/hotels-tourisme" },
        ]}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Secteur • Hôtels & tourisme • Réservations directes
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Site web & visibilité pour hôtels en Côte d’Ivoire
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Un site crédible, rapide et orienté conversion pour générer plus de demandes : SEO local, Google Maps, pages claires, et un parcours simple (WhatsApp, téléphone, formulaire).
          </p>

          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Idéal si vous voulez augmenter les réservations directes — pas seulement « être en ligne ».
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Décrire ma situation
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
              <div className="text-sm font-semibold">Réservations directes</div>
              <div className="text-sm text-slate-600">Moins de commissions</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">SEO local</div>
              <div className="text-sm text-slate-600">Google & Maps</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Conversion</div>
              <div className="text-sm text-slate-600">WhatsApp & appels</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈMES */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Problèmes fréquents</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Site lent / peu crédible, photos mal présentées</li>
            <li>Pas de parcours clair pour réserver</li>
            <li>Google Maps non optimisé (infos, photos, avis)</li>
            <li>Manque de pages “chambres / services / localisation”</li>
            <li>Dépendance aux plateformes (commissions)</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Ce qu’on met en place</h2>
          <p className="mt-3 text-slate-600">
            Une base solide + des pages qui convertissent : présentation claire
            des chambres, preuves (avis, photos), localisation, et appels à l’action
            visibles. Ensuite : SEO local + Google Maps.
          </p>

          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <span className="font-semibold">Objectif :</span> transformer les recherches
            Google en demandes (WhatsApp / appels / formulaire).
          </div>
        </div>
      </section>

      {/* LIVRABLES */}
      <section className="rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Livrables recommandés pour un hôtel</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["Pages chambres", "Chambres, tarifs indicatifs, équipements, photos propres."],
            ["Galerie & preuves", "Photos, avis clients, points forts, sécurité & confort."],
            ["Localisation", "Accès, quartier, points d’intérêt, carte, contact direct."],
            ["CTA conversion", "WhatsApp, téléphone, formulaire simple, messages pré-remplis."],
            ["SEO local", "Pages ciblées + optimisation Google Maps & cohérence infos."],
            ["Suivi", "Améliorations mensuelles + contenu + reporting."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 p-5">
              <div className="font-semibold">{t}</div>
              <div className="mt-2 text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Méthode</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Diagnostic", "Offre, cible, ville/quartier, concurrence."],
            ["Structure", "Pages, parcours de réservation, contenus."],
            ["Production", "Design + performance + CTA + SEO base."],
            ["SEO local", "Google Maps + contenus + suivi."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">{t}</div>
              <div className="text-sm text-slate-600">{d}</div>
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
        <h2 className="text-xl font-bold">Augmenter vos réservations directes</h2>
        <p className="mt-2 text-slate-600">
          Dites-nous votre ville, le type de chambres, et votre objectif (réservations,
          visibilité, refonte). On vous répond avec un plan clair.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Décrire ma situation
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5"
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