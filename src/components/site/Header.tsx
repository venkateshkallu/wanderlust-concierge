import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE, waLink } from '@/lib/site';
import logo from '@/assets/logo.png';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/tours', label: 'Tours' },
  { to: '/international-tours', label: 'International Tours' },
  { to: '/car-rentals', label: 'Car Rentals' },
  { to: '/bus-rentals', label: 'Bus Rentals' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${
            scrolled || open ? 'glass-strong shadow-card' : 'bg-transparent'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10 shadow-glow">
              <img src={logo} alt={SITE.name} className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-lg sm:text-xl tracking-tight whitespace-nowrap">{SITE.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 text-sm rounded-full transition-colors ${
                  isActive(n.to) ? 'text-foreground bg-white/10' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={waLink("Hi! I'd like to plan a trip.")}
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-4 sm:px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              Plan My Trip
            </a>
          </div>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 shadow-card max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base text-foreground/90 hover:bg-white/5 rounded-lg"
                >
                  {n.label}
                </Link>
              ))}
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
