import type { Metadata } from 'next';
import { presentations } from '@/data/presentations';

export const metadata: Metadata = {
  title: 'Presentations | Agile Lens',
  description: 'Talk decks and conference presentations from Agile Lens.',
};

export default function PresentationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Presentations</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Talk decks from conferences and events, built and presented by the Agile Lens team.
        </p>
      </div>

      {presentations.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((p) => (
            <a
              key={p.slug}
              href={`/presentations/${p.slug}`}
              className="group block p-6 rounded-xl border border-border bg-surface hover:border-pink/40 transition-all"
            >
              <div className="text-xs text-muted mb-2">{p.date}</div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-pink transition-colors">{p.title}</h3>
              <div className="text-sm text-muted mb-1">{p.event}</div>
              {p.speaker && <div className="text-xs text-muted mb-3">{p.speaker}</div>}
              <p className="text-sm text-muted leading-relaxed line-clamp-3">{p.description}</p>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted">No presentations posted yet.</div>
      )}
    </div>
  );
}
