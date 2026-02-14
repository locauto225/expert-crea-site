import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Facture Normalisée Électronique (FNE) en Côte d'Ivoire — mise en conformité",
  description:
    "Mise en conformité FNE complète : facturation normalisée, logiciel certifié, interfaçage avec vos outils existants, formation et accompagnement. Sans bloquer votre activité. Basés en Côte d'Ivoire.",
  alternates: { canonical: `${site.url}/services/conformite-fne` },
  openGraph: {
    title: "Facture Normalisée Électronique (FNE) — EXPERT CRÉA",
    description:
      "On vous met en conformité FNE sans bloquer votre activité. Facturation normalisée, interfaçage, formation, accompagnement.",
    url: `${site.url}/services/conformite-fne`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "Est-ce que vous remplacez notre logiciel de facturation ?",
    a: "Pas forcément. Si votre logiciel peut être mis à jour ou interfacé, on le connecte aux exigences FNE. Si ce n'est pas possible, on vous propose une solution adaptée à votre activité. L'objectif : le moins de changement possible pour votre équipe.",
  },
  {
    q: "Est-ce que ça va bloquer notre activité ?",
    a: "Non. On avance de façon progressive. Votre facturation continue pendant la mise en place. Pas d'arrêt brutal, pas de « big bang ».",
  },
  {
    q: "Nos équipes ne sont pas techniques, c'est un problème ?",
    a: "Non. On forme votre équipe à l'utilisation. L'interface est simple. Et on reste disponible après la mise en place pour les questions.",
  },
  {
    q: "Combien de temps pour être conforme ?",
    a: "Selon votre situation : quelques jours si vous avez déjà un logiciel compatible, 2 à 4 semaines si un interfaçage ou un changement est nécessaire. On cadre un planning dès le diagnostic.",
  },
  {
    q: "Que se passe-t-il si on n'est pas conforme ?",
    a: "La DGI prévoit des sanctions : amendes, redressements, et impossibilité de déduire les charges non facturées conformément. Mieux vaut se mettre en règle maintenant que sous la pression d'un contrôle.",
  },
  {
    q: "On a déjà un logiciel certifié, mais on galère. Vous pouvez aider ?",
    a: "Oui. On peut intervenir sur la configuration, la formation de l'équipe, ou l'interfaçage avec vos autres outils (comptabilité, stock, etc.). Pas besoin de tout refaire.",
  },
];

