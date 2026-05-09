import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Car, Bus, Globe, Users, MapPin, BookOpen } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { DestinationCard } from "@/components/site/DestinationCard";
import { PackageCard } from "@/components/site/PackageCard";
import { ExperienceGrid } from "@/components/site/ExperienceGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { CTASection } from "@/components/site/CTASection";
import { destinations, packages, REGIONS, blogs } from "@/lib/data";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { to: "/tours", icon: MapPin, title: "India Tours", desc: "North · South · East · West" },
  { to: "/international-tours", icon: Globe, title: "International", desc: "Dubai · Bali · Maldives & more" },
  { to: "/car-rentals", icon: Car, title: "Car Rentals", desc: "Sedan · SUV · Luxury · Tempo" },
  { to: "/bus-rentals", icon: Bus, title: "Bus Rentals", desc: "Group & corporate transport" },
  { to: "/blogs", icon: BookOpen, title: "Travel Blogs", desc: "Guides & itineraries" },
  { to: "/contact", icon: Users, title: "Plan With Us", desc: "Bespoke trip concierge" },
] as const;

function Index() {
  return (
    <>
      <Hero />
      <MarqueeStrip />

      {/* Services overview */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">What We Offer</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Everything you need to travel beautifully</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <Link key={s.to} to={s.to} className="reveal group glass-dark rounded-2xl p-4 sm:p-5 hover-lift" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-sunset shadow-glow">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-4 font-medium">{s.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Region grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex items-end justify-between gap-4 flex-wrap">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">India, Region by Region</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Discover your India</h2>
            </div>
            <Link to="/tours" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
              All India tours <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(REGIONS).map((r, i) => {
              const sample = destinations.find((d) => d.zone === r.zone);
              return (
                <a key={r.slug} href={`/tours#${r.slug}`} className="reveal group relative h-56 sm:h-72 overflow-hidden rounded-3xl block" style={{ transitionDelay: `${i * 70}ms` }}>
                  <img src={sample?.image} alt={r.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-display text-xl sm:text-2xl text-white">{r.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/75 line-clamp-2">{r.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations preview */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 reveal flex-wrap">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Trending Destinations</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Where Indian travelers go to fall in love</h2>
            </div>
            <Link to="/tours" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {destinations.slice(0, 8).map((d, i) => (
              <DestinationCard key={d.slug} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ExperienceGrid />

      {/* Packages preview */}
      <section className="relative py-16 sm:py-24 bg-[oklch(0.12_0.04_250)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 reveal flex-wrap">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Curated Packages</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Hand-picked itineraries, ready to book</h2>
            </div>
            <Link to="/tours" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 6).map((p, i) => (
              <PackageCard key={p.slug} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />

      {/* Latest from blog */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">From the Blog</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Travel stories & guides</h2>
            </div>
            <Link to="/blogs" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
              All articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.slice(0, 3).map((b, i) => (
              <Link key={b.slug} to="/blogs" className="reveal group relative overflow-hidden rounded-3xl glass-dark hover-lift" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-gradient-sunset px-3 py-1 text-[11px] uppercase tracking-widest text-primary-foreground font-medium">{b.category}</span>
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{b.date} · {b.readMins} min read</div>
                  <h3 className="mt-2 font-display text-lg group-hover:text-primary transition-colors">{b.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
