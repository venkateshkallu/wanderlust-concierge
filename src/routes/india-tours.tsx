import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { DestinationCard } from "@/components/site/DestinationCard";
import { destinations, REGIONS } from "@/lib/data";

export const Route = createFileRoute("/india-tours")({
  head: () => ({
    meta: [
      { title: "India Tours — North, South, East & West | Voyago India" },
      { name: "description", content: "Region-wise India tour packages — Kashmir, Kerala, Sikkim, Rajasthan and more. Curated itineraries with WhatsApp quotes." },
      { property: "og:title", content: "India Tours — Voyago India" },
      { property: "og:description", content: "Premium region-wise India holiday packages." },
    ],
  }),
  component: IndiaTours,
});

function IndiaTours() {
  const domestic = destinations.filter((d) => d.region === "Domestic");
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-12">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">India Tours</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Discover India, <span className="text-gradient-sunset italic">region by region</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            From Himalayan snow to Kerala backwaters — explore curated itineraries across every corner of India.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(REGIONS).map((r, i) => {
            const sample = destinations.find((d) => d.zone === r.zone);
            return (
              <Link
                key={r.slug}
                to="/india-tours/$region"
                params={{ region: r.slug }}
                className="reveal group relative h-72 overflow-hidden rounded-3xl shadow-card hover-lift"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <img src={sample?.image} alt={r.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest"><MapPin className="h-3 w-3 text-primary" /> India</div>
                  <h3 className="mt-3 font-display text-2xl text-white">{r.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{r.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary">Explore <ArrowUpRight className="h-3.5 w-3.5" /></div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Popular India Destinations</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Trending across India</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {domestic.slice(0, 8).map((d, i) => (
              <DestinationCard key={d.slug} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
