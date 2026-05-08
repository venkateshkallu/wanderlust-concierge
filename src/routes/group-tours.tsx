import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PackageCard } from "@/components/site/PackageCard";
import { packages } from "@/lib/data";

export const Route = createFileRoute("/group-tours")({
  head: () => ({
    meta: [
      { title: "Group Tours — India & International | Voyago India" },
      { name: "description", content: "Fixed-departure group tours for friends, colleagues and milestone trips. Curated itineraries with great group pricing." },
      { property: "og:title", content: "Group Tours — Voyago India" },
      { property: "og:description", content: "Travel together — premium group tours with WhatsApp booking." },
    ],
  }),
  component: GroupTours,
});

function GroupTours() {
  const list = packages.filter((p) => ["Group", "Adventure", "International"].includes(p.category));
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-10">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Group Tours</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Travel together. <span className="text-gradient-sunset italic">Make memories.</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Fixed-departure and custom group tours — friends, families, corporates and adventure squads.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <PackageCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
