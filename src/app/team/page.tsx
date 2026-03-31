import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | Agile Lens',
  description: 'Meet the team behind Agile Lens — architects, technologists, performers, and storytellers building the future of immersive experiences.',
};

const founders = [
  {
    name: 'Alex Coulombe',
    role: 'Co-Founder / CEO',
    photo: '/team/alex.png',
    bio: "After graduating from Syracuse University with a B. Arch and minor in Theatre, Alex worked in a wide range of architecture practices, including under Rafael Vi\u00f1oly. A rising thought leader in emerging tech, since 2014 he has spoken at hundreds of XR, Architecture, and Theatre events worldwide. Alex champions VR and AR as accessible workplace tools and emerging storytelling mediums.",
  },
  {
    name: 'Joshua Dachs',
    role: 'Co-Founder / President',
    photo: '/team/josh.png',
    bio: "Joshua holds a B. Arch from Cornell University and is recognized as one of the world's leading theatre consultants. As president of Fisher Dachs Associates, he focuses on helping clients conceptualize and plan their projects. The founding of Agile Lens provided him a new medium to explore spatial organization and the details of design.",
  },
];

const creativeTeam = [
  { name: 'Yu-Jun Yeh (Jun)', role: 'Sr. XR Creative Technologist', photo: '/team/jun.png', bio: 'Unreal Engine generalist specializing in XR experiences. Has participated in dozens of UE projects including "A Christmas Carol VR" and "Four Seasons Lake Austin VR".' },
  { name: 'Dante Cameron', role: 'XR Technical Artist', photo: '/team/dante.png', bio: 'Uses his background in immersive design to integrate clients with emergent tech. Develops VR interactivity including interfaces for live performers and developer tools.' },
  { name: 'Marshall Nowak', role: 'XR Artist', photo: '/team/marshall.png', bio: 'A jack of all trades tackling Blueprint and C++ coding, experience design, prototyping, IT/Networking, 3D modeling, and on-site operations support.' },
  { name: 'Kevin Laibson', role: 'Sr. Experience Director', photo: '/team/kevin.png', bio: 'Director of performance and interactive art. Co-founded Magic Futurebox. Faculty at NYU Tisch and Atlantic Acting School.' },
  { name: 'Whitt Sellers', role: 'XR Creative Technologist', photo: '/team/whitt.png', bio: 'Technologist and visual artist exploring novel forms of creative expression at the intersection of immersive technology and live performance. MFA from Parsons.' },
  { name: 'Ari Tarr', role: 'Performance Consultant', photo: '/team/ari.png', bio: 'Award-winning performer and experience designer for Disney, Google, and Facebook. Professor of Media Arts at UMT. Plays Scrooge in A Christmas Carol VR.' },
];

const operations = [
  { name: 'Elizabeth Coulombe', role: 'Program and Operations Strategist', photo: '/team/elizabeth.png', bio: 'Over a decade of experience in operational leadership and project management.' },
  { name: 'Stef Buckner', role: 'Production Manager', photo: '/team/stef.png', bio: "Background in Theatre, Live Events, TV/Film. Excited to find new ways to do things that haven't been done before." },
  { name: 'Alexa Antopol', role: 'Marketing Director', photo: null, bio: "Member of NYC Chapter of SMPS. NY Real Estate Journal's 2018 Women in Real Estate and Construction Services." },
  { name: 'Richard Hackman', role: 'Marketing Associate', photo: null, bio: 'Over 10 years of experience in consulting and as a creative service entrepreneur.' },
  { name: 'Bridget Jones', role: 'Administration / HR', photo: null, bio: 'AB Broadcast Communications from the University of the Philippines. Experience across advertising to AEC.' },
  { name: 'Fay Chang', role: 'Accounting Coordinator', photo: null, bio: '' },
  { name: 'Arnold Ragins', role: 'Billing Coordinator', photo: null, bio: '' },
  { name: 'Henry Keyser', role: 'Director of Operations', photo: '/team/henry.png', bio: 'Background in journalism (MSJ, Northwestern). XR/VR solutions, DevOps, and game development.' },
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

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Our Team</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Architects, technologists, performers, and storytellers — building the future of immersive experiences.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-8 gradient-text">Founders</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {founders.map(p => <PersonCard key={p.name} {...p} />)}
      </div>

      <h2 className="text-2xl font-bold mb-8 gradient-text">Creative Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {creativeTeam.map(p => <PersonCard key={p.name} {...p} />)}
      </div>

      <h2 className="text-2xl font-bold mb-8 gradient-text">Operations & Admin</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {operations.map(p => <PersonCard key={p.name} {...p} />)}
      </div>
    </div>
  );
}
