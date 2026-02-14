import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Solutions digitales pour PME & commerces en Côte d'Ivoire",
  description:
    "Site qui génère des demandes, visibilité Google, outils internes et conformité FNE pour PME et commerces en Côte d'Ivoire. Concret, progressif, adapté au terrain.",
  alternates: { canonical: `${site.url}/secteurs/pme-commerces` },
  openGraph: {
    title: "PME & commerces — EXPERT CRÉA",
    description:
      "Site crédible, SEO local, outils de gestion et conformité FNE pour PME et commerces en Côte d'Ivoire.",
    url: `${site.url}/secteurs/pme-commerces`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "On est une petite structure. Le digital, c'est pas trop tôt pour nous ?",
    a: "Non. C'est justement le bon moment. Un site crédible et une fiche Google Maps bien faite coûtent moins qu'un commercial — et travaillent 24h/24. On adapte à votre budget et vos priorités.",
  },
  {
    q: "On a déjà un site mais il ne sert à rien. Vous pouvez le reprendre ?",
    a: "Oui. On analyse pourquoi il ne génère pas de demandes (structure, contenu, vitesse, parcours) et on le restructure. Pas besoin de tout refaire si la base est exploitable.",
  },
  {
    q: "On n'a pas de budget pour tout faire d'un coup.",
    a: "C'est prévu. On priorise : d'abord ce qui rapporte le plus vite (souvent Google Maps + site simple), puis on ajoute le reste progressivement. Pas de forfait imposé.",
  },
  {
    q: "Nos clients nous trouvent surtout par le bouche-à-oreille. Le SEO change quoi ?",
    a: "Le bouche-à-oreille c'est bien, mais ça ne scale pas. Le SEO local vous rend visible quand quelqu'un cherche votre service — même s'il ne vous connaît pas encore. C'est du bouche-à-oreille automatique.",
  },
  {
    q: "La FNE, ça nous concerne aussi ?",
    a: "Oui, dès que vous émettez des factures. On adapte la mise en place à votre situation — que vous utilisiez Excel, un logiciel ou rien du tout.",
  },
];

