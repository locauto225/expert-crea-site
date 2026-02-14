import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Solutions digitales pour restaurants en Côte d'Ivoire",
  description:
    "Google Maps, menu en ligne, avis clients, commande et réservation pour restaurants, maquis et traiteurs en Côte d'Ivoire. Remplir la salle sans dépendre du bouche-à-oreille.",
  alternates: { canonical: `${site.url}/secteurs/restauration` },
  openGraph: {
    title: "Restauration — EXPERT CRÉA",
    description:
      "Visibilité Google Maps, menu en ligne, avis et commandes pour restaurants en Côte d'Ivoire.",
    url: `${site.url}/secteurs/restauration`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "On est un maquis, pas un grand restaurant. Le digital sert à quoi ?",
    a: "C'est justement là que c'est le plus efficace. La majorité des maquis n'ont pas de fiche Google Maps complète. Celui qui l'a, avec photos et avis, capte les clients qui cherchent « maquis + quartier ». Pas besoin d'un budget énorme — une fiche bien faite suffit pour commencer.",
  },
  {
    q: "On n'a pas de site. C'est obligatoire ?",
    a: "Non. Pour un restaurant, une fiche Google Maps bien optimisée avec menu, photos et avis peut suffire. Un site simple avec le menu et la réservation est un plus — mais ce n'est pas la première étape.",
  },
  {
    q: "Comment on gère les avis négatifs ?",
    a: "On ne les supprime pas — on y répond. Une réponse professionnelle à un avis négatif rassure plus qu'un profil sans avis. On vous aide à mettre en place une routine simple de gestion des avis.",
  },
  {
    q: "La commande en ligne, c'est compliqué à gérer ?",
    a: "Non. On peut mettre en place un système simple : le client voit le menu, choisit, et la commande arrive sur WhatsApp ou dans un outil. Pas besoin d'une plateforme lourde type Glovo pour commencer.",
  },
  {
    q: "La FNE concerne aussi les restaurants ?",
    a: "Oui, dès que vous émettez des factures ou des tickets. On adapte la mise en place à votre fonctionnement — caisse, logiciel existant ou solution à mettre en place.",
  },
];

