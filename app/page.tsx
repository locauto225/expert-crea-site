import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EXPERT CRÉA — Solution digitale (sites, outils métiers, SEO local, interfaçage, FNE)",
  description:
    "EXPERT CRÉA aide les entreprises à structurer, sécuriser et développer leur activité grâce au digital : sites performants, SEO local, outils métiers/extranet, interfaçage et conformité (FNE). Côte d’Ivoire & international.",
  openGraph: {
    title: "EXPERT CRÉA — La solution digitale pour les entreprises",
    description:
      "Sites performants, SEO local (Google Maps), outils métiers/extranet, interfaçage & conformité (FNE) : des solutions utiles, adaptées au terrain, sans bloquer l’activité.",
    url: "/",
    type: "website",
  },
};

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name:
    | "spark"
    | "map"
    | "grid"
    | "shield"
    | "bolt"
    | "hand"
    | "arrow"
    | "warn"
    | "link"
    | "check";
  className?: string;
}) {
  const common = { className, fill: "none", stroke: "currentColor", strokeWidth: 2 };
  switch (name) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l1.2 4.6L18 8l-4.8 1.4L12 14l-1.2-4.6L6 8l4.8-1.4L12 2z" />
          <path d="M5 14l.8 2.8L9 18l-3.2 1.2L5 22l-.8-2.8L1 18l3.2-1.2L5 14z" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 21s7-4.4 7-11a7 7 0 10-14 0c0 6.6 7 11 7 11z" />
          <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "hand":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 11V6a1 1 0 112 0v5" />
          <path d="M9 11V5a1 1 0 112 0v6" />
          <path d="M11 11V6a1 1 0 112 0v5" />
          <path d="M13 11V7a1 1 0 112 0v4" />
          <path d="M15 11l2 1c1 .5 2 1.6 2 2.8V18c0 2-1.6 4-4 4H11c-2.8 0-4-2-4-4v-7c0-.6.4-1 1-1h0c.6 0 1 .4 1 1v2" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 12h12" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "warn":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
          <path d="M10.3 4.5l-8 14A2 2 0 004 21h16a2 2 0 001.7-3l-8-14a2 2 0 00-3.4 0z" />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 000-7.07 5 5 0 00-7.07 0L10 5" />
          <path d="M14 11a5 5 0 01-7.07 0L5.52 9.59a5 5 0 010-7.07 5 5 0 017.07 0L14 3" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
  }
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
        <Icon name="check" className="h-4 w-4" />
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function InterfacageSchema() {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-900">Schéma simple</div>
          <div className="text-sm text-slate-600">Outil existant → Interfaçage → Conformité / FNE</div>
        </div>
        <div className="text-xs font-semibold text-slate-500">Compréhension immédiate</div>
      </div>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
        <span className="h-2 w-2 rounded-full bg-(--brand-blue)" />
        Schéma — compréhension immédiate
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-black/10 bg-linear-to-b from-slate-50 to-white p-4">
        <svg
          viewBox="0 0 960 240"
          className="h-auto w-full"
          role="img"
          aria-label="Schéma interfaçage : outil existant, interfaçage, conformité"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(0,0,0,0.06)" />
              <stop offset="1" stopColor="rgba(0,0,0,0.02)" />
            </linearGradient>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
            </marker>
          </defs>

          <g>
            <rect x="40" y="60" width="260" height="120" rx="20" fill="white" stroke="rgba(0,0,0,0.12)" />
            <rect x="350" y="40" width="260" height="160" rx="24" fill="url(#g1)" stroke="rgba(0,0,0,0.12)" />
            <rect x="660" y="60" width="260" height="120" rx="20" fill="white" stroke="rgba(0,0,0,0.12)" />

            <text x="170" y="105" textAnchor="middle" fontSize="18" fill="rgba(15,23,42,0.95)" fontWeight="700">
              Outil existant
            </text>
            <text x="170" y="135" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
              Excel / logiciel / app
            </text>

            <text x="480" y="95" textAnchor="middle" fontSize="18" fill="rgba(15,23,42,0.95)" fontWeight="800">
              Interfaçage Expert Créa
            </text>
            <text x="480" y="125" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
              Connexion • adaptation • automatisation
            </text>
            <text x="480" y="152" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
              Sans arrêter l’activité
            </text>

            <text x="790" y="105" textAnchor="middle" fontSize="18" fill="rgba(15,23,42,0.95)" fontWeight="700">
              Conformité
            </text>
            <text x="790" y="135" textAnchor="middle" fontSize="14" fill="rgba(15,23,42,0.65)">
              FNE • suivi • sécurité
            </text>

            <g color="rgba(15,23,42,0.55)">
              <path
                d="M300 120 C320 120, 330 120, 350 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <path
                d="M610 120 C630 120, 640 120, 660 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* 1) HERO */}
      <section className="reveal relative -mx-4 overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 px-6 py-12 text-white sm:-mx-6 md:px-10 md:py-14 lg:-mx-8">
        <div className="pointer-events-none absolute -left-24 -top-24 h-70 w-70 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="relative grid gap-10 lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
                Côte d’Ivoire • terrain & efficacité
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              La solution digitale pour structurer, sécuriser et développer votre activité
            </h1>

            <p className="max-w-2xl text-white/80 md:text-lg leading-relaxed">
              Un digital qui fait fonctionner votre entreprise, la sécurise et l’aide à évoluer — sans la compliquer.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Décrire votre situation (2 min)
              </Link>
              <div className="text-sm font-semibold text-white/70">Réponse sous 24h — sans engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) PROBLÈMES TERRAIN */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                <Icon name="warn" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Les réalités que vivent les entreprises ivoiriennes
                </h2>
                <p className="mt-1 text-slate-600">
                  Aujourd’hui, beaucoup d’entreprises font face à des contraintes concrètes :
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              <Bullet>La FNE complique la facturation et crée du stress</Bullet>
              <Bullet>Des outils existants non conformes ou mal adaptés</Bullet>
              <Bullet>Beaucoup de temps perdu entre Excel, WhatsApp, cahiers et logiciels isolés</Bullet>
              <Bullet>Des sites internet qui existent, mais ne génèrent aucune demande</Bullet>
              <Bullet>La peur de mal faire (erreurs, sanctions, blocage)</Bullet>
            </ul>

            <p className="mt-6 text-slate-700">
              Ce n’est pas un manque de volonté. Ce sont{" "}
              <span className="font-semibold">des problèmes d’outils et d’organisation</span>.
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-semibold">Ces situations ne sont pas une fatalité.</span> Voici comment nous y répondons.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
              <div className="relative h-75 w-full lg:h-140 lg:max-h-155">
                <Image
                  src="/home/home-problemes-terrain.webp"
                  alt="Facturation, organisation et outils du quotidien en entreprise"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Respiration */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-800">
            Notre rôle n’est pas d’ajouter un outil de plus, mais de résoudre des situations concrètes —{" "}
            <span className="font-semibold">sans perturber l’activité</span>.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Conformité</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Continuité</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Clarté</span>
          </div>
        </div>
      </section>

      {/* 4) NOTRE RÉPONSE */}
      <section className="reveal space-y-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Notre réponse : des solutions digitales utiles et adaptées
              </h2>
              <p className="mt-1 text-slate-600">
                Nous concevons des solutions digitales qui s’intègrent à votre réalité :
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="card-soft rounded-3xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                    <Icon name="hand" />
                  </div>
                  <div className="text-lg font-bold">Simple à utiliser</div>
                </div>
                <p className="mt-2 text-slate-600">Des outils compréhensibles par vos équipes, sans usine à gaz.</p>
              </div>

              <div className="card-soft rounded-3xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                    <Icon name="shield" />
                  </div>
                  <div className="text-lg font-bold">Conforme & sécurisé</div>
                </div>
                <p className="mt-2 text-slate-600">Obligations (dont la FNE), données et process sécurisés.</p>
              </div>

              <div className="card-soft rounded-3xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                    <Icon name="grid" />
                  </div>
                  <div className="text-lg font-bold">Interfaces claires</div>
                </div>
                <p className="mt-2 text-slate-600">Suivre, facturer, organiser — tout devient plus lisible.</p>
              </div>

              <div className="card-soft rounded-3xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                    <Icon name="bolt" />
                  </div>
                  <div className="text-lg font-bold">Sans perturber l’activité</div>
                </div>
                <p className="mt-2 text-slate-600">Mise en place propre, progressive, sans “arrêter l’entreprise”.</p>
              </div>
            </div>

            <p className="text-slate-700">
              <span className="font-semibold">Le digital devient un appui</span>, pas une contrainte.
            </p>

            <p className="text-slate-700">
              <span className="font-semibold">Selon votre situation</span>, une ou plusieurs de ces réponses peuvent être mises en place.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
              <div className="relative h-75 w-full lg:h-130 lg:max-h-150">
                <Image
                  src="/home/home-dashboard.webp"
                  alt="Exemple d’interface claire : suivi, organisation, facturation"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">Une interface claire = adoption plus rapide par l’équipe.</div>
          </div>
        </div>
      </section>

      {/* 5) INTERFAÇAGE */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
            <Icon name="link" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Vous avez déjà un outil ? On ne le remplace pas. On l’adapte.
            </h2>
            <p className="mt-1 text-slate-600">
              De nombreuses entreprises disposent déjà d’un logiciel, d’un système interne ou d’un outil métier.
            </p>
          </div>
        </div>

        <p className="mt-5 text-slate-700">
          Nous mettons en place des solutions <span className="font-semibold">d’interfaçage</span> pour connecter
          l’existant aux obligations actuelles (comme la FNE), sans arrêter l’activité ni repartir de zéro.
        </p>

        <div className="mt-6">
          <InterfacageSchema />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {[
            { label: "Continuité", icon: "bolt" as const },
            { label: "Conformité", icon: "shield" as const },
            { label: "Gain de temps", icon: "spark" as const },
            { label: "Zéro rupture", icon: "check" as const },
          ].map((x) => (
            <div key={x.label} className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="flex items-center gap-2 text-slate-900">
                <span className="rounded-xl bg-slate-100 p-2">
                  <Icon name={x.icon} className="h-4 w-4" />
                </span>
                <div className="font-semibold">{x.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6) CE QUE VOUS OBTENEZ */}
      <section className="reveal reveal-stagger space-y-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight">Ce que vous obtenez concrètement</h2>
        </div>

        <ul className="grid gap-3 md:grid-cols-2">
          <Bullet>
            <span className="font-semibold">Fonctionnement clair</span> : des outils qui simplifient le quotidien
          </Bullet>
          <Bullet>
            <span className="font-semibold">Conformité</span> : facturation et données sécurisées
          </Bullet>
          <Bullet>
            <span className="font-semibold">Visibilité utile</span> : être trouvé et contacté
          </Bullet>
          <Bullet>
            <span className="font-semibold">Organisation</span> : moins de pertes, plus de contrôle
          </Bullet>
        </ul>
      </section>

      {/* Direction (pour les scanners pressés) */}
      <div className="reveal">
        <Link
          href="#solutions"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
        >
          Aller directement aux solutions <span aria-hidden="true">↓</span>
        </Link>
      </div>

      {/* 7) SERVICES */}
      <section id="solutions" className="reveal reveal-stagger space-y-4 scroll-mt-28">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight">Nos solutions répondent à 4 besoins essentiels</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/services/referencement-seo"
            className="stagger-item card-wow group rounded-3xl border border-black/10 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                <Icon name="map" />
              </div>
              <div className="text-lg font-bold">Attirer</div>
            </div>
            <p className="mt-2 text-slate-600">
              Si vos clients ne vous trouvent pas : visibilité locale, crédibilité, présence Google.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) opacity-0 transition group-hover:opacity-100">
              Découvrir <Icon name="arrow" className="h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/services/creation-site-web"
            className="stagger-item card-wow group rounded-3xl border border-black/10 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                <Icon name="spark" />
              </div>
              <div className="text-lg font-bold">Convertir</div>
            </div>
            <p className="mt-2 text-slate-600">
              Si votre site existe mais ne génère rien : un site pensé pour recevoir et convertir des demandes.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) opacity-0 transition group-hover:opacity-100">
              Découvrir <Icon name="arrow" className="h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/services/extranet-outils-gestion"
            className="stagger-item card-wow group rounded-3xl border border-black/10 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                <Icon name="grid" />
              </div>
              <div className="text-lg font-bold">Structurer</div>
            </div>
            <p className="mt-2 text-slate-600">
              Si l’organisation repose sur Excel / WhatsApp : outils internes, extranet, interfaçage, FNE.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) opacity-0 transition group-hover:opacity-100">
              Découvrir <Icon name="arrow" className="h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/services/conformite-fne"
            className="stagger-item card-wow group rounded-3xl border border-black/10 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-100 p-2 text-slate-900">
                <Icon name="shield" />
              </div>
              <div className="text-lg font-bold">Sécuriser</div>
            </div>
            <p className="mt-2 text-slate-600">
              Si la conformité vous inquiète : FNE, données, suivi et tranquillité d’esprit.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) opacity-0 transition group-hover:opacity-100">
              Découvrir <Icon name="arrow" className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* 8) MÉTHODE */}
      <section className="reveal space-y-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight">Une méthode simple, adaptée au terrain</h2>
          <p className="mt-1 text-slate-600">Pas de projets interminables. Pas de solutions compliquées.</p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                k: "01",
                title: "On comprend votre situation réelle",
                desc: "On regarde le fonctionnement actuel, les contraintes, et ce qui bloque vraiment.",
                icon: "hand" as const,
              },
              {
                k: "02",
                title: "On livre une V1 utile rapidement",
                desc: "Vous voyez, vous testez, on ajuste — sans bloquer l’activité.",
                icon: "bolt" as const,
              },
              {
                k: "03",
                title: "On ajuste & on optimise",
                desc: "On améliore sur des retours concrets : adoption, visibilité, conversion, suivi.",
                icon: "spark" as const,
              },
            ].map((s) => (
              <div key={s.k} className="stagger-item rounded-2xl border border-black/10 bg-slate-50 p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-extrabold text-white">
                    {s.k}
                  </span>
                  <span className="rounded-xl bg-slate-100 p-2 text-slate-900">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-4 text-lg font-bold text-slate-900">{s.title}</div>
                <div className="mt-1 text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-700">
            <span className="font-semibold">La première étape est toujours la même :</span> comprendre votre situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            Décrire votre situation (2 min)
          </Link>
        </div>
      </section>

      {/* 9) SIGNATURE */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8">
        <p className="text-lg font-semibold text-slate-900">
          Nous ne vendons pas du digital.{" "}
          <span className="text-slate-700">
            Nous aidons les entreprises ivoiriennes à fonctionner et évoluer grâce au digital.
          </span>
        </p>
      </section>

      {/* 10) CTA FINAL */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">On regarde votre cas, et on vous dit si c’est adapté.</h2>
            <p className="mt-1 text-white/75">
              Échange rapide, sans engagement. On vise une solution utile, pas un projet compliqué.
            </p>
          </div>
          <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
        </div>

        <div className="relative mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Décrire votre situation (2 min)
          </Link>

          <Link
            href="/realisations"
            className="inline-flex items-center justify-center text-sm font-semibold text-white/70 underline underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Consulter des exemples concrets
          </Link>
        </div>
      </section>
    </div>
  );
}