export default function ConformiteFnePage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je dois me mettre en conformité FNE. Pouvez-vous analyser notre situation et proposer un plan ?"
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
        name: "Conformité FNE",
        item: `${site.url}/services/conformite-fne`,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mise en conformité Facture Normalisée Électronique (FNE)",
    serviceType:
      "Facturation normalisée FNE, logiciel certifié, interfaçage, formation et accompagnement",
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
      url: `${site.url}/services/conformite-fne`,
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
            { label: "Conformité FNE", href: "/services/conformite-fne" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock facture avant/après */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Facture Normalisée Électronique (FNE)
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                On vous met en conformité — sans bloquer votre activité. Facturation aux normes, logiciel certifié, équipe formée.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?sujet=conformite"
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
                {(["Commerce", "Distribution", "Santé", "Hôtellerie", "Restauration", "PME"] as const).map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock facture avant/après */}
          <div className="hidden md:block space-y-4">
            {/* AVANT — facture non conforme */}
            <div className="rounded-2xl border border-red-200/60 bg-red-50/30 p-4">
              <div className="mb-2 inline-flex rounded-md bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">Facture actuelle</div>
              <div className="rounded-xl border border-black/10 bg-white p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-2.5 w-20 rounded bg-slate-200" />
                    <div className="mt-1 h-2 w-28 rounded bg-slate-100" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Facture #</div>
                    <div className="text-[11px] text-slate-500">0047</div>
                  </div>
                </div>
                <div className="border-t border-dashed border-black/6 pt-2 space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-500">Article X</span>
                    <span className="text-slate-500">15 000 F</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-500">Service Y</span>
                    <span className="text-slate-500">25 000 F</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-semibold border-t border-black/6 pt-1.5">
                    <span className="text-slate-600">Total</span>
                    <span className="text-slate-600">40 000 F</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-red-500 pt-1">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  Pas de QR code · Pas de numéro DGI · Format libre
                </div>
              </div>
            </div>

            {/* APRÈS — facture FNE conforme */}
            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/4 p-4">
              <div className="mb-2 inline-flex rounded-md bg-(--brand-green)/15 px-2 py-0.5 text-[10px] font-bold text-(--brand-green)">Facture FNE conforme</div>
              <div className="rounded-xl border border-black/10 bg-white p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-md bg-(--brand-blue)/10" />
                      <div className="text-[11px] font-bold text-slate-700">Votre entreprise</div>
                    </div>
                    <div className="mt-0.5 text-[10px] text-slate-400">NCC : CI-XXXX-XXXX</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">FNE N°</div>
                    <div className="text-[11px] font-semibold text-(--brand-blue)">FN-2026-00047</div>
                  </div>
                </div>
                <div className="border-t border-dashed border-black/6 pt-2 space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-600">Article X</span>
                    <span className="text-slate-600">15 000 F</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-600">Service Y</span>
                    <span className="text-slate-600">25 000 F</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>TVA 18%</span>
                    <span>7 200 F</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-semibold border-t border-black/6 pt-1.5">
                    <span className="text-slate-700">Total TTC</span>
                    <span className="text-slate-700">47 200 F</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  {/* QR code mock */}
                  <div className="flex items-center gap-2">
                    <div className="grid grid-cols-5 gap-[1.5px]">
                      {[1,1,1,0,1, 1,0,1,1,0, 0,1,0,1,1, 1,1,0,0,1, 1,0,1,1,1].map((v, i) => (
                        <span key={i} className={`h-[4px] w-[4px] rounded-[0.5px] ${v ? "bg-slate-800" : "bg-slate-100"}`} />
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-400">QR DGI</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-(--brand-green)">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                    Conforme
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── APERÇU (compact, visible mobile) ─── */}
        <section className="reveal -mt-2 md:hidden">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-xs font-bold text-slate-500">Facture actuelle</div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-slate-500">Facture libre · format non normalisé</div>
                <div className="text-sm font-semibold text-slate-900 leading-snug">
                  Pas de QR code / pas de numéro DGI
                </div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  Risque de rejet, stress en cas de contrôle, équipe perdue.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-red-500">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Non conforme
              </div>
            </div>

            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/5 p-5">
              <div className="text-xs font-bold text-(--brand-green)">Facture FNE conforme</div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-slate-500">Numéro normalisé · QR DGI · mentions obligatoires</div>
                <div className="text-sm font-semibold text-slate-900 leading-snug">
                  Process simple + équipe formée
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  L’activité continue pendant la mise en place. Vous êtes serein.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-(--brand-green)">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Conforme
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


        {/* ─── CHIFFRES CLÉS ─── (responsive, sans swipe) */}
        <section className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {([
            { number: "0", label: "interruption d'activité", sub: "on vous met en conformité sans bloquer la facturation" },
            { number: "2–4", label: "semaines pour être conforme", sub: "diagnostic, mise en place, formation incluse" },
            { number: "100%", label: "conforme DGI", sub: "QR code, numéro normalisé, format réglementaire" },
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


        {/* ─── CE QU'ON FAIT (le quoi) ─── accent cards */}
        <section id="ce-quon-fait" className="reveal reveal-stagger space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Concrètement, on fait quoi ?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Tout ce qu&apos;il faut pour que vos factures soient aux normes — et que votre équipe sache s&apos;en servir.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {([
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" />
                  </svg>
                ),
                title: "Facturation conforme FNE",
                desc: "Vos factures respectent le format réglementaire : numéro normalisé, QR code DGI, TVA, mentions obligatoires. Prêtes en cas de contrôle.",
                accent: "blue" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                    <path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                  </svg>
                ),
                title: "Logiciel certifié ou interfacé",
                desc: "On met en place un logiciel certifié DGI, ou on interface votre outil existant. L'objectif : le moins de changement possible pour votre équipe.",
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
                title: "Formation de l'équipe",
                desc: "On forme vos collaborateurs à émettre des factures conformes. Interface simple, guide fourni, support après mise en place.",
                accent: "green" as const,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                ),
                title: "Suivi, maintenance & évolutions",
                desc: "Mises à jour réglementaires, ajustements, connexion avec la comptabilité ou le stock. Votre conformité reste à jour.",
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


        {/* ─── AVANT / APRÈS ─── */}
        <section className="reveal space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              La différence que ça fait
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 sm:p-6">
              <div className="mb-3 inline-flex rounded-md bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">Sans mise en conformité</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {([
                  "Factures non conformes — risque de sanction DGI",
                  "Pas de QR code, pas de numéro normalisé",
                  "Charges non déductibles (factures rejetées)",
                  "Peur du contrôle fiscal",
                  "Le sujet est repoussé, le risque grandit",
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
              <div className="mb-3 inline-flex rounded-md bg-(--brand-green)/15 px-2 py-0.5 text-xs font-bold text-(--brand-green)">Avec la mise en conformité</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {([
                  "Chaque facture est conforme, numérotée, signée",
                  "QR code DGI, format réglementaire, TVA correcte",
                  "Charges déductibles, comptabilité propre",
                  "Serein en cas de contrôle",
                  "L'équipe sait émettre une facture conforme",
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
            href="/contact?sujet=conformite"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
          >
            Faire le point (gratuit, 2 min)
          </Link>
          <span className="text-sm text-slate-400">ou continuez pour voir comment on travaille ↓</span>
        </div>


        {/* ─── MÉTHODE (le comment) ─── fond slate */}
        <section className="reveal rounded-3xl bg-slate-50/80 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Comment on avance ensemble
            </h2>
            <p className="text-slate-600 leading-relaxed">
              On part de l&apos;existant. On ne remplace pas tout — on adapte et on connecte.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "On cartographie vos outils, flux de facturation et contraintes." },
              { n: "02", t: "Plan d'action", d: "Interfaçage ou nouveau logiciel, planning, priorités claires." },
              { n: "03", t: "Mise en place", d: "Installation, configuration, connexion. L'activité continue." },
              { n: "04", t: "Formation & suivi", d: "L'équipe est formée. On reste dispo pour les ajustements." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-(--brand-blue)">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 leading-relaxed">
            On vous explique chaque étape en termes simples. Rien n&apos;est fait sans votre validation. L&apos;interfaçage avec vos outils existants est notre priorité — pas de remplacement inutile.
          </p>
        </section>


        {/* ─── FOCUS URGENCE ─── amber warning */}
        <section className="reveal rounded-2xl border border-amber-200/60 bg-amber-50/40 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" /><path d="M12 17h.01" />
              </svg>
            </span>
            <div>
              <div className="font-bold text-slate-900">Pourquoi ne pas attendre</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                La FNE est une obligation de la DGI. Les contrôles se renforcent. Les entreprises non conformes s&apos;exposent à des amendes, des redressements, et à l&apos;impossibilité de déduire certaines charges. Ceux qui se mettent en règle maintenant, sereinement, évitent la précipitation et les solutions imposées dans l&apos;urgence.
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
                  "Vous devez émettre des factures conformes FNE",
                  "Vous avez un logiciel en place que vous voulez conserver",
                  "Vous ne voulez pas bloquer votre activité pour la mise en conformité",
                  "Votre équipe n'est pas technique et a besoin d'être formée",
                  "Vous voulez être serein en cas de contrôle DGI",
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
                  "Vous êtes déjà conforme et n'avez besoin de rien",
                  "Votre besoin est uniquement juridique / fiscal (pas technique)",
                  "Vous cherchez un logiciel clé en main sans accompagnement",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Pour le volet purement juridique ou fiscal, on peut vous orienter vers le bon interlocuteur.
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
                Se mettre en règle, sereinement
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre situation — on vous répond avec un diagnostic et un plan clair.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?sujet=conformite"
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