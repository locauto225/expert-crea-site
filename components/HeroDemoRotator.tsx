"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  src: string;
  alt: string;
};

export function HeroDemoRotator({
  items,
  intervalMs = 5500,
  className = "",
}: {
  items: Item[];
  intervalMs?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useRef(false);

  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;

    const onChange = () => (prefersReducedMotion.current = mq.matches);
    mq.addEventListener?.("change", onChange);

    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (safeItems.length <= 1) return;
    if (prefersReducedMotion.current) return;

    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % safeItems.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [safeItems.length, intervalMs]);

  if (safeItems.length === 0) return null;

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
        <div className="relative aspect-[3/2] w-full">
          {safeItems.map((it, idx) => {
            const isActive = idx === active;
            return (
              <div
                key={it.src}
                className={[
                  "absolute inset-0 transition duration-500 ease-out",
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
                ].join(" ")}
                aria-hidden={!isActive}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}