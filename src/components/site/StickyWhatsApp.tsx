import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function StickyWhatsApp() {
  return (
    <a
      href={waLink("Hi! I'd like a quick trip quote.")}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-white shadow-glow glow-pulse hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium pr-1">Instant Quote</span>
    </a>
  );
}
