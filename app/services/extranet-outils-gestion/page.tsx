import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Outils métiers sur mesure (extranet, intranet & apps web/mobile) — Côte d’Ivoire",
  description:
    "Outils métiers sur mesure : extranet/intranet, dashboards, suivi des projets, gestion documentaire, automatisations, apps web ou mobile. Organisez vos informations et gagnez du temps. Basés en Côte d’Ivoire, projets partout.",
  alternates: {
    canonical: `${site.url}/services/extranet-outils-gestion`,
  },
  openGraph: {
    title: "Outils métiers sur mesure — EXPERT CRÉA",
    description:
      "Outils métiers sur mesure (extranet/intranet, dashboards, suivi, documents, automatisations, apps web ou mobile) pour mieux s’organiser et gagner du temps.",
    url: `${site.url}/services/extranet-outils-gestion`,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
};

const faqs = [
  {
    q: "C’est quoi un outil métier ?",
    a: "Un outil métier est une solution numérique adaptée à votre façon de travailler (extranet, intranet ou application web/mobile). Il sert à centraliser les informations, suivre l’activité et sécuriser les accès. Par exemple, un extranet est un espace sécurisé en ligne pour partager documents et suivi avec l’équipe, des clients ou des partenaires.",
  },
  {
    q: "Est-ce que mon équipe pourra l’utiliser facilement ?",
    a: "Oui. On conçoit une interface simple, adaptée au terrain, puis on accompagne la prise en main. L’objectif n’est pas seulement de créer l’outil, mais de garantir son adoption.",
  },
  {
    q: "On peut démarrer petit et évoluer ensuite ?",
    a: "Oui. On peut lancer une V1 (ex : suivi + documents + tableau de bord) puis ajouter progressivement des modules : facturation, demandes, reporting, automatisations, etc.",
  },
  {
    q: "Est-ce sécurisé ?",
    a: "On met en place une authentification, des droits d’accès par rôles, et une organisation claire des données. La sécurité est intégrée dès la conception.",
  },
  {
    q: "Quels types d’entreprises ont besoin de ça ?",
    a: "PME, hôtels, pharmacies, cabinets, distributeurs, entreprises avec beaucoup de documents, d’échanges WhatsApp, de suivi de commandes/projets ou d’équipes terrain.",
  },
];

