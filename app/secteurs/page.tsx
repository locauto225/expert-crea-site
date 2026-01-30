import Link from "next/link";

export default function SecteursPage() {
  const items = [
    {
      title: "Hôtels & tourisme",
      desc: "Pour augmenter les réservations directes et être trouvé localement.",
      points: [
        "SEO local (Google + Maps)",
        "Pages claires orientées demandes",
        "WhatsApp / réservation simple",
      ],
      href: "/secteurs/hotels-tourisme",
      accent: "blue",
    },
    {
      title: "Pharmacies & santé",
      desc: "Pour inspirer confiance et structurer l’information utile aux clients.",
      points: [
        "Visibilité Google Maps",
        "Catalogue / infos claires",
        "Organisation & suivi simples",
      ],
      href: "/secteurs/pharmacies-sante",
      accent: "green",
    },
    {
      title: "PME & commerces",
      desc: "Pour générer des demandes et gagner du temps au quotidien.",
      points: [
        "Site crédible qui convertit",
        "Présence locale solide",
        "Outils simples (si besoin)",
      ],
      href: "/secteurs/pme-commerces",
      accent: "blue",
    },
  ] as const;

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* HERO (Secteurs) — court, sobre, cohérent */}
      <section className="reveal relative -mx-4 overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 px-6 py-10 text-white sm:-mx-6 md:px-10 md:py-12 lg:-mx-8">
        <div className="relative">
          <div className="max-w-3xl space-y-5">
            {/* Label (même signature que les autres pages) */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
                Secteurs (exemples)
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Des solutions adaptées à votre activité
            </h1>

            <p className="max-w-2xl text-white/80 md:text-lg leading-relaxed">
              Ces secteurs sont des exemples. Notre méthode s’adapte à votre réalité — sans complexifier
              l’existant.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                Décrire votre situation (2 min)
              </Link>
              <p className="text-xs font-semibold leading-none text-white/70">
                Réponse sous 24h — sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* PREUVE DE MÉTHODE (densité visuelle, sans blabla) */}
      <section className="reveal space-y-6">
        <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-slate-900">Une méthode qui s’adapte</div>
              <div className="max-w-2xl text-sm leading-relaxed text-slate-600">
                On ne vend pas un modèle figé par secteur. On part de votre réalité, puis on applique un cadre simple
                (V1 utile → adoption → optimisation).
              </div>
            </div>
            <div className="text-sm font-semibold text-slate-600">Clair • utile • adopté</div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Diagnostic terrain",
                d: "Objectifs, contraintes, parcours client, organisation interne.",
              },
              {
                t: "V1 utile rapidement",
                d: "Une base simple, claire, utilisable tout de suite.",
              },
              {
                t: "Ajustement & continuité",
                d: "On améliore selon l’usage réel, sans rupture.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-slate-50 p-4 sm:p-5">
                <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                <div className="mt-1 text-sm leading-relaxed text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Vous ne vous retrouvez pas exactement dans un secteur ?</div>
            <div className="mt-1 text-sm leading-relaxed text-slate-600">
              Décrivez votre situation — on vous répond clairement sur ce qu’on peut mettre en place.
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                Décrire votre situation (2 min)
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LISTE SECTEURS */}
      <section id="exemples" className="reveal reveal-stagger space-y-8 scroll-mt-28">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Exemples de secteurs</h2>
          <p className="max-w-2xl text-slate-600 md:text-lg leading-relaxed">
            Choisissez le plus proche de votre activité — on vous montre comment on adapte la méthode.
          </p>
          <a
            href="#exemples"
            className="inline-flex items-center text-sm font-semibold text-slate-600 underline decoration-slate-400/30 underline-offset-4 hover:text-slate-900 hover:decoration-slate-400/50"
          >
            Voir des exemples ↓
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
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

        
      </section>

      {/* CTA FINAL (même style que Services) */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 sm:p-10 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              On vous propose le bon cadre pour votre activité.
            </h2>
            <p className="max-w-2xl text-white/75 md:text-lg leading-relaxed">
              Échange rapide, sans engagement. On vise une solution utile et adoptée, pas un projet compliqué.
            </p>
          </div>
          <div className="text-sm font-semibold text-white/70">Réponse sous 24h — sans engagement</div>
        </div>

        <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Décrire votre situation (2 min)
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Revoir les services
          </Link>
        </div>
      </section>
    </div>
  );
}