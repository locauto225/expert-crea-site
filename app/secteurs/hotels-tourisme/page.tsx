import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Solutions digitales pour hôtels & tourisme en Côte d'Ivoire",
  description:
    "Plus de réservations directes, moins de dépendance aux plateformes. Site qui convertit, SEO local, Google Maps, outils de gestion interne. Basés en Côte d'Ivoire.",
  alternates: { canonical: `${site.url}/secteurs/hotels-tourisme` },
  openGraph: {
    title: "Hôtels & tourisme — EXPERT CRÉA",
    description:
      "Site qui convertit, SEO local, Google Maps et outils internes pour hôtels et acteurs du tourisme en Côte d'Ivoire.",
    url: `${site.url}/secteurs/hotels-tourisme`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "On a déjà un site, mais il ne génère pas de réservations. Vous pouvez le reprendre ?",
    a: "Oui. On analyse pourquoi il ne convertit pas (structure, contenu, vitesse, parcours de réservation) et on le restructure pour qu'il génère des demandes concrètes. Pas besoin de tout refaire si la base est bonne.",
  },
  {
    q: "On est sur Booking / Expedia. Le SEO local sert à quoi ?",
    a: "Booking prend 15 à 25% de commission. Chaque réservation directe que vous obtenez via Google Maps ou votre site est du chiffre d'affaires en plus. Le SEO local vous rend visible là où les gens cherchent — sans payer de commission.",
  },
  {
    q: "Nos clients réservent surtout par WhatsApp. C'est un problème ?",
    a: "Non, c'est une réalité terrain. On l'intègre : votre site redirige vers WhatsApp si c'est le canal principal, et on peut mettre en place un suivi simple pour ne rien perdre.",
  },
  {
    q: "On a plusieurs établissements. Ça change quelque chose ?",
    a: "Oui, on adapte : une fiche Google Maps par établissement, des pages locales sur le site, et éventuellement un outil interne pour piloter l'ensemble.",
  },
  {
    q: "Combien de temps pour voir des résultats ?",
    a: "Le site et Google Maps peuvent être opérationnels en 2 à 4 semaines. Le SEO produit ses premiers effets en quelques semaines, avec une montée progressive. On priorise les actions à impact rapide.",
  },
];

