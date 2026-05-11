import { MessageCircle, MapPin, Calendar, Star, Mountain, Palmtree, Cloud, Crown, Hotel, Clock, Phone } from 'lucide-react';
import { CTASection } from '@/components/site/CTASection';
import { destinations, packages, REGIONS, indiaStates } from '@/lib/data';
import { SITE, waLink } from '@/lib/site';

const REGION_META = [
  { key: 'North' as const, slug: 'north', icon: Mountain, accent: 'Snow-clad Himalayas, valleys & mughal gardens.' },
  { key: 'South' as const, slug: 'south', icon: Palmtree, accent: 'Backwaters, hill stations & sun-drenched beaches.' },
  { key: 'East' as const, slug: 'east', icon: Cloud, accent: 'Tea hills, monasteries & untouched wilderness.' },
  { key: 'West' as const, slug: 'west', icon: Crown, accent: 'Royal palaces, white deserts & coastal cities.' },
];

export default function ToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-12">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">India Tours</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Discover India, <span className="text-gradient-sunset italic">region by region</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            From Himalayan snow to Kerala backwaters — explore curated itineraries across every corner of India.
          </p>

          {/* Region quick-jump */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {REGION_META.map((r) => (
              <a key={r.slug} href={`#${r.slug}`} className="glass rounded-2xl p-4 hover-lift transition group">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-sunset shadow-glow">
                  <r.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-3 font-medium">{r.key} India</div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{r.accent}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Region sections */}
      {REGION_META.map((r) => {
        const dests = destinations.filter((d) => d.zone === r.key);
        const pkgs = packages.filter((p) =>
          dests.some((d) => p.title.toLowerCase().includes(d.name.toLowerCase()))
        );
        return <RegionSection key={r.slug} region={r} dests={dests} pkgs={pkgs} />;
      })}

      <CTASection />
    </>
  );
}

function RegionSection({
  region,
  dests,
  pkgs,
}: {
  region: typeof REGION_META[number];
  dests: typeof destinations;
  pkgs: typeof packages;
}) {
  const meta = REGIONS[region.slug as keyof typeof REGIONS];
  const banner = dests[0]?.image;

  return (
    <section id={region.slug} className="scroll-mt-24 py-16 sm:py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Region banner */}
        <div className="reveal relative h-56 sm:h-72 overflow-hidden rounded-3xl">
          {banner && <img src={banner} alt={meta.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center p-6 sm:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">{region.key} India</div>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl text-white max-w-xl">{meta.title}</h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-white/80">{meta.desc}</p>
          </div>
        </div>

        {/* Destination cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dests.map((d, i) => (
            <article
              key={d.slug}
              className="reveal group relative overflow-hidden rounded-2xl glass-dark hover-lift"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest">
                  <MapPin className="h-3 w-3 text-primary" /> {d.name}
                </div>
                <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px]">
                  <Star className="h-3 w-3 fill-accent text-accent" /> 4.9
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg">{d.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{d.tagline}</p>
                {d.bestTime && (
                  <div className="mt-2 text-[11px] text-muted-foreground inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Best: {d.bestTime}
                  </div>
                )}
                <ul className="mt-3 flex flex-wrap gap-1">
                  {d.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="text-[10px] rounded-full border border-white/10 px-2 py-0.5 text-muted-foreground">{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">From</div>
                    <div className="text-base font-semibold">₹{d.from.toLocaleString('en-IN')}</div>
                    <div className="text-[10px] text-muted-foreground">{d.nights}</div>
                  </div>
                  <a
                    href={waLink(`Hi! I'd like a quote for ${d.name} (${region.key} India).`)}
                    target="_blank" rel="noopener"
                    className="inline-flex items-center gap-1 rounded-full bg-[var(--whatsapp)] px-3 py-2 text-[11px] font-medium text-white shadow-glow hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="h-3 w-3" /> Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sample itinerary preview */}
        {dests[0] && (
          <div className="mt-8 reveal glass rounded-3xl p-5 sm:p-7">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Sample Itinerary</div>
            <h3 className="mt-2 font-display text-2xl">{dests[0].name} — {dests[0].nights}</h3>
            <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {dests[0].highlights.map((h, idx) => (
                <li key={h} className="flex gap-3 rounded-2xl bg-white/5 p-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-sunset text-[11px] font-semibold text-primary-foreground">{idx + 1}</span>
                  <div>
                    <div className="text-sm font-medium">Day {idx + 1}</div>
                    <div className="text-xs text-muted-foreground">{h}</div>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href={waLink(`Hi! Please share the full itinerary & best price for ${dests[0].name}.`)}
              target="_blank" rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Get Full Itinerary on WhatsApp
            </a>
          </div>
        )}

        {/* Featured packages for region */}
        {pkgs.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-2xl">Featured {region.key} India Packages</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pkgs.map((p, i) => (
                <article key={p.slug} className="reveal group relative overflow-hidden rounded-2xl glass-dark hover-lift" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-gradient-sunset px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary-foreground font-medium">{p.category}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-lg">{p.title}</h4>
                    <div className="mt-1 text-xs text-muted-foreground">{p.duration}</div>
                    <div className="mt-3 flex items-end justify-between">
                      <div className="text-base font-semibold">₹{p.from.toLocaleString('en-IN')}<span className="text-xs text-muted-foreground font-normal"> /pp</span></div>
                      <a
                        href={waLink(`Hi! I'd like to book "${p.title}".`)}
                        target="_blank" rel="noopener"
                        className="inline-flex items-center gap-1 rounded-full bg-[var(--whatsapp)] px-3 py-2 text-[11px] font-medium text-white"
                      >
                        <MessageCircle className="h-3 w-3" /> Book
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
