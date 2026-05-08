import { Award, Headphones, IndianRupee, ShieldCheck, Sparkles, Users } from "lucide-react";

const items = [
  { icon: Users, v: "5,000+", l: "Happy Travelers", d: "Couples, families, and explorers worldwide." },
  { icon: ShieldCheck, v: "100%", l: "Trusted Partner", d: "IATA-affiliated, fully verified vendors." },
  { icon: IndianRupee, v: "Best", l: "Affordable Luxury", d: "Curated packages with no hidden costs." },
  { icon: Headphones, v: "24/7", l: "Travel Support", d: "On-call concierge through your trip." },
  { icon: Sparkles, v: "Custom", l: "Trip Planning", d: "Every itinerary tailored to your dream." },
  { icon: Award, v: "5★", l: "Award Winning", d: "Recognised for service excellence." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Why Voyago India</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Travel like the world is yours.</h2>
          <p className="mt-4 text-muted-foreground">
            We design private, premium journeys that feel handcrafted — because they are.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it.l}
              className="reveal group relative overflow-hidden rounded-3xl glass-dark p-6 hover-lift"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-sunset opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-sunset shadow-glow">
                  <it.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-5 text-3xl font-display text-gradient-sunset">{it.v}</div>
                <div className="mt-1 font-medium">{it.l}</div>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