export default function HotelsTourismePage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, j'ai un hôtel / établissement touristique et je cherche à améliorer ma visibilité en ligne et mes réservations directes."
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
        name: "Hôtels & tourisme",
        item: `${site.url}/secteurs/hotels-tourisme`,
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
            { label: "Hôtels & tourisme", href: "/secteurs/hotels-tourisme" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock Google Maps hôtel */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Vos chambres sont vides, mais Booking est plein
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                Chaque réservation via une plateforme, c&apos;est 15 à 25% de commission. On vous rend visible sur Google pour que les clients réservent en direct.
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
                {(["Hôtels", "Résidences", "Maisons d'hôtes", "Lodges", "Tourisme"] as const).map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock Google Maps recherche hôtel */}
          <div className="hidden md:block rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            {/* Barre de recherche simulée */}
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-slate-50 px-4 py-2.5 mb-4">
              <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <span className="text-sm text-slate-500">hôtel abidjan plateau</span>
            </div>

            {/* 3-pack résultats */}
            <div className="space-y-2.5">
              {/* Résultat #1 — Vous, bien positionné */}
              <div className="rounded-xl border border-(--brand-green)/30 bg-(--brand-green)/4 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Votre hôtel ★★★</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="flex gap-[1px]">
                        {[1,2,3,4,5].map((i) => (
                          <svg key={i} className={`h-3 w-3 ${i <= 4 ? "text-amber-400" : "text-slate-200"}`} viewBox="0 0 24 24" fill="currentColor">
                            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500">4.6 (127 avis)</span>
                    </div>
                  </div>
                  <span className="rounded bg-(--brand-green)/15 px-1.5 py-0.5 text-[9px] font-bold text-(--brand-green)">N°1</span>
                </div>
                <div className="mt-1.5 text-[10px] text-slate-500">Plateau, Abidjan · Site officiel · Réservation directe</div>
              </div>

              {/* Résultat #2 */}
              <div className="rounded-xl border border-black/8 p-3">
                <div className="text-sm font-semibold text-slate-600">Hôtel Concurrent A</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex gap-[1px]">
                    {[1,2,3,4].map((i) => (
                      <svg key={i} className="h-3 w-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                      </svg>
                    ))}
                    <svg className="h-3 w-3 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-slate-400">4.1 (64 avis)</span>
                </div>
                <div className="mt-1 text-[10px] text-slate-400">Plateau, Abidjan · via Booking.com</div>
              </div>

              {/* Résultat #3 */}
              <div className="rounded-xl border border-black/8 p-3">
                <div className="text-sm font-semibold text-slate-600">Résidence B</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex gap-[1px]">
                    {[1,2,3].map((i) => (
                      <svg key={i} className="h-3 w-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                      </svg>
                    ))}
                    {[1,2].map((i) => (
                      <svg key={`e-${i}`} className="h-3 w-3 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">3.2 (18 avis)</span>
                </div>
                <div className="mt-1 text-[10px] text-slate-400">Cocody, Abidjan · Pas de site</div>
              </div>
            </div>

            <div className="mt-3 text-center text-[10px] text-slate-400">
              Simulation — Résultats Google Maps
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
            { number: "15–25%", label: "de commission économisée", sub: "sur chaque réservation directe vs Booking" },
            { number: "70%", label: "des recherches sont locales", sub: "\"hôtel + ville\" sur Google et Maps" },
            { number: "2–4", label: "semaines pour être visible", sub: "site + Google Maps + premiers contenus" },
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


        {/* ─── CE QU'ON FAIT ─── services adaptés hôtellerie */}
        <section id="ce-quon-fait" className="reveal reveal-stagger space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Ce qu&apos;on met en place pour vous
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Trois leviers concrets pour remplir vos chambres sans dépendre des plateformes.
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
                title: "Visibilité Google Maps & SEO local",
                desc: "Fiche Google optimisée, avis gérés, pages locales sur votre site. Les voyageurs qui cherchent \"hôtel + votre zone\" vous trouvent en premier.",
                accent: "blue" as const,
                link: "/services/referencement-seo",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                  </svg>
                ),
                title: "Site qui convertit en réservations",
                desc: "Pages chambres claires, tarifs visibles, CTA vers WhatsApp ou réservation. Un site qui donne envie de réserver — pas juste de regarder.",
                accent: "blue" as const,
                link: "/services/creation-site-web",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  </svg>
                ),
                title: "Outils internes (si besoin)",
                desc: "Suivi des réservations, gestion des chambres, documents internes. Un outil simple pour ne rien perdre — surtout si l'équipe gère par WhatsApp.",
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
                desc: "Factures normalisées pour vos clients professionnels et tour-opérateurs. On vous met en règle sans perturber la réception.",
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
                  "Les clients passent par Booking (15–25% de commission)",
                  "Votre site ne génère pas de réservations directes",
                  "Fiche Google Maps incomplète ou mal positionnée",
                  "Les avis ne sont pas gérés, les concurrents passent devant",
                  "Tout est géré par WhatsApp, rien n'est tracé",
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
                  "Réservations directes via Google et votre site",
                  "Un site qui donne envie de réserver (pas juste de regarder)",
                  "N°1 sur Google Maps dans votre zone",
                  "Avis gérés, réponses, crédibilité renforcée",
                  "Un suivi simple pour ne plus rien perdre",
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
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
          >
            Faire le point (gratuit, 2 min)
          </Link>
          <span className="text-sm text-slate-400">ou continuez pour voir la méthode ↓</span>
        </div>


        {/* ─── MÉTHODE ─── */}
        <section className="reveal rounded-3xl bg-slate-50/80 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Comment on travaille avec un hôtel
            </h2>
            <p className="text-slate-600 leading-relaxed">
              On s&apos;adapte à votre rythme. Pas d&apos;usine à gaz — des actions concrètes qui remplissent des chambres.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "On analyse votre visibilité, votre site, vos canaux actuels et vos concurrents locaux." },
              { n: "02", t: "Plan d'action", d: "Quels leviers activer en premier (Maps, site, contenu), dans quel ordre." },
              { n: "03", t: "Mise en place", d: "Site, fiche Google, pages, contenu — tout est opérationnel en 2 à 4 semaines." },
              { n: "04", t: "Suivi mensuel", d: "Optimisations, contenus, avis, reporting. On pilote la visibilité sur la durée." },
            ] as const).map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-5">
                <div className="text-xs font-extrabold text-(--brand-blue)">{step.n}</div>
                <div className="mt-1 font-semibold text-slate-900">{step.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>
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
              <div className="font-bold text-slate-900">Pourquoi c&apos;est le bon moment pour l&apos;hôtellerie en Côte d&apos;Ivoire</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                Le tourisme en CI se développe. Les recherches &laquo;&nbsp;hôtel + ville&nbsp;&raquo; augmentent sur Google. Mais la plupart des établissements n&apos;ont pas de fiche Maps optimisée ni de site qui convertit. C&apos;est une fenêtre : ceux qui se positionnent maintenant captent les réservations que les autres laissent à Booking.
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
                  "Hôtel, résidence, maison d'hôtes, lodge en CI",
                  "Vos réservations dépendent trop des plateformes",
                  "Votre site existe mais ne génère pas de demandes",
                  "Votre fiche Google Maps est incomplète ou absente",
                  "Vous voulez des réservations directes, pas juste de la visibilité",
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
                  "Vous cherchez uniquement un moteur de réservation (Cloudbeds, etc.)",
                  "Votre établissement n'est pas encore ouvert",
                  "Vous n'avez pas de budget pour un suivi régulier",
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
              { title: "SEO & Google Maps", href: "/services/referencement-seo", accent: "blue" as const },
              { title: "Création de site web", href: "/services/creation-site-web", accent: "green" as const },
              { title: "Outils de gestion", href: "/services/extranet-outils-gestion", accent: "blue" as const },
              { title: "Conformité FNE", href: "/services/conformite-fne", accent: "green" as const },
            ]).map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`group rounded-2xl border border-black/10 bg-white p-5 transition-all hover:shadow-md hover:border-black/15`}
              >
                <div className="font-semibold text-slate-900 group-hover:text-(--brand-blue) transition-colors">{s.title}</div>
                <div className="mt-1 text-xs font-semibold text-(--brand-blue)">Voir le service →</div>
              </Link>
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
                Remplir vos chambres sans commission
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Dites-nous votre zone et votre situation actuelle — on vous montre ce qu&apos;on peut faire pour vous.
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