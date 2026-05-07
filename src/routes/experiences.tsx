import { createFileRoute } from "@tanstack/react-router";
import { ExperienceGrid } from "@/components/site/ExperienceGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { experiences } from "@/lib/data";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Voyageluxe" },
      { name: "description", content: "Luxury stays, beach escapes, mountain treks, spiritual & romantic travel." },
      { property: "og:title", content: "Travel Experiences — Voyageluxe" },
      { property: "og:description", content: "Cinematic experiences for modern Indian travelers." },
    ],
  }),
  component: ExperiencesPage,
});

const more = [
  { title: "Beach Escapes", desc: "Turquoise waters, white sand, and sundowner cocktails." },
  { title: "Spiritual Trails", desc: "Varanasi, Rishikesh, Bodhgaya — journeys for the soul." },
  { title: "Romantic Getaways", desc: "Private villas, candlelit dinners, and unforgettable views." },
  { title: "Group Travel", desc: "Friends, colleagues, milestone trips — done right." },
];

function ExperiencesPage() {
  return (
    <>
      <section className="relative pt-40 pb-12">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Experiences</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl leading-tight">
            Travel isn't a place. It's a <span className="text-gradient-sunset italic">feeling</span>.
          </h1>
        </div>
      </section>

      <ExperienceGrid />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {more.map((m, i) => (
            <div key={m.title} className="reveal glass-dark rounded-3xl p-6 hover-lift" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="h-10 w-10 rounded-xl bg-gradient-sunset shadow-glow" />
              <h3 className="mt-5 font-display text-xl">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <CTASection />

      {/* Reels-style gallery */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">@voyageluxe</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Travel reels from our community</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {experiences.concat(experiences).map((e, i) => (
              <div key={i} className="reveal relative aspect-[9/14] overflow-hidden rounded-2xl group" style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
                <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] uppercase tracking-widest text-white/70">Reel</div>
                  <div className="font-display text-sm text-white">{e.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