export default function PMECommercesPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, j'ai une PME / un commerce et je cherche à gagner en visibilité et en efficacité."
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
        name: "PME & commerces",
        item: `${site.url}/secteurs/pme-commerces`,
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
            { label: "PME & commerces", href: "/secteurs/pme-commerces" },
          ]}
        />


        {/* ─── HERO ─── split texte + mock site avant/après */}
        <section className="reveal pt-2 sm:pt-4 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Colonne gauche — texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl text-balance">
                On a un commerce qui tourne — mais personne ne nous trouve en ligne
              </h1>

              <p className="text-slate-600 md:text-lg leading-relaxed">
                Un site crédible, une présence Google solide, des outils simples. Pour que le digital travaille pour vous — pas l&apos;inverse.
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
                {(["Boutiques", "Services", "Artisans", "Agences", "Cabinets", "Commerce B2B"] as const).map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Mock navigateur avant/après */}
          <div className="hidden md:block space-y-4">
            {/* AVANT */}
            <div className="rounded-2xl border border-red-200/60 bg-red-50/30 p-3">
              <div className="mb-2 inline-flex rounded-md bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">Site actuel</div>
              <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                  <span className="ml-2 h-3 flex-1 rounded bg-slate-200" />
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-12 rounded bg-slate-100 flex items-center justify-center text-[10px] text-slate-400">Image floue / stock</div>
                  <div className="h-2.5 w-3/4 rounded bg-slate-200" />
                  <div className="h-2 w-full rounded bg-slate-100" />
                  <div className="h-2 w-2/3 rounded bg-slate-100" />
                  <div className="text-[9px] text-red-400 mt-1">✗ Pas de CTA · ✗ Pas de contact visible · ✗ Lent</div>
                </div>
              </div>
            </div>

            {/* APRÈS */}
            <div className="rounded-2xl border border-(--brand-green)/30 bg-(--brand-green)/4 p-3">
              <div className="mb-2 inline-flex rounded-md bg-(--brand-green)/15 px-2 py-0.5 text-[10px] font-bold text-(--brand-green)">Site optimisé</div>
              <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                  <span className="ml-2 h-3 flex-1 rounded bg-slate-200" />
                </div>
                <div className="p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 w-24 rounded bg-slate-800" />
                      <div className="mt-1 h-2 w-32 rounded bg-slate-200" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="rounded bg-(--brand-blue)/15 px-2 py-1 text-[8px] font-bold text-(--brand-blue)">Appeler</span>
                      <span className="rounded bg-(--brand-green)/15 px-2 py-1 text-[8px] font-bold text-(--brand-green)">WhatsApp</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-8 rounded bg-slate-50 flex items-center justify-center text-[8px] text-slate-500">Service 1</div>
                    <div className="h-8 rounded bg-slate-50 flex items-center justify-center text-[8px] text-slate-500">Service 2</div>
                    <div className="h-8 rounded bg-slate-50 flex items-center justify-center text-[8px] text-slate-500">Service 3</div>
                  </div>
                  <div className="rounded bg-(--brand-blue) px-2 py-1.5 text-center text-[9px] font-bold text-white">Demander un devis →</div>
                  <div className="text-[9px] text-(--brand-green) mt-0.5">✓ CTA visible · ✓ Contact clair · ✓ Rapide</div>
                </div>
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
            { number: "3s", label: "pour convaincre", sub: "un visiteur décide en 3 secondes s'il reste ou s'en va" },
            { number: "70%", label: "du trafic est mobile", sub: "votre site doit fonctionner sur téléphone d'abord" },
            { number: "×3", label: "plus de demandes", sub: "un site structuré génère 3x plus de contacts qu'une page générique" },
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


        {/* ─── CE QU'ON FAIT ─── */}
        <section id="ce-quon-fait" className="reveal reveal-stagger space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Ce qu&apos;on met en place pour vous
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Pas besoin de tout faire d&apos;un coup. On priorise ce qui rapporte le plus vite.
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
                title: "Site crédible qui génère des demandes",
                desc: "Pages claires, services visibles, CTA vers WhatsApp ou formulaire. Le visiteur comprend ce que vous faites et comment vous contacter — en 3 secondes.",
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
                desc: "Quand quelqu'un cherche votre service dans votre zone, c'est vous qui apparaissez. Fiche Maps, avis, contenu local — du trafic qualifié, pas des clics vides.",
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
                title: "Outils internes simples",
                desc: "Suivi clients, devis, commandes, documents — si vous perdez du temps avec Excel et WhatsApp, on peut simplifier. Pas d'usine à gaz, un outil adapté.",
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
                desc: "Vos factures aux normes, votre logiciel interfacé ou remplacé, votre équipe formée. Serein en cas de contrôle DGI.",
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
                  "Pas de site ou un site qui ne génère aucune demande",
                  "Les clients vous trouvent par hasard ou bouche-à-oreille uniquement",
                  "Fiche Google Maps absente ou incomplète",
                  "Tout est géré dans la tête du patron, rien n'est tracé",
                  "Factures non conformes, FNE pas en place",
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
                  "Un site pro qui génère des appels et des demandes de devis",
                  "Visible sur Google quand quelqu'un cherche votre service",
                  "Fiche Maps complète, avis gérés, crédibilité renforcée",
                  "Un suivi simple si besoin — plus rien ne se perd",
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
              Comment on travaille avec une PME
            </h2>
            <p className="text-slate-600 leading-relaxed">
              On priorise ce qui a le plus d&apos;impact. Pas de forfait imposé — un plan adapté à votre budget et vos urgences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { n: "01", t: "Diagnostic", d: "On regarde votre présence, votre site, vos canaux, vos concurrents locaux." },
              { n: "02", t: "Priorités", d: "Qu'est-ce qui rapporte le plus vite ? Site, Maps, outils, FNE — on ordonne." },
              { n: "03", t: "Mise en place", d: "V1 opérationnelle en 2 à 4 semaines. Votre activité continue normalement." },
              { n: "04", t: "Suivi", d: "On optimise, on ajoute, on ajuste. Budget maîtrisé, résultats mesurables." },
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
              <div className="font-bold text-slate-900">Pourquoi c&apos;est le bon moment en Côte d&apos;Ivoire</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                La majorité des PME ivoiriennes n&apos;ont pas de présence en ligne sérieuse. Les recherches locales explosent sur mobile — mais la concurrence SEO est encore faible sur beaucoup de services. Les PME qui investissent maintenant dans un site et Google Maps prennent une avance difficile à rattraper.
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
                  "PME, commerce, artisan, cabinet, agence en CI",
                  "Pas de site ou un site qui ne génère pas de demandes",
                  "Vos clients vous trouvent par bouche-à-oreille uniquement",
                  "Vous perdez du temps avec Excel, WhatsApp, papier",
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
                  "Vous cherchez un e-commerce complet (Shopify, WooCommerce)",
                  "Votre activité est 100% offline sans besoin digital",
                  "Vous voulez tout faire en une semaine sans budget",
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
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/18 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(0,145,255,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Que le digital travaille pour vous
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre activité et vos priorités — on vous dit ce qu&apos;on peut faire, dans quel ordre et pour quel budget.
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