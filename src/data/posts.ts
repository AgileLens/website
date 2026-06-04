export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite?: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  author: string;
  readMinutes: number;
  tag: string;
  image: string;
  body: PostBlock[];
}

// NOTE: These are starter drafts for the Insights section, written to seed the
// blog with real, on-brand content. Review and edit before this ships to
// production. Add new posts by appending to this array.
export const posts: Post[] = [
  {
    slug: 'xr-that-pays-for-itself',
    title: 'Designing XR that pays for itself',
    excerpt:
      'After a decade of enterprise immersive work, the projects that succeed all share one trait: they are scoped around a number the client already cares about.',
    date: '2026-05-20',
    author: 'Alex Coulombe',
    readMinutes: 6,
    tag: 'Enterprise XR',
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a77310538a13ec8f9d28_NYC-Holodeck_Cropped.png',
    body: [
      {
        type: 'p',
        text: 'Most conversations about enterprise XR start in the wrong place. They start with the headset. The right place to start is with a number the client is already trying to move — a change-order budget, a pre-sales target, a rehearsal day rate — and then asking whether an immersive experience can move it.',
      },
      {
        type: 'p',
        text: 'We have spent more than a decade building immersive experiences for developers, brands, and performing-arts institutions. The pattern that separates the projects people remember from the ones that quietly disappear is not fidelity, or novelty, or which device launched that quarter. It is whether the experience was scoped around an outcome the organization could measure.',
      },
      { type: 'h2', text: 'Pre-construction is the clearest case' },
      {
        type: 'p',
        text: 'When a developer can walk a $300 million property at full scale before a single foundation is poured, two things happen. Design reviews that used to take weeks of back-and-forth collapse into a single afternoon in headset, and buyers make decisions with conviction because they have actually stood in the space. We have watched immersive previs cut change requests and drive nine figures in pre-construction sales — not because the renders were pretty, but because the experience was pointed at a decision someone needed to make.',
      },
      { type: 'h2', text: 'Entertainment runs on a different ledger' },
      {
        type: 'p',
        text: 'In live performance the return is rarely a spreadsheet line — it is rehearsal time recovered, a production de-risked, an audience that leaves talking. The discipline is the same. Before we build, we ask the director or producer what specifically gets easier, cheaper, or more repeatable. If we cannot answer that, the technology is a demo, not a tool.',
      },
      {
        type: 'quote',
        text: 'Agile Lens works like engineers but think like storytellers. They pursue excellence in the details which is what you need for a turnkey luxury experience.',
        cite: 'Amanda Watson — Inventor of Air Link, CTO of REK',
      },
      { type: 'h2', text: 'The takeaway' },
      {
        type: 'p',
        text: 'If you are evaluating an immersive project, do not lead with the platform. Lead with the metric. Name the number you are trying to move, and let that decide the fidelity, the hardware, and the scope. XR that pays for itself is XR that was designed, from the first sketch, to do a job.',
      },
    ],
  },
  {
    slug: 'running-unreal-nyc',
    title: 'What it takes to run Unreal NYC',
    excerpt:
      'A 1,400-member creator community does not happen by accident. Here is what we have learned organizing monthly meetups for Unreal Engine creators across the city.',
    date: '2026-04-15',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Community',
    image: '/unrealnyc/01.jpg',
    body: [
      {
        type: 'p',
        text: 'When we took over as lead organizer of Unreal NYC in May 2025, the brief was simple to say and hard to do: give the people building with Unreal Engine in this city a reason to show up in the same room every month. A year later the community has grown past 1,400 members, with meetups hosted at Epic Games NY, the School of Visual Arts, and partner studios across town.',
      },
      { type: 'h2', text: 'Programming beats promotion' },
      {
        type: 'p',
        text: 'The single biggest lever is the lineup. People do not return for the venue or the pizza — they return because last month they saw a virtual-production breakdown or a MetaSounds experiment they could not have seen anywhere else. We treat every meetup like a small show: one or two real talks, time to demo, and room to actually meet each other.',
      },
      { type: 'h2', text: 'Cross the silos' },
      {
        type: 'p',
        text: 'Unreal NYC spans games, animation, film, broadcast, live events, and architecture. That breadth is the point. The most useful conversations of the night usually happen between people who would never otherwise be in the same room — a broadcast engineer and a theater director discovering they have the exact same rendering problem.',
      },
      {
        type: 'quote',
        text: 'From Vision Pro to Galaxy XR, few are more experienced and knowledgeable when it comes to deploying immersive experiences on the latest devices on the market.',
        cite: 'Gabriele Romagnoli — Host of XR AI Spotlight',
      },
      { type: 'h2', text: 'Meet people where they already are' },
      {
        type: 'p',
        text: 'Per Epic’s guidance we have consolidated active organizing onto the official Unreal Communities chapter and our Discord, while keeping the Meetup archive live as a record. The lesson for anyone building a technical community: do not make people learn a new tool to participate. Show up on the channels they already check.',
      },
      {
        type: 'p',
        text: 'If you are building with Unreal in New York — or you want to pitch a talk or a demo — we would love to see it. The next event is always one tap away on the Unreal NYC page.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
