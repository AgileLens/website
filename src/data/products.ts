export interface Product {
  slug: string;
  name: string;
  group: 'Pre-construction' | 'Entertainment';
  tag: 'green' | 'pink';
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  deckUrl?: string;
}

export const products: Product[] = [
  {
    slug: 'hyperreal-estate',
    name: 'Hyperreal Estate',
    group: 'Pre-construction',
    tag: 'green',
    description:
      'Photoreal 3D architectural and design visualization. Raytraced with UE and optimized for high-end VR.',
    longDescription:
      'Hyperreal Estate delivers raytraced, photorealistic architectural visualization built on Unreal Engine and optimized for high-end VR headsets. Give clients and stakeholders the most visceral possible experience of a space before a single nail is driven.',
    features: [
      'Raytraced rendering via Unreal Engine',
      'Optimized for high-end VR headsets',
      'Photorealistic material and lighting fidelity',
      'Pre-construction design review and approval',
      'Drives pre-sales by letting buyers walk the space',
    ],
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7ab0c726658f5fdb8f437_FSLA-Boathouse.png',
  },
  {
    slug: 'blueprint-immersive',
    name: 'Blueprint Immersive',
    group: 'Pre-construction',
    tag: 'green',
    description:
      'High-fidelity event venue configuration and previs software. Used by top architects and design professionals to optimize construction planning.',
    longDescription:
      'Blueprint Immersive is previs software purpose-built for event venue configuration. Architects and design professionals use it to walk through, reconfigure, and validate spatial decisions at full scale before construction begins — reducing costly change requests downstream.',
    features: [
      'Full-scale venue configuration and layout testing',
      'Previs for event flow, sightlines, and capacity',
      'Used by leading architects and design firms',
      'Reduces construction change request costs',
      'Real-time spatial feedback during design review',
    ],
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68ef32e1a167946204a6770e_blueprint3.avif',
  },
  {
    slug: 'floor-tour',
    name: 'Floor Tour',
    group: 'Pre-construction',
    tag: 'green',
    description:
      'Self-service, real-world scale floor plan visualization software. Walk your portfolio of designs and renders in VR with just a few clicks.',
    longDescription:
      'Floor Tour is a self-service platform that transforms floor plans and renders into walkable VR environments at real-world scale. Architects, developers, and sales teams can deploy and walk entire design portfolios in VR with minimal setup time.',
    features: [
      'Self-service deployment from floor plan files',
      'Real-world scale spatial accuracy',
      'Walk entire portfolio of designs in VR',
      'Minimal configuration, fast turnaround',
      'Shareable experiences for client presentations',
    ],
    image: '/products/floor-tour.png',
  },
  {
    slug: 'holodeck-anywhere',
    name: 'Holodeck Anywhere',
    group: 'Entertainment',
    tag: 'pink',
    description:
      'Multiuser colocated VR. Solutions are available for both ultra-high fidelity and standalone flexibility.',
    longDescription:
      "Holodeck Anywhere is Agile Lens's flagship multiuser colocated VR platform. Groups experience the same virtual environment simultaneously in physical space — available in ultra-high fidelity PCVR configurations and standalone options for flexible deployment.",
    features: [
      'Simultaneous multiuser colocated experience',
      'Ultra-high fidelity tethered configuration',
      'Standalone/portable option for flexible venues',
      'Large group capacity',
      'Battle-tested at luxury activations and public events',
    ],
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a77310538a13ec8f9d28_NYC-Holodeck_Cropped.png',
    deckUrl: '/decks/holodeck-anywhere/',
  },
  {
    slug: 'stage-presence',
    name: 'Stage Presence',
    group: 'Entertainment',
    tag: 'pink',
    description:
      'Rehearsal tool and performance platform. Designed and streamlined to integrate with existing media and live event industry practices.',
    longDescription:
      'Stage Presence is a rehearsal and live performance platform built around the realities of the media and live event industry. It integrates with existing workflows, operator tooling, and technical infrastructure — so production teams can adopt it without rebuilding their pipeline.',
    features: [
      'Virtual rehearsal environment for performers and crews',
      'Live performance platform for events',
      'Integrates with existing media production workflows',
      'Designed for live event operators and technicians',
      'Streamlines complex multi-actor coordination',
    ],
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7d774d50595d5e99566ba_rsc-cropped.png',
  },
  {
    slug: 'performr',
    name: 'PerforMR',
    group: 'Entertainment',
    tag: 'pink',
    description:
      'Live-actor animation pipeline. A multi-source mocap tool for performers to animate one or many MetaHumans, real-time or saved for playback, in Virtual Reality or Mixed Reality.',
    longDescription:
      'PerforMR is a live-actor animation pipeline that lets performers drive MetaHuman characters in real time using multi-source motion capture. Outputs stream live into VR or MR environments, or are saved for playback — giving performers and directors maximum creative control.',
    features: [
      'Multi-source motion capture input',
      'Real-time MetaHuman animation',
      'Live VR and Mixed Reality output',
      'Saved playback for post-production use',
      'Designed for performers, not just engineers',
    ],
    image:
      'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7a2f04c60eb921038d52d_XmasCarol_Scrooge-Future.jpg',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAdjacentProducts(slug: string): { prev: Product | null; next: Product | null } {
  const idx = products.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? products[idx - 1] : null,
    next: idx < products.length - 1 ? products[idx + 1] : null,
  };
}
