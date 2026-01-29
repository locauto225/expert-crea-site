import Link from "next/link";

export default function BlogIndexPage() {
  const posts = [
    {
      title: "Créer un site web qui convertit en Côte d’Ivoire",
      desc: "Structure, pages indispensables, CTA WhatsApp et erreurs à éviter pour générer des demandes.",
      href: "/blog/site-web",
      tag: "Site web",
    },
    {
      title: "SEO local & Google Maps : être trouvé en Côte d’Ivoire",
      desc: "Optimiser Google Business Profile, avis, pages locales et mots-clés pour apparaître sur Google Maps.",
      href: "/blog/seo-google-maps",
      tag: "SEO",
    },
    {
      title: "Pourquoi un extranet / outil de gestion change une entreprise",
      desc: "Dashboard, suivi, documents, rôles : gagner du temps et réduire les erreurs avec une V1 simple.",
      href: "/blog/extranet-outils-gestion",
      tag: "Extranet",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* HERO (clair, comme Avis / Méthode) */}
      <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-white to-slate-50 p-7 sm:p-9">
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              Blog
            </span>
            <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              Guides pratiques • Côte d’Ivoire
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Comprendre avant d’agir
          </h1>

          <p className="max-w-2xl text-slate-600 md:text-lg leading-relaxed">
            Des articles courts pour comprendre ce qui fonctionne vraiment : visibilité locale, conversion et organisation —
            sans jargon inutile.
          </p>

          <div className="text-sm text-slate-600">
            Basés sur des situations réelles rencontrées avec des entreprises en Côte d’Ivoire.
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Site web",
              "SEO local",
              "Outils de gestion",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal reveal-stagger grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="stagger-item card-wow group rounded-3xl border border-black/10 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                {p.tag}
              </span>
              <span className="text-sm font-semibold text-(--brand-blue) opacity-70 transition group-hover:opacity-100">
                Lire →
              </span>
            </div>

            <div className="mt-3 text-lg font-bold">{p.title}</div>
            <div className="mt-2 text-slate-600">{p.desc}</div>
          </Link>
        ))}
      </section>

      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-7 sm:p-8">
        <div className="text-sm font-semibold text-slate-900">
          Tu veux qu’on applique ça à ton business ?
        </div>
        <div className="mt-1 text-sm text-slate-600">
          Dis-nous ton objectif (demandes, visibilité, organisation) et on te propose un plan clair.
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            Voir les services
          </Link>
        </div>
      </section>
    </div>
  );
}