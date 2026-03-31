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
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('visible');
          io.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useReveal();
  return <div ref={ref} id={id} className={`reveal ${className}`}>{children}</div>;
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
    color: 'green' as const,
    description:
      'For industrial and real estate developers going beyond, we offer the opportunity to be in the most visceral virtual environment you can envision before it\u2019s built. Our solutions have saved millions of dollars in design review and change requests and have driven 9-figures in pre-construction sales.',
  },
  {
    title: 'Entertainment',
    color: 'pink' as const,
    description:
      'For media, brands, and performing artists, we lead in blending experimental and experiential for large, live audiences, complex production facilitation, and high-flow rate activations. Our solutions streamline performance capture and virtual production management to get the most out of legacy event techs and operators.',
  },
];

const products = [
  { group: 'Pre-construction', tag: 'green', name: 'Hyperreal Estate', description: 'Photoreal 3D architectural and design visualization. Raytraced with UE and optimized for high-end VR.', image: '/products/hyperreal-estate.png' },
  { group: 'Pre-construction', tag: 'green', name: 'Blueprint Immersive', description: 'High-fidelity event venue configuration and previs software. Used by top architects and design professionals to optimize construction planning.', image: '/products/blueprint-immersive.png' },
  { group: 'Pre-construction', tag: 'green', name: 'Floor Tour', description: 'Self-service, real-world scale floor plan visualization software. Walk your portfolio of designs and renders in VR with just a few clicks.', image: '/products/floor-tour.png' },
  { group: 'Entertainment', tag: 'pink', name: 'Holodeck Anywhere', description: 'Multiuser colocated VR. Solutions are available for both ultra-high fidelity and standalone flexibility.', image: '/products/holodeck-anywhere.png' },
  { group: 'Entertainment', tag: 'pink', name: 'Stage Presence', description: 'Rehearsal tool and performance platform. Designed and streamlined to integrate with existing media and live event industry practices.', image: '/products/stage-presence.png' },
  { group: 'Entertainment', tag: 'pink', name: 'PerforMR', description: 'Live-actor animation pipeline. A multi-source mocap tool for performers to animate one or many MetaHumans, real-time or saved for playback, in Virtual Reality or Mixed Reality.', image: '/products/performr.png' },
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

// Pair testimonials for 2-per-slide layout
const testimonialSlides: (typeof testimonials[number])[][] = [];
for (let i = 0; i < testimonials.length; i += 2) {
  testimonialSlides.push(testimonials.slice(i, i + 2));
}

/* ── Pink Quote SVG ── */
function PinkQuote() {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 32V19.2C0 15.467 0.667 12.133 2 9.2C3.467 6.133 5.533 3.6 8.2 1.6L13 5.6C11 7.2 9.4 9.133 8.2 11.4C7.133 13.533 6.6 15.867 6.6 18.4H12V32H0ZM22 32V19.2C22 15.467 22.667 12.133 24 9.2C25.467 6.133 27.533 3.6 30.2 1.6L35 5.6C33 7.2 31.4 9.133 30.2 11.4C29.133 13.533 28.6 15.867 28.6 18.4H34V32H22Z" fill="#fe00b5" />
    </svg>
  );
}

