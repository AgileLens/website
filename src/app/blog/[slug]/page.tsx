import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug } from '@/data/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Agile Lens`,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: `${post.title} | Agile Lens`,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-3 text-xs text-muted mb-4">
            <span className="px-2.5 py-1 rounded-full border border-pink/40 text-pink font-medium">{post.tag}</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readMinutes} min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">{post.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm text-muted mb-12">
          By <span className="text-text font-medium">{post.author}</span>
        </p>

        <div className="flex flex-col gap-6">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return <h2 key={i} className="text-2xl font-bold mt-6">{block.text}</h2>;
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={i} className="border-l-2 border-pink pl-6 py-1 my-2">
                  <p className="text-lg md:text-xl italic leading-relaxed">{block.text}</p>
                  {block.cite && <footer className="text-sm text-muted mt-3">— {block.cite}</footer>}
                </blockquote>
              );
            }
            return <p key={i} className="text-lg text-muted leading-relaxed">{block.text}</p>;
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link href="/blog" className="text-sm font-semibold text-muted hover:text-text transition-colors flex items-center gap-2">
            <svg className="rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All insights
          </Link>
          <Link href="/contact" className="btn-gradient px-6 py-3 rounded-full text-sm font-semibold text-white">
            Start a conversation
          </Link>
        </div>
      </div>
    </article>
  );
}
