'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';

const categories = ['All', 'Architecture', 'Entertainment', 'Immersive Marketing', 'Real Estate', 'Social Impact'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => [p.category1, p.category2].filter(Boolean).includes(activeCategory));

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Portfolio</h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
          A decade of pushing boundaries in immersive technology across architecture, entertainment, and beyond.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
              activeCategory === c
                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => {
          const yearDisplay = p.yearStarted && p.yearCompleted
            ? (p.yearStarted === p.yearCompleted ? p.yearStarted : `${p.yearStarted}-${p.yearCompleted}`)
            : p.yearStarted
              ? `${p.yearStarted}+`
              : '';

          return (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/40 transition-all">
              <div className="w-full h-40 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-2)]/5 border border-[var(--color-border)] mb-4 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="text-white/40 text-sm font-medium tracking-wider uppercase">{p.category1}</span>
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">{p.category1}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{yearDisplay}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">{p.name}</h3>
              {p.clients && <div className="text-xs text-[var(--color-text-muted)] mb-2">Client: {p.clients}</div>}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3 line-clamp-3">{p.overview || p.description}</p>
              {p.awards && <div className="text-xs text-yellow-400 mb-2 line-clamp-2">{p.awards}</div>}
              {p.tech && <div className="text-xs text-[var(--color-text-muted)]">Tech: {p.tech}</div>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
