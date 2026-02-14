import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Référencement SEO & Google Maps en Côte d'Ivoire",
  description:
    "SEO local, Google Maps (Google Business Profile), contenu et optimisation technique pour apparaître devant vos concurrents. Basés en Côte d'Ivoire, projets partout.",
  alternates: {
    canonical: `${site.url}/services/referencement-seo`,
  },
  openGraph: {
    title: "Référencement SEO & Google Maps en Côte d'Ivoire — EXPERT CRÉA",
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
    q: "Le SEO local (Google Maps) marche-t-il en Côte d'Ivoire ?",
    a: "Oui. Pour beaucoup d'activités (hôtels, pharmacies, commerces, services), Google Maps est l'un des canaux les plus rentables : fiche optimisée, avis, contenus, cohérence des informations et pages locales sur le site.",
  },
  {
    q: "Avez-vous besoin d'accéder à mon site ?",
    a: "Oui, idéalement. On réalise un audit (technique + contenu + structure), puis on met en place les correctifs et le plan de contenus. Si vous n'avez pas de site, on peut créer une base SEO propre dès le départ.",
  },
  {
    q: "Qu'est-ce qui fait vraiment la différence contre la concurrence ?",
    a: "La différence se joue sur 4 points : une base technique rapide et propre, un positionnement clair (services/secteurs), des contenus utiles qui répondent aux recherches, et des preuves locales (Google Maps, avis, cohérence des informations).",
  },
  {
    q: "Proposez-vous un suivi mensuel ?",
    a: "Oui. Un bon SEO se pilote : suivi des positions, trafic, pages performantes, actions mensuelles (contenu, optimisation, Google Maps), et reporting simple.",
  },
];

