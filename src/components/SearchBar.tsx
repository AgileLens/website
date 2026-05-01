'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';

type Hit = {
  href: string;
  title: string;
  group: 'Project' | 'Team' | 'Product' | 'Page';
  subtitle?: string;
  score: number;
};

const team = [
  { name: 'Alex Coulombe', role: 'CEO' },
  { name: 'Joshua Dachs', role: 'President' },
  { name: 'Yu-Jun Yeh (Jun)', role: 'Sr. Creative Technologist' },
  { name: 'Kevin Laibson', role: 'Sr. Experience Director' },
  { name: 'Henry Keyser', role: 'Managing Director' },
  { name: 'Dante Cameron', role: 'Technical Artist' },
  { name: 'Marshall Nowak', role: 'R&D Creative Tech Consultant' },
  { name: 'Ari Tarr', role: 'Performance and AI Consultant' },
  { name: 'Zander Leff', role: 'Technical Artist' },
  { name: 'Peter Zhang', role: 'Product Designer' },
  { name: 'Yidan Hu', role: 'Media and AI Consultant' },
  { name: 'Saurabh Saxena', role: 'Engineering Consultant' },
  { name: 'Whitt Sellers', role: 'Creative Technologist' },
  { name: 'Bridget Jones', role: 'Admin / HR' },
  { name: 'Arnold Ragins', role: 'Billing Coordinator' },
  { name: 'Fay Chang', role: 'Accounting Coordinator' },
  { name: 'Elizabeth Coulombe', role: 'Operations Strategist' },
];

const products = [
  { name: 'Hyperreal Estate', group: 'Pre-construction' },
  { name: 'Blueprint Immersive', group: 'Pre-construction' },
  { name: 'Floor Tour', group: 'Pre-construction' },
  { name: 'Holodeck Anywhere', group: 'Entertainment' },
  { name: 'Stage Presence', group: 'Entertainment' },
  { name: 'PerforMR', group: 'Entertainment' },
];

const pages = [
  { title: 'Home', href: '/' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Team', href: '/team' },
  { title: 'Contact', href: '/contact' },
];

function score(haystack: string, needle: string): number {
  if (!haystack) return 0;
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  if (h === n) return 100;
  if (h.startsWith(n)) return 80;
  const idx = h.indexOf(n);
  if (idx === 0) return 70;
  if (idx > 0) return 50 - Math.min(40, idx);
  return 0;
}

function search(q: string): Hit[] {
  const trimmed = q.trim();
  if (!trimmed) return [];
  const hits: Hit[] = [];

  for (const p of projects) {
    if (p.hidden) continue;
    if (p.status !== 'Completed' && p.status !== 'Ongoing') continue;
    const s = Math.max(
      score(p.name, trimmed),
      score(p.clients, trimmed),
      score(p.tech, trimmed),
      score(p.category1, trimmed),
      score(p.category2, trimmed),
      score(p.overview, trimmed) * 0.6,
    );
    if (s > 0) {
      hits.push({
        href: `/portfolio/${p.slug}`,
        title: p.name,
        group: 'Project',
        subtitle: [p.category1, p.yearCompleted || p.yearStarted].filter(Boolean).join(' • '),
        score: s + (p.featured ? 5 : 0),
      });
    }
  }

  for (const t of team) {
    const s = Math.max(score(t.name, trimmed), score(t.role, trimmed) * 0.7);
    if (s > 0) hits.push({ href: '/team', title: t.name, group: 'Team', subtitle: t.role, score: s });
  }

  for (const pr of products) {
    const s = Math.max(score(pr.name, trimmed), score(pr.group, trimmed) * 0.6);
    if (s > 0) hits.push({ href: '/#products', title: pr.name, group: 'Product', subtitle: pr.group, score: s });
  }

  for (const pg of pages) {
    const s = score(pg.title, trimmed);
    if (s > 0) hits.push({ href: pg.href, title: pg.title, group: 'Page', score: s });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, 12);
}

export default function SearchBar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const hits = useMemo(() => search(q), [q]);

  useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(i => Math.min(i + 1, Math.max(0, hits.length - 1)));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(i => Math.max(0, i - 1));
      }
      if (e.key === 'Enter' && hits[active]) {
        onClose();
        router.push(hits[active].href);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, hits, active, onClose, router]);

  if (!open) return null;

  return (
    <div className="absolute inset-x-0 top-0 z-50 search-panel">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-bg/95 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center gap-4">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink shrink-0">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={e => { setQ(e.target.value); setActive(0); }}
            placeholder="Search projects, team, products…"
            className="flex-1 bg-transparent outline-none text-lg placeholder:text-muted text-text"
            aria-label="Search"
          />
          <button
            onClick={onClose}
            className="text-xs text-muted hover:text-text border border-border rounded px-2 py-1"
            aria-label="Close search"
          >
            Esc
          </button>
        </div>

        {q.trim() !== '' && (
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-4">
            {hits.length === 0 ? (
              <div className="py-6 text-sm text-muted">No matches for &ldquo;{q}&rdquo;.</div>
            ) : (
              <ul className="py-2 max-h-[60vh] overflow-y-auto">
                {hits.map((h, i) => (
                  <li key={`${h.group}-${h.href}-${h.title}-${i}`}>
                    <Link
                      href={h.href}
                      onClick={onClose}
                      onMouseEnter={() => setActive(i)}
                      className={`flex items-baseline gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                        i === active ? 'bg-pink/10' : 'hover:bg-surface'
                      }`}
                    >
                      <span className={`text-[10px] uppercase tracking-wider w-20 shrink-0 ${
                        i === active ? 'text-pink' : 'text-muted'
                      }`}>{h.group}</span>
                      <span className="font-medium text-text">{h.title}</span>
                      {h.subtitle && (
                        <span className="text-sm text-muted truncate">— {h.subtitle}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
