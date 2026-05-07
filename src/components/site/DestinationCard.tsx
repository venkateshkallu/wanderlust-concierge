import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Star } from "lucide-react";
import { Destination } from "@/lib/data";
import { waLink } from "@/lib/site";

export function DestinationCard({ d, index = 0 }: { d: Destination; index?: number }) {
  return (
    <article
      className="group relative reveal overflow-hidden rounded-3xl bg-card shadow-card hover-lift"
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={d.image}
          alt={d.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-widest">
          <MapPin className="h-3 w-3 text-primary" /> {d.region}
        </div>
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-xs">
          <Star className="h-3 w-3 fill-accent text-accent" /> 4.9
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-2xl text-white">{d.name}</h3>
          <p className="text-sm text-white/70">{d.tagline}</p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">From</div>
              <div className="text-lg font-semibold text-white">
                ₹{d.from.toLocaleString("en-IN")} <span className="text-xs text-white/60 font-normal">/ {d.nights}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center rounded-full bg-white text-foreground px-3 py-2 text-xs font-medium hover:bg-white/90 transition"
            >
              Book Now
            </Link>
            <a
              href={waLink(`Hi! I'd like a quote for ${d.name}.`)}
              target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-1 rounded-full bg-[var(--whatsapp)] text-white px-3 py-2 text-xs font-medium hover:opacity-90"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
