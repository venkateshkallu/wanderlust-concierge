import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Snowflake, Users } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { vehicles, type Vehicle } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/car-rentals")({
  head: () => ({
    meta: [
      { title: "Car Rentals — Sedan, SUV, Luxury, Tempo | Voyago India" },
      { name: "description", content: "Premium car rentals across India — Swift, Innova, Fortuner, Mercedes, Tempo Travelers. Instant WhatsApp booking." },
      { property: "og:title", content: "Car Rentals — Voyago India" },
      { property: "og:description", content: "Book sedans, SUVs, luxury cars and tempo travelers with instant WhatsApp quotes." },
    ],
  }),
  component: CarRentals,
});

const carCats = ["All", "Economy", "Sedan", "SUV", "Luxury", "Tempo Traveler"] as const;

function CarRentals() {
  const [c, setC] = useState<(typeof carCats)[number]>("All");
  const list = vehicles.filter((v) => v.category !== "Bus" && (c === "All" || v.category === c));

  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-10">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Car Rentals</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Premium cars, <span className="text-gradient-sunset italic">on demand</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Self-drive or chauffeur-driven — economy to luxury, hourly, daily or trip-wise.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {carCats.map((cat) => (
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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((v, i) => (
              <VehicleCard key={v.slug} v={v} i={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function VehicleCard({ v, i }: { v: Vehicle; i: number }) {
  return (
    <article className="reveal group relative overflow-hidden rounded-3xl glass-dark hover-lift" style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
      <div className="relative h-48 overflow-hidden">
        <img src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <span className="absolute top-3 left-3 rounded-full bg-gradient-sunset px-3 py-1 text-[11px] uppercase tracking-widest text-primary-foreground font-medium">
          {v.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl">{v.name}</h3>
        <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {v.seats} seats</span>
          {v.ac && <span className="inline-flex items-center gap-1"><Snowflake className="h-3.5 w-3.5" /> AC</span>}
        </div>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {v.features.map((f) => (
            <li key={f} className="text-[11px] rounded-full border border-white/10 px-2.5 py-1 text-muted-foreground">{f}</li>
          ))}
        </ul>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Starting</div>
            <div className="text-xl font-semibold">
              ₹{v.pricePerDay.toLocaleString("en-IN")}
              <span className="text-xs text-muted-foreground font-normal"> / day</span>
            </div>
            {v.perKm && <div className="text-[11px] text-muted-foreground">+ ₹{v.perKm}/km</div>}
          </div>
          <a
            href={waLink(`Hi! I'd like to book a ${v.name} (${v.category}). Please share availability.`)}
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-xs font-medium text-white shadow-glow hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
