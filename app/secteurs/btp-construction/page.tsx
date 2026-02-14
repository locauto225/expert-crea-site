import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Solutions digitales pour BTP & construction en Côte d'Ivoire",
  description:
    "Site vitrine pro avec réalisations, visibilité Google, suivi de chantiers et conformité FNE pour entreprises du BTP en Côte d'Ivoire. Concret, adapté au terrain.",
  alternates: { canonical: `${site.url}/secteurs/btp-construction` },
  openGraph: {
    title: "BTP & construction — EXPERT CRÉA",
    description:
      "Site pro, SEO local, suivi chantiers et conformité FNE pour le BTP en Côte d'Ivoire.",
    url: `${site.url}/secteurs/btp-construction`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "On travaille surtout par réseau et appels d'offres. Un site sert à quoi ?",
    a: "Quand un prospect entend parler de vous, son premier réflexe c'est Google. S'il ne trouve rien — ou un site vide — il passe au suivant. Un site avec vos réalisations, c'est votre meilleure carte de visite. Et pour les appels d'offres, une présence en ligne crédible fait la différence.",
  },
  {
    q: "On n'a pas le temps de gérer un site ou les réseaux.",
    a: "On conçoit un site qui ne demande pas d'entretien quotidien. Les réalisations, on les ajoute ensemble périodiquement. Et Google Maps travaille tout seul une fois la fiche optimisée.",
  },
  {
    q: "Le suivi de chantiers, c'est quoi concrètement ?",
    a: "Un outil simple où chaque chantier a sa fiche : avancement, photos, documents, responsables, alertes. Fini les infos perdues dans WhatsApp. Accessible sur téléphone depuis le terrain.",
  },
  {
    q: "La FNE, ça concerne aussi le BTP ?",
    a: "Oui. Dès que vous émettez des factures — devis acceptés, situations de travaux, factures fournisseurs — la FNE s'applique. On adapte la mise en place à votre fonctionnement.",
  },
  {
    q: "On a plusieurs chantiers en même temps. Ça se gère comment ?",
    a: "C'est justement l'intérêt d'un outil de suivi. Chaque chantier a son espace, ses documents, son avancement. Le dirigeant voit tout en un coup d'œil sans appeler chaque chef de chantier.",
  },
];

