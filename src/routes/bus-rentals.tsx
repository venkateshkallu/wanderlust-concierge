import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { VehicleCard } from "./car-rentals";
import { vehicles } from "@/lib/data";

export const Route = createFileRoute("/bus-rentals")({
  head: () => ({
    meta: [
      { title: "Bus Rentals — Mini Bus, Volvo Coach, Tempo | Voyago India" },
      { name: "description", content: "Hire AC mini buses, Volvo luxury coaches and tempo travelers for groups, weddings and corporate tours." },
      { property: "og:title", content: "Bus Rentals — Voyago India" },
      { property: "og:description", content: "Group transport made easy — book on WhatsApp." },
    ],
  }),
  component: BusRentals,
});

function BusRentals() {
  const list = vehicles.filter((v) => v.category === "Bus" || v.category === "Tempo Traveler");
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-10">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Bus & Coach Rentals</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Buses & coaches for <span className="text-gradient-sunset italic">every group</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            12 to 45-seater AC vehicles for weddings, corporate tours, school trips and group holidays.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((v, i) => (
            <VehicleCard key={v.slug} v={v} i={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
