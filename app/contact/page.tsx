import { ContactForm } from "@/components/ContactForm";

/* ─── Contextes par sujet (extensible) ─── */
const sujets: Record<string, { h1: string; intro: string; hint: string; prefill: string }> = {
  seo: {
    h1: "Vérifier ma visibilité sur Google",
    intro:
      "Dites-nous votre activité et votre zone — on regarde comment vous apparaissez sur Google et Google Maps, et on vous répond avec un diagnostic clair.",
    hint: "Réponse sous 24h · Diagnostic gratuit · Sans engagement",
    prefill:
      "Bonjour, je souhaite savoir si mon entreprise est bien visible sur Google et Google Maps.\n\nMon activité : \nMa zone : \nMon site (si j'en ai un) : ",
  },
  "identite-visuelle": {
    h1: "Faire le point sur mon image",
    intro:
      "Décrivez votre activité et ce qui existe déjà (logo, supports, réseaux). On vous répond avec un cadrage clair et une proposition simple.",
    hint: "Réponse sous 24h · Sans engagement",
    prefill:
      "Bonjour, je souhaite renforcer l'image de mon entreprise.\n\nMon activité : \nCe qui existe déjà (logo, charte, supports) : \nCe qui me pose problème : ",
  },
  site: {
    h1: "Parler de mon site",
    intro:
      "Vous avez un site qui ne rapporte rien — ou pas de site du tout ? Expliquez votre situation, on vous dit par où commencer.",
    hint: "Réponse sous 24h · Sans engagement",
    prefill:
      "Bonjour, j'aimerais parler de mon site web.\n\nMon activité : \nMon site actuel (si j'en ai un) : \nCe qui ne fonctionne pas : ",
  },
  outils: {
    h1: "Simplifier mon organisation",
    intro:
      "Trop de tâches manuelles, d'oublis ou de fichiers Excel ? Décrivez comment ça se passe aujourd'hui, on vous propose une piste simple.",
    hint: "Réponse sous 24h · Sans engagement",
    prefill:
      "Bonjour, je perds du temps sur des tâches manuelles et j'aimerais simplifier.\n\nMon activité : \nCe qui me prend le plus de temps : \nOutils que j'utilise aujourd'hui : ",
  },
  conformite: {
    h1: "Se mettre en règle",
    intro:
      "Interfaçage, FNE, données — expliquez ce qui vous préoccupe. On vous dit clairement ce qu'il faut faire et par où commencer.",
    hint: "Réponse sous 24h · Sans engagement",
    prefill:
      "Bonjour, j'ai besoin de me mettre en conformité.\n\nMon activité : \nCe qui m'inquiète (FNE, données, interfaçage) : ",
  },
};

const defaultContext = {
  h1: "Décrire votre situation (2 min)",
  intro:
    "Expliquez simplement comment votre activité fonctionne aujourd'hui et ce qui vous pose problème (organisation, site, outils, conformité, visibilité).",
  hint: "Réponse sous 24h. Si ce n'est pas adapté, nous vous le dirons.",
  prefill: "",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sujet?: string }>;
}) {
  const params = await searchParams;
  const ctx = (params.sujet && sujets[params.sujet]) || defaultContext;

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight">{ctx.h1}</h1>

        <p className="max-w-2xl text-slate-600">{ctx.intro}</p>

        {/* Deuxième paragraphe uniquement en mode générique */}
        {!params.sujet && (
          <p className="max-w-2xl text-slate-600">
            Nous regardons votre cas et nous vous disons clairement par où commencer — sans
            pression, sans engagement, sans vous proposer un projet inutile.
          </p>
        )}

        <p className="max-w-2xl text-sm text-slate-500">{ctx.hint}</p>
      </div>

      <ContactForm defaultMessage={ctx.prefill} />
    </div>
  );
}