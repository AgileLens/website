'use client';

import { useEffect, useRef } from 'react';

/* ── Scroll Reveal (same pattern as homepage) ── */
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

const RSVP_MAILTO =
  "mailto:jonathan@austincapitalpartners.com,nashid@austincapitalpartners.com" +
  "?subject=" + encodeURIComponent("Mountain View Holodeck: Visit Request") +
  "&body=" + encodeURIComponent(
    "Hi Jonathan and Nashid,\n\n" +
    "I'd love to visit the Mountain View Holodeck between July 28 and August 7.\n\n" +
    "My name:\nPreferred dates/times:\nGuests in my party:\n\nThanks!"
  );

const gridTex: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(251,251,251,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(251,251,251,.06) 1px, transparent 1px)',
  backgroundSize: '46px 46px',
};

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="border-t border-border pt-4">
      <span className="gradient-text block text-4xl md:text-5xl font-black tabular-nums">{num}</span>
      <span className="block mt-2 text-sm text-muted max-w-[26ch]">{label}</span>
    </div>
  );
}

function PairCell({
  tag,
  src,
  alt,
  caption,
  rendered = false,
}: {
  tag: string;
  src: string;
  alt: string;
  caption: string;
  rendered?: boolean;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-surface group">
      <span
        className={`absolute top-4 left-4 z-10 text-[0.65rem] font-bold uppercase tracking-wider text-white px-3 py-1.5 rounded-full ${
          rendered ? 'btn-gradient' : 'bg-black/55 backdrop-blur-sm'
        }`}
      >
        {tag}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-8 bg-gradient-to-t from-black/85 to-transparent">
        <p className="text-sm text-white/95">{caption}</p>
      </div>
    </div>
  );
}

