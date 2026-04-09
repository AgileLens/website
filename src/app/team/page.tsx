import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | Agile Lens',
  description: 'Meet the team behind Agile Lens — architects, technologists, performers, and storytellers building the future of immersive experiences.',
};

const team = [
  // Row 0
  {
    name: 'Alex Coulombe',
    role: 'CEO',
    photo: '/team/alex.jpg',
    bio: 'Alex is a renown thought leader and technologist at the intersection of Unreal Engine and XR design. Since 2014, he has championed XR as a storytelling medium, led dozens of world-class executions of XR for architecture and performance, and developed a reputation for ROI-positive implementations of XR for enterprise.',
    row: 0,
  },
  {
    name: 'Joshua Dachs',
    role: 'President',
    photo: '/team/josh.jpg',
    bio: "Joshua is recognized as one of the world's leading theatre consultants. As president of Fisher Dachs Associates, he focuses on helping clients conceptualize and plan massive theatre design projects. The founding of Agile Lens provided him a new medium to explore spatial organization and the details of design.",
    row: 0,
  },
  // Row 1
  {
    name: 'Yu-Jun Yeh (Jun)',
    role: 'Sr. Creative Technologist',
    photo: '/team/jun.jpg',
    bio: 'Jun is a world-class VR technologist specializing in Unreal Engine and LBE. With a background in Architecture and cross-over experience in Unreal Course design, she is a foremost expert in developing colocated applications for entertainment and enterprise.',
    row: 1,
  },
  {
    name: 'Kevin Laibson',
    role: 'Sr. Experience Director',
    photo: '/team/kevin.jpg',
    bio: "Kevin is a veteran artist, producer and experience director of XR and experiential design. With a professional foundation in theater and improvisation, he leads experiential direction and audience-centered design for Agile's LBE, cultural and performance applications.",
    row: 1,
  },
  {
    name: 'Henry Keyser',
    role: 'Managing Director',
    photo: '/team/henry.jpg',
    bio: 'Henry is an decorated XR division leader. With backgrounds in Newsrooms, Game Dev, Photogrammetry, Product Management, Playwriting, and TV Producing, he has been managing technical, software and creative direction for more than 20 years and 500 productions and releases.',
    row: 1,
  },
  // Row 2
  {
    name: 'Dante Cameron',
    role: 'Technical Artist',
    photo: '/team/dante.jpg',
    bio: 'Dante is an astute immersive developer, animator and artist who is core to the Agile Lens team. Bridging 2D and 3D, he dramatically elevates Agile Lens visual edge with skills to create from scratch, customize from provided, and technically optimize all art assets in our stack.',
    row: 2,
  },
  {
    name: 'Marshall Nowak',
    role: 'R&D Creative Tech Consultant',
    photo: '/team/marshall.jpg',
    bio: 'Marshall is a wizarding engineer for cracking and packaging features into devices and frameworks that claim to not yet support his results. He initiates prototyping new Agile Lens features across every available XR device and leads our networking and optimization research.',
    row: 2,
  },
  {
    name: 'Ari Tarr',
    role: 'Performance and AI Consultant',
    photo: '/team/ari.jpg',
    bio: 'Ari is a performance and AI production expert and educator. Specializing in immersive experience design for real-time LBE, Ari has been core to Agile Lens as the lead QA tester for their live XR performance products and prototyper of various AI applications.',
    row: 2,
  },
  // Row 3
  {
    name: 'Zander Leff',
    role: 'Technical Artist',
    photo: '/team/zander.jpg',
    bio: "Zander is quick generalist focused on architecture and game dev. He has led Agile Lens' approach to ingesting CAD/Datasmith files from other softwares into Unreal Engine for upgrade into high-end photoreal VR architectural visualizations.",
    row: 3,
  },
  {
    name: 'Peter Zhang',
    role: 'Product Designer',
    photo: '/team/peter.jpg',
    bio: 'Peter is a sharp UX designer and AI-powered Unreal UI programmer. At Agile, he has redesigned and directly implemented, for both existing applications and refactor overhauls, the usability of our bespoke applications for enterprise onboarding and general adoption.',
    row: 3,
  },
  {
    name: 'Yidan Hu',
    role: 'Media and AI Consultant',
    photo: '/team/yidan.jpg',
    bio: 'Yidan is a keen media producer and content creative. She leads internal media production and social content at Agile Lens and supports research and development of AI tooling pipelines.',
    row: 3,
  },
  // Row 4
  {
    name: 'Saurabh Saxena',
    role: 'Engineering Consultant',
    photo: '/team/saurabh.jpg',
    bio: 'Saurabh is a seasoned software developer with deep expertise in Unreal Engine, XR, robotics and hardware-integrated systems. At Agile, he has taken point on software refactoring for enterprise applications transitioning from 1.x to 2.0, upgrading and prepare software for market release.',
    row: 4,
  },
  {
    name: 'Whitt Sellers',
    role: 'Creative Technologist',
    photo: '/team/whitt.jpg',
    bio: 'Whitt is an XR creative, visual artist, and educator specializing in volumetric and motion capture with deep passions developing for Unreal, Unity and TouchDesigner. He has led multiple volumetric and mocap productions and stood up the software pipelines for realtime playback and recording.',
    row: 4,
  },
  {
    name: 'Bridget Jones',
    role: 'Admin / HR',
    photo: '/team/bridget.jpg',
    bio: 'Bridget is a cornerstone of Agile Lens and all of the FDA/FMS sister companies. She coordinates payroll, benefits, international invoicing, and too many other functions to list.',
    row: 4,
  },
  // Row 5
  {
    name: 'Arnold Ragins',
    role: 'Billing Coordinator',
    photo: '/team/arnold.jpg',
    bio: 'Arnold is our upbeat collector of income. He is 50% of our financial department, and serves similar responsibilities for the FDA/FMS sister companies.',
    row: 5,
  },
  {
    name: 'Fay Chang',
    role: 'Accounting Coordinator',
    photo: '/team/fay.jpg',
    bio: 'Fay is our confident collector of expenses. She is 50% of our financial department, and serves similar responsibilities for the FDA/FMS sister companies.',
    row: 5,
  },
  {
    name: 'Elizabeth Coulombe',
    role: 'Operations Strategist',
    photo: '/team/elizabeth.jpg',
    bio: "Elizabeth is a sought-after supervisor, manager and clarion strategist who has been advising the company's initiatives since its earliest days. She provides both no nonsense advice along with supportive joy and resolve as needed.",
    row: 5,
  },
];

