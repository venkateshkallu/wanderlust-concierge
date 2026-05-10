import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { CTASection } from '@/components/site/CTASection';
import { blogs } from '@/lib/data';

export default function BlogsPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-10">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Travel Stories</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Stories from the <span className="text-gradient-sunset italic">road</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Destination guides, hidden gems, and itineraries — written by people who actually travel.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <Link
              key={b.slug}
              to="/blogs"
              className="reveal group relative overflow-hidden rounded-3xl glass-dark hover-lift"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-gradient-sunset px-3 py-1 text-[11px] uppercase tracking-widest text-primary-foreground font-medium">
                  {b.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {b.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {b.readMins} min</span>
                </div>
                <h3 className="mt-3 font-display text-xl group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
