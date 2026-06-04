import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products | Agile Lens',
  description:
    'Agile Lens products for pre-construction visualization and live entertainment — Hyperreal Estate, Blueprint Immersive, Floor Tour, Holodeck Anywhere, Stage Presence, and PerforMR.',
  openGraph: {
    title: 'Products | Agile Lens',
    description:
      'Agile Lens products for pre-construction visualization and live entertainment.',
  },
};

const groups = [
  {
    name: 'Pre-construction',
    tag: 'green' as const,
    blurb: 'Photoreal visualization and previs that lets stakeholders experience a space before it is built.',
  },
  {
    name: 'Entertainment',
    tag: 'pink' as const,
    blurb: 'Performance, rehearsal, and colocated VR tools built around how live production actually works.',
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Products</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          A suite of immersive tools spanning pre-construction visualization and live entertainment.
        </p>
      </div>

      {groups.map((group) => {
        const groupProducts = products.filter((p) => p.group === group.name);
        const isGreen = group.tag === 'green';
        return (
          <section key={group.name} className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isGreen ? 'bg-green' : 'bg-pink'}`} />
              <h2 className="text-2xl font-bold">{group.name}</h2>
            </div>
            <p className="text-muted mb-8 max-w-2xl">{group.blurb}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {groupProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block rounded-xl border border-border bg-surface overflow-hidden hover:border-pink/40 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-border">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border mb-3 ${
                        isGreen ? 'border-green text-green' : 'border-pink text-pink'
                      }`}
                    >
                      {product.group}
                    </span>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-pink transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted leading-relaxed">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-purple/10 via-surface to-pink/10 p-10 md:p-14 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-4">Not sure which fits your project?</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us what you are trying to build and we will point you to the right tool — or build something bespoke.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-gradient px-8 py-3.5 rounded-full text-sm font-semibold text-white">
            Get in touch
          </Link>
          <Link
            href="/process"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border border-border text-text hover:border-pink/60 transition-colors"
          >
            How we work
          </Link>
        </div>
      </div>
    </div>
  );
}
