import Link from "next/link";

export default function AvisPage() {
  const testimonials = [
    {
      name: "Client (démo)",
      role: "Dirigeant • Hôtel",
      quote:
        "Présentation claire et crédible. Le parcours WhatsApp est simple et on sait exactement quoi améliorer pour générer des demandes.",
    },
    {
      name: "Client (démo)",
      role: "Responsable • PME",
      quote:
        "Proposition structurée : étapes, livrables, délai. C’est sérieux et rassurant dès le premier échange.",
    },
    {
      name: "Client (démo)",
      role: "Gestion • Activité de services",
      quote:
        "Le tableau de bord et l’organisation des infos font gagner du temps. On évite les oublis et on voit les priorités.",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* HERO (même famille que les pages Services) */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-50 via-white to-white p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-65 w-65 rounded-full bg-(--brand-blue)/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/7 blur-3xl" />

        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Avis & retours d’expérience
            </span>
            <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Côte d’Ivoire • terrain & efficacité
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Des retours concrets, sans mise en scène
          </h1>

          <p className="max-w-2xl text-slate-600 md:text-lg leading-relaxed">
            Au départ, certains avis peuvent être issus de démonstrations, tests ou projets pilotes.
            Ils seront remplacés progressivement par des avis clients réels, au fil des collaborations.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Parler de votre situation
            </Link>
            <Link
              href="#avis"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
            >
              Voir les avis
            </Link>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
            <div className="text-xs font-semibold tracking-wide text-slate-500">Phase de démarrage</div>
            <div className="mt-1 text-sm text-slate-700">
              L’objectif est simple : des retours utiles, qui parlent de clarté, de méthode et de résultats concrets.
            </div>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section id="avis" className="reveal reveal-stagger space-y-6 scroll-mt-28">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Avis (exemples)</h2>
          <p className="max-w-2xl text-slate-600 md:text-lg leading-relaxed">
            Courts, concrets, orientés usage. Ils seront remplacés au fur et à mesure par des avis clients vérifiés.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="stagger-item rounded-3xl border border-black/10 bg-white p-6 card-soft"
            >
              <div className="text-sm font-semibold text-slate-900">{t.name}</div>
              <div className="text-xs font-semibold tracking-wide text-slate-500">{t.role}</div>
              <div className="mt-3 text-sm leading-relaxed text-slate-700">“{t.quote}”</div>
            </div>
          ))}
        </div>
      </section>

      {/* LAISSER UN AVIS */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-7 sm:p-8">
        <div className="text-sm font-semibold text-slate-900">Laisser un avis</div>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-600">
          Quand la fiche Google Business sera prête, on ajoutera ici un lien direct “Laisser un avis Google” (et ensuite l’intégration automatique).
          En attendant, le plus simple est de nous décrire votre situation : on vous répond avec un cadrage clair.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
          <Link
            href="/services/referencement-seo"
            className="inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 hover:decoration-slate-400 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            SEO & Google Maps
          </Link>
        </div>

        <div className="mt-4 text-xs font-semibold text-slate-500">
          Conseil : même un avis court (1 phrase) aide beaucoup à rassurer.
        </div>
      </section>
    </div>
  );
}