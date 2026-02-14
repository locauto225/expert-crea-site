import Link from "next/link";
import { Container } from "@/components/Container";

function ServiceIcon({
  name,
  accent,
}: {
  name: string;
  accent: "blue" | "green";
}) {
  const colorClass = accent === "green" ? "text-(--brand-green)" : "text-(--brand-blue)";
  const bgClass = accent === "green" ? "bg-(--brand-green)/10" : "bg-(--brand-blue)/10";

  const common = `inline-flex h-10 w-10 items-center justify-center rounded-2xl ${bgClass} ${colorClass}`;

  // Minimal inline icons (no external deps)
  if (name === "Attirer") {
    return (
      <span className={common} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  }

  if (name === "Convertir") {
    return (
      <span className={common} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3l1.6 5.1H19l-4.2 3 1.6 5.1L12 13.2 7.6 16.2 9.2 11 5 8.1h5.4L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    );
  }

  if (name === "Structurer") {
    return (
      <span className={common} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h7v7H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M13 4h7v7h-7V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M4 13h7v7H4v-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M13 13h7v7h-7v-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  }

  // "Sécuriser" (default)
  return (
    <span className={common} aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}


export default function ServicesPage() {
  const items = [
    {
      problem: "On ne nous trouve pas sur Google",
      label: "Attirer",
      desc: "Visibilité locale, crédibilité, image de marque — pour que les clients vous trouvent avant vos concurrents.",
      points: [
        "SEO local (Google + Maps)",
        "Fiche Google optimisée",
        "Pages simples, rapides, utiles",
        "Charte graphique & supports de communication",
      ],
      href: "/services/referencement-seo",
      accent: "blue",
      delai: "V1 en 2-3 semaines",
    },
    {
      problem: "On a un site, mais il ne rapporte rien",
      label: "Convertir",
      desc: "Un site pensé pour transformer les visiteurs en demandes concrètes — pas juste une vitrine.",
      points: [
        "Site clair orienté demandes",
        "Pages de vente (simples)",
        "Preuves & confiance (sans blabla)",
      ],
      href: "/services/creation-site-web",
      accent: "green",
      delai: "V1 en 3-4 semaines",
    },
    {
      problem: "On perd du temps, tout est manuel",
      label: "Structurer",
      desc: "Outils internes, extranet, automatisations — pour remplacer Excel et WhatsApp.",
      points: [
        "Extranet / outil interne",
        "Suivi, organisation, automatisation",
        "Tableaux de bord lisibles",
      ],
      href: "/services/extranet-outils-gestion",
      accent: "green",
      delai: "V1 en 4-6 semaines",
    },
    {
      problem: "La conformité nous inquiète",
      label: "Sécuriser",
      desc: "Interfaçage, FNE, données — on vous met en règle sans bloquer l’activité.",
      points: [
        "Interfaçage avec l’existant",
        "Conformité / sécurisation des données",
        "Continuité d’activité (zéro rupture)",
      ],
      href: "/services/conformite-fne",
      accent: "blue",
      delai: "V1 en 2-4 semaines",
    },
  ] as const;

  return (
    <Container>
    <div className="space-y-20 py-8 sm:space-y-24 sm:py-12">

      {/* HERO + CARDS */}
      <section id="solutions" className="reveal reveal-stagger space-y-10 scroll-mt-28">
        <div className="space-y-4">
          <div className="text-sm font-semibold text-slate-400">Services</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Quel problème vous coûte le plus&nbsp;aujourd&apos;hui&nbsp;?
          </h1>
          <p className="prose-container-left text-slate-600 md:text-lg leading-relaxed">
            Choisissez votre situation — on vous montre exactement ce qu&apos;on met en place, puis on livre une V1 utile sans bloquer l&apos;activité.
          </p>
        </div>

        {/* Grille 2×2 des 4 services */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              className={`stagger-item card-3d-enhanced group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-7 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 hover:border-black/20`}
            >
              {/* Accent left border */}
              <span
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl ${
                  it.accent === "green" ? "bg-(--brand-green)" : "bg-(--brand-blue)"
                }`}
                aria-hidden="true"
              />
              <div className="flex items-start gap-4">
                <ServiceIcon name={it.label} accent={it.accent} />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-base font-bold text-slate-900 sm:text-lg">{it.problem}</div>
                    <span className="text-xs font-semibold text-slate-400">{it.label}</span>
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-slate-600">{it.desc}</div>
                </div>
              </div>

              <ul className="mt-5 hidden sm:block space-y-2 text-sm text-slate-700">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-300" />
                    <span className="leading-6">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{it.delai}</span>
                <span className="inline-flex click-hint">Découvrir</span>
              </div>
            </Link>
          ))}
        </div>


        {/* BADGES DE RÉASSURANCE */}
        <div className="stagger-item flex flex-wrap gap-3 justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            <svg className="h-4 w-4 text-(--brand-green)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Devis clair en 24h
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            <svg className="h-4 w-4 text-(--brand-blue)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
            </svg>
            V1 rapide (2-6 semaines)
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            <svg className="h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
              <path d="M9 12l2 2 4-5" />
            </svg>
            Sans bloquer l&apos;activité
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            <svg className="h-4 w-4 text-(--brand-green)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m22 7-8.5 8.5-5-5L2 17" />
              <path d="M16 7h6v6" />
            </svg>
            Optimisation continue
          </div>
        </div>
      </section>


      {/* TABLEAU COMPARATIF */}
      <section className="reveal space-y-6">
        
        <div className="prose-container-left">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Comparatif rapide
          </h2>
          <p className="mt-2 text-slate-600">
            Pour vous aider à choisir le service adapté à votre situation.
          </p>
        </div>

        {/* Tableau = pleine largeur */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px] rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
            <div className="grid grid-cols-5 gap-4">
              
              {/* Header */}
              <div className="col-span-1"></div>
              <div className="text-center rounded-2xl bg-(--brand-blue)/5 p-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-blue)/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
                    <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-bold text-slate-900">Attirer</div>
              </div>
              <div className="text-center rounded-2xl bg-(--brand-green)/5 p-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-green)/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3l1.6 5.1H19l-4.2 3 1.6 5.1L12 13.2 7.6 16.2 9.2 11 5 8.1h5.4L12 3Z" />
                    <path d="M4 21h16" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-bold text-slate-900">Convertir</div>
              </div>
              <div className="text-center rounded-2xl bg-(--brand-green)/5 p-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-green)/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h7v7H4V4Z" />
                    <path d="M13 4h7v7h-7V4Z" />
                    <path d="M4 13h7v7H4v-7Z" />
                    <path d="M13 13h7v7h-7v-7Z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-bold text-slate-900">Structurer</div>
              </div>
              <div className="text-center rounded-2xl bg-(--brand-blue)/5 p-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-blue)/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
                    <path d="M9 12l2 2 4-5" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-bold text-slate-900">Sécuriser</div>
              </div>

              {/* Séparateur */}
              <div className="col-span-5 my-2 h-px bg-slate-200"></div>

              {/* Ligne 1: Délai V1 */}
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <svg className="mr-2 h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Délai V1
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-sm font-semibold text-slate-900">2-3 sem</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-sm font-semibold text-slate-900">3-4 sem</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-sm font-semibold text-slate-900">4-6 sem</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-sm font-semibold text-slate-900">2-4 sem</div>

              {/* Ligne 2: Objectif */}
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <svg className="mr-2 h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                </svg>
                Objectif
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Être trouvé localement</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Générer des demandes</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Organiser l&apos;activité</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Conformité & sécurité</div>

              {/* Ligne 3: Pour qui */}
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <svg className="mr-2 h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Pour qui ?
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">TPE/PME locales</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Sites existants peu efficaces</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Croissance & désorganisation</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Gros contrats & FNE</div>

              {/* Ligne 4: Outils */}
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <svg className="mr-2 h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Outils
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">SEO • Maps • Site</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Site • Identité • Supports</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Extranet • Suivi • Auto</div>
              <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-600">Interface • Conformité</div>

            </div>

            {/* Note bas de tableau */}
            <div className="mt-6 flex items-start gap-2 rounded-xl bg-slate-50 p-4">
              <svg className="mt-0.5 h-5 w-5 flex-none text-(--brand-blue)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Besoin de plusieurs services ?</span> Ils sont conçus pour fonctionner ensemble. Contactez-nous pour un devis combiné adapté à votre situation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal space-y-6">
        <div className="prose-container-left">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Questions fréquentes
          </h2>
          <p className="mt-2 text-slate-600">
            Réponses aux questions les plus posées sur nos services.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl">
          <details className="group rounded-2xl border border-black/10 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-6 text-base font-bold text-slate-900 hover:text-(--brand-blue) transition-colors">
              Comment choisir entre vos différents services ?
              <svg className="h-5 w-5 rotate-90 transition-transform group-open:rotate-[-90deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </summary>
            <div className="border-t border-slate-100 p-6 pt-4">
              <p className="text-slate-600">
                Identifiez votre priorité : besoin de visibilité (Attirer), de conversions (Convertir), d&apos;organisation (Structurer) ou de conformité (Sécuriser). Contactez-nous si vous hésitez, on vous guide.
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-black/10 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-6 text-base font-bold text-slate-900 hover:text-(--brand-blue) transition-colors">
              Quels sont vos délais de livraison ?
              <svg className="h-5 w-5 rotate-90 transition-transform group-open:rotate-[-90deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </summary>
            <div className="border-t border-slate-100 p-6 pt-4">
              <p className="text-slate-600">
                Nous livrons une V1 utile en 2 à 6 semaines selon le service. L&apos;objectif est d&apos;avoir quelque chose d&apos;opérationnel rapidement, puis d&apos;optimiser en continu.
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-black/10 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-6 text-base font-bold text-slate-900 hover:text-(--brand-blue) transition-colors">
              Combien coûtent vos services ?
              <svg className="h-5 w-5 rotate-90 transition-transform group-open:rotate-[-90deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </summary>
            <div className="border-t border-slate-100 p-6 pt-4">
              <p className="text-slate-600">
                Chaque projet est différent. Nous vous envoyons un devis clair en 24h après échange. Nos tarifs sont adaptés au marché ivoirien et nous proposons des paiements échelonnés.
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-black/10 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-6 text-base font-bold text-slate-900 hover:text-(--brand-blue) transition-colors">
              Est-ce que je peux combiner plusieurs services ?
              <svg className="h-5 w-5 rotate-90 transition-transform group-open:rotate-[-90deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </summary>
            <div className="border-t border-slate-100 p-6 pt-4">
              <p className="text-slate-600">
                Oui ! Nos services sont conçus pour fonctionner ensemble. Par exemple : Attirer + Convertir, ou Structurer + Sécuriser. Nous vous proposons la meilleure combinaison selon vos besoins.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 sm:p-10 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/18 blur-3xl animate-pulse-slow" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(0,145,255,0.2) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,200,120,0.15) 0, transparent 50%)" }} />

        <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          
          <div className="prose-container-left space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              On regarde votre cas, et on vous dit si c&apos;est adapté.
            </h2>
            <p className="text-white/75 md:text-lg leading-relaxed">
              Échange rapide, sans engagement. On vise une solution utile, pas un projet compliqué.
            </p>
          </div>
          <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
        </div>

        <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
          >
            Décrire votre situation (2 min)
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Voir nos réalisations
          </Link>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Revoir les solutions
          </a>
        </div>
      </section>
    </div>
    </Container>
  );
}