export default function BTPConstructionPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, j'ai une entreprise de BTP et je cherche à améliorer ma visibilité et mon organisation de chantiers."
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Secteurs", item: `${site.url}/secteurs` },
      {
        "@type": "ListItem",
        position: 3,
        name: "BTP & construction",
        item: `${site.url}/secteurs/btp-construction`,
      },
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
    <Container>
      <div className="space-y-20 pt-20 pb-8 sm:space-y-24 sm:pt-24 sm:pb-12">

        {/* BREADCRUMB */}
        <Breadcrumbs
          className="mb-6 sm:mb-8"
          items={[
            { label: "Secteurs", href: "/secteurs" },
            { label: "BTP & construction", href: "/secteurs/btp-construction" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock portfolio chantiers */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                On fait du bon travail — mais on ne le montre pas
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                Un site qui montre vos réalisations, une présence Google crédible, un suivi de chantiers qui ne dépend plus de WhatsApp.
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
                {(["Entreprises BTP", "Génie civil", "Bâtiment", "Travaux publics", "Rénovation"] as const).map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock site portfolio BTP */}
          <div className="hidden md:block rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 bg-slate-100 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-300" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-green-300" />
              <div className="ml-3 flex-1 rounded bg-white px-3 py-1 text-[10px] text-slate-400">votre-entreprise-btp.ci</div>
            </div>

            <div className="p-4 space-y-3">
              {/* Header mock */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-amber-100 flex items-center justify-center">
                    <svg className="h-3.5 w-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" />
                    </svg>
                  </div>
                  <div className="text-[11px] font-bold text-slate-800">VOTRE ENTREPRISE BTP</div>
                </div>
                <span className="rounded bg-(--brand-blue) px-2 py-1 text-[8px] font-bold text-white">Demander un devis</span>
              </div>

              {/* Réalisations grid */}
              <div>
                <div className="text-[10px] font-bold text-slate-700 mb-2">Nos réalisations</div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="rounded-lg bg-amber-50 h-16 flex flex-col items-center justify-center p-1">
                    <svg className="h-5 w-5 text-amber-400 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" /><path d="M9 20v-5h6v5" />
                    </svg>
                    <span className="text-[7px] text-slate-500 text-center leading-tight">Immeuble R+5 Cocody</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 h-16 flex flex-col items-center justify-center p-1">
                    <svg className="h-5 w-5 text-slate-400 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 21h18" /><path d="M9 8h1" /><path d="M14 8h1" /><path d="M9 12h1" /><path d="M14 12h1" />
                      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                    </svg>
                    <span className="text-[7px] text-slate-500 text-center leading-tight">Villa Riviera</span>
                  </div>
                  <div className="rounded-lg bg-blue-50 h-16 flex flex-col items-center justify-center p-1">
                    <svg className="h-5 w-5 text-blue-400 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 20h20" /><path d="M12 2v18" /><path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" />
                    </svg>
                    <span className="text-[7px] text-slate-500 text-center leading-tight">Route Bassam</span>
                  </div>
                </div>
              </div>

              {/* Chiffres mini */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="rounded-lg border border-black/6 p-1.5 text-center">
                  <div className="text-sm font-extrabold text-amber-600">47</div>
                  <div className="text-[8px] text-slate-500">Chantiers livrés</div>
                </div>
                <div className="rounded-lg border border-black/6 p-1.5 text-center">
                  <div className="text-sm font-extrabold text-(--brand-blue)">12</div>
                  <div className="text-[8px] text-slate-500">Années d&apos;exp.</div>
                </div>
                <div className="rounded-lg border border-black/6 p-1.5 text-center">
                  <div className="text-sm font-extrabold text-(--brand-green)">4.7★</div>
                  <div className="text-[8px] text-slate-500">Avis Google</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-1.5">
                <div className="flex-1 rounded bg-(--brand-blue) px-2 py-1.5 text-center text-[9px] font-bold text-white">Demander un devis →</div>
                <div className="rounded border border-black/10 px-2 py-1.5 text-center text-[9px] font-semibold text-slate-600">Nos services</div>
              </div>
            </div>

            <div className="border-t border-black/6 bg-slate-50/50 px-4 py-2 text-center text-[10px] text-slate-400">
              Simulation — Votre site vitrine BTP
            </div>
          </div>
        </section>


        {/* ─── SCROLL HINT ─── */}
        <div className="hidden sm:flex justify-center -mt-10 -mb-10">
          <a href="#ce-quon-fait" className="group flex flex-col items-center gap-1 text-slate-400 hover:text-(--brand-blue) transition-colors">
            <span className="text-xs font-semibold">Ce qu&apos;on met en place</span>
            <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m7 13 5 5 5-5" /><path d="m7 7 5 5 5-5" />
            </svg>
          </a>
        </div>


        {/* ─── CHIFFRES CLÉS ─── */}
        <section className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {([
            { number: "1er", label: "réflexe = Google", sub: "un prospect qui entend parler de vous vérifie en ligne d'abord" },
            { number: "0", label: "site = 0 crédibilité", sub: "sans présence en ligne, vous n'existez pas pour le prospect" },
            { number: "2–4", label: "semaines pour être en ligne", sub: "site + réalisations + Google Maps" },
          ] as const).map((stat) => (
            <div
              key={stat.number}
              className={`rounded-2xl bg-slate-50/80 p-4 text-center sm:p-6 ${stat.number === "2–4" ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="text-2xl font-extrabold text-amber-600 sm:text-3xl md:text-4xl">{stat.number}</div>
              <div className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">{stat.label}</div>
              <div className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">{stat.sub}</div>
            </div>
          ))}
        </section>


        {/* ─── CE QU'ON FAIT ─── */}
        <section id="ce-quon-fait" className="reveal reveal-stagger space-y-8 scroll-mt-24">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Ce qu&apos;on met en place pour vous
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Montrer votre sérieux, décrocher des chantiers, suivre les projets. Le digital au service du terrain.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {([
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                  </svg>
                ),
                title: "Site vitrine pro + réalisations",
                desc: "Vos chantiers livrés, vos compétences, votre équipe. Un site qui montre ce que vous faites — pas une page vide. Le prospect voit votre sérieux avant de décrocher le téléphone.",
                accent: "blue" as const,
                link: "/services/creation-site-web",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                ),
                title: "Visibilité Google Maps & SEO local",
                desc: "Quand quelqu'un cherche \"entreprise BTP Abidjan\" ou \"construction Cocody\", c'est vous qui apparaissez. Fiche Maps optimisée, avis clients, pages locales.",
                accent: "blue" as const,
                link: "/services/referencement-seo",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  </svg>
                ),
                title: "Suivi de chantiers & documents",
                desc: "Chaque chantier a sa fiche : avancement, photos, documents, responsables. Accessible depuis le terrain sur mobile. Fini les infos perdues dans les groupes WhatsApp.",
                accent: "green" as const,
                link: "/services/extranet-outils-gestion",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" />
                  </svg>
                ),
                title: "Conformité FNE",
                desc: "Devis, situations de travaux, factures fournisseurs — tout aux normes. On adapte la FNE à votre logiciel ou on met en place le bon outil.",
                accent: "green" as const,
                link: "/services/conformite-fne",
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
                    <Link href={item.link} className="mt-2 inline-flex text-xs font-semibold text-(--brand-blue) hover:underline">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ─── AVANT / APRÈS ─── */}
        <section className="reveal space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              La différence que ça fait
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 sm:p-6">
              <div className="mb-3 inline-flex rounded-md bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">Aujourd&apos;hui</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {([
                  "Le prospect Google votre nom et ne trouve rien",
                  "Vos réalisations existent… dans votre téléphone",
                  "Le suivi chantier se fait par appels et groupes WhatsApp",
                  "Les documents sont dispersés, les photos introuvables",
                  "Facturation pas encore conforme FNE",
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

            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/5 p-5 sm:p-6">
              <div className="mb-3 inline-flex rounded-md bg-(--brand-green)/15 px-2 py-0.5 text-xs font-bold text-(--brand-green)">Avec nous</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {([
                  "Un site pro qui montre vos chantiers livrés et votre sérieux",
                  "Visible sur Google quand on cherche du BTP dans votre zone",
                  "Chaque chantier suivi dans un outil clair, accessible terrain",
                  "Documents centralisés, photos classées, historique complet",
                  "Facturation FNE conforme, équipe formée",
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
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
          >
            Faire le point (gratuit, 2 min)
          </Link>
          <span className="text-sm text-slate-400">ou continuez pour voir la méthode ↓</span>
        </div>


        {/* ─── MÉTHODE ─── */}
        <section className="reveal rounded-3xl bg-slate-50/80 p-6 sm:p-8 md:p-10 space-y-6 scroll-mt-24">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Comment on travaille avec une entreprise BTP
            </h2>
            <p className="text-slate-600 leading-relaxed">
              On connaît les contraintes du terrain. Pas d&apos;usine à gaz — des outils qui servent vraiment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "On regarde votre présence en ligne, vos outils actuels, vos besoins terrain." },
              { n: "02", t: "Priorités", d: "Site + réalisations d'abord ? Suivi chantiers ? FNE ? On ordonne ensemble." },
              { n: "03", t: "Mise en place", d: "Site en ligne, Maps optimisé, outil chantier — opérationnel en 2 à 4 semaines." },
              { n: "04", t: "Suivi", d: "Ajout de réalisations, optimisations, mises à jour, support terrain." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-amber-600">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>
        </section>


        {/* ─── FOCUS CI ─── amber/BTP */}
        <section className="reveal rounded-2xl border border-amber-200/50 bg-amber-50/40 p-6 sm:p-8 scroll-mt-24">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <div>
              <div className="font-bold text-slate-900">Le BTP en Côte d&apos;Ivoire : beaucoup de chantiers, peu de visibilité en ligne</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                Le secteur BTP est en pleine croissance en CI. Mais la plupart des entreprises n&apos;ont pas de site, pas de fiche Google, pas de réalisations visibles en ligne. Les marchés se décrochent encore beaucoup par réseau — mais le réflexe &laquo;&nbsp;je vérifie sur Google&nbsp;&raquo; devient systématique. Les entreprises BTP qui montrent leur travail en ligne gagnent en crédibilité et en opportunités.
              </p>
            </div>
          </div>
        </section>


        {/* ─── POUR QUI ─── */}
        <section className="reveal space-y-6 scroll-mt-24">
          <div className="prose-container-left">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              C&apos;est pour vous si…
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7">
              <div className="text-sm font-bold text-(--brand-green)">Adapté</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {([
                  "Entreprise BTP, génie civil, bâtiment ou travaux publics en CI",
                  "Pas de site ou un site qui ne montre pas vos réalisations",
                  "Vos prospects ne vous trouvent pas sur Google",
                  "Le suivi de chantiers se fait par appels et WhatsApp",
                  "Vous devez vous mettre en conformité FNE",
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
                  "Vous cherchez un logiciel ERP complet (Sage Batigest, etc.)",
                  "Votre entreprise n'a pas encore de chantiers à montrer",
                  "Vous fonctionnez uniquement par appels d'offres publics formels",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                On peut quand même vous orienter vers les bonnes solutions.
              </p>
            </div>
          </div>
        </section>


        {/* ─── FAQ ─── */}
        <section className="reveal space-y-6 scroll-mt-24">
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


        {/* ─── SERVICES LIÉS ─── */}
        <section className="reveal space-y-6">
          <div className="prose-container-left">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Services concernés
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { title: "Création de site web", href: "/services/creation-site-web" },
              { title: "SEO & Google Maps", href: "/services/referencement-seo" },
              { title: "Outils de gestion", href: "/services/extranet-outils-gestion" },
              { title: "Conformité FNE", href: "/services/conformite-fne" },
            ]).map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-black/10 bg-white p-5 transition-all hover:shadow-md hover:border-black/15"
              >
                <div className="font-semibold text-slate-900 group-hover:text-(--brand-blue) transition-colors">{s.title}</div>
                <div className="mt-1 text-xs font-semibold text-(--brand-blue)">Voir le service →</div>
              </Link>
            ))}
          </div>
        </section>


        {/* ─── CTA FINAL ─── dark */}
        <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 sm:p-10 text-white">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(217,119,6,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Montrer votre travail, décrocher des chantiers
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre activité et vos priorités — on vous montre ce qu&apos;on peut mettre en place.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?sujet=site"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,119,6,0.35)] active:scale-98"
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
              href="/secteurs"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35"
            >
              Voir tous les secteurs
            </Link>
          </div>
        </section>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      </div>
    </Container>
  );
}