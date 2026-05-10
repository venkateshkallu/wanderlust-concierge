import { Link } from 'react-router-dom';
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/data";

export function ExperienceGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Experiences</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Curated for every kind of wanderer</h2>
          </div>
          <Link to="/tours" className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiences.map((e, i) => (
            <article key={e.title} className="reveal group relative h-[420px] overflow-hidden rounded-3xl shadow-card hover-lift" style={{ transitionDelay: `${i * 80}ms` }}>
              <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-white">{e.title}</h3>
                <p className="mt-2 text-sm text-white/75">{e.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
