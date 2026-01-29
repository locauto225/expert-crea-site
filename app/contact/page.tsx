import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Contact / Devis</h1>
        <p className="max-w-2xl text-slate-600">
          Décris ton besoin en 2 minutes. On te répond avec une proposition claire
          (objectifs, étapes, délai).
        </p>
      </div>

      <ContactForm />
    </div>
  );
}