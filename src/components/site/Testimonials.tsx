import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Loved by 5,000+ travelers</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Stories from the road</h2>
        </div>

        <div className="relative mt-14 h-[320px] sm:h-[260px]">
          {testimonials.map((t, idx) => (
            <article
              key={t.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="glass-strong rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto shadow-card text-center">
                <div className="flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl sm:text-2xl leading-snug text-white">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full ring-2 ring-primary/40" />
                  <div className="text-left">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.trip}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
