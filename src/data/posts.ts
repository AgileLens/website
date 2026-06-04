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
  {
    slug: 'designing-for-the-gasp',
    title: 'Designing for the gasp',
    excerpt:
      "Presence doesn't live in your render quality. It lives in the tiny moments where the virtual and the physical agree, and when they do, people gasp.",
    date: '2025-10-20',
    author: 'Alex Coulombe',
    readMinutes: 4,
    tag: 'Craft',
    image: '/portfolio/the-shed.jpg',
    body: [
      {
        type: 'p',
        text: "There's a sound I chase on every project, and it isn't applause. It's the gasp — that involuntary little intake of breath when someone's brain briefly forgets it's in a simulation. After years of this, I'm convinced you can't buy the gasp with graphics. You earn it in the details almost nobody thinks to design.",
      },
      { type: 'h2', text: 'The seat that’s actually there' },
      {
        type: 'p',
        text: "On the Four Seasons Holodeck, the experience ends with guests walking into a virtual 96-seat theater and sitting down in four real chairs we'd placed in the physical room. Virtual theater, real seat, lined up to the inch. The visuals matter, but the gasp comes from the instant your body expects a chair and the chair is there. That handshake between the virtual and the physical is where presence actually lives.",
      },
      { type: 'h2', text: 'Fidelity is table stakes; agreement is the craft' },
      {
        type: 'p',
        text: "A gorgeous render that floats a beat off from where your hand expects it breaks the spell faster than a humble one that lands exactly right. So we obsess over the stuff that never photographs well: latency, scale, the weight of a footstep, whether the wireless freedom holds when someone spins around fast. None of it shows up in a screenshot. All of it is the difference between \"nice demo\" and a gasp.",
      },
      {
        type: 'p',
        text: "If you're designing immersive work, stop polishing the thing people will screenshot and start polishing the thing they'll feel. The screenshot gets you the meeting. The gasp gets you the next project.",
      },
    ],
  },
  {
    slug: 'when-the-actor-drives-the-avatar',
    title: 'When the actor drives the avatar',
    excerpt:
      "Most digital characters are animated in advance by an artist. Ours are animated live, by a performer, in the moment — and that changes what's possible on a stage.",
    date: '2025-09-15',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Live Performance',
    image: '/portfolio/song-of-ambassadors.jpg',
    body: [
      {
        type: 'p',
        text: "There's a quiet assumption baked into most of computer graphics: that a character is something you animate ahead of time. An artist keyframes it, a render farm chews on it, and what the audience sees is a recording. A lot of our work starts by throwing that assumption out. What if the digital character is driven live, by a human performer, in the same instant the audience is watching?",
      },
      { type: 'h2', text: 'A MetaHuman with a pulse' },
      {
        type: 'p',
        text: "That's the whole idea behind our live-actor animation pipeline. A performer steps into multi-source motion capture and drives a MetaHuman in real time — one actor playing one character, or one actor playing many. We built it so a performer could play Scrooge being dragged into a terrifying future and have that fear land live, in the room, instead of being baked in last Tuesday by an animator who's since gone home.",
      },
      { type: 'h2', text: 'Why live is so much harder, and worth it' },
      {
        type: 'p',
        text: "Pre-rendered is safe. Live is terrifying, and I mean that as the highest compliment. When the avatar is driven by a person in the moment, the performance can breathe — it answers the room, the other actors, the particular energy of that night. It also means there's no undo. We've poured enormous engineering into making that reliable, because the payoff is a presence you simply can't fake with a recording: somehow, the audience always knows there's a person in there.",
      },
      {
        type: 'p',
        text: "Theater has always traded on the fact that anything can happen because it's happening right now, in front of you. Handing performers live control of digital characters is just us dragging that ancient, beautiful risk into a new medium. I wouldn't want it any safer.",
      },
    ],
  },
  {
    slug: 'what-architects-know-about-vr',
    title: "What architects understand about VR that gamers don't",
    excerpt:
      'Game engines made all of this possible. But the instinct that makes an immersive space feel real comes from a different discipline entirely.',
    date: '2025-08-12',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Enterprise XR',
    image: '/portfolio/rice-opera.jpg',
    body: [
      {
        type: 'p',
        text: "We build almost everything in Unreal Engine, so people assume our DNA is games. And we genuinely love games. But the instinct that makes a virtual space feel like an actual place, I learned somewhere else: architecture. There are things architects know in their bones that never make it into a game design doc.",
      },
      { type: 'h2', text: 'Scale is sacred' },
      {
        type: 'p',
        text: "A game will happily give you a doorway that's eight feet wide because it plays well. An architect physically cannot do that. When you've spent years thinking about how a body moves through a corridor, how a ceiling height changes your mood, how a sightline pulls you across a lobby, you carry a ruthless respect for real-world scale into VR. That respect is exactly what separates a space that feels right from one that feels like a level.",
      },
      { type: 'h2', text: 'Restraint, and the buildable' },
      {
        type: 'p',
        text: "Architecture is the discipline of what can actually be built, and that constraint is a gift. When a developer walks our previs of a $300 million property, every dimension has to be true, because a contractor is going to pour concrete based on decisions made in that headset. You can't fudge it for vibes. Every measurement honest, every detail accountable — that's the difference between a pretty visualization and a tool someone bets millions on.",
      },
      {
        type: 'p',
        text: "I'm not knocking the games world; it gave us the engine and half our techniques. But if you want immersive work that holds up under a designer's eye, hire someone who's argued about a stair railing. They'll feel the half-inch you got wrong before they can tell you why.",
      },
    ],
  },
  {
    slug: 'colocated-vr-is-the-hardest-thing-we-do',
    title: 'Colocated VR is the hardest thing we do, and the best',
    excerpt:
      "Putting one person in VR is easy now. Putting a group in the same virtual space, in the same physical room, walking around freely? That's where it gets gloriously hard.",
    date: '2025-07-08',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Behind the Scenes',
    image: '/portfolio/intel-project-arena.jpg',
    body: [
      {
        type: 'p',
        text: "Single-user VR is basically a solved problem. You put on a headset, you're somewhere else, it's wonderful. The thing that still keeps me up at night — in the good way — is colocated VR: a whole group sharing one virtual space while they share one physical room, walking around freely, seeing each other in the right place at the right time.",
      },
      { type: 'h2', text: 'Everything has to agree' },
      {
        type: 'p',
        text: "The reason it's so hard is that every headset in the room has to agree, to the centimeter, about where everyone and everything is. We lean on tracking systems like OptiTrack and Antilatency, real-time networking, and a lot of hard-won optimization to keep a dozen people's realities locked together. When it drifts even slightly, someone reaches for a virtual object and misses, and the whole illusion wobbles. When it holds, it's a kind of magic no single-user experience can touch.",
      },
      { type: 'h2', text: 'Why we keep choosing the hard version' },
      {
        type: 'p',
        text: "We could make our lives so much easier by seating everyone in separate pods. We don't, because the moment that makes colocated worth all the pain is watching two people in headsets turn to each other and react to the same thing at the same time. That shared \"did you see that?!\" is the oldest pleasure there is — it's why we still go to theaters and stadiums instead of staying home. Colocated VR is just us refusing to give that up.",
      },
      {
        type: 'p',
        text: "Yes, it's the hardest thing we build. It's also the thing that reliably makes a room full of skeptics take the headset off grinning. I'll take that trade every time.",
      },
    ],
  },
  {
    slug: 'where-ai-earns-its-place',
    title: 'Where AI actually earns its place in our work',
    excerpt:
      "Everyone wants to put AI in everything right now. We've shipped it in real projects, and the honest lesson is that it only works where it's doing a job a human couldn't, or shouldn't.",
    date: '2026-03-28',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'AI',
    image: '/portfolio/dell-cybersecurity.jpg',
    body: [
      {
        type: 'p',
        text: "I run an immersive studio in 2026, so you can imagine how many conversations start with someone wanting to \"add AI\" to a project. I'm genuinely excited about this stuff — we've shipped it in real work — but I've learned to ask the same annoying question I ask about VR: what's the job? AI earns its place when it does something a human couldn't, or shouldn't have to. Everywhere else it's a party trick that ages badly.",
      },
      { type: 'h2', text: 'When it actually worked' },
      {
        type: 'p',
        text: "For Vodafone at London Tech Week, we built a virtual car showroom with an AI salesman (powered by inworld.ai) that could actually hold a conversation about the vehicle you were standing next to. That's a real job: a knowledgeable guide, available to every visitor at once, never tired at hour six of a trade show. And for Song of the Ambassadors at Lincoln Center, AI was woven into an experimental opera alongside human artists — not replacing them, but as another instrument in the room. In both cases the AI scaled human attention instead of faking it.",
      },
      { type: 'h2', text: 'Where we keep it on a short leash' },
      {
        type: 'p',
        text: "Internally, AI has quietly become part of how we work: assisting with UI code, smoothing asset pipelines, drafting the boring stuff. (Half my team has \"AI\" somewhere in their unofficial job description now.) But I'm careful about the line. The moment AI starts generating the thing the audience is supposed to feel — the performance, the presence, the gasp — I get nervous, because audiences can smell hollow. Our north star is still a human in the loop where it counts.",
      },
      {
        type: 'p',
        text: "I've also been burned by a slick AI demo that fell apart the second a real person asked it something off-script. So my rule now is simple: prototype the AI feature against a hostile user before you ever promise it to a client. If it only works when you ask it nicely, it doesn't work. Point it at a real job, test it against real people, and keep a human's hand on the part that has to move someone. AI is the best new instrument we've been handed in years, but it's an instrument, not the band.",
      },
    ],
  },
  {
    slug: 'what-theater-taught-me-about-shipping',
    title: 'What live theater taught me about shipping software',
    excerpt:
      "In theater, the show opens whether you're ready or not. That single brutal fact made me better at shipping than any engineering blog ever did.",
    date: '2026-02-04',
    author: 'Alex Coulombe',
    readMinutes: 4,
    tag: 'Craft',
    image: '/portfolio/la-pasion-xr.jpg',
    body: [
      {
        type: 'p',
        text: "Before I wrote software for a living, I worked in theater, and theater has a feature the software world mostly lacks: an immovable opening night. The curtain goes up at 8pm on the date printed on the ticket. Nobody cares that your lighting cue isn't perfect or that the set piece is held together with gaff tape. The audience is in their seats. You go.",
      },
      { type: 'h2', text: 'The deadline is the design constraint' },
      {
        type: 'p',
        text: "That fact rewires how you work. In theater you spend the final week in tech rehearsals — running the whole thing, finding what breaks, fixing it, running it again — because you know there's no slipping the date. I've watched software teams (mine included) treat deadlines as suggestions and then act surprised when \"we'll polish it later\" quietly becomes \"we never shipped it.\" Theater taught me that a real deadline isn't a threat to quality. It's the thing that forces you to decide what quality actually means by Friday.",
      },
      { type: 'h2', text: 'Tech rehearsal is just QA with stakes' },
      {
        type: 'p',
        text: "When we run live XR shows now, we tech them like theater: full runs, in the real space, on the real hardware, with the actual humans, hunting for the thing that will embarrass us in front of an audience. It's the same instinct as a good QA pass, but with a 200-person crowd as the bug report. I've shipped things that worked flawlessly on my machine and fell over the instant a real audience touched them. The fix was never more code. It was more dress rehearsal.",
      },
      {
        type: 'p',
        text: "If your project has no opening night, invent one. Put a real date in front of real people on the calendar and let it do to your team what it does to a theater company: turn endless polishing into actual shipping.",
      },
    ],
  },
  {
    slug: 'our-best-sales-tool-is-a-headset',
    title: 'Our best sales tool is twenty minutes and a headset',
    excerpt:
      "I've stopped trying to sell presence with a slide deck. You can't describe what it feels like to stand inside a space that doesn't exist, so I just hand people a headset.",
    date: '2025-12-18',
    author: 'Alex Coulombe',
    readMinutes: 4,
    tag: 'Business',
    image: '/portfolio/ghosted.jpg',
    body: [
      {
        type: 'p',
        text: "I give a lot of demos. An absurd number of demos — if you've ever emailed me about working together, there's a good chance my reply included some version of \"are you ever in NYC? come by and I'll put a headset on you.\" It took me years to realize this isn't me being generous with my time. It's the most effective sales tool we have, by a mile.",
      },
      { type: 'h2', text: 'You cannot deck your way to presence' },
      {
        type: 'p',
        text: "The whole value of what we make is a feeling: that involuntary moment where your body believes it's somewhere it isn't. There's no slide, no render, no sizzle reel that delivers that. I've tried. You can show a gorgeous video of someone in our holodeck and the reaction is \"neat.\" Put that same person in the holodeck for ten minutes and the reaction is them pulling the headset off and immediately asking how soon they can do this for their own project. The gap between those two reactions is our entire business.",
      },
      { type: 'h2', text: 'The demo qualifies the room, too' },
      {
        type: 'p',
        text: "There's a second thing a demo does: it tells me fast who actually gets it. The people who matter — the ones who'll be great partners — light up and start riffing on what else is possible before they've even handed the headset back. Some of our best projects started with someone making a beeline across a room after a demo, already three ideas deep. You don't get that from a follow-up email.",
      },
      {
        type: 'p',
        text: "If what you sell is a feeling, stop describing it. Let people feel it. The deck can come afterward, as a souvenir.",
      },
    ],
  },
  {
    slug: 'why-i-still-teach-unreal',
    title: 'Why I still teach Unreal Engine',
    excerpt:
      "Running the only authorized Unreal training center in Manhattan eats hours I could bill elsewhere. I keep doing it because teaching is the fastest way I know to stay sharp.",
    date: '2025-11-02',
    author: 'Alex Coulombe',
    readMinutes: 4,
    tag: 'Craft',
    image: '/unrealnyc/04.jpg',
    body: [
      {
        type: 'p',
        text: "Between Agile Lens, organizing Unreal NYC, and everything else, the math on teaching Unreal Engine classes does not obviously add up. It's hours I could bill on client work. And yet through Alex Coulombe Presents we run what is, as far as I know, the only authorized Unreal Engine training center in Manhattan, with members of my own team teaching as gold authorized instructors. I keep doing it on purpose, and here's the honest reason.",
      },
      { type: 'h2', text: 'Teaching exposes what you only think you know' },
      {
        type: 'p',
        text: "Nothing reveals the holes in your own understanding like a room of smart people asking \"but why?\" You can get away with a fuzzy mental model for years in production — it works, ship it, move on. Stand in front of a class and try to explain that same thing, and the fuzziness has nowhere to hide. Teaching Unreal has sharpened my own craft more reliably than any single project, because students ask the questions I'd quietly learned to stop asking myself.",
      },
      { type: 'h2', text: 'The long game of community' },
      {
        type: 'p',
        text: "There's also a slower payoff I've come to trust. The people we teach, the meetups we run, the questions we answer — that's not charity, and it's not marketing exactly. It's the soil. Some of those students become collaborators, some become clients, some just become people who send the right opportunity our way years later. Community is a moat you build one genuinely helpful interaction at a time, and teaching is the most concentrated form of it I've found.",
      },
      {
        type: 'p',
        text: "If you're deep enough in a craft to be useful, teach some of it. You'll tell yourself it's generous. Mostly it's selfish in the best way: it keeps you honest, and it builds the kind of room you'll want to be standing in ten years from now.",
      },
    ],
  },
  {
    slug: 'putting-a-real-person-inside-vr',
    title: 'Putting a real person inside VR',
    excerpt:
      'A render of a human is uncanny. A captured human is something else. Getting a real person, their body and their presence, into a headset is harder and stranger than it sounds.',
    date: '2026-01-08',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Behind the Scenes',
    image: '/portfolio/body-of-mine/01.jpg',
    body: [
      {
        type: 'p',
        text: `There's a particular kind of magic, and a particular kind of difficulty, in putting an actual person inside VR. Not a character a modeler built, not a stylized avatar, but a real human being, captured, that someone else can stand in front of and believe. We've chased this across projects, and it never stops being both wonderful and weirdly hard.`,
      },
      { type: 'h2', text: 'Capture is where the uncanny lives or dies' },
      {
        type: 'p',
        text: `There's a cliff in human representation: get it 80% right and it's charming, 95% right and it's deeply unsettling, 99% and it's moving again. Crossing that valley is mostly a capture problem, the unglamorous craft of volumetric video, photogrammetry, and motion capture, of recording a real body faithfully enough that your brain stops filing it under "wrong." People on our team have spent years standing up exactly those pipelines for recording and playing back captured humans in real time.`,
      },
      { type: 'h2', text: 'The strangeness of wearing another body' },
      {
        type: 'p',
        text: `Some of our most affecting work has been about literally giving someone a different body in VR, letting a person look down and see, and move, a body that isn't theirs. When the capture and tracking are good enough, something profound happens: people don't just see the other body, they briefly feel it as their own. That isn't a graphics achievement. It's an empathy machine, and it only works because the capture underneath respects how a real human actually moves.`,
      },
      {
        type: 'p',
        text: `Every time we've cut a corner on capture to save time, the audience felt it before they could name it: a stiffness, a deadness around the eyes, a motion that's a hair off. So we stopped cutting those corners. Getting a real person into a headset is some of the hardest work we do, and some of the only work I've seen reduce a room to silence. Worth every painstaking frame.`,
      },
    ],
  },
  {
    slug: 'why-i-say-yes-to-every-conference',
    title: 'Why I say yes to almost every conference',
    excerpt:
      "Conferences are exhausting, expensive, and rarely close a deal on the spot. I keep going to all of them anyway, because the real return shows up six months later.",
    date: '2025-10-06',
    author: 'Alex Coulombe',
    readMinutes: 4,
    tag: 'Business',
    image: '/unrealnyc/07.jpg',
    body: [
      {
        type: 'p',
        text: `If you follow what I'm up to, it can look like I'm perpetually at some conference: FMX in Stuttgart, SXSW, HarvardXR, an Unreal Fest, a Tech Week reception. People ask if it's worth it, usually with a slightly skeptical face, because conferences are expensive and exhausting and almost never close a deal in the room. My honest answer is yes, and the reason has almost nothing to do with the talks.`,
      },
      { type: 'h2', text: 'The serendipity is the product' },
      {
        type: 'p',
        text: `The value of showing up is the conversation you couldn't have planned. Someone makes a beeline for me after a talk because one specific slide hit a problem they've been stuck on. A hallway chat becomes a project a season later. I've lost count of the collaborations that trace back to "we met at that thing." You cannot schedule serendipity, but you can absolutely increase your surface area for it, and showing up in person is how you do that.`,
      },
      { type: 'h2', text: 'Give the talk, then stay for the happy hour' },
      {
        type: 'p',
        text: `I give a lot of talks, and I've stopped treating the talk as the deliverable. The talk is the cost of admission to the part that matters: the dinner after, the demo I give someone at the bar, the introduction a friend makes because they saw me present and remembered what we do. The people in this industry are genuinely my favorite part of it, and you can't build that over email.`,
      },
      {
        type: 'p',
        text: `If you're weighing whether a conference is "worth it" by deals closed that week, you're measuring the wrong thing. Measure it in relationships started, and check back in six months. The pile compounds.`,
      },
    ],
  },
  {
    slug: 'xr-that-talks-to-the-lighting-board',
    title: 'Building XR that talks to the lighting board',
    excerpt:
      'The fastest way to get an XR tool rejected by a live-events crew is to make them abandon the gear they already trust. So we build the opposite.',
    date: '2025-09-02',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Live Performance',
    image: '/portfolio/stage-presence/01.jpg',
    body: [
      {
        type: 'p',
        text: `Here's a quick way to get a beautiful piece of XR technology thrown out of a live production: ask the crew to abandon the lighting console, the timecode, and the operator workflows they've trusted for decades, and learn your new thing instead, the week of the show. It won't matter how good your software is. The answer will be no, and they'll be right.`,
      },
      { type: 'h2', text: 'Meet the room where it is' },
      {
        type: 'p',
        text: `Live events run on a deep stack of legacy technology and hard-won operator habits, and that stack works. So the principle we hold for tools like Stage Presence is almost humble: integrate, don't replace. Talk to the gear that's already there. Fit the way operators already think. The goal is for a lighting designer or stage manager to adopt what we built without feeling like they've thrown out their toolkit, because the moment they feel that, you've lost them.`,
      },
      { type: 'h2', text: 'It helps to come from that world' },
      {
        type: 'p',
        text: `It's not an accident that this is in our DNA. Agile Lens grew up alongside Fisher Dachs Associates and Fisher Marantz Stone, theater planning and architectural lighting, so we've sat at enough tech tables to respect what the people running the room actually need. Early on we built things that were technically impressive and operationally useless, because we designed for the demo instead of the operator. The fix was spending more time in the back of the house, shutting up, and watching how a show really gets run.`,
      },
      {
        type: 'p',
        text: `If you want your immersive tool to survive contact with a real production, design it for the person at the console, not the person in the press release. Plug into what they trust. Earn the right to add something new by first not taking anything away.`,
      },
    ],
  },
  {
    slug: 'a-christmas-carol-in-vr-live',
    title: 'A Christmas Carol, in VR, performed live',
    excerpt:
      "Dickens, but you're inside it, and the ghosts are played by live actors driving their own avatars in real time. Here's what it took to pull that off in front of an audience.",
    date: '2025-06-12',
    author: 'Alex Coulombe',
    readMinutes: 5,
    tag: 'Behind the Scenes',
    image: '/portfolio/a-christmas-carol-vr/01.jpg',
    body: [
      {
        type: 'p',
        text: `Adapting A Christmas Carol into VR sounds like a content problem and is actually a nerve problem. The story is 180 years old and everyone knows it, which is freeing. The hard part was that we wanted it performed live: real actors driving their characters in real time, with the audience inside the scene rather than watching it. Recorded would have been safe. Live is the whole point.`,
      },
      { type: 'h2', text: 'Ghosts with a pulse' },
      {
        type: 'p',
        text: `We gave the performers live control of their avatars, so the Ghost of Christmas Future wasn't an animation playing back on a timer. It was an actor, in the moment, reading the room and dragging Scrooge (and the audience) toward that future. When you stand inside a scene and the figure in front of you is driven by a living performer who can react to you, it stops being a ride and becomes theater. That's a presence you can't pre-render.`,
      },
      { type: 'h2', text: 'The tightrope, every night' },
      {
        type: 'p',
        text: `"Live" means there's no undo, and we ran this for real audiences with all the beautiful risk that implies. Real headsets, real actors, real crowd, a hundred small things that could go sideways on any given night. Not every show was flawless, and the ones that landed weren't the nights nothing went wrong, they were the nights the performers and the tech held the spell together through whatever did. The work was recognized at Raindance Immersive, which meant a lot, but the real reward was watching a first-time VR user forget the headset entirely and just be in the story.`,
      },
      {
        type: 'p',
        text: `A Christmas Carol has been told a thousand ways for a reason. Telling it live, from the inside, reminded me why we keep dragging the oldest stories into the newest mediums: not for novelty, but because presence makes a familiar thing land like you're hearing it for the first time.`,
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
