import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Décrire votre situation (2 min)
        </h1>

        <p className="max-w-2xl text-slate-600">
          Expliquez simplement comment votre activité fonctionne aujourd’hui et ce qui vous
          pose problème (organisation, site, outils, conformité, visibilité).
        </p>

        <p className="max-w-2xl text-slate-600">
          Nous regardons votre cas et nous vous disons clairement par où commencer — sans
          pression, sans engagement, sans vous proposer un projet inutile.
        </p>

        <p className="max-w-2xl text-sm text-slate-500">
          Réponse sous 24h. Si ce n’est pas adapté, nous vous le dirons.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