export default function RestaurationPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, j'ai un restaurant et je cherche à améliorer ma visibilité en ligne et remplir ma salle."
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
        name: "Restauration",
        item: `${site.url}/secteurs/restauration`,
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
            { label: "Restauration", href: "/secteurs/restauration" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock fiche Google restaurant */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                La salle est bonne — mais les gens ne savent pas qu&apos;on existe
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                Être trouvé sur Google, donner envie avec le menu et les photos, gérer les avis, remplir la salle. Sans plateforme, sans commission.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?sujet=seo"
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
                {(["Restaurants", "Maquis", "Traiteurs", "Cafés", "Fast-food", "Lounges"] as const).map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock fiche Google restaurant */}
          <div className="hidden md:block rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            {/* Barre de recherche */}
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-slate-50 px-4 py-2.5 mb-4">
              <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <span className="text-sm text-slate-500">restaurant plateau abidjan</span>
            </div>

            {/* Fiche restaurant développée */}
            <div className="rounded-xl border border-orange-200/50 bg-orange-50/30 p-3.5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-slate-900">Votre Restaurant</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="flex gap-[1px]">
                      {[1,2,3,4,5].map((i) => (
                        <svg key={i} className={`h-3 w-3 ${i <= 5 ? "text-amber-400" : "text-slate-200"}`} viewBox="0 0 24 24" fill="currentColor">
                          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500">4.9 (342 avis)</span>
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">Restaurant · Plateau, Abidjan</div>
                </div>
                <span className="rounded bg-orange-100 px-1.5 py-0.5 text-[9px] font-bold text-orange-600">N°1</span>
              </div>

              {/* Photos mock */}
              <div className="grid grid-cols-4 gap-1 rounded-lg overflow-hidden">
                <div className="col-span-2 h-14 bg-orange-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-orange-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
                  </svg>
                </div>
                <div className="h-14 bg-amber-50 flex items-center justify-center">
                  <span className="text-[7px] text-amber-400">Plat 1</span>
                </div>
                <div className="h-14 bg-amber-50 flex items-center justify-center">
                  <span className="text-[7px] text-amber-400">Plat 2</span>
                </div>
              </div>

              {/* Infos clés */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="rounded-lg bg-white border border-black/6 p-1.5 text-center">
                  <span className="text-[9px] font-bold text-green-600">Ouvert</span>
                  <div className="text-[7px] text-slate-400">jusqu&apos;à 23h</div>
                </div>
                <div className="rounded-lg bg-white border border-black/6 p-1.5 text-center">
                  <span className="text-[9px] font-bold text-slate-700">Menu</span>
                  <div className="text-[7px] text-slate-400">Voir la carte</div>
                </div>
                <div className="rounded-lg bg-white border border-black/6 p-1.5 text-center">
                  <span className="text-[9px] font-bold text-slate-700">Réserver</span>
                  <div className="text-[7px] text-slate-400">WhatsApp</div>
                </div>
              </div>

              {/* Avis récent */}
              <div className="rounded-lg bg-white border border-black/6 p-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded-full bg-slate-200" />
                  <span className="text-[9px] font-semibold text-slate-700">Aminata K.</span>
                  <div className="flex gap-[0.5px]">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="h-2 w-2 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-0.5 text-[8px] text-slate-500 leading-relaxed">&laquo;&nbsp;Excellent poisson braisé, service rapide. On revient !&nbsp;&raquo;</p>
              </div>
            </div>

            {/* Concurrents en-dessous */}
            <div className="mt-2.5 space-y-2">
              <div className="rounded-xl border border-black/8 p-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-semibold text-slate-500">Restaurant B</div>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-[0.5px]">
                      {[1,2,3].map((i) => (
                        <svg key={i} className="h-2.5 w-2.5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-400">3.4 (23 avis)</span>
                  </div>
                </div>
                <div className="text-[9px] text-slate-400 mt-0.5">Pas de photos · Horaires manquants</div>
              </div>
            </div>

            <div className="mt-3 text-center text-[10px] text-slate-400">
              Simulation — Votre fiche Google Maps
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
            { number: "90%", label: "regardent les avis avant", sub: "note, photos et réponses aux avis font la différence" },
            { number: "N°1", label: "Maps = premier choix", sub: "le client va au premier restaurant qu'il voit sur Google" },
            { number: "0", label: "commission", sub: "contrairement à Glovo ou Jumia Food — le client vient directement" },
          ] as const).map((stat) => (
            <div
              key={stat.number}
              className={`rounded-2xl bg-slate-50/80 p-4 text-center sm:p-6 ${stat.number === "0" ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="text-2xl font-extrabold text-orange-500 sm:text-3xl md:text-4xl">{stat.number}</div>
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
              Être trouvé, donner envie, remplir la salle. Trois leviers concrets, sans plateforme intermédiaire.
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
                title: "Google Maps & avis clients",
                desc: "Fiche complète : photos des plats, menu, horaires, catégorie. Stratégie d'avis pour monter en note et en crédibilité. Les clients qui cherchent « restaurant + quartier » vous trouvent en premier.",
                accent: "orange" as const,
                link: "/services/referencement-seo",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                  </svg>
                ),
                title: "Site / menu en ligne",
                desc: "Le menu accessible en ligne, avec photos. Un lien simple à partager. Le client voit la carte avant de se déplacer — et ça lui donne envie de venir.",
                accent: "orange" as const,
                link: "/services/creation-site-web",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Commande & réservation",
                desc: "Le client commande ou réserve en un clic — via WhatsApp ou un formulaire simple. Pas de plateforme lourde, pas de commission. Vous gardez le contact direct.",
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
                desc: "Tickets et factures aux normes DGI. On adapte la FNE à votre caisse ou logiciel existant. Serein en cas de contrôle.",
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
                    item.accent === "green" ? "bg-(--brand-green)" : "bg-orange-400"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                      item.accent === "green"
                        ? "bg-(--brand-green)/10 text-(--brand-green)"
                        : "bg-orange-100 text-orange-600"
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
                  "Le restaurant n'apparaît pas sur Google Maps",
                  "Pas de photos, pas de menu visible — le client ne sait pas à quoi s'attendre",
                  "Les avis ne sont pas gérés, la note baisse",
                  "Le bouche-à-oreille est le seul canal d'acquisition",
                  "Les commandes passent par appel ou WhatsApp sans suivi",
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
                  "N°1 sur Google Maps dans votre zone — avec photos et menu",
                  "Le client voit la carte, les plats, les avis avant de venir",
                  "Avis gérés, réponses pros, note en hausse",
                  "Nouveaux clients via Google, en plus du bouche-à-oreille",
                  "Commande / réservation simple, sans commission de plateforme",
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
            href="/contact?sujet=seo"
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
              Comment on travaille avec un restaurant
            </h2>
            <p className="text-slate-600 leading-relaxed">
              On s&apos;adapte à votre rythme — le service ne s&apos;arrête pas. Des actions simples, un impact rapide.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "Fiche Maps, avis, menu en ligne, présence actuelle, concurrents locaux." },
              { n: "02", t: "Plan d'action", d: "Maps + photos d'abord ? Menu en ligne ? Commande ? On priorise." },
              { n: "03", t: "Mise en place", d: "Fiche optimisée, photos, menu, site si besoin — en 1 à 3 semaines." },
              { n: "04", t: "Suivi", d: "Gestion avis, contenus, optimisations. La visibilité se construit dans la durée." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-orange-500">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>
        </section>


        {/* ─── FOCUS CI ─── orange/food */}
        <section className="reveal rounded-2xl border border-orange-200/50 bg-orange-50/40 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <div>
              <div className="font-bold text-slate-900">La restauration en CI : tout le monde cherche sur Google avant de manger</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                &laquo;&nbsp;Restaurant Abidjan&nbsp;&raquo;, &laquo;&nbsp;maquis Cocody&nbsp;&raquo;, &laquo;&nbsp;braisé Plateau&nbsp;&raquo; — ces recherches explosent. Mais la majorité des restaurants n&apos;ont pas de fiche Maps complète, pas de photos de plats, pas de menu visible. C&apos;est une fenêtre énorme : le premier qui se positionne correctement capte les clients que les autres laissent filer.
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
                  "Restaurant, maquis, traiteur, café ou lounge en CI",
                  "Votre fiche Google Maps est absente ou incomplète",
                  "Pas de menu visible en ligne — les gens ne savent pas ce que vous faites",
                  "Vos avis ne sont pas gérés, votre note ne reflète pas la réalité",
                  "Vous dépendez des plateformes de livraison et de leurs commissions",
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
                  "Vous cherchez uniquement une présence sur Glovo / Jumia Food",
                  "Votre restaurant n'est pas encore ouvert",
                  "Vous n'avez pas de plats à photographier (en travaux, etc.)",
                ] as const).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                On peut quand même vous conseiller sur la stratégie pour l&apos;ouverture.
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
              { title: "SEO & Google Maps", href: "/services/referencement-seo" },
              { title: "Création de site web", href: "/services/creation-site-web" },
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
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-orange-500/18 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(249,115,22,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Remplir la salle, sans commission
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre restaurant et votre zone — on vous montre comment devenir le premier résultat Google.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?sujet=seo"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] active:scale-98"
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