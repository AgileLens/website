import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getAdjacentProducts } from '@/data/products';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Agile Lens`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const { prev, next } = getAdjacentProducts(slug);
  const isGreen = product.tag === 'green';
  const accentColor = isGreen ? 'text-green border-green' : 'text-pink border-pink';
  const accentBg = isGreen ? 'bg-green/10' : 'bg-pink/10';
  const accentBgSolid = isGreen ? 'bg-green' : 'bg-pink';

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1100px] mx-auto px-6 md:px-12 pb-12">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${accentColor}`}>
            {product.group}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">{product.name}</h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">

          {/* Left: description + features */}
          <div>
            <p className="text-xl text-muted leading-relaxed mb-10">{product.longDescription}</p>

            <h2 className="text-xl font-bold mb-6">Capabilities</h2>
            <ul className="flex flex-col gap-3 mb-16">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${accentBgSolid}`} />
                  <span className="text-muted leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            {/* Deck download */}
            {product.deckUrl ? (
              <div className={`rounded-2xl border p-8 ${isGreen ? 'border-green/30 bg-green/5' : 'border-pink/30 bg-pink/5'}`}>
                <h2 className="text-lg font-bold mb-2">Product Deck</h2>
                <p className="text-muted text-sm mb-5">
                  View the full product deck for detailed specs, case studies, and pricing guidance.
                </p>
                <a
                  href={product.deckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-black ${accentBgSolid}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View Deck
                </a>
              </div>
            ) : (
              <div className={`rounded-2xl border p-8 ${isGreen ? 'border-green/20' : 'border-pink/20'}`}>
                <h2 className="text-lg font-bold mb-2">Request a Product Deck</h2>
                <p className="text-muted text-sm mb-5">
                  Get the full product deck with case studies, technical specs, and pricing details.
                </p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border transition-colors ${accentColor} hover:${accentBg}`}
                >
                  Get in Touch
                </Link>
              </div>
            )}
          </div>

          {/* Right: contact CTA card */}
          <div className="sticky top-24">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-3">Interested in {product.name}?</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Tell us about your project and we'll find the right fit for your needs.
              </p>
              <Link
                href="/contact"
                className="block text-center px-5 py-3 rounded-lg font-semibold text-sm text-black bg-pink hover:bg-pink/90 transition-colors mb-3"
              >
                Contact Us
              </Link>
              <Link
                href="/portfolio"
                className="block text-center px-5 py-3 rounded-lg font-medium text-sm border border-border hover:border-muted transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* ── Prev / Next ── */}
        <div className="mt-24 pt-12 border-t border-border flex justify-between gap-4">
          {prev ? (
            <Link href={`/products/${prev.slug}`} className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
              <svg className="shrink-0 rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div className="text-xs text-muted mb-0.5">Previous</div>
                <div className="font-semibold text-sm">{prev.name}</div>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/products/${next.slug}`} className="group flex items-center gap-3 text-right hover:opacity-80 transition-opacity">
              <div>
                <div className="text-xs text-muted mb-0.5">Next</div>
                <div className="font-semibold text-sm">{next.name}</div>
              </div>
              <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
