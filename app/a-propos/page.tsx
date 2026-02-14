import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "À propos — EXPERT CRÉA",
  description:
    "Deux fondateurs, une méthode claire. Digital, visibilité et outils pour entreprises en Côte d'Ivoire. Basés à Abidjan, orientés résultats.",
  alternates: { canonical: `${site.url}/a-propos` },
  openGraph: {
    title: "À propos — EXPERT CRÉA",
    description:
      "Qui sommes-nous ? Deux associés complémentaires, basés en Côte d'Ivoire, qui livrent des solutions concrètes.",
    url: `${site.url}/a-propos`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

export default function AproposPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite échanger sur mon projet. Pouvez-vous m'aider ?"
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
    <Container>
      <div className="space-y-12 pt-[calc(var(--header-h)+1rem)] pb-10 sm:space-y-16 sm:pt-[calc(var(--header-h)+1.5rem)] sm:pb-12 lg:space-y-20 lg:pt-[calc(var(--header-h)+2rem)] lg:pb-14">

        {/* BREADCRUMB */}
        <Breadcrumbs
          className="mb-2 sm:mb-4"
          items={[{ label: "À propos", href: "/a-propos" }]}
        />


        {/* ─── HERO LÉGER ─── */}
        <section className="reveal space-y-4 sm:space-y-5">
          <p className="text-sm font-semibold text-(--brand-blue)">À propos</p>
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Deux associés, une seule obsession : que ça marche
          </h1>
          <p className="max-w-2xl text-slate-600 leading-relaxed sm:text-base md:text-lg">
            EXPERT CRÉA est une SAS basée en Côte d&apos;Ivoire. On construit des sites, des outils et de la visibilité pour les entreprises qui veulent avancer — pas juste &laquo;&nbsp;être en ligne&nbsp;&raquo;.
          </p>
        </section>


        {/* ─── L'ÉQUIPE ─── section principale */}
        <section className="reveal space-y-7 sm:space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Qui fait quoi
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Deux profils complémentaires. Vous avez un seul interlocuteur selon votre besoin.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {/* Georges */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
              <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl bg-(--brand-blue)" aria-hidden="true" />

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <div className="shrink-0">
                  {/* Place the image file at: public/georges-konan.jpg */}
                  <Image
                    src="/georges-konan.jpg"
                    alt="Georges KONAN"
                    width={128}
                    height={128}
                    className="h-20 w-20 rounded-2xl object-cover object-[50%_18%] sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                    sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 80px"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-lg font-bold text-slate-900 sm:text-xl">Georges KONAN</div>
                  <div className="text-sm font-semibold text-(--brand-blue)">Digital &amp; Produit</div>
                  <div className="text-xs text-slate-500">Co-fondateur</div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5">
                Votre interlocuteur sur tout ce qui est technique : sites web, outils de gestion, extranets, parcours de conversion. Il conçoit, développe et met en production. Son approche : livrer une V1 utile rapidement, puis améliorer en continu.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {(["Sites web", "Outils / Extranet", "Développement", "Performance", "FNE"] as const).map((t) => (
                  <span key={t} className="rounded-full bg-(--brand-blue)/8 px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-(--brand-blue)">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Philipe */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
              <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl bg-(--brand-green)" aria-hidden="true" />

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <div className="shrink-0">
                  {/* Place the image file at: public/philipe-tanbge.jpg */}
                  <Image
                    src="/philipe-tanbge.jpg"
                    alt="Philipe TANBGÉ"
                    width={128}
                    height={128}
                    className="h-20 w-20 rounded-2xl object-cover object-[50%_18%] sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                    sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 80px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-lg font-bold text-slate-900 sm:text-xl">Philipe TANBGÉ</div>
                  <div className="text-sm font-semibold text-(--brand-green)">Communication &amp; Visibilité</div>
                  <div className="text-xs text-slate-500">Co-fondateur</div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5">
                Votre référent sur l&apos;image de marque, la visibilité Google, les supports commerciaux et la structuration de la communication. Son rôle : que vos clients vous trouvent, vous fassent confiance et passent à l&apos;action.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {(["SEO / Google Maps", "Image de marque", "Supports", "Stratégie commerciale"] as const).map((t) => (
                  <span key={t} className="rounded-full bg-(--brand-green)/10 px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-(--brand-green)">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ─── POURQUOI EXPERT CRÉA ─── */}
        <section className="reveal space-y-8">
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Ce qui nous différencie
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {([
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
                    <path d="M2 12h20" />
                  </svg>
                ),
                title: "Basés en Côte d'Ivoire",
                desc: "On connaît le terrain, les contraintes locales, les habitudes des clients. Pas de prestataire distant qui ne comprend pas le contexte.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                  </svg>
                ),
                title: "Du concret, pas des promesses",
                desc: "Pas de slides ou de roadmaps sans fin. On met en place et on avance — une V1 utile en 2 à 4 semaines.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                ),
                title: "V1 d'abord, perfection ensuite",
                desc: "On livre une première version utile rapidement. Puis on améliore en continu selon l'usage réel — pas selon des hypothèses.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "On forme l'équipe",
                desc: "Un outil que personne n'utilise ne sert à rien. On forme, on accompagne l'adoption, et on reste disponible.",
              },
            ]).map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  {item.icon}
                </span>
                <div className="mt-3 font-bold text-slate-900">{item.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── EN CHIFFRES ─── */}
        <section className="reveal grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {([
            { number: "SAS", label: "Société formelle", sub: "enregistrée en Côte d'Ivoire" },
            { number: "2", label: "Associés", sub: "digital + communication" },
            { number: "2–4", label: "Semaines", sub: "pour une V1 opérationnelle" },
            { number: "24h", label: "Réponse", sub: "sur chaque demande" },
          ] as const).map((stat) => (
            <div key={stat.number} className="rounded-2xl bg-slate-50/80 p-3.5 text-center sm:p-5">
              <div className="text-2xl font-extrabold text-(--brand-blue) md:text-3xl">{stat.number}</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{stat.label}</div>
              <div className="mt-0.5 text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>


        {/* ─── MID CTA ─── */}
        <div className="reveal flex flex-col items-stretch gap-3 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 sm:w-auto hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
          >
            Parler de votre situation
          </Link>
          <span className="text-sm text-slate-400">ou explorez ce qu&apos;on fait ↓</span>
        </div>


        {/* ─── CE QU'ON FAIT (liens simples) ─── */}
        <section className="reveal space-y-6">
          <div className="prose-container-left">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Nos services
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              {
                title: "SEO & Google Maps",
                desc: "Être trouvé quand ça compte",
                href: "/services/referencement-seo",
                accent: "blue" as const,
              },
              {
                title: "Création de site web",
                desc: "Un site qui génère des demandes",
                href: "/services/creation-site-web",
                accent: "blue" as const,
              },
              {
                title: "Outils de gestion",
                desc: "Extranet, suivi, tableaux de bord",
                href: "/services/extranet-outils-gestion",
                accent: "green" as const,
              },
              {
                title: "Conformité FNE",
                desc: "Facturation aux normes DGI",
                href: "/services/conformite-fne",
                accent: "green" as const,
              },
            ]).map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 sm:p-6 transition-all hover:shadow-md hover:border-black/15"
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                    s.accent === "green" ? "bg-(--brand-green)" : "bg-(--brand-blue)"
                  }`}
                  aria-hidden="true"
                />
                <div className="font-semibold text-slate-900 group-hover:text-(--brand-blue) transition-colors">{s.title}</div>
                <div className="mt-0.5 text-sm text-slate-500">{s.desc}</div>
                <div className="mt-2 text-xs font-semibold text-(--brand-blue)">En savoir plus →</div>
              </Link>
            ))}
          </div>
        </section>


        {/* ─── CTA FINAL ─── dark */}
        <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-6 text-white sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/18 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(0,145,255,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Prêt à avancer ?
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre activité, votre zone et votre objectif. On vous répond avec un plan clair.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 sm:w-auto hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
            >
              Parler de votre situation
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
              href="/realisations"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35"
            >
              Voir nos réalisations
            </Link>
          </div>
        </section>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
      </div>
    </Container>
  );
}