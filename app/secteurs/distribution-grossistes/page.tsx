import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Solutions digitales pour distribution & grossistes en Côte d'Ivoire",
  description:
    "Suivi commandes, catalogue en ligne, gestion clients et conformité FNE pour distributeurs et grossistes en Côte d'Ivoire. Outils simples, adaptés au terrain.",
  alternates: { canonical: `${site.url}/secteurs/distribution-grossistes` },
  openGraph: {
    title: "Distribution & grossistes — EXPERT CRÉA",
    description:
      "Commandes, stock, catalogue et conformité FNE pour distributeurs et grossistes en Côte d'Ivoire.",
    url: `${site.url}/secteurs/distribution-grossistes`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "On gère tout sur papier et WhatsApp. C'est possible de digitaliser sans tout casser ?",
    a: "Oui, c'est exactement l'idée. On ne remplace pas tout d'un coup. On commence par le point le plus douloureux (souvent les commandes ou le suivi clients), on met un outil simple en place, et on élargit ensuite.",
  },
  {
    q: "Un catalogue en ligne, ça remplace notre commercial ?",
    a: "Non. Ça lui facilite le travail. Le client consulte les produits et les prix avant d'appeler. Le commercial passe moins de temps à envoyer des listes par WhatsApp et plus de temps à vendre.",
  },
  {
    q: "On a des centaines de références. C'est gérable ?",
    a: "Oui. On structure le catalogue par catégorie, avec recherche et filtres. L'import initial se fait depuis votre fichier Excel ou votre système existant. Les mises à jour sont simples.",
  },
  {
    q: "La FNE concerne aussi la distribution ?",
    a: "Oui, et c'est un gros sujet pour les grossistes qui émettent beaucoup de factures. On adapte la mise en place à votre volume et votre logiciel existant.",
  },
  {
    q: "On a des clients dans plusieurs villes. Comment ça se gère ?",
    a: "L'outil est accessible en ligne — vos commerciaux sur le terrain, vos clients, et vous au bureau voyez les mêmes informations. Commandes, historique, encours : tout est centralisé.",
  },
];

