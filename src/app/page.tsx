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
    icon: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f5d847f44ff8a8474d006f_GreenHouse.svg',
    href: '/portfolio?category=Architecture',
    description:
      'For industrial and real estate developers going beyond, we offer the opportunity to be in the most visceral virtual environment you can envision before it\u2019s built. Our solutions have saved millions of dollars in design review and change requests and have driven 9-figures in pre-construction sales.',
  },
  {
    title: 'Entertainment',
    color: 'pink-card' as const,
    icon: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f5d847c6a552d1f3bee96d_PinkBrush.svg',
    href: '/portfolio?category=Entertainment',
    description:
      'For media, brands, and performing artists, we lead in blending experimental and experiential for large, live audiences, complex production facilitation, and high-flow rate activations. Our solutions streamline performance capture and virtual production management to get the most out of legacy event techs and operators.',
  },
];

const products = [
  { group: 'Pre-construction', tag: 'green', name: 'Hyperreal Estate', description: 'Photoreal 3D architectural and design visualization. Raytraced with UE and optimized for high-end VR.', image: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7ab0c726658f5fdb8f437_FSLA-Boathouse.png' },
  { group: 'Pre-construction', tag: 'green', name: 'Blueprint Immersive', description: 'High-fidelity event venue configuration and previs software. Used by top architects and design professionals to optimize construction planning.', image: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68ef32e1a167946204a6770e_blueprint3.avif' },
  { group: 'Pre-construction', tag: 'green', name: 'Floor Tour', description: 'Self-service, real-world scale floor plan visualization software. Walk your portfolio of designs and renders in VR with just a few clicks.', image: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a976635f1d32bcc41c82_floorTour.avif' },
  { group: 'Entertainment', tag: 'pink', name: 'Holodeck Anywhere', description: 'Multiuser colocated VR. Solutions are available for both ultra-high fidelity and standalone flexibility.', image: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a77310538a13ec8f9d28_NYC-Holodeck_Cropped.png' },
  { group: 'Entertainment', tag: 'pink', name: 'Stage Presence', description: 'Rehearsal tool and performance platform. Designed and streamlined to integrate with existing media and live event industry practices.', image: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7d774d50595d5e99566ba_rsc-cropped.png' },
  { group: 'Entertainment', tag: 'pink', name: 'PerforMR', description: 'Live-actor animation pipeline. A multi-source mocap tool for performers to animate one or many MetaHumans, real-time or saved for playback, in Virtual Reality or Mixed Reality.', image: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a2f04c60eb921038d52d_XmasCarol_Scrooge-Future.jpg' },
];

const testimonials = [
  {
    quote: 'Agile Lens is an XR SEAL Team Six. I did a tour with [redacted] and he was over the moon excited. What the team [including Pureblink and DBOX] has built is a time machine.',
    name: 'Jonathan Coon',
    title: 'CEO, Impossible Ventures',
    project: 'Four Seasons Holodeck',
    photo: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7aff3f5303e2cbfb63258_jonathan_coon.jpg',
  },
  {
    quote: "What Agile Lens did, it's not what others do. They gave our actors and crew control of the avatars. What they did was harder, was newer, and honestly they rocked.",
    name: 'Hope Hutman',
    title: 'Artist, Experiential Producer',
    project: 'Your Mind, Girls...',
    photo: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7bb01ee96a6b3f33fe966_hopeHutman.jpg',
  },
  {
    quote: 'Agile Lens works like engineers but think like storytellers. They pursue excellence in the details which is what you need for a turnkey luxury experience.',
    name: 'Amanda Watson',
    title: 'Inventor of Air Link and CTO of REK',
    project: '',
    photo: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/692710f61be3d74bd5832215_Watson.jpg',
  },
  {
    quote: 'From Vision Pro to Galaxy XR, few are more experienced and knowledgeable when it comes to deploying immersive experiences on the latest devices on the market.',
    name: 'Gabriele Romagnoli',
    title: 'Host of XR AI Spotlight',
    project: '',
    photo: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/6927126f98d002f170d51764_Romagnoli.jpg',
  },
  {
    quote: 'Agile Lens creates a visionary experience that skillfully breaks the fourth wall and invites audiences to the center of a 150-year-old story told for a brand new generation.',
    name: 'Raindance Immersive',
    title: '2025 Awards Ceremony',
    project: 'A Christmas Carol VR',
    photo: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f85ba86a066eefc1593e52_Raindance%2BImmersive.webp',
  },
  {
    quote: 'The Holodeck is so ambitious no single hardware provider has been able to make everything work that it needs to do. And yet, it does work.',
    name: 'Ian Hamilton',
    title: 'Editor-in-Chief, UploadVR',
    project: 'Four Seasons Holodeck',
    photo: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7aee48291e76812f07f93_Ian-Hamilton.png',
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

/* ── Scroll-Driven Hero Panels ── */
function HeroPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: 0 when top of container hits top of viewport, 1 when bottom hits top
      const totalScroll = container.offsetHeight - vh;
      const scrolled = -rect.top;
      const raw = Math.max(0, Math.min(1, scrolled / totalScroll));

      // Eased progress for smoother feel
      const progress = raw;

      // Phase 1 (0-50%): panels expand. Center: 30vw->90vw, 50vh->90vh. Sides: 30vw, 50vh->90vh
      // Phase 2 (50-60%): side panels fly off screen
      const expandT = Math.min(1, progress / 0.5); // 0->1 over first 50%
      const flyT = Math.max(0, Math.min(1, (progress - 0.5) / 0.1)); // 0->1 over 50-60%

      const left = leftRef.current;
      const middle = middleRef.current;
      const right = rightRef.current;
      if (!left || !middle || !right) return;

      // Center panel: width 30vw -> 90vw, height 50vh -> 90vh
      const centerW = 30 + expandT * 60; // 30 -> 90 vw
      const centerH = 50 + expandT * 40; // 50 -> 90 vh
      middle.style.width = `${centerW}vw`;
      middle.style.height = `${centerH}vh`;

      // Side panels: height 50vh -> 90vh, width stays 30vw
      const sideH = 50 + expandT * 40;
      left.style.height = `${sideH}vh`;
      right.style.height = `${sideH}vh`;

      // Side panels fly off: translate X and slight Y
      const leftX = flyT * -40; // 0 -> -40vw
      const rightX = flyT * 40; // 0 -> 40vw
      const sideY = flyT * -5; // 0 -> -5vh
      left.style.transform = `translate(${leftX}vw, ${sideY}vh)`;
      right.style.transform = `translate(${rightX}vw, ${sideY}vh)`;

      // Border radius shrinks as center expands
      const radius = 1.5 * (1 - expandT * 0.7);
      middle.style.borderRadius = `${radius}rem`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className="hero-scroll-container">
      <div className="hero-scroll-sticky">
        {/* Left panel */}
        <div ref={leftRef} className="hero-img-panel hero-img-left">
          <img
            src="https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a2f10aa3450ae58b3419_RoyalCaribbeanUser.jpg"
            alt="Royal Caribbean VR activation"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Center video */}
        <div ref={middleRef} className="hero-img-panel hero-img-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57%2F68f7caf71105556d6bc665f4_AspenShortv2_2-poster-00001.jpg"
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57%2F68f7caf71105556d6bc665f4_AspenShortv2_2-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57%2F68f7caf71105556d6bc665f4_AspenShortv2_2-transcode.webm" type="video/webm" />
          </video>
        </div>
        {/* Right panel */}
        <div ref={rightRef} className="hero-img-panel hero-img-right">
          <img
            src="https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f4c0ba5c9627c728ed3cf0_Rice-fromConceptToCompletion%20(2).avif"
            alt="Rice University virtual theater"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

/* ── About Section Slideshow ── */
const aboutImages = [
  { src: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68ebb87618be3f55d14d8608_image%2032.avif', alt: 'Early VR paper architecture project' },
  { src: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68ef3581ab6859db539b04a4_Shed.jpg', alt: 'The Shed theater NYC' },
  { src: 'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7ab0c726658f5fdb8f437_FSLA-Boathouse.png', alt: 'Four Seasons Lake Austin Boathouse' },
];

function AboutSlideshow() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % aboutImages.length), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
      {aboutImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {aboutImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-pink scale-110' : 'bg-white/40'}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
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
      {/* ── Hero Text + Marquee + Panels (unified like Webflow) ── */}
      <section className="relative overflow-hidden">
        <div className="pink-glow" style={{ bottom: '10%', left: '-15%' }} />
        <div className="relative z-10 text-center px-6 pt-[25vh] mb-12">
          <h1 className="text-[clamp(4rem,10vw,10rem)] font-black leading-[0.95] tracking-[-0.04em] mb-4 hero-title">
            Agile Lens
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.75rem)] font-light leading-relaxed text-muted max-w-[50ch] mx-auto hero-subtitle">
            Crafting immersive experiences for real and virtual worlds and the spectacles within.
          </p>
        </div>

        {/* Logo marquee — between hero text and panels */}
        <div className="relative z-10 py-10">
          <p className="text-center text-sm uppercase tracking-widest text-muted opacity-60 mb-8">
            Innovation for
          </p>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="shrink-0 mx-8 md:mx-12">
                  <img src={c.logo} alt={c.name} className="h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Scroll-Driven Hero Panels ── */}
      <HeroPanels />

      {/* ── Two Pillars: Our Primary Customers ── */}
      <Section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-16">Our Primary Customers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p) => (
            <Link key={p.title} href={p.href} className={`phase-card ${p.color} group cursor-pointer hover:scale-[1.01] transition-transform`}>
              <div className="flex justify-center mb-6">
                <img src={p.icon} alt="" className="w-14 h-14" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
              <p className="text-muted leading-relaxed text-base md:text-lg">{p.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Core Products (sticky stacking cards) ── */}
      <Section id="products" className="max-w-[1100px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="mb-16">
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-4">Our Core Products</h2>
          <p className="text-muted max-w-[42ch] text-lg">
            Explore our key products designed for pre-construction and entertainment industries.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {products.map((product, i) => (
            <div key={product.name} className="sticky-card" style={{ top: `calc(8vh + ${i * 20}px)` }}>
              <div className="grid md:grid-cols-[1fr_1.75fr] bg-card border border-border rounded-2xl overflow-hidden min-h-[50vh]">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-6 w-fit ${
                    product.tag === 'green'
                      ? 'border-green text-green'
                      : 'border-pink text-pink'
                  }`}>
                    {product.group}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">{product.name}</h3>
                  <p className="text-muted leading-relaxed">{product.description}</p>
                </div>
                <div className="relative min-h-[250px] md:min-h-0">
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
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
            <div key={slideIndex} className="testimonial-enter grid md:grid-cols-2 gap-8">
              {testimonialSlides[slideIndex].map((t) => (
                <div key={t.name} className="bg-dark-grey rounded-[30px] p-10 md:p-12 flex flex-col">
                  <PinkQuote />
                  <blockquote className="mt-8 text-lg md:text-xl leading-relaxed flex-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-grey flex items-center gap-4">
                    {t.photo && (
                      <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                    )}
                    <div>
                      <div className="font-bold text-base">{t.name}</div>
                      <div className="text-sm text-muted mt-0.5">{t.title}</div>
                      {t.project && (
                        <div className="text-xs text-pink mt-1">on {t.project}</div>
                      )}
                    </div>
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
                  i === slideIndex ? 'bg-pink scale-110' : 'bg-grey hover:bg-muted'
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
            <p className="text-muted text-lg leading-relaxed mb-8">
              Founded in 2014, Agile Lens was born from a mission to redefine storytelling through
              immersive technology, merging design, architecture, and XR to create transformative spatial
              experiences.
            </p>
            <div className="text-sm text-muted">
              <span className="block mb-4 text-xs uppercase tracking-wider opacity-60">Sister companies</span>
              <div className="flex items-center gap-8">
                <a href="https://www.fda.net" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68ef514f4e7935c27e31cad5_FDA.png" alt="Fisher Dachs Associates" className="h-10" />
                </a>
                <a href="https://www.fishermarantzstone.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68ef5224d8cab60d5f30eda5_FMS.png" alt="Fisher Marantz Stone" className="h-10" />
                </a>
              </div>
            </div>
          </div>
          <AboutSlideshow />
        </div>
      </Section>
    </>
  );
}
