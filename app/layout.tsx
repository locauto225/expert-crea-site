import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "EXPERT CRÉA — Digital & Communication en Côte d’Ivoire",
    template: "%s — EXPERT CRÉA",
  },
  description: site.description,

  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "EXPERT CRÉA — Digital & Communication",
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        {/* ✅ Ajoute "js" le plus tôt possible (gating reveal),
            et on supprime l’avertissement d’hydratation via suppressHydrationWarning */}
        <Script id="js-ready" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js');`}
        </Script>

        <RevealOnScroll />
        <Header />

        <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>

        <Footer />
        <WhatsAppFab />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}