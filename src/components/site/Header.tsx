import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Compass, ChevronDown } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

type NavItem =
  | { to: string; label: string; children?: never }
  | { label: string; to?: string; children: { to: string; label: string }[] };

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  {
    label: "India Tours",
    to: "/india-tours",
    children: [
      { to: "/india-tours/north", label: "North India" },
      { to: "/india-tours/south", label: "South India" },
      { to: "/india-tours/east", label: "East India" },
      { to: "/india-tours/west", label: "West India" },
    ],
  },
  { to: "/international-tours", label: "International" },
  {
    label: "Rentals",
    children: [
      { to: "/car-rentals", label: "Car Rentals" },
      { to: "/bus-rentals", label: "Bus Rentals" },
    ],
  },
  {
    label: "Packages",
    children: [
      { to: "/group-tours", label: "Group Tours" },
      { to: "/honeymoon", label: "Honeymoon" },
      { to: "/packages", label: "All Packages" },
    ],
  },
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3 sm:py-4"}`}>
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${
            scrolled || open ? "glass-strong shadow-card" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-sunset shadow-glow">
              <Compass className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg sm:text-xl tracking-tight whitespace-nowrap">{SITE.name}</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {nav.map((n) => {
              if ("children" in n && n.children) {
                return (
                  <div key={n.label} className="relative group">
                    <button className="inline-flex items-center gap-1 px-3 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
                      {n.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-2 transition-all duration-200">
                      <div className="min-w-[200px] glass-strong rounded-2xl p-2 shadow-card">
                        {n.children.map((c) => (
                          <Link key={c.to} to={c.to} className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-foreground bg-white/5" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                  className="px-3 py-2 text-sm rounded-full transition-colors"
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={waLink("Hi! I'd like to plan a trip.")}
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-4 sm:px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              Plan My Trip
            </a>
          </div>

          <button
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden mt-2 glass-strong rounded-2xl p-3 shadow-card max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col">
              {nav.map((n) => {
                if ("children" in n && n.children) {
                  const isOpen = openSub === n.label;
                  return (
                    <div key={n.label}>
                      <button
                        onClick={() => setOpenSub(isOpen ? null : n.label)}
                        className="w-full flex items-center justify-between px-3 py-3 text-base text-foreground/90 hover:bg-white/5 rounded-lg"
                      >
                        {n.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="ml-3 border-l border-white/10 pl-2">
                          {n.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-base text-foreground/90 hover:bg-white/5 rounded-lg"
                  >
                    {n.label}
                  </Link>
                );
              })}
              <a
                href={waLink("Hi! I'd like to plan a trip.")}
                target="_blank" rel="noopener"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-sunset px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Plan My Trip on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
