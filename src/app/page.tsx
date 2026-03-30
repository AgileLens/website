'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ── Scroll Reveal Hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); io.unobserve(el); } },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

/* ── Data ── */
const clients = [
  { name: 'Disney', logo: '/logos/Disney.png' },
  { name: 'CBS', logo: '/logos/CBS.png' },
  { name: 'Kennedy Center', logo: '/logos/Kennedy.png' },
  { name: 'Four Seasons', logo: '/logos/FourSeasons.png' },
  { name: 'RSC', logo: '/logos/RSC.png' },
  { name: 'Waldorf Astoria', logo: '/logos/Waldorf.png' },
  { name: 'Dell', logo: '/logos/Dell.png' },
];

const pillars = [
  {
    title: 'Pre-construction',
    description:
      'For industrial and real estate developers going beyond, we offer the opportunity to be in the most visceral virtual environment you can envision before it\u2019s built. Our solutions have saved millions of dollars in design review and change requests and have driven 9-figures in pre-construction sales.',
  },
  {
    title: 'Entertainment',
    description:
      'For media, brands, and performing artists, we lead in blending experimental and experiential for large, live audiences, complex production facilitation, and high-flow rate activations. Our solutions streamline performance capture and virtual production management to get the most out of legacy event techs and operators.',
  },
];

const products = [
  {
    group: 'Pre-construction',
    items: [
      { name: 'Hyperreal Estate', description: 'Photoreal 3D architectural and design visualization. Raytraced with UE and optimized for high-end VR.', image: '/products/hyperreal-estate.png' },
      { name: 'Blueprint Immersive', description: 'High-fidelity event venue configuration and previs software. Used by top architects and design professionals to optimize construction planning.', image: '/products/blueprint-immersive.png' },
      { name: 'Floor Tour', description: 'Self-service, real-world scale floor plan visualization software. Walk your portfolio of designs and renders in VR with just a few clicks.', image: '/products/floor-tour.png' },
    ],
  },
  {
    group: 'Entertainment',
    items: [
      { name: 'Holodeck Anywhere', description: 'Multiuser colocated VR. Solutions are available for both ultra-high fidelity and standalone flexibility.', image: '/products/holodeck-anywhere.png' },
      { name: 'Stage Presence', description: 'Rehearsal tool and performance platform. Designed and streamlined to integrate with existing media and live event industry practices.', image: '/products/stage-presence.png' },
      { name: 'PerforMR', description: 'Live-actor animation pipeline. A multi-source mocap tool for performers to animate one or many MetaHumans, real-time or saved for playback, in Virtual Reality or Mixed Reality.', image: '/products/performr.png' },
    ],
  },
];

const testimonials = [
  {
    quote: 'Agile Lens is an XR SEAL Team Six. I did a tour with [redacted] and he was over the moon excited. What the team [including Pureblink and DBOX] has built is a time machine.',
    name: 'Jonathan Coon',
    title: 'CEO, Impossible Ventures',
    project: 'Four Seasons Holodeck',
  },
  {
    quote: "What Agile Lens did, it's not what others do. They gave our actors and crew control of the avatars. What they did was harder, was newer, and honestly they rocked.",
    name: 'Hope Hutman',
    title: 'Artist, Experiential Producer',
    project: 'Your Mind, Girls...',
  },
  {
    quote: 'Agile Lens works like engineers but think like storytellers. They pursue excellence in the details which is what you need for a turnkey luxury experience.',
    name: 'Amanda Watson',
    title: 'Inventor of Air Link and CTO of REK',
    project: '',
  },
  {
    quote: 'From Vision Pro to Galaxy XR, few are more experienced and knowledgeable when it comes to deploying immersive experiences on the latest devices on the market.',
    name: 'Gabriele Romagnoli',
    title: 'Host of XR AI Spotlight',
    project: '',
  },
  {
    quote: 'Agile Lens creates a visionary experience that skillfully breaks the fourth wall and invites audiences to the center of a 150-year-old story told for a brand new generation.',
    name: 'Raindance Immersive',
    title: '2025 Awards Ceremony',
    project: 'A Christmas Carol VR',
  },
  {
    quote: 'The Holodeck is so ambitious no single hardware provider has been able to make everything work that it needs to do. And yet, it does work.',
    name: 'Ian Hamilton',
    title: 'Editor-in-Chief, UploadVR',
    project: 'Four Seasons Holodeck',
  },
];

/* ── Homepage ── */
export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Crafting immersive experiences for{' '}
            <span className="gradient-text">real and virtual worlds</span>{' '}
            and the spectacles within.
          </h1>
          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-[var(--color-accent)] text-black font-bold rounded-lg hover:opacity-90 transition text-sm"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-lg hover:border-[var(--color-accent)]/50 transition text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Client Logo Marquee ── */}
      <Section>
        <div className="py-16">
          <p className="text-center text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
            Innovation for
          </p>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="flex-shrink-0 mx-10">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-10 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Two Pillars ── */}
      <Section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Primary Customers</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">{p.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Products ── */}
      <Section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Products</h2>
        {products.map((group) => (
          <div key={group.group} className="mb-12">
            <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-6">
              {group.group}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/30 transition-colors"
                >
                  <div className="w-full h-40 rounded-lg overflow-hidden mb-4 bg-[var(--color-bg)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* ── Testimonials ── */}
      <Section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Say</h2>
          <div className="min-h-[200px] flex flex-col items-center justify-center">
            <blockquote className="text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)] mb-6 italic">
              &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
            </blockquote>
            <div className="font-bold">{testimonials[testimonialIndex].name}</div>
            <div className="text-sm text-[var(--color-text-muted)]">
              {testimonials[testimonialIndex].title}
            </div>
            {testimonials[testimonialIndex].project && (
              <div className="text-xs text-[var(--color-accent)] mt-1">
                on {testimonials[testimonialIndex].project}
              </div>
            )}
          </div>
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === testimonialIndex ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ── About ── */}
      <Section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Agile Lens</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
          Founded in 2014, Agile Lens was born from a mission to redefine storytelling through
          immersive technology, merging design, architecture, and XR to create transformative spatial
          experiences.
        </p>
        <p className="text-sm text-[var(--color-text-muted)]">
          Sister companies:{' '}
          <a href="https://www.fda.net" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
            Fisher Dachs Associates
          </a>{' '}
          &{' '}
          <a href="https://www.fishermarantzstone.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
            Fisher Marantz Stone
          </a>
        </p>
      </Section>
    </>
  );
}
