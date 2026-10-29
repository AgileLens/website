import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unreal Engine for Apple Vision Pro | Agile Lens',
  description: 'Three paths from an Unreal Engine project to Apple Vision Pro: experience porting, engine development, and native presentation with UnRealityKit.',
  openGraph: {
    title: 'Your Unreal world. A new point of view.',
    description: 'Explore how Agile Lens approaches Unreal Engine on Apple Vision Pro.',
  },
};

const paths = [
  {
    id: 'porting', number: '01', label: 'Adapt the experience', title: 'Bring your world with you.',
    question: 'You have an experience on another headset.',
    body: 'We adapt Unreal projects built for Quest, Vive, and PICO to the way people use Vision Pro. That means rethinking input, spatial placement, and rendering together, then testing the experience on the device.',
    details: ['Interaction and input', 'Scene and asset adaptation', 'On-device validation'],
    note: 'Start with your existing project and the moments you want to preserve.',
  },
  {
    id: 'engine', number: '02', label: 'Work inside the engine', title: 'Go deeper in the pipeline.',
    question: 'Your project needs changes below the application layer.',
    body: 'Our engine work addresses rendering, threading, and packaging for visionOS. We investigate the path from an Unreal scene to the headset, and make targeted source changes when a project needs more than settings alone can provide.',
    details: ['Rendering and threading', 'Build and packaging', 'Measured iteration'],
    note: 'Start with a reproducible problem and a clear test for improvement.',
  },
  {
    id: 'unrealitykit', number: '03', label: 'Explore native presentation', title: 'Unreal meets RealityKit.',
    question: 'Native visionOS presentation is central to your project.',
    body: 'UnRealityKit, developed by Alex Coulombe Presents, connects Unreal-authored content with Apple’s RealityKit renderer. We evaluate this route for projects that benefit from native presentation while retaining Unreal in their authoring workflow.',
    details: ['Unreal-authored content', 'RealityKit presentation', 'Project-specific evaluation'],
    note: 'Talk to us about project fit, supported features, and current access.',
  },
];

function RouteDiagram() {
  return (
    <figure className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8 overflow-hidden">
      <div className="flex justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
        <span>One project / three paths</span><span className="text-pink">01 — 03</span>
      </div>
      <div className="mt-10 mb-5 flex items-center gap-3 text-sm font-semibold">
        <span className="h-2 w-2 rounded-full bg-pink" aria-hidden="true" />Your Unreal project
      </div>
      <div className="relative pl-5 ml-1 border-l border-pink/40">
        {paths.map((path) => (
          <a key={path.id} href={`#${path.id}`} className="group relative flex items-center gap-4 border border-border rounded-lg bg-bg px-4 py-5 mb-3 last:mb-0 hover:border-pink/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink transition-colors">
            <span className="absolute -left-5 w-5 border-t border-pink/40" aria-hidden="true" />
            <span className="text-xs font-mono text-pink">{path.number}</span>
            <span className="text-sm sm:text-base font-semibold flex-1">{path.label}</span>
            <span className="text-muted group-hover:text-pink" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border flex items-end justify-between gap-4">
        <figcaption className="text-xs text-muted max-w-[23ch] leading-relaxed">The route follows the needs of the experience.</figcaption>
        <span className="text-right text-lg font-bold leading-tight">Apple<br />Vision Pro</span>
      </div>
    </figure>
  );
}

export default function VisionProPage() {
  return (
    <div>
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-20 md:pb-28 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-xs font-bold text-pink uppercase tracking-[0.2em] mb-8">Unreal Engine × Apple Vision Pro</p>
          <h1 className="text-[clamp(2.8rem,5.6vw,5.4rem)] font-bold tracking-tight leading-[1.04] mb-7">Your Unreal world.<br /><span className="text-pink">A new point<br className="hidden sm:block" /> of view.</span></h1>
          <p className="text-lg text-muted leading-relaxed max-w-[45ch]">The starting point is your experience: its assets, its interactions, and the people who will use it. Three development paths let us shape that work for Vision Pro.</p>
          <div className="flex flex-wrap items-center gap-6 mt-9">
            <Link href="/contact" className="btn-gradient px-7 py-3.5 rounded-full text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink">Discuss your project <span aria-hidden="true">↗</span></Link>
            <a href="#approaches" className="text-sm font-medium underline underline-offset-4 decoration-border hover:decoration-pink">Explore the three paths <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <RouteDiagram />
      </section>

      <section id="approaches" aria-labelledby="approaches-title" className="border-t border-border scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
            <h2 id="approaches-title" className="text-3xl md:text-4xl font-bold tracking-tight">Three paths.<br />A considered starting point.</h2>
            <p className="text-muted text-sm leading-relaxed max-w-[40ch]">We look at what you have, what needs to change, and how you will know the result is working.</p>
          </div>
          <div className="divide-y divide-border">
            {paths.map((path) => (
              <article key={path.id} id={path.id} className="scroll-mt-24 py-10 md:py-14 grid md:grid-cols-[0.85fr_1.15fr] gap-7 md:gap-16">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-pink mb-5"><span className="font-mono mr-5">{path.number}</span>{path.label}</p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight max-w-[15ch]">{path.title}</h3>
                </div>
                <div>
                  <p className="text-base font-semibold mb-4">{path.question}</p>
                  <p className="text-muted leading-relaxed mb-6 max-w-[62ch]">{path.body}</p>
                  <ul className="flex flex-wrap gap-2 mb-7" aria-label={`${path.label} focus areas`}>
                    {path.details.map((detail) => <li key={detail} className="text-xs text-text/80 border border-border rounded-full px-3 py-2">{detail}</li>)}
                  </ul>
                  <p className="text-sm text-muted leading-relaxed border-l-2 border-pink/60 pl-4">{path.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="border border-border rounded-2xl bg-surface p-8 md:p-14 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="text-xs text-pink font-bold uppercase tracking-[0.2em] mb-5">Start with the experience</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">What do you want<br />people to step into?</h2>
            <p className="text-muted leading-relaxed max-w-[48ch]">An existing Unreal project, an early prototype, or a specific technical challenge gives us a useful place to begin.</p>
          </div>
          <div className="md:border-l border-border md:pl-12">
            <Link href="/contact" className="btn-gradient inline-flex px-7 py-3.5 rounded-full text-sm font-semibold text-white mb-5">Start a conversation <span aria-hidden="true" className="ml-5">↗</span></Link>
            <p className="text-sm text-muted leading-relaxed">Explore our work in <Link href="/portfolio" className="text-text underline underline-offset-4">architecture and live entertainment</Link>, or connect with the community at <Link href="/unrealnyc" className="text-text underline underline-offset-4">Unreal NYC</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
