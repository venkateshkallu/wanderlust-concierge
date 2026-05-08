import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PackageCard } from "@/components/site/PackageCard";
import { packages } from "@/lib/data";

export const Route = createFileRoute("/honeymoon")({
  head: () => ({
    meta: [
      { title: "Honeymoon Packages — Maldives, Bali, Andaman | Voyago India" },
      { name: "description", content: "Romantic honeymoon packages — overwater villas, private dinners, candlelight cruises." },
      { property: "og:title", content: "Honeymoon Packages — Voyago India" },
      { property: "og:description", content: "Curated honeymoons for Indian couples — instant WhatsApp quotes." },
    ],
  }),
  component: Honeymoon,
});

function Honeymoon() {
  const list = packages.filter((p) => p.category === "Honeymoon");
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-10">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Honeymoon Packages</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Begin forever in <span className="text-gradient-sunset italic">paradise</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Overwater villas, candlelight dinners, private cruises — handcrafted for newlyweds.
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
