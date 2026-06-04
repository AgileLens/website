import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Press & Awards | Agile Lens',
  description:
    'Awards, recognition, and press coverage of Agile Lens immersive work — from SXSW and Venice to The New York Times, Playbill, and UploadVR.',
  openGraph: {
    title: 'Press & Awards | Agile Lens',
    description:
      'Awards, recognition, and press coverage of Agile Lens immersive work — from SXSW and Venice to The New York Times and beyond.',
  },
};

// Friendly display names for the publications we are actually linking to.
const PUBLICATION_NAMES: Record<string, string> = {
  'nytimes.com': 'The New York Times',
  'playbill.com': 'Playbill',
  'bostonglobe.com': 'The Boston Globe',
  'theguardian.com': 'The Guardian',
  'papercitymag.com': 'PaperCity',
  'uploadvr.com': 'UploadVR',
  'globenewswire.com': 'GlobeNewswire',
  'businesswire.com': 'BusinessWire',
  'brooklynpaper.com': 'Brooklyn Paper',
  'broadwayworld.com': 'BroadwayWorld',
  'digitalartsblog.com': 'Digital Arts Blog',
  'youtube.com': 'YouTube',
};

type PressItem = { label: string; url?: string };

function parsePress(press: string): PressItem[] {
  return press
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((line) => {
      if (/^https?:\/\//i.test(line)) {
        try {
          const host = new URL(line).hostname.replace(/^www\./, '');
          return { label: PUBLICATION_NAMES[host] ?? host, url: line };
        } catch {
          return { label: line, url: line };
        }
      }
      return { label: line };
    });
}

function projectHref(p: (typeof projects)[number]): string {
  return p.href || `/portfolio/${p.slug}`;
}

const byYearDesc = (a: (typeof projects)[number], b: (typeof projects)[number]) =>
  parseInt(b.yearCompleted || '0') - parseInt(a.yearCompleted || '0');

const awarded = projects.filter((p) => p.awards && p.awards.trim() !== '').sort(byYearDesc);
const pressed = projects.filter((p) => p.press && p.press.trim() !== '').sort(byYearDesc);

export default function PressPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Press &amp; Awards</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          A decade-plus of immersive work, recognized on festival stages and in the press.
        </p>
      </div>

      {/* AWARDS */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 gradient-text">Awards &amp; Recognition</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awarded.map((p) => (
            <Link
              key={p.slug}
              href={projectHref(p)}
              className="group block p-6 rounded-xl border border-border bg-surface hover:border-pink/40 transition-all"
            >
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="text-lg font-bold group-hover:text-pink transition-colors">{p.name}</h3>
                {p.yearCompleted && <span className="text-xs text-muted shrink-0">{p.yearCompleted}</span>}
              </div>
              <p className="text-sm text-muted leading-relaxed">{p.awards}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PRESS */}
      <section>
        <h2 className="text-2xl font-bold mb-8 gradient-text">In the Press</h2>
        <div className="flex flex-col divide-y divide-border border-y border-border">
          {pressed.map((p) => {
            const items = parsePress(p.press);
            return (
              <div key={p.slug} className="py-6 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
                <div>
                  <Link href={projectHref(p)} className="font-semibold hover:text-pink transition-colors">
                    {p.name}
                  </Link>
                  {p.yearCompleted && <div className="text-xs text-muted mt-1">{p.yearCompleted}</div>}
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((item, i) =>
                    item.url ? (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-pink hover:underline flex items-center gap-2 w-fit"
                      >
                        {item.label}
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="opacity-60">
                          <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <span key={i} className="text-sm text-muted">{item.label}</span>
                    ),
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-muted mb-6">Working on a story or covering immersive technology?</p>
        <Link href="/contact" className="btn-gradient inline-block px-8 py-3.5 rounded-full text-sm font-semibold text-white">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
