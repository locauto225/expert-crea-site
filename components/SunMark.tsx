import React from "react";

type Props = {
  className?: string;
  size?: number; // px
  tone?: "light" | "dark";
  animated?: boolean;
  ariaLabel?: string;
};

export default function SunMark({
  className = "",
  size = 56,
  tone = "dark",
  animated = true,
  ariaLabel = "Décoratif",
}: Props) {
  const stroke = tone === "dark" ? "rgba(15,23,42,0.22)" : "rgba(255,255,255,0.22)";
  const fillDot = tone === "dark" ? "rgba(15,23,42,0.22)" : "rgba(255,255,255,0.22)";

  return (
    <span
      className={`sunmark ${animated ? "sunmark--anim" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-label={ariaLabel}
      role="img"
    >
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
        {/* rays */}
        <g stroke={stroke} strokeWidth="3" strokeLinecap="round">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6; // 30°
            const x1 = 32 + Math.cos(a) * 18;
            const y1 = 32 + Math.sin(a) * 18;
            const x2 = 32 + Math.cos(a) * 26;
            const y2 = 32 + Math.sin(a) * 26;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* center dot */}
        <circle cx="32" cy="32" r="8" fill={fillDot} />
      </svg>
    </span>
  );
}