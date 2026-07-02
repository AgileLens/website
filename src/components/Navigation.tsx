'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About' },
];

const pageLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/vision-pro', label: 'Vision Pro' },
  { href: '/blog', label: 'Insights' },
  { href: '/unrealnyc', label: 'Unreal NYC' },
  { href: '/team', label: 'Team' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close search on route change
  useEffect(() => { setSearchOpen(false); }, [pathname]);

  // Global "/" shortcut to open search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const inField = target && /^(input|textarea|select)$/i.test(target.tagName);
      if (e.key === '/' && !inField && !searchOpen) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  const allLinks = isHome
    ? [...navLinks, ...pageLinks]
    : [{ href: '/', label: 'Home' }, ...pageLinks];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md' : 'bg-gradient-to-b from-bg to-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
          title="Search (press /)"
          className="flex items-center group relative"
        >
          <img
            src="/logos/Icon.svg"
            alt="Agile Lens"
            className="h-9 w-9 transition-transform group-hover:scale-110"
          />
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-pink/0 group-hover:bg-pink/90 flex items-center justify-center transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2 h-2 text-black opacity-0 group-hover:opacity-100">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </button>
        <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />

        <div className="hidden lg:flex items-center gap-6">
          {allLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-text transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/contact" className="btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white">
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-bg border-b border-border px-6 pb-4">
          {allLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted">
              {l.label}
            </a>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block mt-2 btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