/* ── Homepage ── */
export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % testimonialSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Pink radial glow */}
        <div className="pink-glow" style={{ bottom: '-10%', left: '-10%' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-[25vh]">
          <div className="max-w-[70ch] mx-auto text-center">
            <h1 className="text-[clamp(4rem,10vw,10rem)] font-black leading-[0.95] tracking-[-0.04em] mb-6">
              Agile Lens
            </h1>
            <p className="text-[clamp(1.2rem,2.5vw,2rem)] font-light leading-relaxed opacity-80 mb-20">
              Crafting immersive experiences for real and virtual worlds and the spectacles within.
            </p>
          </div>
        </div>
      </section>

      {/* ── Three Hero Panels (sticky scroll) ── */}
      <div className="hero-panels-container">
        <div className="hero-panels-sticky px-4">
          <div className="hero-panel">
            <img
              src="/portfolio/four-seasons/01.jpg"
              alt="VR experience"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hero-panel">
            {/* Video placeholder — replace with real video when available */}
            <img
              src="/portfolio/christmas-carol/01.jpg"
              alt="Immersive production"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hero-panel">
            <img
              src="/products/hyperreal-estate.png"
              alt="Architectural visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Client Logo Marquee ── */}
      <Section className="py-20">
        <p className="text-center text-sm uppercase tracking-widest text-[var(--color-text-muted)] opacity-60 mb-10">
          Innovation for
        </p>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex-shrink-0 mx-8 md:mx-12">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Two Pillars: Our Primary Customers ── */}
      <Section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-16">Our Primary Customers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className={`phase-card ${p.color}`}>
              <div className="mb-4">
                <span
                  className={`inline-block w-10 h-10 rounded-full ${
                    p.color === 'green' ? 'bg-[var(--color-green)]' : 'bg-[var(--color-pink)]'
                  } opacity-30`}
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-base md:text-lg">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Core Products (sticky stacking cards) ── */}
      <Section id="products" className="max-w-[1100px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="mb-16">
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-4">Our Core Products</h2>
          <p className="text-[var(--color-text-muted)] max-w-[42ch] text-lg">
            Explore our key products designed for pre-construction and entertainment industries.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {products.map((product, i) => (
            <div key={product.name} className="sticky-card" style={{ top: `calc(8vh + ${i * 20}px)` }}>
              <div className="grid md:grid-cols-[1fr_1.75fr] bg-[#141313] border border-[var(--color-border)] rounded-2xl overflow-hidden min-h-[50vh]">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-6 w-fit ${
                      product.tag === 'green'
                        ? 'border-[var(--color-green)] text-[var(--color-green)]'
                        : 'border-[var(--color-pink)] text-[var(--color-pink)]'
                    }`}
                  >
                    {product.group}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">{product.name}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="relative min-h-[250px] md:min-h-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Testimonials (2-per-slide) ── */}
      <section id="testimonials" className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Section>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-16">What People Say</h2>
          </Section>

          <div className="relative overflow-hidden min-h-[400px]">
            <div
              key={slideIndex}
              className="testimonial-enter grid md:grid-cols-2 gap-8"
            >
              {testimonialSlides[slideIndex].map((t) => (
                <div
                  key={t.name}
                  className="bg-[var(--color-dark-grey)] rounded-[30px] p-10 md:p-12 flex flex-col"
                >
                  <PinkQuote />
                  <blockquote className="mt-8 text-lg md:text-xl leading-relaxed flex-1 font-[Manrope]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-[var(--color-grey)]">
                    <div className="font-bold text-base">{t.name}</div>
                    <div className="text-sm text-[var(--color-text-muted)] mt-1">{t.title}</div>
                    {t.project && (
                      <div className="text-xs text-[var(--color-pink)] mt-2">
                        on {t.project}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-3 justify-center mt-10">
            {testimonialSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === slideIndex
                    ? 'bg-[var(--color-pink)] scale-110'
                    : 'bg-[var(--color-grey)] hover:bg-[var(--color-text-muted)]'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <Section id="about" className="max-w-[1100px] mx-auto px-6 md:px-12 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-8">About</h2>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
              Founded in 2014, Agile Lens was born from a mission to redefine storytelling through
              immersive technology, merging design, architecture, and XR to create transformative spatial
              experiences.
            </p>
            <div className="text-sm text-[var(--color-text-muted)]">
              <span className="block mb-2 text-xs uppercase tracking-wider opacity-60">Sister companies</span>
              <a
                href="https://www.fda.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-pink)] transition-colors"
              >
                Fisher Dachs Associates
              </a>
              <span className="mx-2 opacity-30">|</span>
              <a
                href="https://www.fishermarantzstone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-pink)] transition-colors"
              >
                Fisher Marantz Stone
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src="/portfolio/four-seasons/01.jpg" alt="Holodeck" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square mt-8">
              <img src="/portfolio/christmas-carol/01.jpg" alt="Christmas Carol VR" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
