import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PackageCard } from "@/components/site/PackageCard";
import { CTASection } from "@/components/site/CTASection";
import { packages, type Pkg } from "@/lib/data";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Voyageluxe" },
      { name: "description", content: "Honeymoon, family, adventure, group, international, and weekend tour packages." },
      { property: "og:title", content: "Tour Packages — Voyageluxe" },
      { property: "og:description", content: "Curated holiday packages with WhatsApp instant booking." },
    ],
  }),
  component: PackagesPage,
});

const cats: ("All" | Pkg["category"])[] = ["All", "Honeymoon", "Family", "Adventure", "Group", "International", "Weekend"];

function PackagesPage() {
  const [c, setC] = useState<(typeof cats)[number]>("All");
  const list = packages.filter((p) => c === "All" || p.category === c);

  return (
    <>
      <section className="relative pt-40 pb-12">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Tour Packages</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl leading-tight">
            Itineraries that feel <span className="text-gradient-sunset italic">made for you</span>.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setC(cat)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  c === cat ? "bg-gradient-sunset text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <PackageCard key={p.slug} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
