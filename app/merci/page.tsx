import Link from "next/link";

export default function MerciPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-black/10 bg-white p-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Merci !</h1>
        <p className="mt-2 text-slate-600">
          Votre demande a bien été envoyée. Nous revenons vers vous rapidement.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Voir les services
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-black/10 bg-slate-50 p-6">
        <div className="text-sm font-semibold text-slate-900">
          Astuce pour aller plus vite
        </div>
        <p className="mt-1 text-sm text-slate-600">
          Si tu as un lien (site actuel, Instagram, Google Maps), envoie-le sur
          WhatsApp pour qu’on analyse rapidement.
        </p>
      </div>
    </div>
  );
}