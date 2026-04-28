import type { Metadata } from 'next';
import Link from 'next/link';
import RevealBox from '@/components/RevealBox';
import PhotoMarquee from '@/components/PhotoMarquee';
import PastEventsGrid from '@/components/PastEventsGrid';

export const metadata: Metadata = {
  title: 'Unreal NYC | Agile Lens',
  description:
    'Unreal NYC is the New York City community for Unreal Engine creators. Lead organizer: Agile Lens. 1,400+ members. Monthly meetups across games, animation, film, broadcast, and live events.',
};

const NEXT_EVENT = {
  title: 'NY Tech Week Demo Day',
  hostedBy: 'Hosted by Epic Games',
  date: 'Thursday, June 4, 2026',
  time: '5:00 – 9:00 PM EDT',
  venue: 'Epic Games NY Office, 420 Ninth Ave, New York, NY',
  blurb:
    'A networking and demo evening for Unreal Engine creators across games, animation, film, broadcast, and live events. Approval required — final address shared with confirmed attendees.',
  rsvpUe: 'https://communities.unrealengine.com/events/details/epic-games-new-york-presents-unreal-nyc-june-4th-ny-tech-week-demo-day-hosted-by-epic-games-approval-reqd/',
  rsvpPartiful: 'https://partiful.com/e/kNzjYKYZPsXC63XE7Jn6',
};

const PAST_EVENTS = [
  {
    title: 'March Event',
    date: 'March 4, 2026',
    image: '/unrealnyc/01.jpg',
    sponsors: 'Sponsored & hosted by Epic Games',
    speakers: 'Jason Cuadrado, Michael Peters',
    recording: 'https://youtu.be/3pYO3xlmys4',
  },
  {
    title: 'January Event',
    date: 'January 28, 2026',
    image: '/unrealnyc/02.jpg',
    sponsors: 'Hosted by Planet X Studios',
    speakers: 'Speakers from Evercoast and MIT Reality Hack',
    recording: '',
  },
  {
    title: 'XR Holiday Party NYC',
    date: 'December 17, 2025',
    image: '/unrealnyc/03.jpg',
    sponsors: 'Collab with XR Guild, AWE, NYVR, VRARA, Unity NYC, Unreal NYC, The Polys, XR Motion',
    speakers: '',
    recording: '',
  },
  {
    title: 'December Event',
    date: 'December 4, 2025',
    image: '/unrealnyc/04.jpg',
    sponsors: 'Hosted at School of Visual Arts · Food & swag sponsored by Epic Games',
    speakers: 'Andrew Delgado (ICRAVE), Yu-Jun Yeh (Agile Lens), Ajinkya Hukerikar (Zero Density)',
    recording: 'https://youtu.be/skftiacxR2E',
  },
  {
    title: 'October Event',
    date: 'October 22, 2025',
    image: '/unrealnyc/06.jpg',
    sponsors: 'Sponsored by Epic Games (21+)',
    speakers: 'Matt Workman, Woody Devs',
    recording: 'https://youtu.be/_XBF9MzW7MA',
  },
  {
    title: 'August Meet-Up',
    date: 'August 28, 2025',
    image: '/unrealnyc/07.jpg',
    sponsors: 'Sponsored by ZeroSpace, Agile Lens, Epic Games, 4Wall Entertainment, HP',
    speakers: '',
    recording: '',
  },
  {
    title: 'July Event',
    date: 'July 24, 2025',
    image: '/unrealnyc/08.jpg',
    sponsors: 'Hosted by Jeremy Siracusa · Jett Sets Studio C / AMV Studio',
    speakers: '',
    recording: '',
  },
  {
    title: 'Pre-Unreal Fest Hangout',
    date: 'May 28, 2025',
    image: '/unrealnyc/09.jpg',
    sponsors: 'Sponsored by Epic Games · Hosted at Epic Games NYC',
    speakers: 'Alex Coulombe, Ferris Webby',
    recording: '',
  },
];

// Event photos from Meetup, May 2025 onward — chronological (May → July → October).
const EVENT_PHOTOS = Array.from({ length: 35 }, (_, i) => `/unrealnyc/photos/photo-${String(i + 1).padStart(2, '0')}.webp`);

