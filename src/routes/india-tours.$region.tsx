import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, MapPin, Calendar, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { CTASection } from "@/components/site/CTASection";
import { DestinationCard } from "@/components/site/DestinationCard";
import { destinations, REGIONS } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/india-tours/$region")({
  head: ({ params }) => {
    const r = REGIONS[params.region as keyof typeof REGIONS];
    const title = r ? `${r.title} Tours — Voyago India` : "India Tours";
    return {
      meta: [
        { title },
        { name: "description", content: r?.desc ?? "Curated India tour packages." },
        { property: "og:title", content: title },
        { property: "og:description", content: r?.desc ?? "Premium India tour packages." },
      ],
    };
  },
  component: RegionPage,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 text-center">
      <h1 className="font-display text-4xl">Region not found</h1>
      <Link to="/india-tours" className="mt-4 inline-block text-primary">Back to India Tours</Link>
    </div>
  ),
  loader: ({ params }) => {
    const r = REGIONS[params.region as keyof typeof REGIONS];
    if (!r) throw notFound();
    return r;
  },
});

const faqs = [
  { q: "What's included in your tour packages?", a: "Hotels, transfers, sightseeing, and 24/7 support. Flights and meals are optional add-ons we can quote separately." },
  { q: "Can I customise the itinerary?", a: "Absolutely. Every itinerary is hand-built. Share your dates, interests, and budget and we'll tailor it." },
  { q: "How do I book?", a: "Send us a WhatsApp message — we respond within minutes with a personalised quote and easy online booking." },
  { q: "Is it safe to travel during off-season?", a: "Yes. We partner with verified local operators and choose the best time for your safety and experience." },
];

function RegionPage() {
  const region = Route.useLoaderData();
  const list = destinations.filter((d) => d.zone === region.zone);
  const banner = list[0]?.image;

  return (
    <>
      {/* Cinematic banner */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={banner} alt={region.title} className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">India · {region.title}</div>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl text-white max-w-3xl leading-tight">
            {region.title} <span className="text-gradient-sunset italic">unfolded</span>.
          </h1>
          <p className="mt-3 text-white/80 max-w-xl">{region.desc}</p>
        </div>
      </section>

      {/* Destination cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-display text-3xl sm:text-4xl">Top {region.title} packages</h2>
            <a href={waLink(`Hi! I'd like a ${region.title} tour quote.`)} target="_blank" rel="noopener" className="text-sm text-primary inline-flex items-center gap-1">
              <MessageCircle className="h-4 w-4" /> Quote on WhatsApp
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {list.map((d, i) => (
              <DestinationCard key={d.slug} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights + Itinerary preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Trip Highlights</div>
            <h3 className="mt-3 font-display text-3xl">Why travelers love {region.title}</h3>
            <ul className="mt-6 space-y-3">
              {(list[0]?.highlights ?? []).concat(list[1]?.highlights ?? []).slice(0, 6).map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {h}
                </li>
              ))}
            </ul>
            {list[0]?.bestTime && (
              <div className="mt-6 inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-sm">
                <Calendar className="h-4 w-4 text-accent" /> Best time to visit: <span className="text-foreground font-medium">{list[0].bestTime}</span>
              </div>
            )}
          </div>

          <div className="reveal glass-dark rounded-3xl p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Sample Itinerary</div>
            <h3 className="mt-3 font-display text-2xl">A typical 5-day {region.title} journey</h3>
            <ol className="mt-5 space-y-4">
              {[
                { d: "Day 1", t: "Arrival & welcome dinner" },
                { d: "Day 2", t: "Sightseeing & local culture" },
                { d: "Day 3", t: "Adventure / nature day" },
                { d: "Day 4", t: "Hidden gems & leisure" },
                { d: "Day 5", t: "Shopping & departure" },
              ].map((s) => (
                <li key={s.d} className="flex items-start gap-4">
                  <div className="text-xs font-semibold text-primary w-12 shrink-0">{s.d}</div>
                  <div className="text-sm">{s.t}</div>
                </li>
              ))}
            </ol>
            <a href={waLink(`Hi! Send me a detailed ${region.title} itinerary.`)} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-5 py-2.5 text-sm font-medium">
              <MessageCircle className="h-4 w-4" /> Get full itinerary
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <EnquiryForm regionTitle={region.title} />

      {/* FAQs */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">FAQs</div>
            <h2 className="mt-3 font-display text-3xl">Common questions</h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="reveal glass-dark rounded-2xl px-5 py-4 group">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  travelers: z.string().trim().min(1).max(10),
  date: z.string().trim().optional().default(""),
  message: z.string().trim().max(500).optional().default(""),
});

function EnquiryForm({ regionTitle }: { regionTitle: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      travelers: String(fd.get("travelers") || ""),
      date: String(fd.get("date") || ""),
      message: String(fd.get("message") || ""),
    };
    const r = enquirySchema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `Hi! I'm ${r.data.name} (${r.data.phone}). I'd like a ${regionTitle} package for ${r.data.travelers} traveler(s)${r.data.date ? `, dates: ${r.data.date}` : ""}.${r.data.message ? `\n\nNotes: ${r.data.message}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={onSubmit} className="reveal glass-strong rounded-3xl p-6 sm:p-8 shadow-elegant">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Quick Enquiry</div>
          <h3 className="mt-3 font-display text-2xl">Get a {regionTitle} quote</h3>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input name="name" label="Your name" placeholder="e.g. Aarav Mehta" error={errors.name} />
            <Input name="phone" label="Phone" placeholder="+91 9XXXXXXXXX" error={errors.phone} />
            <Input name="travelers" label="Travelers" placeholder="e.g. 2 adults" error={errors.travelers} />
            <Input name="date" label="Travel date" type="date" error={errors.date} />
          </div>
          <div className="mt-3">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Notes (optional)</label>
            <textarea name="message" rows={3} maxLength={500} placeholder="Budget, preferences…" className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/50" />
          </div>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-sunset text-primary-foreground py-3.5 text-sm font-medium shadow-glow hover:scale-[1.02] transition-transform">
            <Send className="h-4 w-4" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ name, label, placeholder, error, type = "text" }: { name: string; label: string; placeholder?: string; error?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={120}
        className={`mt-2 w-full rounded-xl bg-white/5 border px-4 py-3 text-sm outline-none ${type === "date" ? "[color-scheme:dark]" : ""} ${error ? "border-destructive" : "border-white/10 focus:border-primary/50"}`}
      />
      {error && <div className="mt-1 text-xs text-destructive">{error}</div>}
    </div>
  );
}