export default function ReferencementSEOPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite améliorer mon référencement (SEO/Google Maps). Pouvez-vous me proposer un audit et un plan d'action ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

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
    areaServed: { "@type": "Country", name: "Côte d'Ivoire" },
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
    <Container>
      <div className="space-y-20 pt-20 pb-8 sm:space-y-24 sm:pt-24 sm:pb-12">

        {/* BREADCRUMB */}
        <Breadcrumbs
          className="mb-6 sm:mb-8"
          items={[
            { label: "Services", href: "/services" },
            { label: "SEO & Google Maps", href: "/services/referencement-seo" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock Maps (comme home) */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6 md:space-y-7">
            <div className="space-y-4">

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                On ne nous trouve pas sur Google.
              </h1>

              <p className="text-base font-semibold text-slate-700 md:text-lg leading-relaxed">
                Les clients cherchent… et tombent sur un concurrent.
              </p>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                On vous rend visible sur Google (Maps + pages utiles) pour générer des appels et des demandes.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?sujet=seo"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue)/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
              >
                Faire le point (gratuit, 2 min)
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                WhatsApp (réponse rapide)
              </a>
            </div>

            {/* Extra reading/proof line removed as requested */}
          </div>

          {/* Colonne droite — Mock Google Maps 3-pack */}
          <div className="hidden md:block rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            {/* Barre de recherche simulée */}
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-slate-50 px-4 py-2.5 mb-4">
              <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <span className="text-sm text-slate-500">pharmacie cocody abidjan</span>
            </div>

            {/* Résultat 1 — VOUS */}
            <div className="rounded-xl border-2 border-(--brand-blue)/30 bg-(--brand-blue)/4 p-3.5 mb-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">Votre entreprise</div>
                  <div className="mt-0.5 flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-3 w-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                          <path d="M10 1l2.4 6.4H19l-5.3 4 2 6.6L10 14l-5.7 4 2-6.6L1 7.4h6.6L10 1z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">4.8 (124 avis)</span>
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">Cocody, Abidjan · Ouvert</div>
                </div>
                <span className="rounded-md bg-(--brand-blue) px-2 py-0.5 text-[10px] font-bold text-white">VOUS</span>
              </div>
            </div>

            {/* Résultat 2 */}
            <div className="rounded-xl border border-black/6 bg-slate-50/50 p-3.5 mb-2.5 opacity-60">
              <div className="text-sm font-semibold text-slate-400">Concurrent A</div>
              <div className="mt-0.5 flex items-center gap-1">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 text-slate-300 fill-slate-300" viewBox="0 0 20 20">
                      <path d="M10 1l2.4 6.4H19l-5.3 4 2 6.6L10 14l-5.7 4 2-6.6L1 7.4h6.6L10 1z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-400">3.9 (41 avis)</span>
              </div>
              <div className="mt-0.5 text-xs text-slate-400">Cocody, Abidjan</div>
            </div>

            {/* Résultat 3 */}
            <div className="rounded-xl border border-black/6 bg-slate-50/50 p-3.5 opacity-60">
              <div className="text-sm font-semibold text-slate-400">Concurrent B</div>
              <div className="mt-0.5 flex items-center gap-1">
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 text-slate-300 fill-slate-300" viewBox="0 0 20 20">
                      <path d="M10 1l2.4 6.4H19l-5.3 4 2 6.6L10 14l-5.7 4 2-6.6L1 7.4h6.6L10 1z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-400">3.2 (18 avis)</span>
              </div>
              <div className="mt-0.5 text-xs text-slate-400">Plateau, Abidjan</div>
            </div>

            <div className="mt-3 text-center text-[11px] text-slate-400">
              Simulation — Google Maps Local Pack
            </div>
          </div>
        </section>

        {/* ─── PREUVE DOUCE (compact, visible mobile) ─── */}
        <section className="reveal -mt-2">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-xs font-bold text-slate-500">Avant</div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-green-700">www.votre-site.ci</div>
                <div className="text-sm font-semibold text-blue-700 leading-snug">Accueil - Mon entreprise</div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  Titre générique, pas de zone, pas d’action claire.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-red-500">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Perdu dans Google
              </div>
            </div>

            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/5 p-5">
              <div className="text-xs font-bold text-(--brand-green)">Après</div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-green-700">www.votre-site.ci › services › votre-activité</div>
                <div className="text-sm font-semibold text-blue-700 leading-snug">
                  Votre activité — Zone + mots-clés | Abidjan
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  Mot-clé ciblé, localisation, preuve sociale, CTA clair.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-(--brand-green)">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Visible + actionnable
              </div>
            </div>
          </div>
        </section>

        {/* Scroll hint removed */}


        {/* ─── CHIFFRES CLÉS ─── impact visuel */}
        <section className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {([
            { number: "70%", label: "des recherches locales", sub: "aboutissent à un contact dans les 24h" },
            { number: "3", label: "résultats Maps affichés", sub: "si vous n'y êtes pas, vous n'existez pas" },
            { number: "×4", label: "plus de clics", sub: "pour les fiches optimisées vs non-optimisées" },
          ] as const).map((stat, idx) => (
            <div
              key={stat.number}
              className={`rounded-2xl bg-slate-50/80 p-4 text-center sm:p-6 ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="text-2xl font-extrabold text-(--brand-blue) sm:text-3xl md:text-4xl">{stat.number}</div>
              <div className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">{stat.label}</div>
              <div className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">{stat.sub}</div>
            </div>
          ))}
        </section>


        {/* ─── CE QU'ON MET EN PLACE ─── accent cards */}
        <section id="comment-ca-marche" className="reveal reveal-stagger space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Concrètement, on fait quoi ?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Quatre leviers concrets pour que vos clients vous trouvent — et vous contactent.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {([
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                ),
                title: "Audit SEO complet",
                desc: "Vitesse, structure, indexation, titres, maillage interne, opportunités de mots-clés. On identifie ce qui bloque et ce qui manque.",
                accent: "blue" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
                    <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                ),
                title: "Google Maps / Fiche établissement",
                desc: "Catégories, photos, posts, plan d'avis, cohérence NAP (Nom/Adresse/Téléphone). Le canal le plus rentable en Côte d'Ivoire.",
                accent: "blue" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
                  </svg>
                ),
                title: "Plan de contenus",
                desc: "Pages services et secteurs + articles qui répondent aux recherches réelles de vos clients et renforcent votre autorité.",
                accent: "green" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" />
                  </svg>
                ),
                title: "Suivi & optimisation mensuelle",
                desc: "Actions régulières + reporting simple : trafic, positions, pages performantes, axes d'amélioration.",
                accent: "green" as const,
              },
            ]).map((item) => (
              <div
                key={item.title}
                className="stagger-item relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-7"
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl ${
                    item.accent === "green" ? "bg-(--brand-green)" : "bg-(--brand-blue)"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                      item.accent === "green"
                        ? "bg-(--brand-green)/10 text-(--brand-green)"
                        : "bg-(--brand-blue)/10 text-(--brand-blue)"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>





        {/* ─── CTA INTERMÉDIAIRE ─── pour les convaincus */}
        <div className="reveal flex flex-col items-center gap-3 sm:flex-row sm:justify-center text-center">
          <Link
            href="/contact?sujet=seo"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
          >
            Faire le point (gratuit, 2 min)
          </Link>
          <span className="text-sm text-slate-400">ou continuez pour voir comment on travaille ↓</span>
        </div>


        {/* ─── MÉTHODE ─── fond slate */}
        <section className="reveal rounded-3xl bg-slate-50/80 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Comment on avance ensemble
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Quatre étapes claires. Pas de projet interminable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "Audit SEO + Google Maps + analyse concurrence." },
              { n: "02", t: "Plan d'action", d: "Mots-clés, pages à créer, priorités claires." },
              { n: "03", t: "Mise en place", d: "Technique, contenu, fiche Google — progressif." },
              { n: "04", t: "Suivi mensuel", d: "Actions régulières + reporting simple." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-(--brand-blue)">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 leading-relaxed">
            On vous explique chaque action avant de la faire. Pas de jargon, pas de surprise. Vous validez, on avance.
          </p>
        </section>


        {/* ─── FOCUS CI ─── */}
        <section className="reveal rounded-2xl border border-(--brand-blue)/12 bg-(--brand-blue)/4 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-(--brand-blue)/10 text-(--brand-blue)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <div>
              <div className="font-bold text-slate-900">Pourquoi le SEO local est particulièrement rentable en Côte d&apos;Ivoire</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                La majorité des recherches se font sur mobile. Peu d&apos;entreprises ont une fiche Google Maps optimisée — la concurrence SEO locale est encore faible sur beaucoup de secteurs. Avec une base propre et du contenu ciblé, les résultats arrivent plus vite qu&apos;en Europe ou aux US. C&apos;est maintenant qu&apos;il faut se positionner.
              </p>
            </div>
          </div>
        </section>


        {/* ─── POUR QUI ─── */}
        <section className="reveal space-y-6">
          <div className="prose-container-left">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Ce service est fait pour vous si…
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7">
              <div className="text-sm font-bold text-(--brand-green)">Adapté</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {([
                  "Entreprise locale (Abidjan ou autres villes en CI)",
                  "Vos clients vous cherchent déjà sur Google ou Maps",
                  "Votre site existe mais ne génère pas d'appels",
                  "Votre fiche Google Maps est incomplète ou mal positionnée",
                  "Vous voulez des demandes concrètes, pas juste « être présent »",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-(--brand-green)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-50/80 p-6 sm:p-7">
              <div className="text-sm font-bold text-slate-400">Pas idéal</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                {([
                  "Votre activité ne dépend pas de recherches locales",
                  "Vous cherchez uniquement de la notoriété / branding",
                  "Vous n'avez pas de budget pour un suivi régulier",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Dans ce cas, un autre de nos services sera probablement plus adapté.
              </p>
            </div>
          </div>
        </section>


        {/* ─── FAQ ─── accordéons */}
        <section className="reveal space-y-6">
          <div className="prose-container-left">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-black/10 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-base font-bold text-slate-900 hover:text-(--brand-blue) transition-colors">
                  {f.q}
                  <svg className="h-5 w-5 shrink-0 rotate-90 transition-transform group-open:rotate-[-90deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </summary>
                <div className="border-t border-slate-100 p-6 pt-4">
                  <p className="text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>


        {/* ─── CTA FINAL ─── dark */}
        <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 sm:p-10 text-white">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/18 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(0,145,255,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Vérifier ma visibilité sur Google
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Dites-nous votre secteur et votre zone — on vous répond avec un diagnostic clair et un plan d&apos;action réaliste.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?sujet=seo"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
            >
              Faire le point (gratuit, 2 min)
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/40"
            >
              WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35"
            >
              Voir tous les services
            </Link>
          </div>
        </section>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      </div>
    </Container>
  );
}