import type { Metadata } from 'next';
import Link from 'next/link';
import { sortedPosts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Insights | Agile Lens',
  description:
    'Field notes on enterprise XR, immersive design, virtual production, and building creator communities — from the Agile Lens team.',
  openGraph: {
    title: 'Insights | Agile Lens',
    description:
      'Field notes on enterprise XR, immersive design, virtual production, and building creator communities.',
  },
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default function BlogIndexPage() {
  const [lead, ...rest] = sortedPosts;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Insights</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Field notes on enterprise XR, immersive design, and the craft of building experiences for real and virtual worlds.
        </p>
      </div>

      {/* Lead post */}
      {lead && (
        <Link
          href={`/blog/${lead.slug}`}
          className="group grid md:grid-cols-2 gap-8 items-center mb-16 p-6 rounded-2xl border border-border bg-surface hover:border-pink/40 transition-all"
        >
          <div className="aspect-[16/10] rounded-xl overflow-hidden border border-border">
            <img
              src={lead.image}
              alt={lead.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 text-xs text-muted mb-4">
              <span className="px-2.5 py-1 rounded-full border border-pink/40 text-pink font-medium">{lead.tag}</span>
              <span>{formatDate(lead.date)}</span>
              <span>·</span>
              <span>{lead.readMinutes} min read</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-pink transition-colors">{lead.title}</h2>
            <p className="text-muted leading-relaxed mb-5">{lead.excerpt}</p>
            <span className="text-sm font-semibold text-pink flex items-center gap-2">
              Read more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </Link>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-xl border border-border bg-surface hover:border-pink/40 transition-all"
            >
              <div className="aspect-[16/10] rounded-lg overflow-hidden border border-border mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-muted mb-3">
                <span className="px-2.5 py-1 rounded-full border border-pink/40 text-pink font-medium">{post.tag}</span>
                <span>{post.readMinutes} min read</span>
              </div>
              <h2 className="text-lg font-bold mb-2 group-hover:text-pink transition-colors">{post.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
