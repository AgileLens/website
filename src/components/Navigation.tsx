'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About' },
];

const pageLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const allLinks = isHome
    ? [...navLinks, ...pageLinks]
    : [{ href: '/', label: 'Home' }, ...pageLinks, { href: '/contact', label: 'Contact' }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-[var(--color-bg)] to-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logos/Icon.svg" alt="Agile Lens" className="h-9 w-9" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {allLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)] px-6 pb-4">
          {allLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-[var(--color-text-muted)]"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