function PersonCard({ name, role, bio, photo }: { name: string; role: string; bio: string; photo: string | null }) {
  const words = name.split(' ').filter(n => !n.startsWith('('));
  const initials = words.length === 1 ? words[0].slice(0, 2).toUpperCase() : words.map(n => n[0]).join('');

  return (
    <div className="group p-6 rounded-xl border border-border bg-surface hover:border-pink/40 transition-all">
      {photo ? (
        <div className="w-20 h-20 rounded-full overflow-hidden border border-border mb-4">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink/20 to-purple/20 border border-border flex items-center justify-center text-xl font-bold text-pink mb-4">
          {initials}
        </div>
      )}
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="text-sm text-pink mb-3">{role}</div>
      {bio && <p className="text-sm text-muted leading-relaxed">{bio}</p>}
    </div>
  );
}

// Group team members by row
const rows = team.reduce((acc, person) => {
  if (!acc[person.row]) acc[person.row] = [];
  acc[person.row].push(person);
  return acc;
}, {} as Record<number, typeof team>);

const rowKeys = Object.keys(rows).map(Number).sort((a, b) => a - b);

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Our Team</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Architects, technologists, performers, and storytellers — building the future of immersive experiences.
        </p>
      </div>

      <div className="space-y-6">
        {rowKeys.map(rowKey => (
          <div key={rowKey} className="grid md:grid-cols-3 gap-6">
            {rows[rowKey].map(p => (
              <PersonCard key={p.name} name={p.name} role={p.role} bio={p.bio} photo={p.photo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