export default function DistributionGrossistesPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, j'ai une activité de distribution / grossiste et je cherche à mieux gérer mes commandes et ma visibilité."
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
        name: "Distribution & grossistes",
        item: `${site.url}/secteurs/distribution-grossistes`,
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
            { label: "Distribution & grossistes", href: "/secteurs/distribution-grossistes" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock tableau commandes */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Les commandes passent par WhatsApp — et on en perd
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                Suivi des commandes, catalogue accessible, gestion clients, conformité FNE. Des outils simples pour piloter la distribution sans paperasse.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?sujet=outils"
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
                {(["Grossistes", "Distributeurs", "Import/Export", "Dépôts", "Négoce"] as const).map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock dashboard commandes */}
          <div className="hidden md:block rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
            {/* Header outil */}
            <div className="flex items-center justify-between bg-slate-50 px-4 py-2.5 border-b border-black/6">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md bg-indigo-100 flex items-center justify-center">
                  <svg className="h-3 w-3 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-slate-700">Suivi commandes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[9px] font-semibold text-indigo-600">Aujourd&apos;hui</span>
              </div>
            </div>

            {/* KPIs mini */}
            <div className="grid grid-cols-3 gap-2 px-4 py-3">
              <div className="rounded-lg bg-indigo-50 p-2 text-center">
                <div className="text-lg font-extrabold text-indigo-600">18</div>
                <div className="text-[8px] text-slate-500">En cours</div>
              </div>
              <div className="rounded-lg bg-amber-50 p-2 text-center">
                <div className="text-lg font-extrabold text-amber-600">3</div>
                <div className="text-[8px] text-slate-500">En retard</div>
              </div>
              <div className="rounded-lg bg-(--brand-green)/8 p-2 text-center">
                <div className="text-lg font-extrabold text-(--brand-green)">42</div>
                <div className="text-[8px] text-slate-500">Livrées ce mois</div>
              </div>
            </div>

            {/* Tableau commandes */}
            <div className="px-4 pb-3">
              <div className="rounded-xl border border-black/6 overflow-hidden">
                {/* Header tableau */}
                <div className="grid grid-cols-4 gap-1 bg-slate-50 px-3 py-1.5 text-[9px] font-semibold text-slate-500">
                  <span>Client</span>
                  <span>Commande</span>
                  <span>Montant</span>
                  <span>Statut</span>
                </div>
                {/* Lignes */}
                {([
                  { client: "Ets Koné", cmd: "#1247", montant: "2.4M F", statut: "Livrée", color: "text-(--brand-green) bg-(--brand-green)/10" },
                  { client: "Dépôt Yopougon", cmd: "#1248", montant: "890K F", statut: "En route", color: "text-indigo-600 bg-indigo-50" },
                  { client: "Pharmacie Cen.", cmd: "#1249", montant: "1.6M F", statut: "Préparation", color: "text-amber-600 bg-amber-50" },
                  { client: "Super Marché B.", cmd: "#1250", montant: "3.1M F", statut: "Nouvelle", color: "text-(--brand-blue) bg-(--brand-blue)/10" },
                ] as const).map((row) => (
                  <div key={row.cmd} className="grid grid-cols-4 gap-1 px-3 py-2 border-t border-black/4 items-center">
                    <span className="text-[10px] font-semibold text-slate-700 truncate">{row.client}</span>
                    <span className="text-[10px] text-slate-500">{row.cmd}</span>
                    <span className="text-[10px] font-semibold text-slate-700">{row.montant}</span>
                    <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold text-center ${row.color}`}>{row.statut}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification */}
            <div className="mx-4 mb-3 rounded-lg bg-indigo-50 px-3 py-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] text-indigo-700">Coulibaly M. a confirmé la commande #1250</span>
            </div>

            <div className="border-t border-black/6 bg-slate-50/50 px-4 py-2 text-center text-[10px] text-slate-400">
              Simulation — Votre outil de suivi commandes
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
            { number: "0", label: "commande perdue", sub: "chaque demande est tracée, du passage à la livraison" },
            { number: "×2", label: "plus rapide à traiter", sub: "un outil structuré vs des messages WhatsApp éparpillés" },
            { number: "2–4", label: "semaines pour la V1", sub: "outil de commandes + catalogue, opérationnel rapidement" },
          ] as const).map((stat, idx) => (
            <div
              key={stat.number}
              className={`rounded-2xl bg-slate-50/80 p-4 text-center sm:p-6 ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="text-2xl font-extrabold text-indigo-600 sm:text-3xl md:text-4xl">{stat.number}</div>
              <div className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">{stat.label}</div>
              <div className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">{stat.sub}</div>
            </div>
          ))}
        </section>


        {/* ─── CE QU'ON FAIT ─── */}
        <section id="ce-quon-fait" className="reveal reveal-stagger space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Ce qu&apos;on met en place pour vous
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Piloter la distribution sans papier ni messages perdus. On commence par le plus urgent.
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
                title: "Suivi des commandes",
                desc: "Chaque commande a son statut : nouvelle, en préparation, en route, livrée. Historique client, montants, alertes retard. Fini les commandes oubliées dans WhatsApp.",
                accent: "blue" as const,
                link: "/services/extranet-outils-gestion",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
                  </svg>
                ),
                title: "Catalogue & prix en ligne",
                desc: "Vos produits, catégories, prix, disponibilités — accessibles par vos clients et commerciaux. Moins d'appels pour \"envoyer la liste\", plus de commandes passées vite.",
                accent: "blue" as const,
                link: "/services/creation-site-web",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" />
                  </svg>
                ),
                title: "Conformité FNE",
                desc: "Beaucoup de factures = gros enjeu FNE. On interface votre système ou on met en place le bon outil. Conforme DGI, sans ralentir le rythme.",
                accent: "green" as const,
                link: "/services/conformite-fne",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                ),
                title: "Visibilité en ligne (si pertinent)",
                desc: "Site vitrine, Google Maps, référencement. Utile si vous cherchez de nouveaux clients détaillants ou si vos concurrents sont déjà visibles en ligne.",
                accent: "green" as const,
                link: "/services/referencement-seo",
              },
            ]).map((item) => (
              <div
                key={item.title}
                className="stagger-item relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-7"
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl ${
                    item.accent === "green" ? "bg-(--brand-green)" : "bg-indigo-500"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                      item.accent === "green"
                        ? "bg-(--brand-green)/10 text-(--brand-green)"
                        : "bg-indigo-100 text-indigo-600"
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
                  "Les commandes arrivent par WhatsApp, appels, papier — rien n'est centralisé",
                  "On perd des commandes, on oublie des relances",
                  "Le catalogue part par PDF sur WhatsApp à chaque demande",
                  "Impossible de savoir l'encours client sans appeler la compta",
                  "Facturation pas conforme FNE, risque en cas de contrôle",
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
                  "Toutes les commandes dans un seul outil, avec statut et historique",
                  "Alertes retard, relances automatiques, rien ne tombe",
                  "Catalogue en ligne — le client consulte et commande directement",
                  "Encours, historique, stats clients accessibles en un clic",
                  "Facturation FNE conforme, volume géré, équipe formée",
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
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
          >
            Faire le point (gratuit, 2 min)
          </Link>
          <span className="text-sm text-slate-400">ou continuez pour voir la méthode ↓</span>
        </div>


        {/* ─── MÉTHODE ─── */}
        <section className="reveal rounded-3xl bg-slate-50/80 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Comment on travaille avec un distributeur
            </h2>
            <p className="text-slate-600 leading-relaxed">
              On part de votre fonctionnement réel. Pas d&apos;ERP imposé — un outil qui colle à votre façon de travailler.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "Flux de commandes, canaux, clients, outils existants, volumes." },
              { n: "02", t: "Priorités", d: "Commandes d'abord ? Catalogue ? FNE ? On ordonne par impact." },
              { n: "03", t: "Mise en place", d: "Outil opérationnel en 2 à 4 semaines. Import des données existantes." },
              { n: "04", t: "Suivi", d: "Ajustements terrain, nouvelles fonctions, support. L'outil évolue avec vous." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-indigo-600">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>
        </section>


        {/* ─── FOCUS CI ─── indigo */}
        <section className="reveal rounded-2xl border border-indigo-200/40 bg-indigo-50/40 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <div>
              <div className="font-bold text-slate-900">La distribution en Côte d&apos;Ivoire se digitalise</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                Les grossistes qui gèrent encore tout par téléphone et papier perdent du temps et des commandes. Ceux qui passent à un outil simple — même basique — prennent une avance opérationnelle immédiate. En parallèle, la FNE impose une mise en conformité qui touche particulièrement les gros volumes de facturation.
              </p>
            </div>
          </div>
        </section>


        {/* ─── POUR QUI ─── */}
        <section className="reveal space-y-6">
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
                  "Grossiste, distributeur, importateur, dépôt en CI",
                  "Les commandes arrivent par WhatsApp et se perdent",
                  "Votre catalogue est un PDF ou un fichier Excel envoyé à la main",
                  "Vous ne savez pas l'encours client sans appeler la compta",
                  "Vous émettez beaucoup de factures et la FNE n'est pas en place",
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
                  "Vous cherchez un ERP complet (Sage, Odoo) avec comptabilité intégrée",
                  "Votre activité est déjà outillée et fonctionne bien",
                  "Vous avez moins de 5 commandes par semaine",
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


        {/* ─── SERVICES LIÉS ─── */}
        <section className="reveal space-y-6">
          <div className="prose-container-left">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Services concernés
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { title: "Outils de gestion", href: "/services/extranet-outils-gestion" },
              { title: "Création de site web", href: "/services/creation-site-web" },
              { title: "Conformité FNE", href: "/services/conformite-fne" },
              { title: "SEO & Google Maps", href: "/services/referencement-seo" },
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
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/18 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(99,102,241,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Ne plus perdre de commandes
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre flux de commandes et vos outils actuels — on vous propose un plan clair.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?sujet=outils"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] active:scale-98"
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