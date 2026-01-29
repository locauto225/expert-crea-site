import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.png" alt={site.name} className="h-9 w-auto" />
            <div className="font-semibold">{site.name}</div>
          </div>
          <p className="text-sm text-slate-300">{site.description}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-semibold text-white">Navigation</div>
          <div className="grid gap-1">
            <Link href="/services" className="text-slate-300 hover:text-white">
              Services
            </Link>
            <Link href="/secteurs" className="text-slate-300 hover:text-white">
              Secteurs
            </Link>
            <Link href="/realisations" className="text-slate-300 hover:text-white">
              Réalisations
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-semibold text-white">Contact</div>
          <div className="text-slate-300">
            {site.address.city}, {site.address.country}
          </div>
          <div className="text-slate-300">{site.phoneDisplay}</div>
          <a className="text-slate-300 hover:text-white" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="text-slate-300 hover:text-white"
            href="https://wa.me/2250706502490?text=Bonjour%20EXPERT%20CR%C3%89A%2C%20je%20souhaite%20d%C3%A9crire%20ma%20situation%20et%20voir%20par%20o%C3%B9%20commencer."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {site.legalName}. Tous droits réservés.
      </div>
    </footer>
  );
}