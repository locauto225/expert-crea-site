import Link from "next/link";

type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  // Always include home at the beginning
  const crumbs: Crumb[] =
    items.length > 0 && items[0]?.href === "/"
      ? items
      : [{ label: "Accueil", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.label,
      item: c.href, // OK with relative; metadataBase will resolve, and Google accepts absolute/relative in practice.
    })),
  };

  return (
    <div className={className}>
      <nav aria-label="Fil d’Ariane">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          {crumbs.map((c, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <li key={`${c.href}-${idx}`} className="flex items-center gap-2">
                {idx !== 0 ? <span className="text-slate-400">/</span> : null}

                {isLast ? (
                  <span className="font-semibold text-slate-900">{c.label}</span>
                ) : (
                  <Link
                    href={c.href}
                    className="hover:text-slate-900 hover:underline"
                  >
                    {c.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}