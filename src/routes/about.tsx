import { createFileRoute } from "@tanstack/react-router";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Voyageluxe" },
      { name: "description", content: "We craft cinematic, bespoke journeys for modern Indian travelers." },
      { property: "og:title", content: "About Voyageluxe" },
      { property: "og:description", content: "India's modern luxury travel concierge." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 reveal text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl leading-tight">
            We design <span className="text-gradient-sunset italic">moments</span>, not just trips.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Voyageluxe was founded by a team of obsessive travelers who believe a great journey
            should feel like a film — visually rich, emotionally moving, and effortlessly produced.
            Every itinerary we craft is a script written for you.
          </p>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
