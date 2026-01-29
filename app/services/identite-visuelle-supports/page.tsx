import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Identité visuelle & supports de communication en Côte d’Ivoire",
  description:
    "Logo, charte graphique et supports print/digital pour renforcer votre crédibilité et attirer plus de clients. Une image cohérente, professionnelle, prête à l’emploi.",
  alternates: {
    canonical: `${site.url}/services/identite-visuelle-supports`,
  },
  openGraph: {
    title: "Identité visuelle & supports — EXPERT CRÉA",
    description:
      "Logo, charte graphique et supports print/digital pour renforcer votre crédibilité et attirer plus de clients.",
    url: `${site.url}/services/identite-visuelle-supports`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Que comprend une identité visuelle ?",
    a: "Une identité visuelle comprend généralement : logo (et variantes), couleurs, typographies, règles d’utilisation, et modèles prêts à l’emploi (cartes, documents, visuels réseaux sociaux).",
  },
  {
    q: "Je possède déjà un logo, pouvez-vous l’améliorer ?",
    a: "Oui. On peut moderniser votre logo, corriger les proportions, définir une charte cohérente et créer les variantes indispensables (clair/sombre, monochrome, favicon).",
  },
  {
    q: "Faites-vous aussi l’impression (flyers, cartes, kakemonos) ?",
    a: "On peut gérer la conception + fichiers prêts pour l’impression, et selon le contexte, vous orienter vers un imprimeur fiable. Le plus important : un rendu professionnel et des fichiers conformes.",
  },
  {
    q: "En combien de temps puis-je avoir mes supports ?",
    a: "Selon le périmètre : un pack logo/charte peut prendre 3 à 10 jours. Des supports complets (brochure, roll-up, templates) peuvent prendre 1 à 3 semaines.",
  },
  {
    q: "Pourquoi la charte est importante ?",
    a: "Elle garantit la cohérence sur tous vos supports (site, réseaux, documents, signalétique). Une cohérence visuelle renforce la confiance et facilite la reconnaissance de votre marque.",
  },
];

export default function IdentiteVisuelleSupportsPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite renforcer la crédibilité de mon entreprise (logo/charte/supports). Pouvez-vous me proposer un plan et une estimation ?"
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
        name: "Identité visuelle & supports",
        item: `${site.url}/services/identite-visuelle-supports`,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Identité visuelle & supports de communication",
    serviceType:
      "Logo, charte graphique, supports print & digital, templates réseaux sociaux",
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
    audience: { "@type": "BusinessAudience", name: "Entreprises & PME" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "XOF",
      url: `${site.url}/services/identite-visuelle-supports`,
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
          { label: "Services", href: "/services" },
          {
            label: "Identité visuelle & supports",
            href: "/services/identite-visuelle-supports",
          },
        ]}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Service • Crédibilité • Identité & supports
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Renforcer la crédibilité de votre entreprise
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Vos clients jugent votre sérieux avant de vous contacter. Une identité claire et cohérente (site, documents, réseaux, supports) renforce la confiance dès le premier contact.
          </p>

          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Idéal si votre image doit inspirer confiance — pas seulement « faire joli ».
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Parler de mon image actuelle
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
              <div className="text-sm font-semibold">Crédibilité</div>
              <div className="text-sm text-slate-600">Sérieux perçu</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Cohérence</div>
              <div className="text-sm text-slate-600">Même image partout</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Prêt à l’emploi</div>
              <div className="text-sm text-slate-600">Templates & exports</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUAND L’IMAGE DEVIENT UN FREIN */}
      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Quand l’image devient un frein</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>logo ancien, bricolé ou difficile à lire</li>
            <li>documents (devis/factures) non homogènes</li>
            <li>réseaux sociaux incohérents d’un post à l’autre</li>
            <li>supports qui ne ressemblent pas au site</li>
            <li>impression générale : « pas structuré / pas fiable »</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Ce que ça coûte vraiment</h2>
          <p className="mt-3 text-slate-600">
            Même si votre service est bon, une image floue fait douter. Le client compare en 10 secondes et choisit souvent l’entreprise la plus claire et la plus cohérente.
          </p>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <span className="font-semibold">Objectif :</span> éviter de perdre des opportunités à cause de la perception — et rendre votre sérieux évident.
          </div>
        </div>
      </section>

      {/* CE QUE VOUS OBTENEZ */}
      <section className="reveal space-y-4 rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Ce que vous obtenez</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Des livrables simples, cohérents et surtout <span className="font-semibold">utilisables au quotidien</span> — sans dépendre d’un graphiste à chaque demande.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Logo & variantes</div>
            <p className="mt-2 text-sm text-slate-600">
              Versions clair/sombre, monochrome, formats web & print, favicon.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Charte graphique</div>
            <p className="mt-2 text-sm text-slate-600">
              Couleurs, typographies, règles d’utilisation, styles visuels.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Supports essentiels</div>
            <p className="mt-2 text-sm text-slate-600">
              Carte de visite, en-tête, signature mail, template devis/facture,
              visuels réseaux sociaux.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Fichiers prêts à l’emploi</div>
            <p className="mt-2 text-sm text-slate-600">
              Exports propres (PDF print, PNG, SVG selon besoin) + organisation
              claire des fichiers.
            </p>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Pour qui ?</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Entreprises qui veulent inspirer confiance</li>
            <li>Activités qui démarrent ou se repositionnent</li>
            <li>Marques qui veulent harmoniser site + réseaux + supports</li>
            <li>Hôtels, pharmacies, PME, commerces, services</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Notre approche</h2>
          <p className="mt-3 text-slate-600">
            On clarifie votre positionnement, puis on conçoit une identité simple et cohérente. Ensuite, on décline les supports essentiels (documents, réseaux, print) pour que votre image soit professionnelle et facile à utiliser au quotidien.
          </p>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <span className="font-semibold">Notre posture :</span> clarté et cohérence avant les « effets ». Le but n’est pas de faire joli, mais de rendre votre sérieux évident.
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Méthode</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Brief", "Objectifs, cible, valeurs, inspirations."],
            ["Direction", "Propositions & choix d’axe."],
            ["Design", "Logo, charte, déclinaisons."],
            ["Livraison", "Exports + templates + organisation."],
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
            <div
              key={f.q}
              className="stagger-item rounded-2xl border border-black/10 bg-white p-5"
            >
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Rendre votre sérieux évident</h2>
        <p className="mt-2 text-slate-600">
          Dites-nous votre activité et ce qui existe déjà (logo, supports, réseaux, documents). On vous répond avec un cadrage clair et une proposition simple.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Parler de mon image actuelle
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