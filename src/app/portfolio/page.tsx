'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

const categories = ['All', 'Architecture', 'Entertainment', 'Immersive Marketing', 'Real Estate', 'Social Impact', 'Community'];

// Only show Completed and Ongoing projects, sorted: featured first, then by yearCompleted desc
const visibleProjects = projects
  .filter(p => (p.status === 'Completed' || p.status === 'Ongoing') && !p.hidden)
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    const ay = parseInt(a.yearCompleted || a.yearStarted || '0');
    const by = parseInt(b.yearCompleted || b.yearStarted || '0');
    return by - ay;
  });

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-24" />}>
      <PortfolioInner />
    </Suspense>
  );
}

function PortfolioInner() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const c = searchParams.get('category');
    if (c && categories.includes(c)) setActiveCategory(c);
  }, [searchParams]);

  const filtered = activeCategory === 'All'
    ? visibleProjects
    : visibleProjects.filter(p => [p.category1, p.category2].filter(Boolean).includes(activeCategory));

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Portfolio</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Over a decade of pushing boundaries in immersive technology across architecture, entertainment, and beyond.
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
                ? 'border-pink bg-pink/10 text-pink'
                : 'border-border text-muted hover:border-pink/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => {
          const yearLabel = p.yearCompleted ? `Released: ${p.yearCompleted}` : '';

          return (
            <Link key={p.slug} href={p.href || `/portfolio/${p.slug}`} className="group block p-6 rounded-xl border border-border bg-surface hover:border-pink/40 transition-all">
              <div className="w-full h-40 rounded-lg bg-gradient-to-br from-pink/5 to-purple/5 border border-border mb-4 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="text-white/40 text-sm font-medium tracking-wider uppercase">{p.category1}</span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-pink transition-colors">{p.name}</h3>
              {yearLabel && (
                <div className="mb-2">
                  <span className="text-xs text-muted">{yearLabel}</span>
                </div>
              )}
              {p.clients && <div className="text-xs text-muted mb-2">Client: {p.clients}</div>}
              <p className="text-sm text-muted leading-relaxed mb-3 line-clamp-3">{p.overview || p.description}</p>
              {p.awards && <div className="text-xs text-yellow-400 mb-2 line-clamp-2">{p.awards}</div>}
              {p.tech && <div className="text-xs text-muted">Tech: {p.tech}</div>}
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          No projects in <span className="text-pink">{activeCategory}</span> yet.
        </div>
      )}
    </div>
  );
}
