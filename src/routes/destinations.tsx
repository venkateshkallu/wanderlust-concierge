import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { DestinationCard } from "@/components/site/DestinationCard";
import { CTASection } from "@/components/site/CTASection";
import { destinations } from "@/lib/data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — India & International | Voyago India" },
      { name: "description", content: "Explore curated domestic and international destinations for Indian travelers." },
      { property: "og:title", content: "Destinations — Voyago India" },
      { property: "og:description", content: "Kashmir, Maldives, Bali, Switzerland — your next dream trip awaits." },
    ],
  }),
  component: DestinationsPage,
});

const filters = ["All", "Domestic", "International", "North", "South", "East", "West"] as const;

const faqs = [
  { q: "How do I choose the right destination?", a: "Tell us your dates, budget and vibe (beach, mountains, culture). We'll suggest 2–3 perfect matches on WhatsApp." },
  { q: "Do you handle visas for international trips?", a: "Yes — we offer end-to-end visa assistance for Dubai, Thailand, Bali, Singapore, Schengen and more." },
  { q: "Are flights included?", a: "Packages are typically land-only. We share flight options separately so you can choose the best deal." },
  { q: "Can I book last-minute?", a: "Absolutely. Many destinations are bookable within 48 hours — message us for live availability." },
];

function DestinationsPage() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = destinations.filter((d) => {
    if (f === "All") return true;
    if (f === "Domestic" || f === "International") return d.region === f;
    return d.zone === f;
  });

  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-12">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Destinations</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            From Himalayan peaks to <span className="text-gradient-sunset italic">tropical shores</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Hand-picked destinations across India and the world — for honeymoons, families, and explorers.
          </p>

          <div className="mt-8 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto">
            <div className="inline-flex glass-strong rounded-full p-1 gap-1 whitespace-nowrap">
              {filters.map((fl) => (
                <button
                  key={fl}
                  onClick={() => setF(fl)}
                  className={`px-4 sm:px-5 py-2 text-sm rounded-full transition-all ${
                    f === fl ? "bg-gradient-sunset text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {fl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {list.map((d, i) => (
            <DestinationCard key={d.slug} d={d} index={i} />
          ))}
        </div>
      </section>

      {/* Best time to visit */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Plan Smart</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Best time to visit</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.filter((d) => d.bestTime).slice(0, 6).map((d, i) => (
              <div key={d.slug} className="reveal glass-dark rounded-2xl p-5 hover-lift" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> {d.name}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-base"><Calendar className="h-4 w-4 text-accent" /> {d.bestTime}</div>
                <p className="mt-2 text-xs text-muted-foreground">{d.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Postcards from our trips</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {destinations.slice(0, 8).map((d, i) => (
              <Link key={d.slug} to="/destinations" className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl group" style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                <img src={d.image} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 font-display text-sm text-white">{d.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">FAQs</div>
            <h2 className="mt-3 font-display text-3xl">Frequently asked</h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="reveal glass-dark rounded-2xl px-5 py-4 group">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
