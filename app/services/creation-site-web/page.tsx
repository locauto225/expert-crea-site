import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Création de site web en Côte d'Ivoire",
  description:
    "Sites vitrines, e-commerce et pages de vente pensés pour convertir. Design premium, performance, SEO de base et accompagnement. Basés en Côte d'Ivoire, projets partout.",
  alternates: {
    canonical: `${site.url}/services/creation-site-web`,
  },
  openGraph: {
    title: "Création de site web en Côte d'Ivoire — EXPERT CRÉA",
    description:
      "Sites vitrines, e-commerce et pages de vente pensés pour convertir. Design premium, performance, SEO de base et accompagnement.",
    url: `${site.url}/services/creation-site-web`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Combien de temps pour créer un site web ?",
    a: "Selon la complexité : une landing page peut être livrée en quelques jours, un site vitrine en 1 à 3 semaines, et un e-commerce en 3 à 6 semaines. Un planning est fixé dès le départ.",
  },
  {
    q: "Est-ce que le site sera bien référencé sur Google ?",
    a: "On met en place une base SEO propre (titres, structure, performance, indexation). Pour aller plus loin, on propose un accompagnement SEO avec contenus et optimisation continue.",
  },
  {
    q: "Peut-on gérer le site facilement après livraison ?",
    a: "Oui. On fournit une structure claire, des guides et un accompagnement. Selon le besoin, on peut intégrer un espace blog/actualités simple à mettre à jour.",
  },
  {
    q: "Travaillez-vous uniquement en Côte d'Ivoire ?",
    a: "Nous sommes basés en Côte d'Ivoire, et nous travaillons en présentiel ou à distance avec des entreprises partout.",
  },
  {
    q: "Combien coûte un site web ?",
    a: "Chaque projet est différent. On vous envoie un devis clair en 24h après échange. Nos tarifs sont adaptés au marché ivoirien et nous proposons des paiements échelonnés.",
  },
];