export default function MountainViewInvite() {
  return (
    <div>
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mountain-view/floor-hero.jpg"
            alt="Guests standing on the bare, marker-tracked floor of the Holodeck before the headsets go on."
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 38%' }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,11,.55) 0%, rgba(10,10,11,.35) 30%, rgba(10,10,11,.7) 72%, rgba(10,10,11,.95) 100%)',
          }}
        />
        <div className="absolute inset-0 opacity-70" style={gridTex} />

        <div className="relative flex-1 flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <p className="hero-title text-xs uppercase tracking-wider text-white/70 font-bold mb-4">
              A Private Invitation &middot; By Appointment Only
            </p>
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-black leading-[1.03] mb-6">
              The room is empty.<br />Then it isn&rsquo;t.
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/85 max-w-[56ch] leading-relaxed mb-10">
              We have a 5,000 square foot Holodeck in Mountain View, open by appointment from
              July 28 through August 7. Walk into it, and you&rsquo;re walking through $300 million
              of Four Seasons Private Residences Lake Austin amenities that don&rsquo;t exist yet.
            </p>
            <div className="hero-subtitle flex flex-wrap items-center gap-6">
              <a href={RSVP_MAILTO} className="btn-gradient px-7 py-3.5 rounded-full text-sm font-semibold text-white">
                Request a visit
              </a>
              <p className="text-sm text-white/60 font-medium">
                By appointment only &middot; July 28 to August 7 &middot; Mountain View, CA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── What it is ───────── */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center gap-2">
          {[
            'Co-located',
            'Group multiplayer',
            'Wireless',
            'Backpackless',
            'Large-scale walkable PCVR',
            'RTX 5090 GPUs',
            'Photoreal / raytraced',
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-wider text-muted font-semibold border border-border rounded-full px-3 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ───────── Press strip ───────── */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs uppercase tracking-wider text-muted font-bold">As featured in</span>
          <a
            href="https://arinsider.co/2026/06/10/lake-austin-luxury-how-a-developer-presold-500m-in-real-estate-with-vr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors font-semibold"
          >
            AR Insider
          </a>
          <a
            href="https://www.uploadvr.com/four-seasons-private-residences-austin-vr-holodeck/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors font-semibold"
          >
            UploadVR
          </a>
          <a
            href="https://www.papercitymag.com/real-estate/four-seasons-private-residences-lake-austin-creates-2-million-holodeck-real-estate-amenities/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors font-semibold"
          >
            PaperCity Magazine
          </a>
        </div>
      </section>

      {/* ───────── Why people fly in ───────── */}
      <Section className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <p className="text-xs uppercase tracking-wider text-pink font-bold mb-4">Why people fly in for this</p>
        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">It has a way of getting attention.</h2>
        <p className="text-muted leading-relaxed text-base mb-4">
          The Holodeck is so far ahead of other VR experiences that John Carmack, former CTO of
          Oculus, came to see it in person. Then Meta&rsquo;s CTO, Andrew Bosworth, flew in with
          his own team.
        </p>
        <p className="text-muted leading-relaxed text-base">
          We&rsquo;ve hosted more than 1,000 tours for more than 2,500 guests, with a 100%
          completion rate on the full 25-minute experience. That&rsquo;s unheard of in this
          industry.
        </p>
      </Section>

      {/* ───────── Stats band A ───────── */}
      <Section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <h3 className="text-sm font-bold mb-8">The Holodeck, by the numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            <Stat num="1,000+" label="Guided tours hosted to date" />
            <Stat num="2,500+" label="Guests who&rsquo;ve walked the space" />
            <Stat num="100%" label="Completion rate on the full 25-minute experience" />
          </div>
        </div>
      </Section>

      {/* ───────── Stats band B ───────── */}
      <Section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
            <h3 className="text-sm font-bold">What it&rsquo;s done for Four Seasons Lake Austin</h3>
            <span className="text-xs text-muted font-semibold">Per AR Insider, June 2026</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            <Stat num="$500M+" label="Real estate presold with the VR experience as a driver" />
            <Stat num="$870M" label="Construction loan secured after those results" />
            <Stat num="$300M" label="In amenities guests walk through in VR, none of it built yet" />
          </div>
        </div>
      </Section>

      {/* ───────── Built by (credit + testimonial) ───────── */}
      <Section className="relative overflow-hidden">
        <div className="pink-glow" style={{ top: '-10vh', right: '-20vh' }} />
        <div className="relative max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <p className="text-xs uppercase tracking-wider text-muted font-bold mb-6">Built by</p>
          <blockquote className="text-2xl md:text-3xl font-medium leading-snug mb-6">
            &ldquo;Agile Lens is an XR SEAL Team Six&hellip; What the team, including Pureblink
            and DBOX, has built is a time machine.&rdquo;
          </blockquote>
          <p className="text-sm text-muted font-semibold mb-10">Jonathan Coon, developer</p>
          <p className="text-muted leading-relaxed text-base">
            Agile Lens wrote the software and ran the Holodeck floor. Pureblink and DBOX built
            the visuals from our architects&rsquo; renders. I just get to give the tours.
          </p>
        </div>
      </Section>

      {/* ───────── Six scenes / before-after ───────── */}
      <Section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-10">
        <p className="text-xs uppercase tracking-wider text-pink font-bold mb-4">One room, six places</p>
        <h2 className="text-3xl md:text-4xl font-black mb-6 max-w-[16ch] leading-tight">
          You never leave the floor. The floor leaves reality.
        </h2>
        <p className="text-muted leading-relaxed text-base max-w-[64ch]">
          Without taking off the headset, you&rsquo;ll move through six scenes built at full
          architectural scale: the residence, the lake clubhouse, indoor sports and wellness,
          private dining, the sports bar, and a 96-seat theater, where four real seats are
          waiting at the end.
        </p>
      </Section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 space-y-1">
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <PairCell tag="The room" src="/mountain-view/floor-wide.jpg" alt="Guests standing on the empty, marker-tracked Holodeck floor, headsets on." caption="Guests before the headset goes on." />
          <PairCell tag="The world" src="/mountain-view/residence-dining.jpg" alt="Photoreal rendering of a private dining room high above Lake Austin, part of the VR tour." caption="Private dining, high above Lake Austin." rendered />
        </Section>
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <PairCell tag="The room" src="/mountain-view/floor-seated.jpg" alt="Guests seated in real chairs mid-tour, wearing headsets in the tracked Holodeck space." caption="Same floor, seated mid-tour." />
          <PairCell tag="The world" src="/mountain-view/sports-wellness.jpg" alt="Photoreal rendering of the indoor sports and wellness club, part of the VR tour." caption="The indoor sports and wellness club." rendered />
        </Section>
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <PairCell tag="The room" src="/mountain-view/floor-couch.jpg" alt="Guests seated on a physical couch in the Holodeck, wearing headsets." caption="A couch that exists in two places at once." />
          <PairCell tag="The world" src="/mountain-view/lake-clubhouse.jpg" alt="Photoreal rendering of the lake clubhouse living room, glass walls facing the water, part of the VR tour." caption="The lake clubhouse, glass to the water." rendered />
        </Section>
      </div>

      {/* ───────── Video ───────── */}
      <Section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">I&rsquo;ll let the film do some of the talking.</h2>
          <p className="text-muted leading-relaxed text-base">
            A short film shot inside a live Holodeck tour, plus the videos the press shot when
            they came to see it themselves.
          </p>
        </div>

        <div className="aspect-video rounded-xl overflow-hidden border border-border mb-3">
          <iframe
            src="https://www.youtube.com/embed/YaYBuSRYwV0"
            title="The Holodeck at Four Seasons Private Residences Lake Austin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-xs text-muted text-center mb-10">The Holodeck, in motion</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border mb-3">
              <iframe
                src="https://www.youtube.com/embed/-vNzNHaF8SA"
                title="Lake Austin Luxury: Selling $500M in Real Estate with VR, AR Insider"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-xs text-muted text-center">
              As seen on{' '}
              <a
                href="https://arinsider.co/2026/06/10/lake-austin-luxury-how-a-developer-presold-500m-in-real-estate-with-vr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                AR Insider
              </a>
            </p>
          </div>
          <div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border mb-3">
              <iframe
                src="https://www.youtube.com/embed/6la2yieiCG0"
                title="A New Virtual Reality: A 5,000 sqft VR Experience for Four Seasons Lake Austin, Unreal Fest 2023"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-xs text-muted text-center">
              As seen on{' '}
              <a
                href="https://www.uploadvr.com/four-seasons-private-residences-austin-vr-holodeck/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                UploadVR
              </a>
            </p>
          </div>
        </div>
      </Section>

      {/* ───────── No agenda ───────── */}
      <Section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <p className="text-xs uppercase tracking-wider text-muted font-bold mb-4">No agenda required</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6">This isn&rsquo;t a business for us.</h2>
          <p className="text-muted leading-relaxed text-base mb-4">
            We built the Holodeck, at real cost, so we could show guests what the residences and
            amenities at Four Seasons Lake Austin will feel like before they&rsquo;re finished.
            We&rsquo;re happy to open-source what we&rsquo;ve learned along the way.
          </p>
          <p className="text-muted leading-relaxed text-base">
            You don&rsquo;t have to be a prospective buyer to come. We&rsquo;ve found it helps to
            have people who love where architecture and technology meet walk through it, so they
            know about the project and can tell others.
          </p>
        </div>
      </Section>

      {/* ───────── RSVP footer ───────── */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mountain-view/residence-den.jpg"
            alt="Photoreal rendering of a residence interior with a fireplace and gallery wall, part of the VR tour."
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(16,16,17,.88) 0%, rgba(16,16,17,.96) 55%, var(--color-bg) 100%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-xs uppercase tracking-wider text-white/70 font-bold mb-4">
            Mountain View, CA &middot; By appointment only
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 max-w-[14ch] leading-tight">
            Come see it while we&rsquo;re here.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-2 max-w-[48ch]">
            We&rsquo;re open July 28 through August 7. If you&rsquo;d like to visit, send an
            email to both Nashid and me:
          </p>
          <div className="flex flex-col gap-1 mb-8 text-lg">
            <a href="mailto:jonathan@austincapitalpartners.com" className="text-pink hover:underline w-fit">
              jonathan@austincapitalpartners.com
            </a>
            <a href="mailto:nashid@austincapitalpartners.com" className="text-pink hover:underline w-fit">
              nashid@austincapitalpartners.com
            </a>
          </div>
          <a href={RSVP_MAILTO} className="btn-gradient inline-block px-7 py-3.5 rounded-full text-sm font-semibold text-white mb-16">
            Email us both
          </a>
          <p className="italic text-white/90 text-lg">Jonathan</p>

          <div className="mt-16 pt-8 border-t border-white/10 text-sm text-white/50">
            The Holodeck experience is built and operated by Agile Lens, with visuals from
            DBOX and Pureblink.
          </div>
        </div>
      </Section>
    </div>
  );
}
