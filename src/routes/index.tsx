import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { DestinationCard } from "@/components/site/DestinationCard";
import { PackageCard } from "@/components/site/PackageCard";
import { ExperienceGrid } from "@/components/site/ExperienceGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { CTASection } from "@/components/site/CTASection";
import { destinations, packages } from "@/lib/data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <MarqueeStrip />

      {/* Destinations preview */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 reveal">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Trending Destinations</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Where Indian travelers go to fall in love</h2>
            </div>
            <Link to="/destinations" className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {destinations.slice(0, 8).map((d, i) => (
              <DestinationCard key={d.slug} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ExperienceGrid />

      {/* Packages preview */}
      <section className="relative py-24 sm:py-32 bg-[oklch(0.12_0.04_250)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 reveal">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Curated Packages</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Hand-picked itineraries, ready to book</h2>
            </div>
            <Link to="/packages" className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 6).map((p, i) => (
              <PackageCard key={p.slug} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
