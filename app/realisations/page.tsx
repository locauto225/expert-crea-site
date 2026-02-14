"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

/* ═══════════════════════════════════════════════════════════════
   DÉMO 1 — SEO / Google Maps
   Le visiteur choisit un secteur, bascule avant/après
   ═══════════════════════════════════════════════════════════════ */

const seoSectors = [
  {
    id: "restaurant",
    label: "Restaurant",
    query: "restaurant plateau abidjan",
    results: {
      before: [
        { name: "Restaurant Le Plateau", stars: 3.2, reviews: 8, issues: "Pas de photos · Horaires manquants", rank: null },
        { name: "Maquis Chez Tanti", stars: 0, reviews: 0, issues: "Aucune information · Pas de fiche", rank: null },
        { name: "Grill House Abidjan", stars: 4.0, reviews: 31, issues: "Fiche incomplète", rank: null },
      ],
      after: [
        { name: "Votre Restaurant", stars: 4.9, reviews: 342, issues: "Photos · Menu · Horaires à jour · Réservation", rank: 1, highlight: true },
        { name: "Restaurant Le Plateau", stars: 3.2, reviews: 8, issues: "Pas de photos · Horaires manquants", rank: null },
        { name: "Grill House Abidjan", stars: 4.0, reviews: 31, issues: "Fiche incomplète", rank: null },
      ],
    },
  },
  {
    id: "pharmacie",
    label: "Pharmacie",
    query: "pharmacie de garde cocody",
    results: {
      before: [
        { name: "Pharmacie du Carrefour", stars: 3.1, reviews: 12, issues: "Horaires non renseignés", rank: null },
        { name: "Pharmacie Centrale", stars: 3.9, reviews: 47, issues: "Pas de photos", rank: null },
        { name: "Pharmacie Riviera", stars: 0, reviews: 0, issues: "Pas de fiche Google", rank: null },
      ],
      after: [
        { name: "Votre Pharmacie", stars: 4.8, reviews: 215, issues: "Ouverte · Horaires à jour · Appeler · Itinéraire", rank: 1, highlight: true },
        { name: "Pharmacie Centrale", stars: 3.9, reviews: 47, issues: "Pas de photos", rank: null },
        { name: "Pharmacie du Carrefour", stars: 3.1, reviews: 12, issues: "Horaires non renseignés", rank: null },
      ],
    },
  },
  {
    id: "hotel",
    label: "Hôtel",
    query: "hôtel cocody abidjan",
    results: {
      before: [
        { name: "Hôtel Résidence B", stars: 3.2, reviews: 18, issues: "Pas de site · via Booking.com", rank: null },
        { name: "Hôtel Concurrent A", stars: 4.1, reviews: 64, issues: "Réservation via Booking (15% commission)", rank: null },
        { name: "Votre Hôtel", stars: 3.8, reviews: 22, issues: "Fiche incomplète · Pas de photos", rank: null },
      ],
      after: [
        { name: "Votre Hôtel ★★★", stars: 4.6, reviews: 127, issues: "Site officiel · Réservation directe · Photos", rank: 1, highlight: true },
        { name: "Hôtel Concurrent A", stars: 4.1, reviews: 64, issues: "via Booking.com", rank: null },
        { name: "Hôtel Résidence B", stars: 3.2, reviews: 18, issues: "Pas de site", rank: null },
      ],
    },
  },
  {
    id: "btp",
    label: "BTP",
    query: "entreprise btp abidjan",
    results: {
      before: [
        { name: "BTP Constructions SARL", stars: 0, reviews: 0, issues: "Pas de fiche · Pas de site", rank: null },
        { name: "Bâtir Plus", stars: 3.5, reviews: 5, issues: "Aucune réalisation visible", rank: null },
        { name: "Votre Entreprise", stars: 0, reviews: 0, issues: "Introuvable sur Google", rank: null },
      ],
      after: [
        { name: "Votre Entreprise BTP", stars: 4.7, reviews: 89, issues: "47 chantiers livrés · Site pro · Réalisations", rank: 1, highlight: true },
        { name: "Bâtir Plus", stars: 3.5, reviews: 5, issues: "Aucune réalisation visible", rank: null },
        { name: "BTP Constructions SARL", stars: 0, reviews: 0, issues: "Pas de fiche · Pas de site", rank: null },
      ],
    },
  },
];

