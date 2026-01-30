
import Link from "next/link";

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
      title: "Attirer",
      desc: "Être trouvé et contacté localement.",
      points: [
        "SEO local (Google + Maps)",
        "Fiche Google optimisée",
        "Pages simples, rapides, utiles",
      ],
      href: "/services/referencement-seo",
      accent: "blue",
      tag: "Visibilité",
    },
    {
      title: "Convertir",
      desc: "Transformer les visites en demandes.",
      points: [
        "Site clair orienté demandes",
        "Pages de vente (simples)",
        "Preuves & confiance (sans blabla)",
      ],
      href: "/services/creation-site-web",
      accent: "green",
      tag: "Demandes",
    },
    {
      title: "Structurer",
      desc: "Organiser l’activité sans Excel et WhatsApp.",
      points: [
        "Extranet / outil interne",
        "Suivi, organisation, automatisation",
        "Tableaux de bord lisibles",
      ],
      href: "/services/extranet-outils-gestion",
      accent: "green",
      tag: "Organisation",
    },
    {
      title: "Sécuriser",
      desc: "Conformité, FNE, données, continuité.",
      points: [
        "Interfaçage avec l’existant",
        "Conformité / sécurisation des données",
        "Continuité d’activité (zéro rupture)",
      ],
      href: "/services/conformite-fne",
      accent: "blue",
      tag: "Conformité",
    },
  ] as const;

  const firstItems = [items[0], items[1]] as const;
  const lastItems = [items[2], items[3]] as const;

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* HERO (continuité visuelle avec Home) */}
      <section className="reveal relative -mx-4 overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 px-6 py-12 text-white sm:-mx-6 md:px-10 md:py-14 lg:-mx-8">
        <div className="pointer-events-none absolute -left-24 -top-24 h-70 w-70 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="relative">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
                Services (4 besoins)
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Des solutions pensées pour des situations réelles
            </h1>

            <p className="max-w-2xl text-white/80 md:text-lg leading-relaxed">
              Choisissez un besoin ci-dessous. On cadre, puis on livre une V1 utile — sans bloquer l’activité.
            </p>

            <div className="inline-flex flex-col items-start gap-2">
              <Link
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Décrire votre situation (2 min)
              </Link>
              <div className="inline-flex w-fit px-5 text-sm font-semibold text-white/70">
                Réponse sous 24h — sans engagement
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SOLUTIONS */}
      <section id="solutions" className="reveal reveal-stagger space-y-8 scroll-mt-28">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Par où commencer ?
          </h2>
          <p className="max-w-2xl text-slate-600 md:text-lg leading-relaxed">
            Choisissez votre besoin principal — on vous dit par quoi commencer.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            Quel est votre cas aujourd’hui ? Cliquez sur le bloc qui vous ressemble le plus.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {firstItems.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className={`stagger-item card-wow group relative rounded-3xl border border-black/10 bg-white p-6 sm:p-7 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 hover:border-black/20`}
            >
              <div className="flex items-start gap-4">
                <ServiceIcon name={it.title} accent={it.accent} />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-lg font-bold text-slate-900">{it.title}</div>
                    <span
                      className={
                        it.accent === "green"
                          ? "inline-flex rounded-full bg-(--brand-green)/10 px-2.5 py-1 text-xs font-semibold text-(--brand-green)"
                          : "inline-flex rounded-full bg-(--brand-blue)/10 px-2.5 py-1 text-xs font-semibold text-(--brand-blue)"
                      }
                    >
                      {it.tag}
                    </span>
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
              <span className="mt-4 inline-flex click-hint">Découvrir →</span>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {lastItems.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className={`stagger-item card-wow group relative rounded-3xl border border-black/10 bg-white p-6 sm:p-7 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 hover:border-black/20`}
            >
              <div className="flex items-start gap-4">
                <ServiceIcon name={it.title} accent={it.accent} />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-lg font-bold text-slate-900">{it.title}</div>
                    <span
                      className={
                        it.accent === "green"
                          ? "inline-flex rounded-full bg-(--brand-green)/10 px-2.5 py-1 text-xs font-semibold text-(--brand-green)"
                          : "inline-flex rounded-full bg-(--brand-blue)/10 px-2.5 py-1 text-xs font-semibold text-(--brand-blue)"
                      }
                    >
                      {it.tag}
                    </span>
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
              <span className="mt-4 inline-flex click-hint">Découvrir →</span>
            </Link>
          ))}
        </div>

        {/* LEVIER DE CRÉDIBILITÉ (complément) */}
        <div className="stagger-item rounded-3xl border border-black/10 bg-slate-50 p-6 sm:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-(--brand-green)/10 text-(--brand-green)"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l1.2 4.6L18 8l-4.8 1.4L12 14l-1.2-4.6L6 8l4.8-1.4L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="text-sm font-semibold text-slate-900">Souvent nécessaire pour être crédible</div>
              </div>

              <div className="mt-2 text-sm text-slate-600">
                Identité visuelle &amp; supports — sans bling-bling.
              </div>
              <div className="mt-1 text-sm text-slate-600">Pour inspirer confiance dès le premier contact.</div>
            </div>

            <Link
              href="/services/identite-visuelle-supports"
              className="inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) underline decoration-(--brand-blue)/30 underline-offset-4 hover:decoration-(--brand-blue)/60 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Découvrir →
            </Link>
          </div>
        </div>

        {/* PROJECTION (via réalisations) */}
        <div className="stagger-item overflow-hidden rounded-3xl border border-black/10 bg-slate-50">
          <div className="px-6 py-5 sm:px-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">Vous voulez voir concrètement ?</div>
                <div className="mt-1 max-w-2xl text-sm text-slate-600">
                  Consultez nos réalisations : sites, supports et outils utiles — pour vous projeter simplement.
                </div>
              </div>

              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) underline decoration-(--brand-blue)/30 underline-offset-4 hover:decoration-(--brand-blue)/60 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                Voir nos réalisations →
              </Link>
            </div>
          </div>
        </div>

        <div className="stagger-item rounded-3xl border border-black/10 bg-slate-50 p-6 sm:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">Vous hésitez entre plusieurs solutions ?</div>
              <div className="mt-1 text-sm text-slate-600">
                Décrivez votre situation en 2 minutes — on vous dit par où commencer.
              </div>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue) underline decoration-(--brand-blue)/30 underline-offset-4 hover:decoration-(--brand-blue)/60 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                Décrire votre situation (2 min) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS EXPLICATIVES (mobile = accordéons) */}
      <div className="md:hidden space-y-4">
        <details className="rounded-3xl border border-black/10 bg-slate-50">
          <summary className="cursor-pointer list-none px-7 py-5 text-sm font-semibold text-slate-900">
            Cadre déjà appliqué
          </summary>
          <div className="px-7 pb-7 pt-0">
            <div className="text-sm font-semibold text-slate-900">
              Cadre déjà appliqué sur des sites, des outils internes et des prototypes utilisés au quotidien en Côte d’Ivoire.
            </div>
            <div className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
              Le but : un outil utile, clair, adopté par l’équipe.
            </div>
          </div>
        </details>

        <details className="rounded-3xl border border-black/10 bg-slate-50">
          <summary className="cursor-pointer list-none px-7 py-5 text-sm font-semibold text-slate-900">
            À retenir
          </summary>
          <div className="px-7 pb-7 pt-0">
            <div className="text-xl font-extrabold tracking-tight text-slate-900">
              Même objectif : des demandes + moins de stress au quotidien.
            </div>
            <div className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
              Services = le cadre. On l’applique à votre secteur et à votre réalité terrain. V1 utile rapidement, continuité d’activité, puis optimisation — sans complexifier l’existant.
            </div>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="text-sm font-semibold text-slate-900">Un point d’entrée clair</div>
                <div className="mt-1 text-sm text-slate-600">Votre situation → notre cadre → V1 utile</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="text-sm font-semibold text-slate-900">Un objectif concret</div>
                <div className="mt-1 text-sm text-slate-600">Demandes, clarté, organisation au quotidien</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="text-sm font-semibold text-slate-900">Zéro rupture</div>
                <div className="mt-1 text-sm text-slate-600">On améliore sans bloquer l’activité</div>
              </div>
            </div>

            <div className="mt-5 text-xs font-semibold text-slate-500">V1 rapide • continuité d’activité • optimisation concrète</div>
          </div>
        </details>

        <details className="rounded-3xl border border-black/10 bg-white">
          <summary className="cursor-pointer list-none px-7 py-5 text-sm font-semibold text-slate-900">
            Comment on intervient
          </summary>
          <div className="px-7 pb-7 pt-0">
            <p className="text-slate-600 leading-relaxed">
              Pas de projets interminables. On avance par étapes, avec une V1 utile rapidement.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                { n: "01", t: "On comprend votre réalité", d: "Objectifs, contraintes, outils déjà en place." },
                { n: "02", t: "On livre une V1 utile", d: "Simple, claire, utilisable par votre équipe." },
                { n: "03", t: "On ajuste & on sécurise", d: "Optimisation, suivi, continuité d’activité." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-black/10 bg-slate-50 p-5">
                  <div className="text-xs font-extrabold text-slate-500">{s.n}</div>
                  <div className="mt-1 font-semibold text-slate-900">{s.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>

      {/* SECTIONS EXPLICATIVES (desktop = visibles) */}
      <div className="hidden md:block space-y-20 sm:space-y-24">
        <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-7 sm:p-8">
          <div className="text-sm font-semibold text-slate-900">
            Cadre déjà appliqué sur des sites, des outils internes et des prototypes utilisés au quotidien en Côte d’Ivoire.
          </div>
          <div className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
            Le but : un outil utile, clair, adopté par l’équipe.
          </div>
        </section>

        {/* À RETENIR (après le choix) */}
        <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-7 sm:p-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-500">À retenir</div>
            <div className="text-xl font-extrabold tracking-tight text-slate-900">
              Même objectif : des demandes + moins de stress au quotidien.
            </div>
            <div className="max-w-3xl text-sm leading-relaxed text-slate-600">
              Services = le cadre. On l’applique à votre secteur et à votre réalité terrain.
              V1 utile rapidement, continuité d’activité, puis optimisation — sans complexifier l’existant.
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Un point d’entrée clair</div>
              <div className="mt-1 text-sm text-slate-600">Votre situation → notre cadre → V1 utile</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Un objectif concret</div>
              <div className="mt-1 text-sm text-slate-600">Demandes, clarté, organisation au quotidien</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Zéro rupture</div>
              <div className="mt-1 text-sm text-slate-600">On améliore sans bloquer l’activité</div>
            </div>
          </div>

          <div className="mt-6 text-xs font-semibold text-slate-500">
            V1 rapide • continuité d’activité • optimisation concrète
          </div>
        </section>

        {/* COMMENT ON INTERVIENT */}
        <section className="reveal reveal-stagger space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Comment on intervient
            </h2>
            <p className="text-slate-600 md:text-lg leading-relaxed">
              Pas de projets interminables. On avance par étapes, avec une V1 utile rapidement.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "On comprend votre réalité",
                  d: "Objectifs, contraintes, outils déjà en place.",
                },
                {
                  n: "02",
                  t: "On livre une V1 utile",
                  d: "Simple, claire, utilisable par votre équipe.",
                },
                {
                  n: "03",
                  t: "On ajuste & on sécurise",
                  d: "Optimisation, suivi, continuité d’activité.",
                },
              ].map((s) => (
                <div key={s.n} className="stagger-item rounded-2xl border border-black/10 bg-slate-50 p-4 sm:p-5">
                  <div className="text-xs font-extrabold text-slate-500">{s.n}</div>
                  <div className="mt-1 font-semibold text-slate-900">{s.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA FINAL */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 sm:p-10 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              On regarde votre cas, et on vous dit si c’est adapté.
            </h2>
            <p className="max-w-2xl text-white/75 md:text-lg leading-relaxed">
              Échange rapide, sans engagement. On vise une solution utile, pas un projet compliqué.
            </p>
          </div>
          <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
        </div>

        <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950"
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
  );
}
