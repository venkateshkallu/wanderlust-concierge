import { Link } from "@tanstack/react-router";
import { Compass, Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[oklch(0.10_0.04_250)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-sunset shadow-glow">
              <Compass className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground">
            India's modern luxury travel concierge. We design unforgettable journeys —
            from honeymoons in the Maldives to private trails in Ladakh.
          </p>
          <a
            href={waLink("Hi! I'd like to plan a trip.")}
            target="_blank" rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-3 text-sm font-medium text-white shadow-glow"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/destinations" className="hover:text-primary">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-primary">Packages</Link></li>
            <li><Link to="/experiences" className="hover:text-primary">Experiences</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />{SITE.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{SITE.email}</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4" />@voyageluxe</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Crafted with wanderlust.
      </div>
    </footer>
  );
}
