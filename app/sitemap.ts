import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import fs from "node:fs";
import path from "node:path";

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

  { path: "/a-propos", lastModified: "2026-01-26", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", lastModified: "2026-01-26", changeFrequency: "yearly", priority: 0.6 },
  { path: "/blog", lastModified: "2026-02-14", changeFrequency: "weekly", priority: 0.65 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticItems: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency ?? "monthly",
    priority: r.priority ?? 0.7,
  }));

  // Auto-add blog posts from content/blog/*.mdx
  const blogDir = path.join(process.cwd(), "content", "blog");
  let blogItems: MetadataRoute.Sitemap = [];

  try {
    if (fs.existsSync(blogDir)) {
      const files = fs
        .readdirSync(blogDir)
        .filter((f) => f.endsWith(".mdx"))
        // ignore drafts like `_draft-...` if you ever use that convention
        .filter((f) => !f.startsWith("_"));

      blogItems = files.map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const stat = fs.statSync(path.join(blogDir, file));

        return {
          url: `${site.url}/blog/${slug}`,
          lastModified: stat.mtime,
          changeFrequency: "monthly",
          priority: 0.65,
        };
      });
    }
  } catch {
    // If something goes wrong reading the directory, keep sitemap functional.
    blogItems = [];
  }

  return [...staticItems, ...blogItems];
}