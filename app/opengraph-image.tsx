import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, rgba(2,6,23,1) 0%, rgba(15,23,42,1) 55%, rgba(2,6,23,1) 100%)",
          color: "white",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.10)",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            {site.name}
          </div>

          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05 }}>
            Digital & Communication
            <br />
            pour développer votre activité.
          </div>

          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.80)", maxWidth: 900 }}>
            Sites qui convertissent • SEO local (Google Maps) • Extranet & outils de gestion
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.70)" }}>
            Côte d’Ivoire • Projets locaux & internationaux
          </div>

          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              padding: "10px 14px",
              borderRadius: 16,
              background: "rgba(59,130,246,0.25)",
              border: "1px solid rgba(59,130,246,0.40)",
            }}
          >
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}