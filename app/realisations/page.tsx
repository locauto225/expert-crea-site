import Image from "next/image";
import Link from "next/link";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  tag: "SI / Extranet" | "Site web" | "Mobile";
  title: string;
  subtitle: string;
  note?: string;
  mainAspect?: string;
  images: ProjectImage[];
  context: string;
  built: string;
  result: string;
};

export default function RealisationsPage() {
  // ⚠️ Images: place these files in `public/realisations/` (or adjust paths below)
  // - public/realisations/demo-extranet-fournisseur.png
  // - public/realisations/demo-extranet-dashboard.png
  // - public/realisations/demo-extranet-login.png
  // - public/realisations/demo-site-pharma-landing.png
  // - public/realisations/loc-auto-mobile.png

  const projects: Project[] = [
    {
      tag: "SI / Extranet",
      title: "Extranet fournisseurs (suivi ventes)",
      subtitle: "Portail sécurisé pour suivre contrats, ventes, expéditions et règlements.",
      note: "Captures réelles (accès privé).",
      mainAspect: "16 / 10",
      images: [
        {
          src: "/realisations/demo-extranet-fournisseur.png",
          alt: "Extranet fournisseurs — vue d’ensemble",
        },
        {
          src: "/realisations/demo-extranet-dashboard.png",
          alt: "Extranet — tableau de bord",
        },
      ],
      context:
        "Entreprise avec plusieurs fournisseurs : besoin de visibilité claire sur ventes/contrats sans échanges manuels.",
      built:
        "Mise en place d’un extranet sécurisé avec navigation simple, accès par rôles et tableaux de bord lisibles.",
      result:
        "Information centralisée, suivi plus fiable, moins d’allers-retours et moins de pertes d’informations.",
    },
    {
      tag: "Site web",
      title: "Site épuré avec catalogue",
      subtitle: "Présentation claire de l’offre + parcours orienté prise de contact.",
      mainAspect: "16 / 10",
      images: [
        {
          src: "/realisations/demo-site-pharma-landing.png",
          alt: "Site avec catalogue — page d’accueil",
        },
      ],
      context:
        "Besoin d’une présence en ligne crédible pour présenter l’offre sans complexité et rassurer dès les premières secondes.",
      built:
        "Création d’un site épuré, structuré, avec catalogue et contenus compréhensibles (sans jargon).",
      result:
        "Meilleure lisibilité, image professionnelle renforcée et parcours plus direct vers l’action.",
    },
    {
      tag: "Mobile",
      title: "Application mobile (Loc Auto)",
      subtitle: "Interface terrain : actions directes, écrans clairs, logique simple.",
      mainAspect: "9 / 16",
      images: [
        {
          src: "/realisations/loc-auto-mobile.png",
          alt: "Application mobile Loc Auto — capture d’écran",
        },
      ],
      context:
        "Projet de mobilité locale nécessitant une application adaptée aux usages réels (simplicité, rapidité, clarté).",
      built:
        "Conception et développement d’une application mobile avec écrans lisibles et parcours orientés usage.",
      result:
        "Expérience plus fluide côté utilisateur et service mieux structuré au quotidien.",
    },
  ];

  const proof: { title: string; desc: string }[] = [
    {
      title: "Captures réelles & livrables clairs",
      desc: "On montre ce qui existe : écrans, parcours, structure, livrables — sans promesses floues.",
    },
    {
      title: "Démos/prototypes pour décider vite",
      desc: "Selon le besoin, on peut présenter une version démo (écrans clés + parcours) pour valider la direction.",
    },
    {
      title: "V1 utile → adoption → optimisation",
      desc: "On livre une première version utilisable, puis on améliore selon les retours et les résultats.",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* HERO (même famille visuelle que Home / Services / Secteurs) */}
      <section className="reveal relative -mx-4 overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 px-6 py-12 text-white sm:-mx-6 md:px-10 md:py-14 lg:-mx-8">
        <div className="pointer-events-none absolute -left-24 -top-24 h-70 w-70 rounded-full bg-(--brand-blue)/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-(--brand-green)/10 blur-3xl" />

        <div className="relative grid gap-10 lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
                Réalisations (projets réels)
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              De la situation terrain à une solution claire
            </h1>

            <p className="max-w-2xl text-white/80 md:text-lg leading-relaxed">
              Projets réels : captures et exemples de livrables. Une démarche claire, adaptée à votre réalité.
            </p>

            <div className="space-y-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Décrire votre situation (2 min)
              </Link>
              <div className="text-xs font-semibold text-white/70">Réponse sous 24h — sans engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLES */}
      <section id="cases" className="reveal space-y-6 scroll-mt-28">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight">Nos réalisations</h2>
          <p className="max-w-3xl text-slate-600">
            Captures réelles : outils, site et application — conçus pour des usages terrain.
          </p>
          <p className="text-xs font-semibold text-slate-500">Certaines informations sont masquées pour confidentialité.</p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                      {p.tag}
                    </span>
                    {p.note ? (
                      <span className="text-xs font-semibold tracking-wide text-slate-500">{p.note}</span>
                    ) : null}
                  </div>
                  <div className="mt-3 text-xl font-extrabold tracking-tight text-slate-900">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>
                </div>
              </div>

              {p.images.length > 0 ? (
                <div className="mt-6">
                  {/*
                    Image composite (extranet) : 1 seul bloc visuel avec un focus discret.
                    But : garder le rythme des projets (pas d'effet "galerie").
                  */}
                  {p.tag === "SI / Extranet" && p.images.length > 1 ? (
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-slate-50 p-3">
                      <div className="relative w-full" style={{ aspectRatio: p.mainAspect ?? "16 / 10" }}>
                        <Image
                          src={p.images[0].src}
                          alt={p.images[0].alt}
                          fill
                          sizes="(min-width: 768px) 900px, 100vw"
                          className="object-contain"
                        />

                        <div className="absolute bottom-2 right-2 w-[58%] max-w-80 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm sm:bottom-3 sm:right-3 sm:w-[46%] md:w-[36%]">
                          <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                            <Image
                              src={p.images[1].src}
                              alt={p.images[1].alt}
                              fill
                              sizes="(min-width: 768px) 360px, 50vw"
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`overflow-hidden rounded-2xl border border-black/10 bg-slate-50 ${
                        p.tag === "Mobile" ? "mx-auto max-w-110 p-4" : "p-3"
                      }`}
                    >
                      <div className="relative w-full" style={{ aspectRatio: p.mainAspect ?? "16 / 10" }}>
                        <Image
                          src={p.images[0].src}
                          alt={p.images[0].alt}
                          fill
                          sizes="(min-width: 768px) 900px, 100vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-black/10 bg-slate-50 p-6 text-sm text-slate-600">
                  Capture à ajouter.
                </div>
              )}

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-slate-50 p-5">
                  <div className="text-xs font-extrabold text-slate-500">Contexte</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">{p.context}</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-slate-50 p-5">
                  <div className="text-xs font-extrabold text-slate-500">Mise en place</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">{p.built}</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-slate-50 p-5">
                  <div className="text-xs font-extrabold text-slate-500">Résultat</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700">{p.result}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PREUVE */}
      <section className="reveal rounded-3xl border border-black/10 bg-slate-50 p-8">
        <div className="mb-6 rounded-2xl border border-black/10 bg-white p-5">
          <div className="text-xs font-extrabold text-slate-500">À retenir</div>
          <div className="mt-2 text-sm font-semibold text-slate-900">Preuves simples, sans mise en scène</div>
          <div className="mt-1 text-sm text-slate-600">
            On montre des parcours, des écrans, des livrables et une méthode reproductible — adaptée à votre réalité.
          </div>
          <div className="mt-3 text-xs font-semibold text-slate-500">
            Captures réelles • démos/prototypes • V1 utile → adoption → optimisation
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight">Preuves : démarche & livrables</h2>
          <p className="text-slate-600">
            L’objectif n’est pas de “faire joli”, mais de livrer quelque chose d’utile, compris par l’équipe, et
            améliorable dans le temps.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {proof.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
            </div>
          ))}
        </div>

      </section>

      {/* AVIS (lien vers la page dédiée) */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight">Avis & retours</h2>
          <p className="text-slate-600">
            Les retours sont regroupés sur la page Avis. Certains projets étant privés, on privilégie des captures et une
            démarche claire plutôt qu’une “galerie”.
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <Link
            href="/avis"
            className="inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold text-(--brand-blue) underline decoration-(--brand-blue)/25 underline-offset-4 hover:decoration-(--brand-blue)/45 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            Voir les avis
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal rounded-3xl border border-black/10 bg-white p-8">
        <h2 className="text-xl font-bold">Tu veux un exemple adapté à ton activité ?</h2>
        <p className="mt-2 text-slate-600">
          Dis-nous ton secteur et ton objectif : on te propose une direction claire + une première démo si nécessaire.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            Décrire votre situation (2 min)
          </Link>
          <Link
            href="/methode"
            className="inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold text-(--brand-blue) underline decoration-(--brand-blue)/25 underline-offset-4 hover:decoration-(--brand-blue)/45 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            Voir notre méthode
          </Link>
        </div>
      </section>
    </div>
  );
}