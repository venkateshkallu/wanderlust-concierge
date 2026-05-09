import { Link } from "@tanstack/react-router";
import { Compass, Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[oklch(0.10_0.04_250)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-sunset shadow-glow">
              <Compass className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            India's premium travel platform — curated tours, car & bus rentals, honeymoons,
            and bespoke holidays across India and the world.
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
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">India Tours</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/tours#north" className="hover:text-primary text-muted-foreground">North India</a></li>
            <li><a href="/tours#south" className="hover:text-primary text-muted-foreground">South India</a></li>
            <li><a href="/tours#east" className="hover:text-primary text-muted-foreground">East India</a></li>
            <li><a href="/tours#west" className="hover:text-primary text-muted-foreground">West India</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/tours" className="hover:text-primary text-muted-foreground">All Tours</Link></li>
            <li><Link to="/international-tours" className="hover:text-primary text-muted-foreground">International</Link></li>
            <li><Link to="/car-rentals" className="hover:text-primary text-muted-foreground">Car Rentals</Link></li>
            <li><Link to="/bus-rentals" className="hover:text-primary text-muted-foreground">Bus Rentals</Link></li>
            <li><Link to="/blogs" className="hover:text-primary text-muted-foreground">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-primary text-muted-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />{SITE.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{SITE.email}</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4" />@voyagoindia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Crafted with wanderlust.
      </div>
    </footer>
  );
}
