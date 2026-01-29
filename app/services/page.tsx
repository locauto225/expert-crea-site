import Link from "next/link";

export default function ServicesPage() {
  const items = [
    {
      title: "Être trouvé et contacté",
      desc: "Pour les entreprises visibles… mais jamais appelées.",
      points: [
        "SEO local (Google + Maps)",
        "Site clair orienté demandes",
        "Pages simples, rapides, utiles",
      ],
      href: "/services/referencement-seo",
      accent: "blue",
    },
    {
      title: "Structurer l’activité",
      desc: "Pour arrêter Excel, WhatsApp et les informations perdues.",
      points: [
        "Extranet / outil interne",
        "Suivi, organisation, automatisation",
        "Tableaux de bord lisibles",
      ],
      href: "/services/extranet-outils-gestion",
      accent: "green",
    },
    {
      title: "Se mettre en conformité sans stress",
      desc: "Pour continuer à travailler sereinement, sans blocage.",
      points: [
        "Interfaçage avec l’existant",
        "Conformité / sécurisation des données",
        "Continuité d’activité (zéro rupture)",
      ],
      href: "/services/conformite-fne",
      accent: "blue",
    },
    {
      title: "Renforcer la crédibilité",
      desc: "Pour inspirer confiance dès le premier contact.",
      points: [
        "Identité visuelle & supports",
        "Cohérence print / digital",
        "Image professionnelle simple",
      ],
      href: "/services/identite-visuelle-supports",
      accent: "green",
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
                Services (par besoin)
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Des solutions pensées pour des situations réelles
            </h1>

            <p className="max-w-2xl text-white/80 md:text-lg leading-relaxed">
              Vous décrivez votre réalité. Nous cadrons, puis on livre une V1 utile — sans bloquer l’activité.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Voir les solutions
              </a>

              <a
                href="#diagnostic"
                className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Décrire ma situation
              </a>
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
            Choisissez ce qui ressemble le plus à votre situation — on vous dit par quoi commencer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {firstItems.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="stagger-item card-wow group rounded-3xl border border-black/10 bg-white p-6 sm:p-7 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-slate-900">{it.title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-slate-600">{it.desc}</div>
                </div>

                <span
                  className={`mt-0.5 inline-flex rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset transition md:opacity-90 group-hover:opacity-100 ${
                    it.accent === "green"
                      ? "bg-(--brand-green)/10 text-(--brand-green) ring-(--brand-green)/25"
                      : "bg-(--brand-blue)/10 text-(--brand-blue) ring-(--brand-blue)/25"
                  }`}
                >
                  Voir →
                </span>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-300" />
                    <span className="leading-6">{p}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {lastItems.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="stagger-item card-wow group rounded-3xl border border-black/10 bg-white p-6 sm:p-7 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-slate-900">{it.title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-slate-600">{it.desc}</div>
                </div>

                <span
                  className={`mt-0.5 inline-flex rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset transition md:opacity-90 group-hover:opacity-100 ${
                    it.accent === "green"
                      ? "bg-(--brand-green)/10 text-(--brand-green) ring-(--brand-green)/25"
                      : "bg-(--brand-blue)/10 text-(--brand-blue) ring-(--brand-blue)/25"
                  }`}
                >
                  Voir →
                </span>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-300" />
                    <span className="leading-6">{p}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="stagger-item rounded-3xl border border-black/10 bg-slate-50 p-6 sm:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">Vous hésitez entre plusieurs solutions ?</div>
              <div className="mt-1 text-sm text-slate-600">
                Décrivez votre situation en 2 minutes — on vous dit par où commencer.
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href="#diagnostic"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                Décrire ma situation (2 min)
              </a>
              <Link
                href="/contact?channel=whatsapp"
                className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 hover:decoration-slate-400 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                WhatsApp (réponse rapide)
              </Link>
            </div>
          </div>
        </div>

        <div className="stagger-item rounded-3xl border border-black/10 bg-slate-50 p-7 sm:p-8">
          <div className="text-sm font-semibold text-slate-900">
            Cadre déjà appliqué sur des sites, des outils internes et des prototypes utilisés au quotidien en Côte d’Ivoire.
          </div>
          <div className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
            Le but : un outil utile, clair, adopté par l’équipe.
          </div>
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

      {/* DIAGNOSTIC (capture le CTA du hero, sans sortir de la page) */}
      <section id="diagnostic" className="reveal space-y-8 scroll-mt-28">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Décrivez votre situation (2 minutes)
          </h2>
          <p className="text-slate-600 md:text-lg leading-relaxed">
            On vous répond avec un cadrage clair : ce qui est prioritaire, ce qui est optionnel, et la meilleure première étape.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Votre objectif",
              d: "Plus de demandes, plus de clarté, conformité, organisation…",
            },
            {
              t: "Votre contexte",
              d: "Ville/quartier, secteur, équipe, outils déjà en place.",
            },
            {
              t: "Vos contraintes",
              d: "Délais, budget, continuité d’activité, priorités.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">{x.t}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-black/10 bg-slate-50 p-7 sm:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-slate-900">
                Zéro pression : on vous dit si c’est adapté, et par quoi commencer.
              </div>
              <div className="text-sm text-slate-600">
                Vous pouvez aussi passer par WhatsApp pour un échange rapide.
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                Décrire ma situation
              </Link>
              <Link
                href="/contact?channel=whatsapp"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                WhatsApp (réponse rapide)
              </Link>
            </div>
          </div>

          <div className="mt-4 text-xs font-semibold text-slate-500">
            Conseil : commencez par les objectifs et la zone (ville/quartier) — on s’occupe du reste.
          </div>
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
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-green) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-green) focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Parler de votre situation
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Voir des réalisations
          </Link>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Revoir les solutions (par besoin)
          </a>
        </div>
      </section>
    </div>
  );
}
