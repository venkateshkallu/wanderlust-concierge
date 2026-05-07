import { Clock, MessageCircle, Star } from "lucide-react";
import { Pkg } from "@/lib/data";
import { waLink } from "@/lib/site";

export function PackageCard({ p, index = 0 }: { p: Pkg; index?: number }) {
  return (
    <article
      className="group reveal relative overflow-hidden rounded-3xl glass-dark hover-lift"
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-gradient-sunset px-3 py-1 text-[11px] uppercase tracking-widest text-primary-foreground font-medium">
          {p.category}
        </span>
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-xs">
          <Star className="h-3 w-3 fill-accent text-accent" /> {p.rating.toFixed(1)}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl">{p.title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {p.duration}
        </div>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="text-[11px] rounded-full border border-white/10 px-2.5 py-1 text-muted-foreground">
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Starting</div>
            <div className="text-xl font-semibold">
              ₹{p.from.toLocaleString("en-IN")}
              <span className="text-xs text-muted-foreground font-normal"> / pp</span>
            </div>
          </div>
          <a
            href={waLink(`Hi! I'd like to book "${p.title}". Please share details.`)}
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-xs font-medium text-white shadow-glow hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
