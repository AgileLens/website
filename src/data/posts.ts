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

// Insights posts, drafted in Alex's personal voice (first person, casual,
// em dashes kept on purpose — see skills-ref/writing/alex-personal-voice.md).
// These are review drafts: real and grounded in actual projects/talks, but give
// them a pass before any merge to main. Add new posts by appending here.
export const posts: Post[] = [
  {
    slug: 'xr-that-pays-for-itself',
    title: "The question I ask before I'll build you anything in VR",
    excerpt:
      "A confession that's bad for business: I don't really care about the headset. After a decade of this, the projects that pay off all start the same way.",
    date: '2026-05-20',
    author: 'Alex Coulombe',
    readMinutes: 6,
    tag: 'Enterprise XR',
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a77310538a13ec8f9d28_NYC-Holodeck_Cropped.png',
    body: [
      {
        type: 'p',
        text: "I have a confession that's bad for a guy who sells immersive experiences for a living: I don't actually care that much about the headset. When someone emails me wanting \"a VR thing,\" the first thing I usually do is gently try to talk them out of the VR thing. Not because I don't believe in it — I've bet my whole career on this since 2014 — but because the projects that actually pay off all start in the same unglamorous place. A number the client already cares about.",
      },
      { type: 'h2', text: 'Lead with the metric, not the device' },
      {
        type: 'p',
        text: "Pre-construction is the clearest case. When a developer can walk a $300 million property at full scale before a single foundation is poured, two things happen. Design reviews that used to crawl through weeks of email collapse into a single afternoon in headset. And buyers make decisions with real conviction, because they've actually stood in the space. We've watched immersive previs cut change orders and help drive nine figures in pre-construction sales, and it was never because the renders were pretty. It was because the experience was pointed at a decision somebody had to make anyway.",
      },
      { type: 'h2', text: 'The most expensive lesson I ever paid for' },
      {
        type: 'p',
        text: "Early on I underbid a project for Samsung so badly that we lost money finishing it. I tell that story at talks now, partly because it still stings and partly because the lesson took me embarrassingly long to learn. The problem wasn't that I charged too little. It was that I'd scoped the whole thing around the deliverable (\"a VR demo\") instead of the outcome (\"a decision the client needed to make\"). When you scope around a deliverable, every change is free in the client's mind and infinite in yours.",
      },
      {
        type: 'p',
        text: "The fix that changed our business was almost boring: deposits and retainers. The day we started asking for a deposit before the work began was the day the work got sustainable. It sounds like a finance thing. It's really a respect thing, in both directions.",
      },
      { type: 'h2', text: 'Entertainment runs on a different ledger' },
      {
        type: 'p',
        text: "In live performance the return rarely shows up as a spreadsheet line. It's rehearsal time recovered, a production de-risked, an audience that leaves talking about it for a week. But the discipline is identical. Before we build anything, I ask the director or producer what specifically gets easier, cheaper, or more repeatable. If I can't answer that in a sentence, what we're describing is a demo, not a tool — and I'd rather know that on day one.",
      },
      {
        type: 'quote',
        text: 'Agile Lens is an XR SEAL Team Six. What the team has built is a time machine.',
        cite: 'Jonathan Coon — CEO, Impossible Ventures',
      },
      {
        type: 'p',
        text: "So here's the unglamorous advice from someone who loves the glamorous stuff: don't lead with the platform. Lead with the metric. Name the number you're trying to move and let that decide the fidelity, the hardware, and the scope. XR that pays for itself is XR that was designed, from the very first sketch, to do a job.",
      },
    ],
  },
  {
    slug: 'running-unreal-nyc',
    title: 'What I learned running a 1,400-person Unreal community',
    excerpt:
      "A year of organizing Unreal NYC taught me that community is the slowest, most stubborn, and most valuable thing we build. Here's what actually moved the needle.",
    date: '2026-05-06',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Community',
    image: '/unrealnyc/01.jpg',
    body: [
      {
        type: 'p',
        text: "When we took over as lead organizer of Unreal NYC in May 2025, the brief was easy to say and hard to do: give the people building with Unreal Engine in this city a reason to show up in the same room every month. A year later we're past 1,400 members, with meetups at Epic Games NY, the School of Visual Arts, and partner studios all over town. I want to share what actually worked, because almost none of it was what I expected.",
      },
      { type: 'h2', text: 'Programming beats promotion, every time' },
      {
        type: 'p',
        text: "The single biggest lever is the lineup. People don't come back for the venue or the pizza. They come back because last month they saw Matt Workman break down virtual production, or Jason Cuadrado talk through a film pipeline, or Jun from our team demo something colocated they couldn't have seen anywhere else. I treat every meetup like a small show: one or two real talks, time to actually demo, and room to meet each other. If the programming is good, the marketing mostly takes care of itself.",
      },
      { type: 'h2', text: 'Put the silos in the same room' },
      {
        type: 'p',
        text: "Unreal NYC spans games, animation, film, broadcast, live events, and architecture, and that breadth is the entire point. The best conversation of the night is almost always between two people who'd never otherwise be in the same room — a broadcast engineer and a theater director realizing, mid-beer, that they have the exact same rendering problem. You can't schedule that. You can only set the table for it.",
      },
      { type: 'h2', text: 'Meet people where they already are' },
      {
        type: 'p',
        text: "When Epic asked us to move off Meetup, my first reaction was, honestly, \"lol darn Meetup.\" We'd built up that whole 1,400-person archive there. But the lesson generalizes: don't make people learn a new tool to participate. We consolidated onto the official Unreal Communities chapter and our Discord — the channels folks already check — and kept the Meetup archive live as a record. Participation went up, not down.",
      },
      {
        type: 'p',
        text: "Community is the slowest thing we build and, I'm increasingly convinced, the most durable. Products get cloned. A room full of people who trust each other doesn't. If you're building with Unreal in New York, or you want to pitch a talk or a demo, come find us. The next event is always one tap away.",
      },
    ],
  },
  {
    slug: 'four-seasons-holodeck',
    title: 'Behind the Four Seasons Holodeck',
    excerpt:
      "How we let people walk through $300 million of amenities that didn't exist yet — wirelessly, at full scale, ending in a reveal I still get a kick out of.",
    date: '2026-04-22',
    author: 'Alex Coulombe',
    readMinutes: 6,
    tag: 'Behind the Scenes',
    image: '/portfolio/four-seasons-holodeck.jpg',
    body: [
      {
        type: 'p',
        text: "Four Seasons Private Residences Lake Austin is roughly $300 million worth of amenities that, when we started, did not yet exist. Our job was to let prospective residents experience the lake clubhouse, the indoor sports club, the private restaurant, and the theater as if they were finished — not as a video, not as a render they squint at, but as a place they could walk through. Together with Impossible Ventures, DBOX, and Pureblink, that's exactly what we built.",
      },
      { type: 'h2', text: 'Full scale, no wires, no backpacks' },
      {
        type: 'p',
        text: "The space is about 5,300 square feet of finished experience, and guests walk it freely and wirelessly across an 82-by-65-foot area. That \"wirelessly\" is doing a lot of quiet work. The whole illusion falls apart the second someone feels a cable tug or remembers they're wearing a computer on their back. Getting photoreal fidelity and untethered freedom in the same room is the kind of problem no single hardware vendor has solved for you. You have to stitch it together.",
      },
      {
        type: 'quote',
        text: 'The Holodeck is so ambitious no single hardware provider has been able to make everything work that it needs to do. And yet, it does work.',
        cite: 'Ian Hamilton — Editor-in-Chief, UploadVR',
      },
      { type: 'h2', text: 'The reveal' },
      {
        type: 'p',
        text: "Here's my favorite part, and the part I'd defend in any design review. The experience ends with guests walking into a virtual 96-seat theater. As they step in, they sit down in four real theater seats we placed in the physical room. Virtual theater, real chairs, perfectly aligned. The moment someone's body expects a seat and a seat is actually there, something clicks that no amount of visual fidelity gets you on its own. People gasp. Every time.",
      },
      {
        type: 'p',
        text: "We've been called an \"XR Seal Team Six\" by a client, and I'll take it, but the real lesson of the Holodeck is less dramatic. It's that presence lives in the details you can't see in a screenshot — the wireless freedom, the aligned seat, the moment the virtual and the physical agree. That's the stuff we obsess over, and it's why the gasp is reliable.",
      },
    ],
  },
  {
    slug: 'shipping-on-every-headset',
    title: 'Shipping the same experience on every headset is harder than it looks',
    excerpt:
      "Vision Pro, Quest, Galaxy XR, Pico — they are not the same canvas wearing different logos. A field report from someone who ships on all of them.",
    date: '2026-04-02',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Devices',
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a2f10aa3450ae58b3419_RoyalCaribbeanUser.jpg',
    body: [
      {
        type: 'p',
        text: "People assume that once you've built an XR experience, putting it on a new headset is a checkbox. Export, sideload, done. I wish. Every device is a different set of compromises wearing a different logo, and the gap between \"runs\" and \"feels right\" is where most of the work actually lives.",
      },
      { type: 'h2', text: 'Different canvases, not different sizes' },
      {
        type: 'p',
        text: "Vision Pro gives you gorgeous passthrough and eye tracking but a power and thermal budget you respect or regret. Quest is the workhorse — standalone, everywhere, but you're earning every frame. Galaxy XR and Pico each bring their own input quirks and platform rules. None of this is a knock on any of them; I genuinely love what each one can do. It's just that \"the same experience\" on four headsets is really four experiences that have to feel like one. The user should never have to know which compromises we made for their device.",
      },
      {
        type: 'quote',
        text: 'From Vision Pro to Galaxy XR, few are more experienced and knowledgeable when it comes to deploying immersive experiences on the latest devices on the market.',
        cite: 'Gabriele Romagnoli — Host, XR AI Spotlight',
      },
      { type: 'h2', text: 'Why we live in Unreal' },
      {
        type: 'p',
        text: "A lot of our ability to do this comes from committing hard to Unreal Engine and to a team that knows how to push it onto devices that, on paper, do not support what we're asking. I want to be clear that this isn't brand loyalty. It's a craft decision. We picked a tool deep enough that the hard problems are solvable, and then we put in the years. When someone tells me their experience \"can't\" run on a given headset, my honest answer is usually: it can, you just haven't paid for it in engineering time yet.",
      },
      {
        type: 'p',
        text: "If you're trying to figure out which headset your project should target, the real question isn't which one is best. It's which compromises your audience will never notice — and which ones would quietly ruin the moment you're trying to create.",
      },
    ],
  },
  {
    slug: 'improv-is-underrated-in-live-xr',
    title: 'Improv is the most underrated skill in live XR',
    excerpt:
      "Live VR will break in front of an audience. The thing that saves the show isn't better code — it's a performer who can hold a room while you fix it.",
    date: '2026-03-12',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Live Performance',
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a2f04c60eb921038d52d_XmasCarol_Scrooge-Future.jpg',
    body: [
      {
        type: 'p',
        text: "Anyone who has run live XR in front of a paying audience knows the feeling. The headset that worked all through tech rehearsal picks the worst possible moment to drop tracking. A network hiccup freezes an avatar mid-gesture. The thing you can't fully control — a live room, live hardware, live humans — does exactly what live things do. And in that moment, the skill that saves the show is not in your codebase. It's improv.",
      },
      { type: 'h2', text: 'You cannot debug your way out of a live room' },
      {
        type: 'p',
        text: "I came up through theater before I came up through code, and that order turned out to matter more than I expected. When we ran A Christmas Carol VR for live audiences, every performance was a tightrope: real actors, real headsets, a real crowd, and a hundred tiny things that could go sideways. The shows that landed weren't the ones where nothing went wrong. They were the ones where, when something did, a performer kept the room held together for the eight seconds we needed.",
      },
      {
        type: 'quote',
        text: "What Agile Lens did, it's not what others do. They gave our actors and crew control of the avatars. What they did was harder, was newer, and honestly they rocked.",
        cite: 'Hope Hutman — Artist, Experiential Producer',
      },
      { type: 'h2', text: 'Hire for the recovery, not just the build' },
      {
        type: 'p',
        text: "This is why people like Kevin on our team, who comes from theater and improv, are not a luxury hire — they're load-bearing. When you're staffing a live immersive show, you are not just staffing for who can build it. You're staffing for who can keep a room warm and a story alive while the tech quietly gets fixed behind them. Reliability matters enormously, and we sweat it. But part of building reliable live XR is admitting that something, someday, will break in front of everyone, and planning for the human who handles it with grace.",
      },
      {
        type: 'p',
        text: "The unglamorous truth of live immersive work is that the audience never sees your best engineering. They see whether the night held together. Improv is how it holds.",
      },
    ],
  },
  {
    slug: 'why-my-studio-is-full-of-theater-people',
    title: 'Why my XR studio is full of theater people and architects',
    excerpt:
      "The best immersive teams aren't the ones with the most engineers. They're the ones where a director and an architect keep stealing each other's ideas.",
    date: '2026-02-18',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Team',
    image: '/portfolio/the-orchard.jpg',
    body: [
      {
        type: 'p',
        text: "If you walked our team's resumes without the job titles, you'd be confused about what kind of company this is. Architecture. Live theater. Improv. Newsrooms. Photogrammetry. Game dev. Volumetric capture. Playwriting. That's not an accident, and it's not me collecting interesting people for fun (okay, partly it's that). It's the actual strategy.",
      },
      { type: 'h2', text: 'Spatial problems are everyone’s problems' },
      {
        type: 'p',
        text: "Jun came to us through architecture and now leads colocated work for entertainment and enterprise alike. Kevin came through theater and improvisation and runs experience direction. Marshall is the engineer who packages features into devices that claim not to support them yet. Dante bridges 2D and 3D and makes the whole thing look like art instead of a tech demo. Put an architect and a theater director on the same problem and they'll find an answer neither discipline would've reached alone — because a sightline is a sightline whether you're designing a lobby or blocking a scene.",
      },
      {
        type: 'quote',
        text: 'Agile Lens works like engineers but think like storytellers. They pursue excellence in the details which is what you need for a turnkey luxury experience.',
        cite: 'Amanda Watson — Inventor of Air Link, CTO of REK',
      },
      { type: 'h2', text: 'The mono-discipline trap' },
      {
        type: 'p',
        text: "A studio that's all engineers builds things that run beautifully and move nobody. A studio that's all artists builds things that move people and crash on the third headset. The interesting, durable work lives in the overlap, and the overlap only happens if the disciplines are actually in the room together, arguing, borrowing, and occasionally rolling their eyes at each other. We've leaned into that since 2014 and I'd make the same bet again tomorrow.",
      },
      {
        type: 'p',
        text: "If you're building an immersive team, resist the urge to hire only the people who look like the obvious fit. Hire the theater person. Hire the architect. Then put them next to each other and get out of the way.",
      },
    ],
  },
  {
    slug: 'protect-your-ip-from-day-one',
    title: 'Protect your IP from day one. Every contract. Every time.',
    excerpt:
      "This is the least glamorous advice I give, and the one I'd most want my younger self to hear. A lesson I paid tuition for more than once.",
    date: '2026-01-20',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Business',
    image: '/portfolio/onboard.jpg',
    body: [
      {
        type: 'p',
        text: "Every time I give a talk about building a creative technology company, I end up on the same soapbox, and people's eyes glaze over until the part where I admit how much it cost me to learn. So here's the soapbox, up front: protect your intellectual property from day one. Every contract. Every time. No exceptions for the exciting projects, and especially not for the free ones.",
      },
      { type: 'h2', text: 'Scope creep is an IP problem in a trench coat' },
      {
        type: 'p',
        text: "We once took on a grant-funded project — good partner, real money, exciting brief — and let the scope quietly balloon because we were having fun and wanted to impress. Nobody was acting in bad faith. But \"can you also just add…\" happened enough times that the thing we'd built was worth far more than what we'd agreed to, and the paperwork hadn't kept up. The lesson wasn't \"trust people less.\" It was that vague contracts turn good relationships into awkward ones, and clear contracts let you stay generous safely.",
      },
      { type: 'h2', text: 'The free project is the most dangerous one' },
      {
        type: 'p',
        text: "Pro bono and R&D work is where studios bleed IP, because nobody thinks to paper it. But the prototype you build for free is often the most valuable thing you make all year — it's where the genuinely new ideas live. If you don't own what you invent on the weird little passion project, you've handed away your best asset for the warm feeling of being helpful. Write down who owns what before you start. It is not unfriendly. It is the thing that lets you keep being friendly.",
      },
      {
        type: 'p',
        text: "I know this is the boring chapter. But twelve years in, the single piece of advice I'd hand my younger self isn't about a tool or a technique. It's: read the IP clause, every time, before you fall in love with the project.",
      },
    ],
  },
  {
    slug: 'from-pixel-to-voxel',
    title: 'From pixel to voxel: how I actually got here',
    excerpt:
      "Architecture, then theater, then XR. It looks like a wandering path. It was really one idea — spatial thinking — finding better and better tools.",
    date: '2025-12-10',
    author: 'Alex Coulombe',
    readMinutes: 6,
    tag: 'Origin',
    image: '/portfolio/statue-of-liberty.jpg',
    body: [
      {
        type: 'p',
        text: "People sometimes ask how an architecture kid ended up running an XR studio that does live theater, and the honest answer is that it never felt like a career change. It felt like the same obsession — how people experience space — picking up better tools as it went. Pixel to voxel, you could say.",
      },
      { type: 'h2', text: 'Eighty firms and a lot of nerve' },
      {
        type: 'p',
        text: "In the early days I cold-visited something like 80 architecture firms, lugging headsets around New York, trying to convince people that you could understand a building by standing inside it before it was built. Most of those meetings went nowhere. A few didn't. That's the math of starting something: you visit eighty doors so the three that open can change your life. I wasn't a natural salesperson — I was an architecture nerd who couldn't shut up about presence — and it turned out the not-shutting-up was the pitch.",
      },
      { type: 'h2', text: 'The theater connection was always there' },
      {
        type: 'p',
        text: "Agile Lens grew up alongside Fisher Dachs Associates and Fisher Marantz Stone — theater planning and architectural lighting, run by people who've shaped how thousands of audiences experience a room. Josh, who's one of the most respected theater consultants in the world, saw in XR a new medium for the exact spatial questions he'd spent a career on. That's not a coincidence I stumbled into. It's the whole thesis: a stage, a lobby, and a VR scene are all the same problem — getting a human to feel something true about a space — wearing different clothes.",
      },
      {
        type: 'p',
        text: "We founded Agile Lens in 2014 to chase that thesis with whatever tools the moment offered, and the tools have gotten gloriously better. But the through-line hasn't moved an inch. Architecture taught me space. Theater taught me time and attention. XR just lets me work in both at once. If your path looks like a scribble, look again — there's probably one stubborn idea underneath it, still pulling you forward.",
      },
    ],
  },
  {
    slug: 'every-weird-project-pays-off',
    title: 'Every weird project pays off eventually',
    excerpt:
      "The festival piece that makes no money, the experiment nobody asked for — that's not a distraction from the business. Over twelve years, it is the business.",
    date: '2025-11-14',
    author: 'Alex Coulombe',
    readMinutes: 4,
    tag: 'Craft',
    image: '/portfolio/body-of-mine.jpg',
    body: [
      {
        type: 'p',
        text: "There's a version of running a studio where you only take the safe, well-paid, clearly-scoped work, and I understand the appeal — I've had months where I wished I were that disciplined. But every time I look back at what actually moved Agile Lens forward, an embarrassing amount of it traces to some weird little project that made no financial sense at the time.",
      },
      { type: 'h2', text: 'R&D is an investment, not a cost' },
      {
        type: 'p',
        text: "The festival experiments, the award-chasing art pieces, the pro bono favor for a friend — those are where we figured out the techniques we'd later sell. Ghosted picked up a pile of festival recognition and taught us things we used on paid work for years. In the Current of Being won a SXSW VR award, and the pipeline behind it didn't stay in the gallery. Even the projects that lost money fed the pile. I've come to think of R&D not as a cost the real work subsidizes, but as the actual engine, with the paid work as the thing that keeps the lights on while the engine runs.",
      },
      {
        type: 'p',
        text: "So when someone on my team wants to chase a strange idea with no obvious client, my instinct now is yes, as long as we're honest that it's R&D and we protect what we invent. The weird project rarely pays off on the timeline you'd like. But twelve years in, I can't find many that didn't pay off eventually. The pile remembers.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
