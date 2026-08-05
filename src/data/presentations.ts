// Each entry is a self-contained static deck living at
// public/presentations/<slug>/index.html (not a Next.js route — see
// the CMET deck for the pattern, including the ASSET_BASE gotcha
// documented in intelligence/techniques/vercel-nested-static-page-trailing-slash.md
// in the KB). Add a new entry here whenever a new deck ships under
// public/presentations/<slug>/ and it'll show up on /presentations.
export type Presentation = {
  slug: string;
  title: string;
  event: string;
  date: string;
  speaker?: string;
  description: string;
};

export const presentations: Presentation[] = [
  {
    slug: 'cmet2026-1',
    title: 'When the Show Becomes Spatial',
    event: 'Chicago Tech Week — CMET Summit',
    date: 'July 2026',
    speaker: 'Henry Keyser',
    description:
      'Seven live events where XR turned the audience into a participant — from a mixed reality art installation to a hot-air balloon ride over a resort that doesn’t exist yet.',
  },
  {
    slug: 'cmet2026-2',
    title: 'Enterprise Holodecks for Pre-Construction Value',
    event: 'CMET Summit — Intelligent Systems & Immersive Technology Panel',
    date: 'July 2026',
    speaker: 'Henry Keyser',
    description:
      'Three generations of co-located VR holodecks, and how a firm that doesn’t need AI still uses it deliberately — to repurpose hardware, speed up production, and rebuild its own tools.',
  },
];