type SeoResult = { name: string; stars: number; reviews: number; issues: string; rank: number | null; highlight?: boolean };


function DemoSEO() {
  const [sectorIdx, setSectorIdx] = useState(0);
  const [mode, setMode] = useState<"before" | "after">("after");
  const sector = seoSectors[sectorIdx];
  const results: SeoResult[] = sector.results[mode];

  return (
    <div className="space-y-4">
      {/* Sélecteur secteur */}
      <div className="flex flex-wrap gap-2">
        {seoSectors.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setSectorIdx(i)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              i === sectorIdx
                ? "bg-(--brand-blue) text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Mock Google */}
      <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
        {/* Barre de recherche */}
        <div className="flex items-center gap-2 border-b border-black/6 bg-slate-50 px-4 py-3">
          <svg className="h-4 w-4 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-sm text-slate-700 truncate max-w-[70vw] sm:max-w-none">{sector.query}</span>
        </div>

        {/* Toggle avant/après */}
        <div className="flex border-b border-black/6">
          {(["before", "after"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 text-xs font-bold transition-all ${
                mode === m
                  ? m === "after"
                    ? "bg-(--brand-green)/8 text-(--brand-green) border-b-2 border-(--brand-green)"
                    : "bg-red-50 text-red-500 border-b-2 border-red-400"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {m === "before" ? "❌ Avant" : "✅ Après"}
            </button>
          ))}
        </div>

        {/* Résultats */}
        <div className="p-3 space-y-2">
          {results.map((r, i) => (
            <div
              key={i}
              className={`rounded-xl p-3 transition-all ${
                r.highlight
                  ? "border border-(--brand-green)/30 bg-(--brand-green)/4"
                  : "border border-black/6"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold truncate ${r.highlight ? "text-slate-900" : "text-slate-600"}`}>
                      {r.name}
                    </span>
                    {r.rank === 1 && (
                      <span className="shrink-0 rounded bg-(--brand-green)/15 px-1.5 py-0.5 text-[9px] font-bold text-(--brand-green)">N°1</span>
                    )}
                  </div>
                  {r.stars > 0 ? (
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="flex gap-[1px]">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className={`h-2.5 w-2.5 ${s <= Math.round(r.stars) ? "text-amber-400" : "text-slate-200"}`} viewBox="0 0 24 24" fill="currentColor">
                            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500">{r.stars} ({r.reviews} avis)</span>
                    </div>
                  ) : (
                    <span className="text-[10px] text-slate-400">Pas de note</span>
                  )}
                </div>
              </div>
              <div className={`mt-1 text-[10px] ${r.highlight ? "text-(--brand-green)" : "text-slate-400"}`}>
                {r.highlight ? "✓ " : "✗ "}{r.issues}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-black/6 bg-slate-50/50 px-4 py-2 text-center text-[10px] text-slate-400">
          Simulation — Résultats Google Maps
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DÉMO 2 — Extranet fournisseurs
   Sidebar cliquable, KPIs + tableau qui changent
   ═══════════════════════════════════════════════════════════════ */

const extranetTabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "◻",
    kpis: [
      { label: "Contrats actifs", value: "12", color: "text-indigo-600 bg-indigo-50" },
      { label: "Ventes ce mois", value: "48.2M F", color: "text-(--brand-green) bg-(--brand-green)/8" },
      { label: "Expéditions", value: "23", color: "text-(--brand-blue) bg-(--brand-blue)/8" },
    ],
    rows: [
      { col1: "Fournisseur Alpha", col2: "Contrat #047", col3: "12.4M F", status: "Actif", statusColor: "text-(--brand-green) bg-(--brand-green)/10" },
      { col1: "Import Sahel", col2: "Contrat #044", col3: "8.7M F", status: "En cours", statusColor: "text-(--brand-blue) bg-(--brand-blue)/10" },
      { col1: "Distrib+ SARL", col2: "Contrat #041", col3: "5.1M F", status: "À renouveler", statusColor: "text-amber-600 bg-amber-50" },
    ],
    headers: ["Fournisseur", "Contrat", "Montant", "Statut"],
  },
  {
    id: "ventes",
    label: "Ventes",
    icon: "📊",
    kpis: [
      { label: "Ce mois", value: "48.2M F", color: "text-(--brand-green) bg-(--brand-green)/8" },
      { label: "Mois dernier", value: "41.8M F", color: "text-slate-600 bg-slate-100" },
      { label: "Évolution", value: "+15%", color: "text-(--brand-green) bg-(--brand-green)/8" },
    ],
    rows: [
      { col1: "Lot Ciment x500", col2: "14 fév.", col3: "6.2M F", status: "Livré", statusColor: "text-(--brand-green) bg-(--brand-green)/10" },
      { col1: "Fer à béton x200", col2: "12 fév.", col3: "3.8M F", status: "Livré", statusColor: "text-(--brand-green) bg-(--brand-green)/10" },
      { col1: "Peinture x1000L", col2: "10 fév.", col3: "2.1M F", status: "En route", statusColor: "text-(--brand-blue) bg-(--brand-blue)/10" },
    ],
    headers: ["Produit", "Date", "Montant", "Statut"],
  },
  {
    id: "expeditions",
    label: "Expéditions",
    icon: "🚛",
    kpis: [
      { label: "En cours", value: "7", color: "text-(--brand-blue) bg-(--brand-blue)/8" },
      { label: "Livrées", value: "23", color: "text-(--brand-green) bg-(--brand-green)/8" },
      { label: "En retard", value: "1", color: "text-red-600 bg-red-50" },
    ],
    rows: [
      { col1: "EXP-0891", col2: "Abidjan → Bouaké", col3: "13 fév.", status: "En route", statusColor: "text-(--brand-blue) bg-(--brand-blue)/10" },
      { col1: "EXP-0890", col2: "San Pedro → Abj", col3: "12 fév.", status: "Livré", statusColor: "text-(--brand-green) bg-(--brand-green)/10" },
      { col1: "EXP-0889", col2: "Abidjan → Korhogo", col3: "11 fév.", status: "En retard", statusColor: "text-red-600 bg-red-50" },
    ],
    headers: ["Expédition", "Trajet", "Date", "Statut"],
  },
];

function DemoExtranet() {
  const [tabIdx, setTabIdx] = useState(0);
  const tab = extranetTabs[tabIdx];

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-md bg-indigo-500 flex items-center justify-center">
            <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-white">Extranet Fournisseurs</span>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/70">Connecté</span>
      </div>

      {/* Onglets */}
      <div className="flex border-b border-black/6 bg-slate-50 overflow-x-auto">
        {extranetTabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setTabIdx(i)}
            className={`shrink-0 px-4 py-2.5 text-[11px] font-semibold transition-all whitespace-nowrap ${
              i === tabIdx
                ? "border-b-2 border-indigo-500 text-indigo-600 bg-white"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <span className="mr-1">{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* KPIs (mobile: 2 colonnes, pas de squeeze) */}
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3">
        {tab.kpis.map((k, idx) => (
          <div
            key={k.label}
            className={`rounded-xl p-2.5 text-center ${k.color} ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}
          >
            <div className="text-lg font-extrabold sm:text-xl">{k.value}</div>
            <div className="text-[9px] sm:text-[10px] opacity-70">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Tableau */}
      <div className="px-3 pb-3">
        <div className="rounded-xl border border-black/6 overflow-hidden">
          <div className="hidden sm:grid grid-cols-4 gap-1 bg-slate-50 px-3 py-1.5 text-[9px] font-semibold text-slate-500">
            {tab.headers.map((h) => <span key={h}>{h}</span>)}
          </div>
          {tab.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-1 px-3 py-2.5 border-t border-black/4 items-center">
              <span className="text-[11px] font-semibold text-slate-700 truncate">{row.col1}</span>
              <span className="text-[11px] text-slate-500 truncate hidden sm:block">{row.col2}</span>
              <span className="text-[11px] font-semibold text-slate-700">{row.col3}</span>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold text-center w-fit ${row.statusColor}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black/6 bg-slate-50/50 px-4 py-2 text-center text-[10px] text-slate-400">
        Simulation interactive — Cliquez sur les onglets
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DÉMO 3 — Site catalogue santé
   Nav cliquable, filtres catégories, fiche produit
   ═══════════════════════════════════════════════════════════════ */

const catalogCategories = ["Tous", "Hygiène", "Nutrition", "Matériel"];
const catalogProducts = [
  { id: 1, name: "Gel hydroalcoolique 500ml", cat: "Hygiène", price: "2 500 F", badge: "Populaire" },
  { id: 2, name: "Complément Vitamine D", cat: "Nutrition", price: "8 900 F", badge: null },
  { id: 3, name: "Masques chirurgicaux x50", cat: "Hygiène", price: "4 200 F", badge: null },
  { id: 4, name: "Tensiomètre digital", cat: "Matériel", price: "32 000 F", badge: "Pro" },
  { id: 5, name: "Oméga-3 — 60 gélules", cat: "Nutrition", price: "12 500 F", badge: null },
  { id: 6, name: "Thermomètre infrarouge", cat: "Matériel", price: "18 000 F", badge: "Nouveau" },
];

function DemoSiteCatalogue() {
  const [catFilter, setCatFilter] = useState("Tous");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [navTab, setNavTab] = useState<"catalogue" | "accueil" | "contact">("catalogue");

  const filtered = catFilter === "Tous" ? catalogProducts : catalogProducts.filter((p) => p.cat === catFilter);
  const selected = catalogProducts.find((p) => p.id === selectedId);

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-green-300" />
        <div className="ml-2 flex-1 rounded bg-white px-3 py-1 text-[10px] text-slate-400 truncate max-w-[72vw] sm:max-w-none">pharma-sante.ci/catalogue</div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between border-b border-black/6 px-4 py-2">
        <span className="text-[11px] font-bold text-(--brand-green)">PHARMA SANTÉ</span>
        <div className="flex gap-1">
          {(["accueil", "catalogue", "contact"] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setNavTab(t); setSelectedId(null); }}
              className={`rounded px-2 py-1 text-[10px] font-semibold capitalize transition-all ${
                navTab === t ? "bg-(--brand-green)/10 text-(--brand-green)" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-3 min-h-[260px]">
        {navTab === "accueil" && (
          <div className="space-y-3">
            <div className="rounded-xl bg-(--brand-green)/5 p-4 text-center">
              <div className="text-sm font-bold text-slate-900">Votre partenaire santé de confiance</div>
              <div className="mt-1 text-[11px] text-slate-500">Produits certifiés · Conseil professionnel · Livraison Abidjan</div>
              <button onClick={() => setNavTab("catalogue")} className="mt-3 rounded-lg bg-(--brand-green) px-3 py-1.5 text-[10px] font-bold text-white">
                Voir le catalogue →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Hygiène", "Nutrition", "Matériel"].map((c) => (
                <div key={c} className="rounded-lg border border-black/6 p-2 text-center">
                  <div className="text-[10px] font-bold text-slate-700">{c}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {navTab === "contact" && (
          <div className="space-y-3">
            <div className="text-sm font-bold text-slate-900">Nous contacter</div>
            <div className="space-y-2">
              <div className="h-8 rounded-lg border border-black/10 bg-slate-50 px-3 flex items-center text-[10px] text-slate-400">Votre nom</div>
              <div className="h-8 rounded-lg border border-black/10 bg-slate-50 px-3 flex items-center text-[10px] text-slate-400">Email ou téléphone</div>
              <div className="h-16 rounded-lg border border-black/10 bg-slate-50 px-3 pt-2 text-[10px] text-slate-400">Message</div>
              <div className="rounded-lg bg-(--brand-green) px-3 py-2 text-center text-[10px] font-bold text-white">Envoyer →</div>
            </div>
          </div>
        )}

        {navTab === "catalogue" && !selected && (
          <div className="space-y-3">
            {/* Filtres */}
            <div className="flex flex-wrap gap-1.5">
              {catalogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCatFilter(c)}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all ${
                    catFilter === c
                      ? "bg-(--brand-green) text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Grille */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className="group rounded-xl border border-black/6 bg-white p-2.5 text-left transition-all hover:shadow-md hover:border-black/15"
                >
                  <div className="h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-2">
                    <svg className="h-5 w-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-bold text-slate-800 leading-tight group-hover:text-(--brand-green) transition-colors">{p.name}</div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-[10px] font-extrabold text-(--brand-green)">{p.price}</span>
                    {p.badge && (
                      <span className="rounded bg-slate-100 px-1 py-0.5 text-[7px] font-bold text-slate-500">{p.badge}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {navTab === "catalogue" && selected && (
          <div className="space-y-3">
            <button onClick={() => setSelectedId(null)} className="text-[10px] font-semibold text-(--brand-blue) hover:underline">
              ← Retour au catalogue
            </button>
            <div className="h-24 rounded-xl bg-slate-50 flex items-center justify-center">
              <svg className="h-10 w-10 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{selected.name}</div>
              <div className="mt-0.5 text-[10px] text-slate-500">Catégorie : {selected.cat}</div>
              <div className="mt-2 text-lg font-extrabold text-(--brand-green)">{selected.price}</div>
              <div className="mt-3 rounded-lg bg-(--brand-green) px-3 py-2 text-center text-[10px] font-bold text-white">
                Nous contacter pour ce produit →
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-black/6 bg-slate-50/50 px-4 py-2 text-center text-[10px] text-slate-400">
        Simulation interactive — Naviguez, filtrez, cliquez
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DÉMO 4 — App mobile Loc Auto
   Frame téléphone, flow multi-étapes
   ═══════════════════════════════════════════════════════════════ */

const vehicles = [
  { id: 1, name: "Toyota Corolla", price: "25 000 F / jour", available: true },
  { id: 2, name: "Hyundai Tucson", price: "45 000 F / jour", available: true },
  { id: 3, name: "Mercedes Sprinter", price: "80 000 F / jour", available: false },
];

function DemoAppMobile() {
  const [step, setStep] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const vehicle = vehicles.find((v) => v.id === selectedVehicle);

  return (
    <div className="flex justify-center">
      {/* Frame téléphone */}
      <div className="w-[260px] sm:w-[280px]">
        <div className="rounded-[2rem] border-[3px] border-slate-800 bg-slate-800 p-1.5 shadow-xl">
          {/* Notch */}
          <div className="mx-auto h-4 w-20 rounded-b-xl bg-slate-800 relative z-10 -mb-2" />

          <div className="rounded-[1.5rem] bg-white overflow-hidden min-h-[420px] flex flex-col">
            {/* Status bar */}
            <div className="flex items-center justify-between px-4 pt-3 pb-1">
              <span className="text-[9px] font-semibold text-slate-700">14:32</span>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-3 rounded-sm bg-slate-400" />
                <div className="h-2 w-2 rounded-full border border-slate-400" />
              </div>
            </div>

            {/* App header */}
            <div className="px-4 py-2 border-b border-black/6">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-lg bg-(--brand-blue)/15 flex items-center justify-center">
                  <svg className="h-3 w-3 text-(--brand-blue)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-2-2.2-3.3C13 5.6 12 5 11 5H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 9.7 1 10.8 1 12v4c0 .6.4 1 1 1h1" />
                    <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-slate-800">Loc Auto</span>
              </div>
            </div>

            {/* Contenu */}
            <div className="flex-1 p-3 space-y-2">
              {step === 0 && (
                <>
                  <div className="text-[11px] font-bold text-slate-800">Véhicules disponibles</div>
                  <div className="space-y-2">
                    {vehicles.map((v) => (
                      <button
                        key={v.id}
                        disabled={!v.available}
                        onClick={() => { setSelectedVehicle(v.id); setStep(1); }}
                        className={`w-full rounded-xl border p-3 text-left transition-all ${
                          v.available
                            ? "border-black/8 bg-white hover:shadow-md hover:border-(--brand-blue)/30"
                            : "border-black/4 bg-slate-50 opacity-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-bold text-slate-800">{v.name}</div>
                            <div className="text-[10px] text-(--brand-blue) font-semibold">{v.price}</div>
                          </div>
                          <span className={`rounded-full px-2 py-0.5 text-[8px] font-bold ${
                            v.available ? "bg-(--brand-green)/10 text-(--brand-green)" : "bg-red-50 text-red-400"
                          }`}>
                            {v.available ? "Dispo" : "Indispo"}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && vehicle && (
                <>
                  <button onClick={() => setStep(0)} className="text-[10px] text-(--brand-blue) font-semibold">← Retour</button>
                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <svg className="mx-auto h-8 w-8 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-2-2.2-3.3C13 5.6 12 5 11 5H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 9.7 1 10.8 1 12v4c0 .6.4 1 1 1h1" />
                      <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-[12px] font-bold text-slate-900">{vehicle.name}</div>
                    <div className="text-[11px] font-extrabold text-(--brand-blue)">{vehicle.price}</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="rounded-lg border border-black/8 px-3 py-2 text-[10px] text-slate-400">Date de début</div>
                    <div className="rounded-lg border border-black/8 px-3 py-2 text-[10px] text-slate-400">Date de fin</div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full rounded-xl bg-(--brand-blue) py-2.5 text-[11px] font-bold text-white"
                  >
                    Réserver →
                  </button>
                </>
              )}

              {step === 2 && vehicle && (
                <div className="flex flex-col items-center justify-center h-full gap-3 py-6">
                  <div className="h-12 w-12 rounded-full bg-(--brand-green)/15 flex items-center justify-center">
                    <svg className="h-6 w-6 text-(--brand-green)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900">Réservation confirmée</div>
                  <div className="text-[10px] text-slate-500 text-center">
                    {vehicle.name}<br />Vous recevrez un SMS de confirmation
                  </div>
                  <button
                    onClick={() => { setStep(0); setSelectedVehicle(null); }}
                    className="rounded-xl border border-black/10 px-4 py-2 text-[10px] font-semibold text-slate-700"
                  >
                    Nouvelle réservation
                  </button>
                </div>
              )}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-black/6 px-4 py-2 flex justify-around">
              <div className="text-center">
                <svg className="mx-auto h-4 w-4 text-(--brand-blue)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-2-2.2-3.3C13 5.6 12 5 11 5H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 9.7 1 10.8 1 12v4c0 .6.4 1 1 1h1" />
                  <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
                </svg>
                <span className="text-[7px] font-semibold text-(--brand-blue)">Véhicules</span>
              </div>
              <div className="text-center">
                <svg className="mx-auto h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" />
                </svg>
                <span className="text-[7px] font-semibold text-slate-400">Réservations</span>
              </div>
              <div className="text-center">
                <svg className="mx-auto h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-[7px] font-semibold text-slate-400">Profil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center text-[10px] text-slate-400">
          Simulation interactive — Parcourez le flow
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE PRINCIPALE
   ═══════════════════════════════════════════════════════════════ */

const projectsMeta = [
  {
    slug: "seo-maps",
    tag: "SEO / Google Maps",
    sector: "Multi-secteurs",
    title: "Visibilité Google Maps",
    subtitle: "Simulation interactive : choisissez un secteur et basculez avant/après pour voir l'impact du référencement local.",
    resultHighlight: "N°1 sur Google Maps",
    serviceLink: "/services/referencement-seo",
    serviceLabel: "SEO & Google Maps",
    accent: "blue" as const,
    Demo: DemoSEO,
  },
  {
    slug: "extranet-fournisseurs",
    tag: "SI / Extranet",
    sector: "Distribution",
    title: "Extranet fournisseurs — suivi des ventes",
    subtitle: "Portail sécurisé : contrats, ventes, expéditions, règlements. Cliquez sur les onglets pour explorer.",
    resultHighlight: "Allers-retours ÷3",
    serviceLink: "/services/extranet-outils-gestion",
    serviceLabel: "Outils de gestion",
    accent: "indigo" as const,
    Demo: DemoExtranet,
  },
  {
    slug: "site-catalogue",
    tag: "Site web",
    sector: "Santé",
    title: "Site vitrine avec catalogue produits",
    subtitle: "Naviguez, filtrez par catégorie, ouvrez une fiche produit. Comme un vrai site.",
    resultHighlight: "Appels mieux qualifiés",
    serviceLink: "/services/creation-site-web",
    serviceLabel: "Création de site web",
    accent: "green" as const,
    Demo: DemoSiteCatalogue,
  },
  {
    slug: "app-loc-auto",
    tag: "Application mobile",
    sector: "Services / Mobilité",
    title: "Application mobile — location de véhicules",
    subtitle: "Parcourez le flow complet : choisir un véhicule, réserver, confirmer.",
    resultHighlight: "0 conflit planning",
    serviceLink: "/services/extranet-outils-gestion",
    serviceLabel: "Outils de gestion",
    accent: "blue" as const,
    Demo: DemoAppMobile,
  },
];

const accentMap = {
  blue: { bg: "bg-(--brand-blue)/10", text: "text-(--brand-blue)", bar: "bg-(--brand-blue)" },
  green: { bg: "bg-(--brand-green)/10", text: "text-(--brand-green)", bar: "bg-(--brand-green)" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", bar: "bg-indigo-500" },
};

export default function RealisationsPage() {
  const whatsappMsg = encodeURIComponent(
    "Bonjour EXPERT CRÉA, j'ai vu vos réalisations et j'aimerais discuter de mon projet."
  );
  const wa = `https://wa.me/2250000000000?text=${whatsappMsg}`;

  return (
    <Container>
      <div className="space-y-20 pt-20 pb-8 sm:space-y-24 sm:pt-24 sm:pb-12">

        {/* BREADCRUMB */}
        <Breadcrumbs
          className="mb-6 sm:mb-8"
          items={[{ label: "Réalisations", href: "/realisations" }]}
        />

        {/* ─── HERO LÉGER ─── comme page services */}
        <section className="reveal pt-2 sm:pt-4 space-y-4">
          <p className="text-sm font-semibold text-(--brand-blue)">Réalisations</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Testez nos outils — en vrai
          </h1>
          <p className="text-slate-600 md:text-lg leading-relaxed max-w-2xl">
            Pas de captures figées. Cliquez, naviguez, explorez. Chaque démo est une simulation interactive de ce qu&apos;on livre.
          </p>
        </section>


        {/* ─── DÉMOS INTERACTIVES ─── */}
        {projectsMeta.map((project) => {
          const a = accentMap[project.accent];
          return (
            <section
              key={project.slug}
              id={project.slug}
              className="reveal scroll-mt-24 space-y-6"
            >
              {/* Header projet */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${a.bg} ${a.text}`}>
                    {project.tag}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500">
                    {project.sector}
                  </span>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-extrabold ${a.bg} ${a.text}`}>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {project.resultHighlight}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  {project.title}
                </h2>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{project.subtitle}</p>
              </div>

              {/* Démo interactive */}
              <project.Demo />

              {/* Lien vers service */}
              <div className="flex items-center gap-3">
                <Link
                  href={project.serviceLink}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-(--brand-blue) hover:underline"
                >
                  {project.serviceLabel}
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>

              {/* Séparateur */}
              <div className="border-t border-black/6" aria-hidden="true" />
            </section>
          );
        })}


        {/* ─── APPROCHE ─── 3 points */}
        <section className="reveal grid gap-5 sm:grid-cols-3">
          {([
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 15l-2 5L9 9l11 4-5 2Z" /><path d="m18 13 4-4" />
                </svg>
              ),
              title: "Interactif, pas figé",
              desc: "Vous testez l'outil avant de nous contacter. Pas de maquettes — des simulations.",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                </svg>
              ),
              title: "V1 rapide",
              desc: "Une première version utile en 2 à 4 semaines, puis on améliore.",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              ),
              title: "Adapté au terrain",
              desc: "Chaque outil est conçu pour votre réalité — pas un template générique.",
            },
          ]).map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                {item.icon}
              </span>
              <div className="mt-3 font-bold text-slate-900">{item.title}</div>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </section>


        {/* ─── CTA FINAL ─── dark */}
        <section className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-b from-slate-950 to-slate-900 p-8 sm:p-10 text-white">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-(--brand-blue)/18 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-green)/16 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="prose-container-left space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Vous voulez la même chose pour votre activité ?
              </h2>
              <p className="text-white/75 md:text-lg leading-relaxed">
                Décrivez votre situation — on vous montre ce qu&apos;on peut mettre en place.
              </p>
            </div>
            <div className="text-sm font-semibold text-white/70">Réponse sous 24h</div>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,145,255,0.35)] active:scale-98"
            >
              Discuter de mon projet
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/40"
            >
              WhatsApp
            </a>
            <Link
              href="/secteurs"
              className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/35"
            >
              Voir les secteurs
            </Link>
          </div>
        </section>

      </div>
    </Container>
  );
}