export default function ExtranetOutilsGestionPage() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite mettre en place un outil métier sur mesure (extranet/intranet, web ou mobile) pour mieux organiser mon activité. Pouvez-vous me proposer un plan et une estimation ?"
  );
  const wa = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  // ✅ BreadcrumbList (URLs absolues)
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

  // ✅ Service schema enrichi
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outils métiers sur mesure (extranet, intranet & apps web/mobile)",
    serviceType:
      "Outils métiers sur mesure : extranet/intranet sécurisé, dashboards, gestion documentaire, suivi de projets, automatisations, applications web ou mobile",
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      telephone: site.phoneDisplay,
    },
    areaServed: {
      "@type": "Country",
      name: "Côte d’Ivoire",
    },
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
    <div className="space-y-16">
      {/* ✅ Breadcrumbs */}
      <Breadcrumbs
        className="mb-2"
        items={[
          { label: "Services", href: "/services" },
          { label: "Outils métiers", href: "/services/extranet-outils-gestion" },
        ]}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            Service • Outils métiers • Extranet / Intranet • Automatisation
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Outils métiers sur mesure
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Centralisez vos informations, suivez vos opérations et faites gagner du temps à votre équipe. Extranet, intranet ou application (web ou mobile) : un outil simple, sécurisé et adapté à votre activité — avec accompagnement pour une adoption réelle.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Accessible sur ordinateur et mobile, selon vos usages terrain.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Décrire mon fonctionnement actuel
            </Link>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              WhatsApp (réponse rapide)
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Organisation</div>
              <div className="text-sm text-slate-600">Documents</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Pilotage</div>
              <div className="text-sm text-slate-600">Suivi</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">Sécurité</div>
              <div className="text-sm text-slate-600">Accès & rôles</div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI EXCEL/WHATSAPP NE SUFFISENT PLUS */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8 md:p-10">
        <h2 className="text-xl font-bold md:text-2xl">
          Quand l’activité grandit, les outils bricolés deviennent un frein
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600 md:text-lg leading-relaxed">
          Au début, Excel, WhatsApp et les mails suffisent. Mais dès que l’activité se structure, ces outils créent des pertes d’informations,
          des erreurs, des doublons — et beaucoup de stress.
        </p>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
          En Côte d’Ivoire, beaucoup d’entreprises fonctionnent encore avec des outils dispersés, sans visibilité globale.
          Résultat : on passe plus de temps à chercher qu’à piloter.
        </p>
      </section>

      {/* PROBLÈMES */}
      <section className="reveal grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">
            Signes que vous avez besoin d’un outil de gestion
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Informations dispersées (WhatsApp, mails, fichiers partout)</li>
            <li>Suivi difficile (projets, commandes, demandes, équipes)</li>
            <li>Perte de documents / erreurs / retards</li>
            <li>Pas de visibilité sur l’activité (chiffres, alertes, priorités)</li>
            <li>Trop de temps perdu à “chercher” au lieu d’exécuter</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 p-8">
          <h2 className="text-xl font-bold">Notre approche</h2>
          <p className="mt-3 text-slate-600">
            On démarre par une V1 utile (le cœur), puis on ajoute des modules.
            Le but : un outil simple, que l’équipe utilise vraiment, avec des
            droits d’accès et un suivi clair.
          </p>

          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <span className="font-semibold">Important :</span> on accompagne la
            prise en main et l’adoption, pas seulement la création.
          </div>
        </div>
      </section>

      {/* POUR QUI (cadrage) */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <h2 className="text-xl font-bold md:text-2xl">Ce type d’outil est particulièrement adapté si :</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 md:text-lg leading-relaxed">
          <li>votre équipe échange beaucoup par WhatsApp ou mails</li>
          <li>vous gérez des documents, demandes, commandes ou projets</li>
          <li>vous manquez de visibilité sur l’activité en temps réel</li>
          <li>vous voulez sécuriser l’information et éviter les pertes</li>
          <li>vous cherchez un outil simple, pas un logiciel compliqué</li>
        </ul>
        <div className="mt-5 rounded-2xl border border-black/10 bg-slate-50 p-4 text-sm text-slate-700">
          <span className="font-semibold">À savoir :</span> si vous cherchez une solution toute faite « clé en main » sans adaptation,
          ou un logiciel très complexe, ce n’est probablement pas le bon choix.
        </div>
      </section>

      {/* LIVRABLES */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Ce que vous obtenez</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Espace sécurisé</div>
            <p className="mt-2 text-sm text-slate-600">
              Connexion, rôles (admin/équipe/partenaire), droits d’accès.
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Tableau de bord</div>
            <p className="mt-2 text-sm text-slate-600">
              KPIs, alertes, tâches prioritaires, vue globale de l’activité.
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Gestion documentaire</div>
            <p className="mt-2 text-sm text-slate-600">
              Documents classés, recherche, historique, partage contrôlé.
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Suivi (projets / demandes)</div>
            <p className="mt-2 text-sm text-slate-600">
              Statuts, responsables, commentaires, deadlines, notifications.
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Automatisations</div>
            <p className="mt-2 text-sm text-slate-600">
              Rappels, exports, rapports, formulaires, intégrations selon besoin.
            </p>
          </div>

          <div className="stagger-item rounded-2xl border border-black/10 p-5">
            <div className="font-semibold">Accompagnement</div>
            <p className="mt-2 text-sm text-slate-600">
              Onboarding, guides, ajustements, support et optimisation.
            </p>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">Méthode</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Diagnostic", "Comprendre les flux, besoins, priorités."],
            ["Cadrage", "Modules V1, règles, rôles, parcours."],
            ["Développement", "Interface + sécurité + tests."],
            ["Déploiement", "Formation, adoption, évolutions."],
          ].map(([t, d]) => (
            <div key={t} className="stagger-item rounded-2xl border border-black/10 p-4">
              <div className="text-sm font-semibold">{t}</div>
              <div className="text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal reveal-stagger rounded-3xl border border-black/10 p-8">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="stagger-item rounded-2xl border border-black/10 p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8">
        <h2 className="text-xl font-bold">Parlons de votre besoin</h2>
        <p className="mt-2 text-slate-600">
          Dites-nous votre activité et vos priorités. On vous propose une V1 utile
          et un plan d’évolution clair.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Décrire mon fonctionnement actuel
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </div>
  );
}