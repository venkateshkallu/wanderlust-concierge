import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DestinationCard } from "@/components/site/DestinationCard";
import { CTASection } from "@/components/site/CTASection";
import { destinations } from "@/lib/data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Voyago India" },
      { name: "description", content: "Explore curated domestic and international destinations for Indian travelers." },
      { property: "og:title", content: "Destinations — Voyago India" },
      { property: "og:description", content: "Kashmir, Maldives, Bali, Switzerland — your next dream trip awaits." },
    ],
  }),
  component: DestinationsPage,
});

const filters = ["All", "Domestic", "International"] as const;

function DestinationsPage() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = destinations.filter((d) => f === "All" || d.region === f);

  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Destinations</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl leading-tight">
            From Himalayan peaks to <span className="text-gradient-sunset italic">tropical shores</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Hand-picked destinations for honeymoons, families, and explorers.
          </p>

          <div className="mt-8 inline-flex glass-strong rounded-full p-1">
            {filters.map((fl) => (
              <button
                key={fl}
                onClick={() => setF(fl)}
                className={`px-5 py-2 text-sm rounded-full transition-all ${
                  f === fl ? "bg-gradient-sunset text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {fl}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {list.map((d, i) => (
            <DestinationCard key={d.slug} d={d} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
