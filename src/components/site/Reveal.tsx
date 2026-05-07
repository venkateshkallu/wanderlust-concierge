import { useReveal } from "@/hooks/use-reveal";

export function RevealRoot({ children }: { children: React.ReactNode }) {
  useReveal();
  return <>{children}</>;
}
