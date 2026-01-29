import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

type RouteItem = {
  path: string;
  lastModified: string; // ISO date string
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

const routes: RouteItem[] = [
  { path: "/", lastModified: "2026-01-27", changeFrequency: "weekly", priority: 1 },

  { path: "/services", lastModified: "2026-01-27", changeFrequency: "weekly", priority: 0.8 },
  { path: "/services/creation-site-web", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/referencement-seo", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/extranet-outils-gestion", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/conformite-fne", lastModified: "2026-01-27", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/identite-visuelle-supports", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.85 },

  { path: "/secteurs", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.75 },
  { path: "/secteurs/hotels-tourisme", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.75 },
  { path: "/secteurs/pharmacies-sante", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.7 },
  { path: "/secteurs/pme-commerces", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.7 },

  { path: "/realisations", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.7 },
  { path: "/avis", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.7 },

  { path: "/methode", lastModified: "2026-01-26", changeFrequency: "yearly", priority: 0.6 },
  { path: "/a-propos", lastModified: "2026-01-26", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", lastModified: "2026-01-26", changeFrequency: "yearly", priority: 0.6 },

  { path: "/blog", lastModified: "2026-01-26", changeFrequency: "weekly", priority: 0.65 },
  { path: "/blog/site-web", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.65 },
  { path: "/blog/seo-google-maps", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.65 },
  { path: "/blog/extranet-outils-gestion", lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.65 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency ?? "monthly",
    priority: r.priority ?? 0.7,
  }));
}