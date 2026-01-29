"use client";

import { site } from "@/lib/site";

export function WhatsAppFab() {
  const msg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, je souhaite un devis / un échange rapide."
  );
  const href = `https://wa.me/${site.whatsappNumber}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95"
      aria-label="Contacter sur WhatsApp"
    >
      WhatsApp
    </a>
  );
}