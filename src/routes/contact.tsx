import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { z } from "zod";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Voyago India" },
      { name: "description", content: "Get in touch for a custom trip quote on WhatsApp, phone, or email." },
      { property: "og:title", content: "Contact Voyago India" },
      { property: "og:description", content: "Plan your dream trip with our concierge — instant WhatsApp quotes." },
    ],
  }),
  component: ContactPage,
});

const formSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  destination: z.string().trim().min(2).max(80),
  travelers: z.string().trim().min(1).max(20),
  message: z.string().trim().max(500).optional().default(""),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      destination: String(fd.get("destination") || ""),
      travelers: String(fd.get("travelers") || ""),
      message: String(fd.get("message") || ""),
    };
    const r = formSchema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `Hi! I'm ${r.data.name}. I'd like a quote for ${r.data.destination} for ${r.data.travelers} traveler(s).${r.data.message ? `\n\nNotes: ${r.data.message}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <section className="relative pt-40 pb-24">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Get In Touch</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl leading-tight">
            Let's plan your <span className="text-gradient-sunset italic">next escape</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-md">
            Tell us a little about your dream trip. We'll respond within minutes on WhatsApp with a personalised quote.
          </p>

          <div className="mt-8 space-y-3">
            <a href={waLink("Hi! I'd like a trip quote.")} target="_blank" rel="noopener" className="flex items-center gap-3 glass-dark rounded-2xl p-4 hover-lift">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--whatsapp)] text-white"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="text-sm text-muted-foreground">WhatsApp (fastest)</div>
                <div className="font-medium">{SITE.phone}</div>
              </div>
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 glass-dark rounded-2xl p-4 hover-lift">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-sunset text-primary-foreground"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="font-medium">{SITE.phone}</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 glass-dark rounded-2xl p-4 hover-lift">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass-strong"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">{SITE.email}</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal glass-strong rounded-3xl p-6 sm:p-8 shadow-elegant">
          <h2 className="font-display text-2xl">Get an instant quote</h2>
          <p className="text-sm text-muted-foreground mt-1">Submitting opens a pre-filled WhatsApp chat.</p>

          <div className="mt-6 grid gap-4">
            <Field label="Your name" name="name" placeholder="e.g. Aarav Mehta" error={errors.name} />
            <Field label="Destination" name="destination" placeholder="e.g. Maldives, Kashmir, Bali" error={errors.destination} />
            <Field label="Travelers" name="travelers" placeholder="e.g. 2 adults" error={errors.travelers} />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Notes (optional)</label>
              <textarea
                name="message"
                rows={3}
                maxLength={500}
                placeholder="Dates, budget, preferences…"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/50 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-sunset text-primary-foreground py-3.5 text-sm font-medium shadow-glow hover:scale-[1.02] transition-transform"
          >
            <Send className="h-4 w-4" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, error }: { label: string; name: string; placeholder: string; error?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        maxLength={120}
        className={`mt-2 w-full rounded-xl bg-white/5 border px-4 py-3 text-sm outline-none transition ${
          error ? "border-destructive" : "border-white/10 focus:border-primary/50"
        }`}
      />
      {error && <div className="mt-1 text-xs text-destructive">{error}</div>}
    </div>
  );
}
