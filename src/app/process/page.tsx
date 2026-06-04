import type { Metadata } from 'next';
import Link from 'next/link';
import RevealBox from '@/components/RevealBox';

export const metadata: Metadata = {
  title: 'How We Work | Agile Lens',
  description:
    'How Agile Lens runs an immersive engagement, from discovery and scoping through previs, production, and deployment. What to expect when you work with us.',
  openGraph: {
    title: 'How We Work | Agile Lens',
    description:
      'How Agile Lens runs an immersive engagement, from discovery through deployment. What to expect when you work with us.',
  },
};

const phases = [
  {
    num: '01',
    title: 'Discovery & Scoping',
    body: 'We start with the outcome, not the technology. In a short discovery phase we pin down the decision your project needs to support (a design sign-off, a pre-sales target, a rehearsal workflow) and translate it into a concrete scope, timeline, and the right hardware for the job.',
    deliverables: ['Goals & success metrics', 'Technical approach', 'Scope, timeline & budget'],
  },
  {
    num: '02',
    title: 'Previs & Prototyping',
    body: 'Before committing to a full build, we put a working prototype in front of you fast. You experience the core interaction in headset early, while it is still cheap to change direction, so the expensive production phase starts from something you have already validated.',
    deliverables: ['Interactive prototype', 'Early in-headset review', 'Design direction locked'],
  },
  {
    num: '03',
    title: 'Production',
    body: 'This is where the experience gets built to ship: photoreal environments, performance capture, multiuser networking, and real-time optimization, engineered to run reliably on the devices your audience will actually use, not just on a demo machine.',
    deliverables: ['Production-grade build', 'Performance optimization', 'QA across target devices'],
  },
  {
    num: '04',
    title: 'Deployment & Support',
    body: 'We deploy on-site or in the field and make sure your team can run it without us in the room. Operator training, documentation, and ongoing support keep the experience dependable for a one-night activation or a permanent installation alike.',
    deliverables: ['On-site deployment', 'Operator training & docs', 'Ongoing support'],
  },
];

const models = [
  {
    title: 'Project engagement',
    body: 'A defined deliverable with a fixed scope and timeline: an activation, a previs deliverable, a product build. Best when you know the outcome you need.',
  },
  {
    title: 'Ongoing partnership',
    body: 'A retained relationship for organizations building immersive capability over time, across multiple experiences and a roadmap of releases.',
  },
  {
    title: 'R&D & prototyping',
    body: 'Short, focused sprints to prove out a hard technical idea (new hardware, a novel interaction, a pipeline that does not exist yet) before you commit to it.',
  },
];

export default function ProcessPage() {
  return (
    <div className="relative">
      <div className="pink-glow absolute -top-20 -right-40 hidden md:block" aria-hidden="true" />

      {/* HERO */}
      <section className="relative max-w-5xl mx-auto px-6 pt-32 pb-12 md:pt-40 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/60 text-xs uppercase tracking-wider text-muted mb-6">
          How we work
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          From a number you care about to <span className="gradient-text">an experience that moves it</span>
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          Every engagement is different, but the path is consistent. Here is how a project goes from first conversation to something your audience can step inside.
        </p>
      </section>

      {/* PHASES */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-5">
          {phases.map((phase) => (
            <RevealBox key={phase.num}>
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-8 md:p-10 rounded-2xl border border-border bg-surface">
                <div className="text-4xl md:text-5xl font-black text-pink/30">{phase.num}</div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{phase.title}</h2>
                  <p className="text-muted leading-relaxed mb-6 max-w-2xl">{phase.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((d) => (
                      <span key={d} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealBox>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <RevealBox>
          <h2 className="text-3xl md:text-4xl font-black mb-3">Ways to work together</h2>
          <p className="text-muted mb-10 max-w-2xl">
            Most projects fall into one of three shapes. Not sure which fits? Tell us the problem and we will help you scope it.
          </p>
        </RevealBox>
        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <RevealBox key={m.title} delay={i * 80}>
              <div className="h-full p-6 rounded-xl border border-border bg-surface">
                <h3 className="text-lg font-bold mb-3">{m.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{m.body}</p>
              </div>
            </RevealBox>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 pb-28">
        <RevealBox>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-purple/10 via-surface to-pink/10 p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Have a project in mind?</h2>
            <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Bring us the outcome you are trying to reach. We will tell you honestly whether immersive is the right tool, and if it is, how we would get you there.
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
