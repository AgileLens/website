# Agile Lens — Production Website

The official website for [Agile Lens](https://agilelens.com), an XR studio crafting immersive experiences for pre-construction visualization and live entertainment. Built with Next.js and deployed on Vercel.

**Live site:** [agilelens.com](https://agilelens.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, static export) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage (hero, products, testimonials, about)
│   ├── portfolio/
│   │   ├── page.tsx          # Portfolio grid with category filtering
│   │   └── [slug]/page.tsx   # Individual project detail pages
│   ├── team/page.tsx         # Team roster
│   ├── contact/page.tsx      # Contact form / info
│   └── layout.tsx            # Root layout (nav, footer, fonts)
├── components/
│   ├── Navigation.tsx        # Top nav
│   ├── Footer.tsx            # Site footer
│   └── ImageGallery.tsx      # Reusable image carousel
└── data/
    └── projects.ts           # Portfolio project data (typed, slug-indexed)

public/
├── logos/                    # Client logo images (Disney, CBS, Kennedy Center…)
├── portfolio/                # Project hero images
├── products/                 # Product card images
└── team/                     # Team member photos

portfolio_data.csv            # Source data for portfolio projects
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — scroll-driven hero panels, client marquee, product cards, testimonials, about |
| `/portfolio` | Full project grid, filterable by category (Architecture / Entertainment) |
| `/portfolio/[slug]` | Individual project page with image carousel, video, credits, and press |
| `/team` | Team bios and headshots |
| `/contact` | Contact information and inquiry form |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & Run

```bash
npm install
npm run dev        # starts dev server at http://localhost:3000
```

### Build

```bash
npm run build      # static export to /out
npm run start      # preview the production build locally
```

Because `output: 'export'` is set in `next.config.ts`, the build produces a fully static site in `/out` — no server runtime required.

---

## Deployment

The site deploys automatically to **Vercel** on every push to `main`. No manual steps needed.

- Preview URL: [website-ivory-omega-78.vercel.app](https://website-ivory-omega-78.vercel.app)
- Production URL: [agilelens.com](https://agilelens.com)

---

## Adding Portfolio Projects

Project data lives in `src/data/projects.ts` and is mirrored by `portfolio_data.csv` (used as a source of truth for bulk edits).

To add a new project:

1. Add a row to `portfolio_data.csv` with the project fields.
2. Update the `projects` array in `src/data/projects.ts`.
3. Drop a hero image into `public/portfolio/` and add it to the `imageMap` at the top of `projects.ts`.
4. If the project has multiple gallery images, add them to the `images` array on the project entry.

---

## Sister Companies

Agile Lens is part of a family of design and performance consulting firms:

- [Fisher Dachs Associates](https://www.fda.net) — Theater planning & design
- [Fisher Marantz Stone](https://www.fishermarantzstone.com) — Architectural lighting design

---

## License

Proprietary — © Agile Lens. All rights reserved.
