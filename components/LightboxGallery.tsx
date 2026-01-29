"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  desc: string;
  href?: string;
  badge?: string;
};

export function LightboxGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const current = useMemo(() => items[idx], [items, idx]);

  function close() {
    setOpen(false);
  }
  function prev() {
    setIdx((v) => (v - 1 + items.length) % items.length);
  }
  function next() {
    setIdx((v) => (v + 1) % items.length);
  }

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            className="card-wow group rounded-3xl border border-black/10 bg-white p-4 text-left focus:outline-none focus:ring-2 focus:ring-(--brand-blue) focus:ring-offset-2"
          >
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-black/5 bg-slate-100">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-slate-900">{it.title}</div>
              {it.badge ? (
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                  {it.badge}
                </span>
              ) : null}
            </div>

            <div className="mt-2 text-sm text-slate-600">{it.desc}</div>

            <div className="mt-3 text-sm font-semibold text-(--brand-blue) opacity-0 transition group-hover:opacity-100">
              Agrandir →
            </div>
          </button>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950"
            onClick={(e) => e.stopPropagation()}
          >
            {/* top bar */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="text-sm font-semibold text-white/90">{current.title}</div>
              <button
                type="button"
                onClick={close}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Fermer
              </button>
            </div>

            {/* content */}
            <div className="grid gap-0 md:grid-cols-[1.6fr_1fr]">
              <div className="relative aspect-16/10 bg-black">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 70vw, 100vw"
                  priority
                />
              </div>

              <div className="space-y-4 p-5">
                {current.badge ? (
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    {current.badge}
                  </span>
                ) : null}

                <p className="text-sm text-white/75">{current.desc}</p>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    ← Précédent
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Suivant →
                  </button>

                  {current.href ? (
                    <Link
                      href={current.href}
                      className="rounded-xl bg-(--brand-blue) px-3 py-2 text-sm font-semibold text-white hover:opacity-95"
                    >
                      Voir la page →
                    </Link>
                  ) : null}
                </div>

                <p className="text-xs text-white/50">
                  Démo / prototype — rendu illustratif (validation client en cours si applicable).
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}