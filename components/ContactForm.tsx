"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";

const sectors = [
  "Hôtellerie / Tourisme",
  "Pharmacie / Santé",
  "Commerce / Boutique",
  "Restauration",
  "Services (cabinet, artisan, etc.)",
  "Association / Institution",
  "Autre",
];

const budgets = [
  "Moins de 200 000 FCFA",
  "200 000 – 500 000 FCFA",
  "500 000 – 1 000 000 FCFA",
  "1 000 000 – 3 000 000 FCFA",
  "Plus de 3 000 000 FCFA",
  "Je ne sais pas encore",
];

const delays = [
  "Urgent (moins de 7 jours)",
  "1–2 semaines",
  "3–4 semaines",
  "1–2 mois",
  "Flexible",
];

export function ContactForm() {
  const router = useRouter();

  function buildMessage(data: FormData) {
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      sector: String(data.get("sector") || ""),
      need: String(data.get("need") || ""),
      budget: String(data.get("budget") || ""),
      delay: String(data.get("delay") || ""),
      details: String(data.get("details") || ""),
    };

    return (
      `Bonjour EXPERT CRÉA, voici mon brief :\n` +
      `• Nom/Entreprise : ${payload.name}\n` +
      (payload.phone ? `• Téléphone : ${payload.phone}\n` : "") +
      `• Secteur : ${payload.sector}\n` +
      `• Besoin : ${payload.need}\n` +
      (payload.budget ? `• Budget : ${payload.budget}\n` : "") +
      (payload.delay ? `• Délai : ${payload.delay}\n` : "") +
      `• Détails : ${payload.details}`
    );
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const message = buildMessage(data);

    const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Ouvre WhatsApp dans un nouvel onglet
    window.open(wa, "_blank", "noopener,noreferrer");

    // Event GA si présent
    try {
      // @ts-expect-error gtag may exist
      if (typeof window !== "undefined" && window.gtag) {
        // @ts-expect-error gtag
        window.gtag("event", "generate_lead", { method: "whatsapp_form" });
      }
    } catch {}

    // Redirige l’onglet actuel vers merci
    router.push("/merci");
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      {/* FORM */}
      <div className="md:col-span-3 rounded-3xl border border-black/10 bg-white p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-500">Brief rapide</div>
            <h2 className="mt-1 text-xl font-bold">Parlons de ton projet</h2>
            <p className="mt-2 text-sm text-slate-600">
              Plus tu es précis, plus on peut te répondre vite et correctement.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">
                Nom / Entreprise
              </label>
              <input
                name="name"
                required
                placeholder="Ex : Hôtel XYZ"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">
                Téléphone / WhatsApp
              </label>
              <input
                name="phone"
                placeholder="Ex : +225 07 06 50 24 90"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Secteur</label>
              <select
                name="sector"
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir…
                </option>
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">
                Type de besoin
              </label>
              <select
                name="need"
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir…
                </option>
                <option value="Création / refonte de site web">
                  Création / refonte de site web
                </option>
                <option value="Référencement SEO / Google Maps">
                  Référencement SEO / Google Maps
                </option>
                <option value="Extranet / outil de gestion / dashboard">
                  Extranet / outil de gestion / dashboard
                </option>
                <option value="Identité visuelle & supports">
                  Identité visuelle & supports
                </option>
                <option value="Communication / réseaux sociaux">
                  Communication / réseaux sociaux
                </option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Budget</label>
              <select
                name="budget"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
                defaultValue=""
              >
                <option value="">(optionnel)</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Délai</label>
              <select
                name="delay"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
                defaultValue=""
              >
                <option value="">(optionnel)</option>
                {delays.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">
              Objectif / Description
            </label>
            <textarea
              name="details"
              required
              rows={5}
              placeholder="Ex : Je veux augmenter les réservations directes / avoir un site pro / organiser mes commandes…"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
            />
            <p className="text-xs text-slate-500">
              Astuce : ajoute un lien (site actuel / Instagram / Google Maps) si tu en as.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Envoyer sur WhatsApp
            </button>

            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                "Demande de devis — EXPERT CRÉA"
              )}`}
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Envoyer par email
            </a>

            <Link
              href="/services"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              Voir les services →
            </Link>
          </div>
        </form>
      </div>

      {/* SIDE */}
      <div className="md:col-span-2 space-y-6">
        <div className="rounded-3xl border border-black/10 bg-slate-50 p-6">
          <div className="text-sm font-semibold text-slate-900">Réponse rapide</div>
          <p className="mt-2 text-sm text-slate-600">
            WhatsApp est le canal le plus rapide. Nous pouvons ensuite planifier un
            appel si besoin.
          </p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-sm font-semibold">Basés en Côte d’Ivoire</div>
              <div className="text-sm text-slate-600">Projets locaux & internationaux</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-sm font-semibold">Méthode</div>
              <div className="text-sm text-slate-600">
                Diagnostic → stratégie → production → suivi
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-sm font-semibold">Clarté</div>
              <div className="text-sm text-slate-600">Objectifs, étapes, livrables</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">Contacts</div>
          <div className="mt-2 text-sm text-slate-600">{site.phoneDisplay}</div>
          <a
            className="mt-1 block text-sm font-semibold text-[var(--brand-blue)]"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}