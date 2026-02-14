// components/HomeContainer.tsx
import type { ReactNode } from "react";
import { Container } from "@/components/Container";

/**
 * HomeContainer = même cadrage que tes pages "contenu" (ex: /secteurs)
 * → tu l’utilises dans les sections blanches de la Home
 * → et tu gardes Hero/Stats en full-bleed (w-screen)
 */
export function HomeContainer({
  children,
  className = "",
  as,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  return (
    <Container as={as} className={className}>
      {children}
    </Container>
  );
}