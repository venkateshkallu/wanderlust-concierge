import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Plane, Search, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-maldives.jpg";
import { waLink } from "@/lib/site";

const stats = [
  { v: "5,000+", l: "Happy Travelers" },
  { v: "100+", l: "Destinations" },
  { v: "24/7", l: "Concierge Support" },
  { v: "4.9★", l: "Avg. Rating" },
];

const categories = ["Honeymoon", "Family", "Adventure", "Luxury", "Beach", "Mountains"];

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain">
      {/* Background image with parallax + ken burns */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Maldives overwater villas at sunset"
          className="h-full w-full object-cover ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.05_260)/.55] via-[oklch(0.10_0.05_260)/.35] to-background" />
        <div className="absolute inset-0 bg-aurora opacity-70" />
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[18%] left-[12%] h-32 w-32 rounded-full bg-primary/30 blur-3xl animate-drift" />
        <div className="absolute top-[60%] right-[14%] h-44 w-44 rounded-full bg-secondary/40 blur-3xl animate-drift" style={{ animationDelay: "-6s" }} />
        <div className="absolute top-[35%] right-[28%] h-20 w-20 rounded-full bg-accent/30 blur-2xl float-slow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-white/80">India's Bespoke Travel Concierge</span>
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white">
            Explore India & The World{" "}
            <span className="text-gradient-sunset italic">Without Limits</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Luxury travel experiences, curated holiday packages, and unforgettable
            journeys designed for modern Indian travelers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/packages"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              Plan Your Trip
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={waLink("Hi! I'd like an instant trip quote.")}
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition"
            >
              <MessageCircle className="h-4 w-4 text-[oklch(0.75_0.18_145)]" />
              Get Instant Quote on WhatsApp
            </a>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-10 max-w-4xl glass-strong rounded-2xl p-3 sm:p-4 shadow-elegant reveal">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3">
            <label className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Where to</div>
                <input
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                  placeholder="Maldives, Bali, Kashmir…"
                />
              </div>
            </label>
            <label className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
              <Plane className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Trip type</div>
                <select className="w-full bg-transparent text-sm text-white outline-none [&>option]:bg-background">
                  <option>Honeymoon</option>
                  <option>Family</option>
                  <option>Adventure</option>
                  <option>Group</option>
                  <option>Luxury</option>
                </select>
              </div>
            </label>
            <a
              href={waLink("Hi! Help me find a trip.")}
              target="_blank" rel="noopener"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-sunset px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform"
            >
              Find My Trip
            </a>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 px-1">
            {categories.map((c) => (
              <button key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10 hover:text-white transition">
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {stats.map((s, i) => (
            <div key={s.l} className="reveal glass rounded-2xl p-4 sm:p-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-2xl sm:text-3xl font-display text-gradient-sunset">{s.v}</div>
              <div className="text-xs text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
        <div className="text-[10px] uppercase tracking-[0.3em]">Scroll</div>
        <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
