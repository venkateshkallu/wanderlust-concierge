import { MessageCircle, MapPin, Calendar, Star, Hotel, Clock, Phone, Mountain, Crown, Snowflake, Sparkles, Flower } from 'lucide-react';
import { CTASection } from '@/components/site/CTASection';
import { indiaStates } from '@/lib/data';
import { SITE, waLink } from '@/lib/site';

const STATE_ICONS: Record<string, typeof Mountain> = {
  'himachal-pradesh': Mountain,
  rajasthan: Crown,
  uttarakhand: Flower,
  ladakh: Sparkles,
  'jammu-kashmir': Snowflake,
};

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
            Curated itineraries across Himachal, Rajasthan, Uttarakhand, Ladakh and Kashmir — with hotels, sightseeing & private transport included.
          </p>

          {/* State quick-jump */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {indiaStates.map((s) => {
              const Icon = STATE_ICONS[s.slug] ?? Mountain;
              return (
                <a key={s.slug} href={`#${s.slug}`} className="glass rounded-2xl p-4 hover-lift transition group">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-sunset shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="mt-3 font-medium">{s.state}</div>
                  <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{s.tagline}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* State-wise India tours */}
      <section id="india-states" className="scroll-mt-24 py-16 sm:py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Popular India Destinations</div>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl max-w-3xl">
              State-wise <span className="text-gradient-sunset italic">tour packages</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Hand-crafted itineraries across India's most loved destinations — with hotels, sightseeing & private transport included.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {indiaStates.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="rounded-full glass px-4 py-2 text-xs hover:bg-white/10 transition">
                {s.state}
              </a>
            ))}
          </div>

          {indiaStates.map((s) => (
            <div key={s.slug} id={s.slug} className="scroll-mt-24 mt-14">
              <div className="reveal relative h-44 sm:h-56 overflow-hidden rounded-3xl">
                <img src={s.banner} alt={s.state} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-center p-5 sm:p-8">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-primary">India · {s.state}</div>
                  <h3 className="mt-2 font-display text-2xl sm:text-4xl text-white">{s.state}</h3>
                  <p className="mt-1 max-w-lg text-sm text-white/80">{s.tagline}</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-white/70">
                    <Calendar className="h-3 w-3" /> Best time: {s.bestTime}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {s.cities.map((c, i) => (
                  <article
                    key={c.city}
                    className="reveal group relative overflow-hidden rounded-2xl glass-dark hover-lift"
                    style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={c.image} alt={c.city} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest">
                        <MapPin className="h-3 w-3 text-primary" /> {c.city}
                      </span>
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px]">
                        <Star className="h-3 w-3 fill-accent text-accent" /> 4.9
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-display text-lg">{c.city}</h4>
                      <div className="text-xs text-muted-foreground">{c.tagline}</div>
                      <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                      </div>
                      <ul className="mt-3 flex flex-wrap gap-1">
                        {c.highlights.slice(0, 4).map((h) => (
                          <li key={h} className="text-[10px] rounded-full border border-white/10 px-2 py-0.5 text-muted-foreground">{h}</li>
                        ))}
                      </ul>
                      <div className="mt-3 flex items-start gap-1.5 text-[11px] text-muted-foreground">
                        <Hotel className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                        <span>{c.hotels}</span>
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-2">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting</div>
                          <div className="text-base font-semibold">₹{c.from.toLocaleString('en-IN')}<span className="text-[10px] text-muted-foreground font-normal"> /pp</span></div>
                        </div>
                        <div className="flex gap-1.5">
                          <a
                            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                            className="inline-flex items-center gap-1 rounded-full glass px-3 py-2 text-[11px] font-medium hover:bg-white/10 transition"
                          >
                            <Phone className="h-3 w-3" /> Call
                          </a>
                          <a
                            href={waLink(`Hi! I'd like to book the ${c.city} (${s.state}) ${c.duration} package starting ₹${c.from.toLocaleString('en-IN')}. Please share details.`)}
                            target="_blank" rel="noopener"
                            className="inline-flex items-center gap-1 rounded-full bg-[var(--whatsapp)] px-3 py-2 text-[11px] font-medium text-white shadow-glow hover:scale-105 transition-transform"
                          >
                            <MessageCircle className="h-3 w-3" /> Enquire
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

