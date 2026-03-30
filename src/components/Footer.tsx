import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logos/Icon.svg" alt="Agile Lens" className="h-8 w-8" />
              <span className="text-lg font-bold">Agile Lens</span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Crafting immersive experiences for real and virtual worlds and the spectacles within.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Navigation</h3>
            <div className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/team', label: 'Team' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sister companies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Sister Companies</h3>
            <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <a href="https://www.fda.net" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--color-text)] transition-colors">
                Fisher Dachs Associates
              </a>
              <a href="https://www.fishermarantzstone.com" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--color-text)] transition-colors">
                Fisher Marantz Stone
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Agile Lens. All rights reserved.
          </p>
          <div className="text-xs text-[var(--color-text-muted)]">
            22 West 19th Street, 6th Floor, New York, NY 10011
          </div>
        </div>
      </div>
    </footer>
  );
}
