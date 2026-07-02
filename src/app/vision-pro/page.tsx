import type { Metadata } from 'next';
import Link from 'next/link';
import RevealBox from '@/components/RevealBox';

export const metadata: Metadata = {
  title: 'Unreal Engine × Vision Pro | Agile Lens',
  description:
    'Agile Lens is pursuing three parallel paths for bringing Unreal Engine content to Apple Vision Pro: cross-platform porting, engine-level pipeline work, and UnRealityKit, our Unreal-to-RealityKit translation system.',
  openGraph: {
    title: 'Unreal Engine × Vision Pro | Agile Lens',
    description:
      'Three parallel paths for bringing Unreal Engine content to Apple Vision Pro: porting, engine-level pipeline work, and UnRealityKit.',
  },
};

const paths = [
  {
    num: '01',
    title: 'Porting experiences across headsets',
    body: "A lot of Unreal Engine content built for Quest, Vive, or Pico never makes it to Vision Pro, because the hardware assumes different input, different thermal budgets, and a different rendering path entirely. We take experiences that already exist on other headsets and rebuild what needs rebuilding — input, passthrough, performance headroom — so they run the way they were meant to, not a compromised version of themselves.",
    tags: ['Quest, Vive & Pico source', 'Multiview & foveated rendering', 'Thermal-aware performance budget'],
  },
  {
    num: '02',
    title: "Modifying Unreal Engine's own source",
    body: "Project-level settings only get you so far on Vision Pro. We work inside Unreal Engine's own source — rendering, threading, and packaging — to build a pipeline suited to Apple's compositor and hardware, rather than asking the platform to tolerate a pipeline built for someone else's headset. It's slower than shipping a default build. It's also the difference between an experience that runs and one that feels native.",
    tags: ['Engine-level rendering & threading changes', 'Custom build & packaging pipeline', 'Built for the compositor, not around it'],
  },
  {
    num: '03',
    title: 'UnRealityKit: translating Unreal into RealityKit',
    body: "The third path skips porting and engine patches altogether. UnRealityKit converts Unreal Engine content directly into Xcode and RealityKit — Unreal handles simulation and asset authoring, RealityKit does the actual on-device rendering. It's the same architecture Industrial Light & Magic used for their own Vision Pro work, and the same bet Unity made for their engine with PolySpatial. UnRealityKit is that bet, for Unreal. It's what opens up light estimation, environmental reflections, eye tracking, and the rest of visionOS's native feature set to Unreal-built content. Currently in private beta with a small group of studios bringing over their own Unreal projects.",
    tags: ['Unreal as simulation, RealityKit as renderer', 'Native light estimation, reflections, eye tracking', 'Private beta — inquire to join'],
  },
];

export default function VisionProPage() {
  return (
    <div className="relative">
      <div className="pink-glow absolute -top-20 -right-40 hidden md:block" aria-hidden="true" />

      {/* HERO */}
      <section className="relative max-w-5xl mx-auto px-6 pt-32 pb-12 md:pt-40 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink/30 bg-pink/5 text-xs uppercase tracking-wider text-pink mb-6">
          Unreal Engine &times; Apple Vision Pro
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          We haven&apos;t found another studio going this deep on{' '}
          <span className="gradient-text">Unreal Engine for Vision Pro</span>
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          Most teams pick one way to get Unreal content onto Vision Pro, if they bother at all. We&apos;re
          running three approaches at once, because each solves a different version of the same problem
          &mdash; and between them, we can meet almost any Unreal project where it already is.
        </p>
      </section>

      {/* PATHS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-5">
          {paths.map((path, i) => (
            <RevealBox key={path.num} delay={i * 80}>
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-8 md:p-10 rounded-2xl border border-border bg-surface">
                <div className="text-4xl md:text-5xl font-black text-pink/30">{path.num}</div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{path.title}</h2>
                  <p className="text-muted leading-relaxed mb-6 max-w-2xl">{path.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {path.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealBox>
          ))}
        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <RevealBox>
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-3xl">
            This isn&apos;t a side bet. It comes out of the same studio that runs{' '}
            <Link href="/unrealnyc" className="text-pink hover:underline">
              Unreal NYC
            </Link>{' '}
            and, through Alex Coulombe Presents, operates the only authorized Unreal Engine training center
            in Manhattan.
          </p>
        </RevealBox>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 pb-28">
        <RevealBox>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-purple/10 via-surface to-pink/10 p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Building for Vision Pro?</h2>
            <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you need an existing Unreal experience ported over, a pipeline problem solved at the
              engine level, or want in on the UnRealityKit private beta, tell us where your project stands.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-gradient px-8 py-3.5 rounded-full text-sm font-semibold text-white">
                Start a conversation
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3.5 rounded-full text-sm font-semibold border border-border text-text hover:border-pink/60 transition-colors"
              >
                See the work
              </Link>
            </div>
          </div>
        </RevealBox>
      </section>
    </div>
  );
}
