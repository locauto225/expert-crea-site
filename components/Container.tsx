import type { ReactNode } from "react";

/**
 * Conteneur centré pour les pages de contenu.
 * La homepage ne l'utilise pas (sections pleine largeur).
 *
 * Usage :
 *   import { Container } from "@/components/Container";
 *   <Container>…</Container>
 *   <Container size="narrow">…</Container>
 */

const sizes = {
  // Largeur “agency” (comme Secteurs) : plus large que max-w-7xl.
  // 1440px (~90rem) / 1600px (~100rem)
  default: "max-w-[1440px] 2xl:max-w-[1600px]",
  narrow: "max-w-4xl",
  wide: "max-w-[1440px] 2xl:max-w-[1600px]",
} as const;

export function Container({
  children,
  size = "default",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  size?: keyof typeof sizes;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  return (
    <Tag className={`mx-auto w-full ${sizes[size]} px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </Tag>
  );
}