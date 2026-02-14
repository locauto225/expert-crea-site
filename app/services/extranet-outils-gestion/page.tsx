import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Outils métiers sur mesure (extranet, intranet & apps) — Côte d'Ivoire",
  description:
    "Outils métiers sur mesure : extranet, intranet, dashboards, suivi de projets, gestion documentaire, automatisations. Remplacez Excel et WhatsApp par un outil simple. Basés en Côte d'Ivoire.",
  alternates: {
    canonical: `${site.url}/services/extranet-outils-gestion`,
  },
  openGraph: {
    title: "Outils métiers sur mesure — EXPERT CRÉA",
    description:
      "Extranet, intranet, dashboards et automatisations pour remplacer Excel et WhatsApp. Sur-mesure, progressif, adapté à votre activité.",
    url: `${site.url}/services/extranet-outils-gestion`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Est-ce que ça remplace notre ERP ou logiciel existant ?",
    a: "Pas forcément. On peut se brancher dessus, combler les trous, ou créer un outil complémentaire. L'objectif est de simplifier ce qui vous fait perdre du temps — pas de tout remplacer.",
  },
  {
    q: "Combien de temps pour mettre en place un outil interne ?",
    a: "Une V1 fonctionnelle en 2 à 4 semaines selon la complexité. On commence par le flux qui vous pose le plus de problèmes, puis on itère.",
  },
  {
    q: "On n'a aucun outil en place, c'est possible ?",
    a: "Oui. On part de vos processus actuels (même si c'est du papier et du WhatsApp) et on construit un outil adapté, progressivement.",
  },
  {
    q: "Nos équipes ne sont pas techniques, ça va marcher ?",
    a: "C'est la priorité. On conçoit des interfaces simples, on forme vos équipes, et on accompagne la prise en main. Si c'est compliqué à utiliser, ça ne sert à rien.",
  },
  {
    q: "Comment ça se passe côté hébergement et maintenance ?",
    a: "On gère l'hébergement et la maintenance si vous le souhaitez. L'outil reste le vôtre — on vous donne accès à tout.",
  },
];

export default function ExtranetOutilsGestionPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite mettre en place un outil métier sur mesure pour mieux organiser mon activité. Pouvez-vous me proposer un plan et une estimation ?"
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
        name: "Outils métiers",
        item: `${site.url}/services/extranet-outils-gestion`,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outils métiers sur mesure (extranet, intranet & apps)",
    serviceType:
      "Extranet, intranet, dashboards, suivi de projets, gestion documentaire, automatisations",
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
      url: `${site.url}/services/extranet-outils-gestion`,
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
            { label: "Outils métiers", href: "/services/extranet-outils-gestion" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock dashboard */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                On perd du temps, tout est manuel
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                Excel, WhatsApp, mails partout — et personne ne sait où en est quoi. On construit l&apos;outil qui manque.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?sujet=outils"
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

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-sm font-semibold text-slate-400">Réponse sous 24h</span>
              <span className="hidden sm:inline text-slate-200">·</span>
              <div className="flex flex-wrap gap-1.5">
                {(["PME", "Hôtellerie", "Santé", "Distribution", "Services", "BTP"] as const).map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock dashboard mini */}
          <div className="hidden md:block rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-black/6 bg-slate-50 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-(--brand-blue)" />
                <span className="text-xs font-bold text-slate-700">Mon espace</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-300" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-green-300" />
              </div>
            </div>

            <div className="flex">
              {/* Mini sidebar */}
              <div className="hidden sm:flex w-28 flex-col gap-1.5 border-r border-black/6 bg-slate-50/50 p-3">
                {(["Dashboard", "Tâches", "Docs", "Équipe"] as const).map((item, i) => (
                  <div
                    key={item}
                    className={`rounded-lg px-2.5 py-1.5 text-[10px] font-semibold ${
                      i === 0 ? "bg-(--brand-blue)/10 text-(--brand-blue)" : "text-slate-400"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 space-y-3">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-(--brand-green)/8 p-2 text-center">
                    <div className="text-sm font-extrabold text-(--brand-green)">12</div>
                    <div className="text-[9px] text-slate-500">En cours</div>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-2 text-center">
                    <div className="text-sm font-extrabold text-amber-600">3</div>
                    <div className="text-[9px] text-slate-500">En retard</div>
                  </div>
                  <div className="rounded-lg bg-(--brand-blue)/8 p-2 text-center">
                    <div className="text-sm font-extrabold text-(--brand-blue)">89%</div>
                    <div className="text-[9px] text-slate-500">Complétion</div>
                  </div>
                </div>

                {/* Task list mini */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between rounded-lg border border-black/6 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded border-2 border-(--brand-green) bg-(--brand-green)/20 flex items-center justify-center">
                        <svg className="h-2 w-2 text-(--brand-green)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                      </span>
                      <span className="text-[11px] text-slate-500 line-through">Envoyer devis client Hôtel Ivoire</span>
                    </div>
                    <span className="text-[9px] text-slate-400">Hier</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-(--brand-blue)/20 bg-(--brand-blue)/4 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded border-2 border-(--brand-blue)" />
                      <span className="text-[11px] font-semibold text-slate-700">Valider livraison lot #47</span>
                    </div>
                    <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">Urgent</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-black/6 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded border-2 border-slate-200" />
                      <span className="text-[11px] text-slate-600">Préparer rapport mensuel</span>
                    </div>
                    <span className="text-[9px] text-slate-400">Lun</span>
                  </div>
                </div>

                {/* Notification */}
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-(--brand-green) animate-pulse" />
                  <span className="text-[10px] text-slate-500">Koné A. a ajouté 2 documents dans <span className="font-semibold text-slate-700">Projet Marcory</span></span>
                </div>
              </div>
            </div>

            <div className="border-t border-black/6 bg-slate-50/50 px-4 py-2 text-center text-[10px] text-slate-400">
              Simulation — Votre outil sur mesure
            </div>
          </div>
        </section>

        {/* ─── APERÇU (compact, visible mobile) ─── */}
        <section className="reveal -mt-2 md:hidden">
          <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between border-b border-black/6 bg-slate-50 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-(--brand-blue)" />
                <span className="text-xs font-bold text-slate-700">Aperçu — votre outil</span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400">Temps réel</span>
            </div>

            <div className="p-4 space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-(--brand-green)/8 p-2 text-center">
                  <div className="text-sm font-extrabold text-(--brand-green)">12</div>
                  <div className="text-[9px] text-slate-500">En cours</div>
                </div>
                <div className="rounded-lg bg-amber-50 p-2 text-center">
                  <div className="text-sm font-extrabold text-amber-600">3</div>
                  <div className="text-[9px] text-slate-500">En retard</div>
                </div>
                <div className="rounded-lg bg-(--brand-blue)/8 p-2 text-center">
                  <div className="text-sm font-extrabold text-(--brand-blue)">89%</div>
                  <div className="text-[9px] text-slate-500">Complétion</div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between rounded-lg border border-black/6 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded border-2 border-(--brand-green) bg-(--brand-green)/20 flex items-center justify-center">
                      <svg className="h-2 w-2 text-(--brand-green)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    <span className="text-[11px] text-slate-500 line-through">Envoyer devis client Hôtel Ivoire</span>
                  </div>
                  <span className="text-[9px] text-slate-400">Hier</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-(--brand-blue)/20 bg-(--brand-blue)/4 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded border-2 border-(--brand-blue)" />
                    <span className="text-[11px] font-semibold text-slate-700">Valider livraison lot #47</span>
                  </div>
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">Urgent</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-(--brand-green)" />
                <span className="text-[10px] text-slate-500">Docs, tâches, suivi — centralisés.</span>
              </div>
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
            { number: "5h", label: "gagnées par semaine", sub: "en moyenne, dès la V1 déployée" },
            { number: "0", label: "info perdue", sub: "tout est centralisé, traçable, accessible" },
            { number: "2–4", label: "semaines pour la V1", sub: "on démarre vite, on itère ensuite" },
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


        {/* ─── CE QU'ON FAIT ─── accent cards */}
        <section id="ce-quon-fait" className="reveal reveal-stagger space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Concrètement, on fait quoi ?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Un outil adapté à votre façon de travailler — pas un logiciel générique.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {([
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  </svg>
                ),
                title: "Tableau de bord & pilotage",
                desc: "KPIs, alertes, tâches prioritaires, vue globale. Vous savez où en est l'activité en un coup d'œil.",
                accent: "blue" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" />
                  </svg>
                ),
                title: "Gestion documentaire",
                desc: "Documents classés, recherche, historique, partage contrôlé. Plus de fichiers perdus dans WhatsApp.",
                accent: "blue" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Suivi projets, commandes & équipes",
                desc: "Statuts, responsables, deadlines, commentaires. Chacun sait ce qu'il doit faire et quand.",
                accent: "green" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" />
                  </svg>
                ),
                title: "Automatisations & intégrations",
                desc: "Rappels, exports, rapports automatiques, connexion à vos outils existants. Moins de tâches répétitives.",
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


        {/* ─── AVANT / APRÈS ─── chaos vs organisé */}
        <section className="reveal space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              La différence que ça fait
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* AVANT — chaos */}
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 sm:p-6">
              <div className="mb-3 inline-flex rounded-md bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">Aujourd&apos;hui</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {([
                  "Infos dispersées : WhatsApp, mails, Excel, cahiers",
                  "Personne ne sait où en est la commande / le projet",
                  "Documents perdus ou en double",
                  "Tâches oubliées, relances manuelles",
                  "Le patron centralise tout dans sa tête",
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

            {/* APRÈS — organisé */}
            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/5 p-5 sm:p-6">
              <div className="mb-3 inline-flex rounded-md bg-(--brand-green)/15 px-2 py-0.5 text-xs font-bold text-(--brand-green)">Avec votre outil</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {([
                  "Un seul endroit pour tout : tâches, docs, suivi",
                  "Chacun voit ses priorités et ses deadlines",
                  "Documents classés, accessibles, traçables",
                  "Rappels automatiques, rien n'est oublié",
                  "Le patron pilote, il ne porte plus tout seul",
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
            href="/contact?sujet=outils"
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
              On démarre par le flux qui pose le plus de problèmes. V1 utile en 2–4 semaines.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "On comprend vos flux, vos outils, vos points de friction." },
              { n: "02", t: "Cadrage", d: "Modules V1, rôles, parcours, règles métier." },
              { n: "03", t: "Développement", d: "Interface + sécurité + tests avec vos données." },
              { n: "04", t: "Déploiement", d: "Formation, adoption, ajustements, évolutions." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-(--brand-blue)">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 leading-relaxed">
            L&apos;outil évolue avec votre activité. On ajoute des modules au fur et à mesure — facturation, reporting, automatisations — sans tout refaire.
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
              <div className="font-bold text-slate-900">Pourquoi c&apos;est particulièrement utile en Côte d&apos;Ivoire</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                Beaucoup d&apos;entreprises ivoiriennes fonctionnent encore avec WhatsApp et Excel pour tout — suivi client, commandes, documents. Ça marche quand on est 3. Quand l&apos;équipe grandit, les pertes d&apos;info et les erreurs coûtent plus cher qu&apos;un outil adapté. Ceux qui structurent maintenant prennent de l&apos;avance.
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
                  "Votre équipe passe trop de temps à chercher, relancer, ressaisir",
                  "Vos infos sont dispersées entre WhatsApp, mails et fichiers",
                  "Vous manquez de visibilité sur l'activité en temps réel",
                  "Vous gérez des projets, commandes, documents ou équipes terrain",
                  "Vous voulez un outil simple, pas un logiciel usine à gaz",
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
                  "Vous cherchez un logiciel standard tout-en-un (ERP, CRM complet)",
                  "Votre besoin est très simple (un seul tableur suffit)",
                  "Vous n'avez pas d'équipe ou de process à structurer",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Dans ce cas, on peut vous orienter vers une solution existante qui conviendrait mieux.
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
                Simplifier votre organisation
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez ce qui vous prend le plus de temps — on vous répond avec une proposition concrète et un délai réaliste.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?sujet=outils"
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