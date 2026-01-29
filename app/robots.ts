import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/opengraph-image"],
        disallow: ["/api/", "/merci"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}