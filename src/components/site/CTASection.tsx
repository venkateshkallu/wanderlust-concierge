import { MessageCircle, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center bg-gradient-hero shadow-elegant">
          <div className="absolute inset-0 bg-aurora opacity-60" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl float-slow" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl float-slower" />

          <div className="relative reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Limited Bookings This Season</div>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl text-white max-w-3xl mx-auto leading-tight">
              Your dream trip is one <span className="italic text-gradient-sunset">message</span> away.
            </h2>
            <p className="mt-5 text-white/80 max-w-2xl mx-auto">
              Tell us where you'd love to go — our travel experts respond within minutes on WhatsApp with a personalised quote.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink("Hi! I'd like to plan my dream trip.")}
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-7 py-3.5 text-sm font-medium shadow-glow glow-pulse hover:scale-[1.03] transition-transform"
              >
                <MessageCircle className="h-4 w-4" /> Chat With Travel Expert
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full glass-strong text-white px-7 py-3.5 text-sm font-medium"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