export default function CreationSiteWebPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite créer/refondre un site web qui génère des demandes. Pouvez-vous me proposer un plan et une estimation ?"
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
        name: "Création de site web",
        item: `${site.url}/services/creation-site-web`,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Création de site web",
    serviceType: "Création / refonte de sites vitrines, e-commerce et pages de vente",
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
      url: `${site.url}/services/creation-site-web`,
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
            { label: "Création de site web", href: "/services/creation-site-web" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock navigateur */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                On a un site, mais il ne rapporte rien
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                Un site qui existe n&apos;est pas un site qui travaille. On construit des sites qui génèrent des demandes — pas des vitrines figées.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?sujet=site"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue)/30 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
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

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-sm font-semibold text-slate-400">Réponse sous 24h</span>
              <span className="hidden sm:inline text-slate-200">·</span>
              <div className="flex flex-wrap gap-1.5">
                {(["Hôtellerie", "Commerce", "Santé", "Services", "BTP", "PME"] as const).map((s, i) => (
                  <span
                    key={s}
                    className={`rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 ${i >= 4 ? "hidden sm:inline-flex" : ""}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock navigateur avant/après */}
          <div className="hidden md:block space-y-4">
            {/* AVANT */}
            <div className="rounded-2xl border border-red-200/60 bg-red-50/30 p-4">
              <div className="mb-2 inline-flex rounded-md bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">Aujourd&apos;hui</div>
              {/* Mini browser chrome */}
              <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-black/6 bg-slate-50 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-300" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  <span className="ml-2 flex-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] text-slate-400">mon-entreprise.ci</span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="h-3 w-24 rounded bg-slate-200" />
                  <div className="h-6 w-3/4 rounded bg-slate-100" />
                  <div className="h-3 w-full rounded bg-slate-50" />
                  <div className="h-3 w-2/3 rounded bg-slate-50" />
                  <div className="mt-3 flex items-center gap-2 text-[10px] text-red-400">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                    Pas de CTA · Texte générique · Lent
                  </div>
                </div>
              </div>
            </div>

            {/* APRÈS */}
            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/4 p-4">
              <div className="mb-2 inline-flex rounded-md bg-(--brand-green)/15 px-2 py-0.5 text-[10px] font-bold text-(--brand-green)">Après</div>
              <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-black/6 bg-slate-50 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-300" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  <span className="ml-2 flex-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">mon-entreprise.ci</span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-md bg-(--brand-blue)/15" />
                    <div className="h-2.5 w-20 rounded bg-slate-200" />
                  </div>
                  <div className="h-5 w-4/5 rounded bg-slate-900/80" />
                  <div className="h-3 w-full rounded bg-slate-100" />
                  <div className="flex gap-2 mt-2">
                    <div className="h-7 w-28 rounded-lg bg-(--brand-blue)" />
                    <div className="h-7 w-20 rounded-lg border border-black/10" />
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-[10px] text-(--brand-green)">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                    CTA visible · Message clair · Rapide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PREUVE DOUCE (compact, visible mobile) ─── */}
        <section className="reveal -mt-2 md:hidden">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-xs font-bold text-slate-500">Avant</div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-slate-500">Accueil — Mon entreprise</div>
                <div className="text-sm font-semibold text-slate-900 leading-snug">Bienvenue sur notre site</div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  Texte générique, pas d’offre claire, pas d’action visible.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-red-500">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Peu de demandes
              </div>
            </div>

            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/5 p-5">
              <div className="text-xs font-bold text-(--brand-green)">Après</div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-slate-500">Services › Votre activité</div>
                <div className="text-sm font-semibold text-slate-900 leading-snug">
                  Offre claire + preuves + CTA
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  Message direct, pages services, WhatsApp/Formulaire visibles.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-(--brand-green)">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Plus d’appels + formulaires
              </div>
            </div>
          </div>
        </section>



        {/* ─── CHIFFRES CLÉS ─── (responsive, sans swipe) */}
        <section className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {([
            {
              number: "3s",
              label: "pour convaincre un visiteur",
              sub: "après ça, il part ou il continue",
            },
            {
              number: "70%",
              label: "du trafic est mobile",
              sub: "un site lent sur mobile = pas de demandes",
            },
            {
              number: "×3",
              label: "plus de contacts",
              sub: "avec un site structuré vs une vitrine générique",
            },
          ] as const).map((stat, idx) => (
            <div
              key={stat.number}
              className={`rounded-2xl bg-slate-50/80 p-4 text-center sm:p-6 ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="text-2xl font-extrabold text-(--brand-green) sm:text-3xl md:text-4xl">
                {stat.number}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">
                {stat.sub}
              </div>
            </div>
          ))}
        </section>


        {/* ─── CE QU'ON FAIT ─── accent cards */}
        <section id="ce-quon-fait" className="reveal reveal-stagger space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Concrètement, on fait quoi ?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Pas juste un « beau site ». Un outil qui travaille pour vous.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {([
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" /><path d="M9 21V9" />
                  </svg>
                ),
                title: "Design & structure orientés conversion",
                desc: "Pages claires, hiérarchie visuelle, parcours utilisateur pensé pour mener à l'action (appel, formulaire, WhatsApp).",
                accent: "green" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" />
                  </svg>
                ),
                title: "Performance & mobile-first",
                desc: "Temps de chargement rapide, adapté mobile en priorité. Un site lent perd des clients avant même d'être lu.",
                accent: "green" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                ),
                title: "Base SEO propre",
                desc: "Titres, structure, indexation, vitesse. Le minimum pour que Google comprenne ce que vous faites et où vous êtes.",
                accent: "blue" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
                  </svg>
                ),
                title: "Contenu & accompagnement",
                desc: "On vous aide à structurer vos textes, vos pages services, et on vous accompagne après la mise en ligne.",
                accent: "blue" as const,
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


        {/* ─── LA DIFFÉRENCE ─── avant/après structure de page */}
        <section className="reveal space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              La différence entre un site vitrine et un site qui convertit
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Site vitrine classique */}
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 sm:p-6">
              <div className="mb-3 inline-flex rounded-md bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">Site vitrine classique</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {([
                  "Page d'accueil « Bienvenue »",
                  "Textes vagues, pas de service clair",
                  "Aucun appel à l'action visible",
                  "Lent sur mobile, pas indexé",
                  "Résultat : 0 appel, 0 formulaire",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site orienté conversion */}
            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/5 p-5 sm:p-6">
              <div className="mb-3 inline-flex rounded-md bg-(--brand-green)/15 px-2 py-0.5 text-xs font-bold text-(--brand-green)">Site orienté conversion</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {([
                  "Titre clair = problème du client",
                  "Pages services avec mots-clés locaux",
                  "CTA visibles (formulaire, WhatsApp, appel)",
                  "Rapide, mobile-first, indexé",
                  "Résultat : des demandes concrètes",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-(--brand-green)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* ─── CTA INTERMÉDIAIRE ─── */}
        <div className="reveal flex flex-col items-center gap-3 sm:flex-row sm:justify-center text-center">
          <Link
            href="/contact?sujet=site"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
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
              Quatre étapes claires. Un site en ligne rapidement, pas dans 6 mois.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "Objectifs, cible, contraintes, contenu existant." },
              { n: "02", t: "Stratégie", d: "Arborescence, parcours, mots-clés, structure." },
              { n: "03", t: "Production", d: "Design + développement + tests mobile." },
              { n: "04", t: "Mise en ligne & suivi", d: "Lancement, ajustements, accompagnement." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-(--brand-green)">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 leading-relaxed">
            On vous montre l&apos;avancement à chaque étape. Vous validez, on avance. Pas de surprise.
          </p>
        </section>


        {/* ─── FOCUS CI ─── */}
        <section className="reveal rounded-2xl border border-(--brand-green)/12 bg-(--brand-green)/4 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-(--brand-green)/10 text-(--brand-green)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <div>
              <div className="font-bold text-slate-900">Pourquoi c&apos;est le bon moment en Côte d&apos;Ivoire</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                La majorité de vos concurrents ont soit pas de site, soit un site lent et générique. Un site rapide, clair et bien structuré vous place immédiatement au-dessus. Le marché digital ivoirien est encore jeune — ceux qui investissent maintenant prennent de l&apos;avance.
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
                  "Votre site existe mais ne génère pas d'appels ni de formulaires",
                  "Vous n'avez pas de site et vous perdez des clients",
                  "Votre site est lent, pas adapté mobile, ou daté",
                  "Vous voulez des demandes concrètes, pas juste « être en ligne »",
                  "Hôtels, pharmacies, PME, commerces, services en CI",
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
                  "Vous cherchez uniquement un site « pour exister »",
                  "Votre priorité est l'esthétique sans objectif de contact",
                  "Vous voulez un site en 48h sans accompagnement",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Dans ce cas, un autre prestataire sera probablement plus adapté.
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
                Un site qui travaille pour vous
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre activité et votre objectif — on vous répond avec un plan clair et un délai réaliste.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?sujet=site"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
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