const FOLLOW_LINKS = [
  {
    label: 'Unreal Communities — New York',
    primary: true,
    note: 'Official RSVPs and event details. Per Epic, this is now the canonical channel.',
    href: 'https://communities.unrealengine.com/new-york/',
    cta: 'Follow the chapter',
  },
  {
    label: 'Discord',
    primary: true,
    note: 'Day-to-day chat, demo coordination, and call-outs between meetups.',
    href: 'https://discord.gg/9A9NdW6DDA',
    cta: 'Join the Discord',
  },
  {
    label: 'Meetup (legacy)',
    primary: false,
    note: '1,400+ members. We are no longer posting new events here, but the archive of past gatherings remains.',
    href: 'https://www.meetup.com/unrealengine/',
    cta: 'View the archive',
  },
];

export default function UnrealNYCPage() {
  return (
    <div className="relative">
      {/* Pink glow backdrop */}
      <div className="pink-glow absolute -top-20 -right-40 hidden md:block" aria-hidden="true" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/60 text-xs uppercase tracking-wider text-muted mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Lead organizer since May 2025
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="gradient-text">Unreal NYC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              The New York City community for Unreal Engine creators. Monthly meetups, talks, and demos across games, animation, film, broadcast, and live events.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#next-event"
                className="btn-gradient px-6 py-3 rounded-full text-sm font-semibold text-white"
              >
                Next event &rarr;
              </a>
              <a
                href="https://discord.gg/9A9NdW6DDA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-border text-text hover:border-pink/60 transition-colors"
              >
                Join the Discord
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl md:text-4xl font-black text-text">1,400+</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1">Members</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-text">Monthly</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1">Meetups</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-text">Epic</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1">Sponsored</div>
              </div>
            </div>
          </div>

          <RevealBox variant="reveal-scale" className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-surface flex items-center justify-center">
              <img
                src="/unrealnyc/05.webp"
                alt="Unreal NYC"
                className="w-full h-full object-contain"
              />
            </div>
          </RevealBox>
        </div>
      </section>

      {/* PHOTO MARQUEE */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <RevealBox>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="text-xs uppercase tracking-wider text-pink font-semibold mb-2">In the room</div>
                <h2 className="text-2xl md:text-3xl font-black">Since May 2025</h2>
              </div>
              <p className="text-sm text-muted max-w-md">
                A peek at recent meetups across NYC — talks, demos, and the people who show up. Hover to pause, click any photo to enlarge.
              </p>
            </div>
          </RevealBox>
        </div>
        <RevealBox>
          <PhotoMarquee images={EVENT_PHOTOS} duration={120} />
        </RevealBox>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <RevealBox className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <h2 className="text-3xl md:text-4xl font-black">About the community</h2>
          <div className="space-y-5 text-muted leading-relaxed text-base md:text-lg">
            <p>
              Unreal NYC provides a venue for users of Unreal Engine and other Epic Games products to meet, share knowledge, collaborate, and demo projects. The group spans games, animation, film, broadcast, live events, and architecture.
            </p>
            <p>
              Agile Lens has been the lead organizer since May 2025. In that time the community has grown past 1,400 members, with regular meetups hosted at Epic Games NY, School of Visual Arts, and partner studios across the city.
            </p>
            <p className="text-sm">
              Per Epic Games&apos; guidance, we&apos;ve consolidated active organizing onto the official{' '}
              <a className="text-pink hover:underline" href="https://communities.unrealengine.com/new-york/" target="_blank" rel="noopener noreferrer">Unreal Communities chapter</a>{' '}
              and our{' '}
              <a className="text-pink hover:underline" href="https://discord.gg/9A9NdW6DDA" target="_blank" rel="noopener noreferrer">Discord</a>.
              The Meetup archive remains live as a record of past gatherings.
            </p>
          </div>
        </RevealBox>
      </section>

      {/* NEXT EVENT */}
      <section id="next-event" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">
        <RevealBox>
          <div className="text-xs uppercase tracking-wider text-pink font-semibold mb-3">Next up</div>
          <h2 className="text-3xl md:text-5xl font-black mb-8">{NEXT_EVENT.title}</h2>
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12 grid md:grid-cols-[1.5fr_1fr] gap-10">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted mb-2">{NEXT_EVENT.hostedBy}</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{NEXT_EVENT.date}</div>
              <div className="text-muted mb-6">{NEXT_EVENT.time}</div>
              <div className="text-sm text-muted mb-6">
                <div className="text-xs uppercase tracking-wider mb-1">Venue</div>
                <div className="text-text font-medium">{NEXT_EVENT.venue}</div>
              </div>
              <p className="text-muted leading-relaxed">{NEXT_EVENT.blurb}</p>
            </div>
            <div className="flex flex-col gap-3 md:justify-center">
              <a
                href={NEXT_EVENT.rsvpUe}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient px-6 py-3 rounded-full text-sm font-semibold text-white text-center"
              >
                RSVP on Unreal Communities
              </a>
              <a
                href={NEXT_EVENT.rsvpPartiful}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-border text-text hover:border-pink/60 transition-colors text-center"
              >
                RSVP on Partiful
              </a>
              <p className="text-xs text-muted text-center mt-1">
                Approval required. Both links go to the same event.
              </p>
            </div>
          </div>
        </RevealBox>
      </section>

      {/* FOLLOW */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <RevealBox>
          <h2 className="text-3xl md:text-4xl font-black mb-3">Where to follow</h2>
          <p className="text-muted mb-10 max-w-2xl">
            New events, demos, and announcements live on the official Unreal Communities chapter and our Discord.
          </p>
        </RevealBox>
        <div className="grid md:grid-cols-3 gap-6">
          {FOLLOW_LINKS.map((link, i) => (
            <RevealBox key={link.href} delay={i * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block h-full p-6 rounded-xl border bg-surface transition-all ${
                  link.primary
                    ? 'border-pink/40 hover:border-pink'
                    : 'border-border hover:border-muted'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold">{link.label}</h3>
                  {link.primary && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink/10 text-pink font-semibold">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6">{link.note}</p>
                <div className="text-sm text-pink font-semibold">{link.cta} &rarr;</div>
              </a>
            </RevealBox>
          ))}
        </div>
      </section>

      {/* SPEAK / DEMO CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <RevealBox>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-purple/10 via-surface to-pink/10 p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Want to speak or showcase a demo?</h2>
            <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you&apos;re shipping an Unreal-powered tool, experimenting with virtual production, or building something weird with MetaSounds — we want to see it. Pitch a talk or a demo and we&apos;ll find a slot.
            </p>
            <a
              href="mailto:unrealnyc@agilelens.com?subject=Unreal%20NYC%20-%20Talk%2FDemo%20pitch"
              className="btn-gradient inline-block px-8 py-3.5 rounded-full text-sm font-semibold text-white"
            >
              unrealnyc@agilelens.com
            </a>
          </div>
        </RevealBox>
      </section>

      {/* PAST EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <RevealBox>
          <h2 className="text-3xl md:text-4xl font-black mb-3">Past events</h2>
          <p className="text-muted mb-10">
            A snapshot of recent meetups. Recordings of select talks live on the{' '}
            <a
              className="text-pink hover:underline"
              href="https://www.youtube.com/playlist?list=PLpC5Swh5jFZK-EafIStqWIu5SEOcj5d0i"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unreal NYC YouTube playlist
            </a>
            .
          </p>
        </RevealBox>
        <PastEventsGrid events={PAST_EVENTS} initialCount={6} />
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <RevealBox className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">See you at the next one.</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://communities.unrealengine.com/new-york/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-6 py-3 rounded-full text-sm font-semibold text-white"
            >
              Follow on Unreal Communities
            </a>
            <a
              href="https://discord.gg/9A9NdW6DDA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-border text-text hover:border-pink/60 transition-colors"
            >
              Join the Discord
            </a>
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-border text-muted hover:text-text transition-colors"
            >
              Back to portfolio
            </Link>
          </div>
        </RevealBox>
      </section>
    </div>
  );
}
