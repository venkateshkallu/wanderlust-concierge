import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-maldives.jpg";
import { waLink } from "@/lib/site";

const stats = [
  { v: "5,000+", l: "Happy Travelers" },
  { v: "100+", l: "Destinations" },
  { v: "24/7", l: "Concierge" },
  { v: "4.9★", l: "Avg. Rating" },
];

const categories = ["Honeymoon", "Family", "Adventure", "Luxury", "Beach", "Mountains"];

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Honeymoon");
  const [travelers, setTravelers] = useState("2");

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buildMsg = () => {
    const parts = ["Hi! I'd like a trip quote."];
    if (destination) parts.push(`Destination: ${destination}.`);
    if (date) parts.push(`Date: ${date}.`);
    if (type) parts.push(`Type: ${type}.`);
    if (travelers) parts.push(`Travelers: ${travelers}.`);
    return parts.join(" ");
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain">
      {/* Background image with parallax + ken burns */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Maldives overwater villas at sunset"
          className="h-full w-full object-cover ken-burns"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.05_260)/.55] via-[oklch(0.10_0.05_260)/.40] to-background" />
        <div className="absolute inset-0 bg-aurora opacity-70" />
      </div>

      {/* Floating orbs (hidden on small screens for perf) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute top-[18%] left-[12%] h-32 w-32 rounded-full bg-primary/30 blur-3xl animate-drift" />
        <div className="absolute top-[60%] right-[14%] h-44 w-44 rounded-full bg-secondary/40 blur-3xl animate-drift" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-white/85">India's Bespoke Travel Concierge</span>
          </div>

          <h1 className="mt-5 font-display text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-7xl text-white">
            Explore India & The World{" "}
            <span className="text-gradient-sunset italic">Without Limits</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
            Luxury travel experiences, curated holiday packages, and unforgettable
            journeys designed for modern Indian travelers.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              to="/tours"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              Plan Your Trip
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={waLink("Hi! I'd like an instant trip quote.")}
              target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition"
            >
              <MessageCircle className="h-4 w-4 text-[oklch(0.75_0.18_145)]" />
              WhatsApp Quote
            </a>
          </div>
        </div>

        {/* Search bar - fully responsive grid */}
        <div className="mt-8 sm:mt-10 max-w-5xl glass-strong rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-elegant reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            <SearchField icon={<MapPin className="h-4 w-4" />} label="Where to">
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                placeholder="Maldives, Bali, Kashmir…"
              />
            </SearchField>

            <SearchField icon={<Calendar className="h-4 w-4" />} label="Travel date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none [color-scheme:dark]"
              />
            </SearchField>

            <SearchField icon={<Sparkles className="h-4 w-4" />} label="Trip type">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none [&>option]:bg-background"
              >
                {["Honeymoon", "Family", "Adventure", "Group", "Luxury", "Weekend"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </SearchField>

            <SearchField icon={<Users className="h-4 w-4" />} label="Travelers">
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none [&>option]:bg-background"
              >
                {["1", "2", "3", "4", "5", "6+"].map((o) => (
                  <option key={o}>{o} {Number(o) === 1 ? "person" : "people"}</option>
                ))}
              </select>
            </SearchField>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row gap-2.5 sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 4).map((c) => (
                <button
                  key={c}
                  onClick={() => setType(c)}
                  className={`rounded-full border px-3 py-1 text-xs transition ${
                    type === c ? "bg-white text-background border-white" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <a
              href={waLink(buildMsg())}
              target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform shrink-0"
            >
              <MessageCircle className="h-4 w-4" /> Get Instant Quote
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl">
          {stats.map((s, i) => (
            <div key={s.l} className="reveal glass rounded-2xl p-3 sm:p-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-xl sm:text-3xl font-display text-gradient-sunset">{s.v}</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchField({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 sm:py-3 min-w-0">
      <span className="text-muted-foreground shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        {children}
      </div>
    </label>
  );
}
