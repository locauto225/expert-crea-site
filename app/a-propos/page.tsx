import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "EXPERT CRÉA : digital & communication pour aider les entreprises à gagner du temps, être mieux organisées et développer leur activité.",
  alternates: { canonical: `${site.url}/a-propos` },
  openGraph: {
    title: "À propos — EXPERT CRÉA",
    description:
      "Digital & communication : organisation, outils, visibilité et crédibilité pour développer votre activité.",
    url: `${site.url}/a-propos`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const values = [
  {
    title: "Clarté",
    desc: "Objectifs, livrables et étapes nettes. Pas de projets flous.",
  },
  {
    title: "Exécution",
    desc: "On livre une V1 utile rapidement, puis on améliore avec des itérations.",
  },
  {
    title: "Accompagnement",
    desc: "On forme, on suit et on mesure. L’objectif : adoption et impact.",
  },
];

export default function AproposPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite échanger sur mon projet. Pouvez-vous m’aider ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "À propos", item: `${site.url}/a-propos` },
    ],
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
  };

  return (
    <div className="space-y-16">
      <Breadcrumbs className="mb-2" items={[{ label: "À propos", href: "/a-propos" }]} />

      {/* HERO (même famille que Avis / Méthode) */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />

        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              À propos
            </span>
            <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Côte d’Ivoire • terrain & sérieux
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Une équipe engagée, orientée résultats.
          </h1>

          <p className="max-w-3xl text-slate-600 md:text-lg leading-relaxed">
            EXPERT CRÉA est une SAS fondée par deux associés complémentaires. Notre rôle : aider les entreprises
            à gagner du temps, mieux s’organiser et développer leur activité, grâce à des solutions pensées pour le terrain.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Parler de votre situation
            </Link>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              WhatsApp (réponse rapide)
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 hover:decoration-slate-400 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Voir les services
            </Link>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
            <div className="text-xs font-semibold tracking-wide text-slate-500">À retenir</div>
            <div className="mt-1 text-sm text-slate-700">
              Clarté d’abord (objectifs, livrables, étapes). V1 utile rapidement, puis amélioration continue — sans bloquer l’activité.
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="reveal rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Nos valeurs</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          On cherche du concret : des livrables clairs, une exécution rapide, et un vrai accompagnement.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="text-lg font-bold">{v.title}</div>
              <div className="mt-2 text-slate-600">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CE QU’ON FAIT */}
      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">1) Structurer (digital & outils)</h2>
          <p className="mt-3 text-slate-600">
            Sites web, extranet, outils de gestion, organisation des informations, sécurité,
            et accompagnement à l’utilisation.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services/creation-site-web"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Création de site
            </Link>
            <Link
              href="/services/extranet-outils-gestion"
              className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 hover:opacity-95"
            >
              Extranet & outils
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">2) Développer (visibilité & communication)</h2>
          <p className="mt-3 text-slate-600">
            Identité visuelle, supports, stratégie de visibilité, SEO local (Google Maps),
            et structuration pour attirer clients et partenaires.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services/referencement-seo"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              SEO & Google Maps
            </Link>
            <Link
              href="/services/identite-visuelle-supports"
              className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 hover:opacity-95"
            >
              Identité & supports
            </Link>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="reveal rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">L’équipe</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Deux associés, deux compétences complémentaires, un seul objectif : des résultats.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/10 bg-slate-100">
                {/* Placeholder propre (tu pourras remplacer par une vraie photo plus tard) */}
                <Image
                  src="/brand/avatar-placeholder.png"
                  alt="Georges KONAN"
                  fill
                  className="object-cover"
                  sizes="56px"
                  priority={false}
                />
              </div>
              <div>
                <div className="font-bold">Georges KONAN</div>
                <div className="text-sm text-slate-600">Co-fondateur • Digital / Produit</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Interlocuteur principal sur la structuration digitale et les outils.
              <br />
              Conception et réalisation de sites, outils de gestion, parcours de conversion,
              performance et structuration.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/10 bg-slate-100">
                <Image
                  src="/brand/avatar-placeholder.png"
                  alt="Philipe TANBGÉ"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <div className="font-bold">Philipe TANBGÉ</div>
                <div className="text-sm text-slate-600">Co-fondateur • Communication / Visibilité</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Référent sur la visibilité et la crédibilité commerciale.
              <br />
              Image de marque, supports, structuration commerciale, et accompagnement
              pour renforcer la crédibilité.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Astuce : tu peux remplacer les images par de vraies photos plus tard (mêmes dimensions).
        </p>
      </section>

      {/* CTA */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Prêt à avancer ?</h2>
        <p className="mt-2 text-slate-600">
          Dis-nous ton secteur, ta ville/quartier et ton objectif. On te répond avec une proposition claire.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Nous contacter
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
    </div>
  );
}