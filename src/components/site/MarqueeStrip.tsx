import { destinations } from "@/lib/data";

export function MarqueeStrip() {
  const items = [...destinations, ...destinations];
  return (
    <section className="relative py-10 overflow-hidden border-y border-white/5 bg-[oklch(0.12_0.04_250)]">
      <div className="flex gap-12 ticker whitespace-nowrap">
        {items.map((d, i) => (
          <span key={i} className="font-display text-2xl text-white/30 hover:text-white transition-colors">
            {d.name} <span className="text-primary">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
