# CLAUDE.md — Agile Lens Website v2

## Project Overview

Production website for Agile Lens: Immersive Design (agilelens.com). This is a Next.js site replacing an existing Webflow site. Built to be maintained by Claude — content updates happen via conversation, not a CMS.

## Bootstrap Instructions (for Claude Code)

A previous Claude Chat session audited the existing Webflow site and a Gemini-built Next.js prototype thoroughly. Here's what exists and what you need to do:

### Step 1: Clone the source repo (Gemini-built prototype with all assets)
```bash
git clone https://github.com/ibrews/agilelens-website.git /tmp/agilelens-source
```

### Step 2: Pull assets from source into this repo
```bash
mkdir -p public
cp -r /tmp/agilelens-source/public/logos public/
cp -r /tmp/agilelens-source/public/portfolio public/
cp -r /tmp/agilelens-source/public/products public/
cp -r /tmp/agilelens-source/public/team public/
```
Do NOT copy: `vercel.svg`, `file.svg`, `window.svg`, `globe.svg`, `next.svg`, `brand-kits.md`.

### Step 3: Pull the data file
```bash
mkdir -p src/data
cp /tmp/agilelens-source/src/data/projects.ts src/data/projects.ts
```
Then edit `projects.ts` to remove ALL `/agilelens-website` basePath prefixes from image paths. Keep the helper functions (`getProjectBySlug`, `getAdjacentProjects`, `slugify`, `imageMap`).

### Step 4: Pull the ImageGallery component
```bash
mkdir -p src/components
cp /tmp/agilelens-source/src/components/ImageGallery.tsx src/components/ImageGallery.tsx
```
Then edit to remove the hardcoded `const basePath = '/agilelens-website';` and all `${basePath}` prefixes from image `src` attributes.

### Step 5: Pull the CSV for reference
```bash
cp /tmp/agilelens-source/portfolio_data.csv ./portfolio_data.csv
```

### Step 6: Build all remaining files fresh
Everything else gets written from scratch or heavily rewritten. The Gemini source versions have wrong design language, hallucinated content, or hardcoded basePaths. See the rest of this document for exactly what to build.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (with preview deploys for staging)
- **Forms:** Formspree (free tier) — NOT mailto
- **No CMS.** Content lives as TypeScript data files and components in the repo.
- **No GSAP.** Use CSS animations + IntersectionObserver for scroll reveals. Drop the gsap dependency entirely.

## Design Direction

- **Match the current Webflow site (agilelens.com) design language** — dark bg, pink accent, clean cards with subtle borders
- The theatrical Variation B from the Gemini source (stage lights, "Acts" metaphor, warm orange + purple at /variations/b) can be used as **subtle spice** — not the whole flavor
- **Push the immersive feeling** — this studio builds holodecks and VR theater

### Color Palette (from Webflow site)
```css
--color-bg: #0a0a0a;
--color-surface: #111111;
--color-border: #1a1a1a;
--color-text: #ffffff;
--color-text-muted: #888888;
--color-accent: #e94d8a;
--color-accent-2: #c026d3;
```

### Typography
Clean sans-serif. Manrope or similar. Do NOT use Instrument Serif, Space Grotesk, or other display fonts diverging from the Webflow feel.

## CRITICAL: Content Accuracy

### Testimonials — USE THESE EXACT QUOTES (from Webflow, not Gemini)

The Gemini site embellished the quotes. These are the verified versions:

1. **Jonathan Coon** (CEO, Impossible Ventures) — on the Four Seasons Holodeck:
   "Agile Lens is an XR SEAL Team Six. I did a tour with [redacted] and he was over the moon excited. What the team [including Pureblink and DBOX] has built is a time machine."

2. **Hope Hutman** (Artist, Experiential Producer) — on "Your Mind, Girls...":
   "What Agile Lens did, it's not what others do. They gave our actors and crew control of the avatars. What they did was harder, was newer, and honestly they rocked."

3. **Amanda Watson** (Inventor of Air Link and CTO of REK):
   "Agile Lens works like engineers but think like storytellers. They pursue excellence in the details which is what you need for a turnkey luxury experience."

4. **Gabriele Romagnoli** (Host of XR AI Spotlight):
   "From Vision Pro to Galaxy XR, few are more experienced and knowledgeable when it comes to deploying immersive experiences on the latest devices on the market."

5. **Raindance Immersive** — on "A Christmas Carol VR" at the 2025 Awards Ceremony:
   "Agile Lens creates a visionary experience that skillfully breaks the fourth wall and invites audiences to the center of a 150-year-old story told for a brand new generation."

6. **Ian Hamilton** (Editor-in-Chief, UploadVR) — on the Four Seasons Holodeck:
   "The Holodeck is so ambitious no single hardware provider has been able to make everything work that it needs to do. And yet, it does work."

### Product Descriptions — USE THESE (from Webflow)

**Pre-construction:**
- **Hyperreal Estate:** "Photoreal 3D architectural and design visualization. Raytraced with UE and optimized for high-end VR."
- **Blueprint Immersive:** "High-fidelity event venue configuration and previs software. Used by top architects and design professionals to optimize construction planning."
- **Floor Tour:** "Self-service, real-world scale floor plan visualization software. Walk your portfolio of designs and renders in VR with just a few clicks."

**Entertainment:**
- **Holodeck Anywhere:** "Multiuser colocated VR. Solutions are available for both ultra-high fidelity and standalone flexibility."
- **Stage Presence:** "Rehearsal tool and performance platform. Designed and streamlined to integrate with existing media and live event industry practices."
- **PerforMR:** "Live-actor animation pipeline. A multi-source mocap tool for performers to animate one or many MetaHumans, real-time or saved for playback, in Virtual Reality or Mixed Reality."

### Customer Pillars — USE THESE (from Webflow)

**Pre-construction:** "For industrial and real estate developers going beyond, we offer the opportunity to be in the most visceral virtual environment you can envision before it's built. Our solutions have saved millions of dollars in design review and change requests and have driven 9-figures in pre-construction sales."

**Entertainment:** "For media, brands, and performing artists, we lead in blending experimental and experiential for large, live audiences, complex production facilitation, and high-flow rate activations. Our solutions streamline performance capture and virtual production management to get the most out of legacy event techs and operators."

### Portfolio Project Data — NEEDS REVIEW
The project overviews in `data/projects.ts` come from a real CSV and look authentic, but the longer `description` fields may contain Gemini hallucinations. OK to ship initially but flag for Alex's review.

## Homepage Structure (match Webflow layout)

1. **Hero** — tagline: "Crafting immersive experiences for real and virtual worlds and the spectacles within."
2. **Client logo marquee** — Disney, CBS, Kennedy Center, Four Seasons, RSC, Waldorf Astoria, Dell. Animated scroll. Label: "Innovation for"
3. **Two-pillar section** — "Our Primary Customers" with Pre-construction and Entertainment cards
4. **Products section** — "Our Core Products" — 6 cards in two groups of 3. Each has category tag, name, description, image.
5. **Testimonials** — carousel with 6 quotes, dot navigation, auto-rotate
6. **About** — "Founded in 2014, Agile Lens was born from a mission to redefine storytelling through immersive technology, merging design, architecture, and XR to create transformative spatial experiences." + sister companies (Fisher Dachs Associates + Fisher Marantz Stone)
7. **Footer**

## Pages to Build

### Home (/) — Build from scratch using Webflow content above

### Portfolio (/portfolio) — Based on Gemini source
Filterable grid by category (Architecture, Entertainment, Immersive Marketing, Real Estate, Social Impact). Cards with image, category tag, year, client, description excerpt.

### Portfolio Detail (/portfolio/[slug]) — Based on Gemini source
Hero image + gallery with lightbox. Overview. Video embed (YouTube/Vimeo). Sidebar with metadata (year, client, platform, tech, awards, status). Press links. Credits. Prev/Next nav.

### Team (/team) — Based on Gemini source
- **Founders:** Alex Coulombe (Co-Founder/CEO), Joshua Dachs (Co-Founder/President)
- **Creative Team:** Yu-Jun Yeh (Jun), Dante Cameron, Marshall Nowak, Kevin Laibson, Whitt Sellers, Ari Tarr
- **Operations:** Elizabeth Coulombe, Stef Buckner, Alexa Antopol, Richard Hackman, Bridget Jones, Fay Chang, Arnold Ragins, Henry Keyser
- Photos available in public/team/ for: alex, ari, dante, elizabeth, henry, josh, jun, kevin, marshall, saurabh, stef, whitt, zander

### Contact (/contact) — Based on Gemini source
- Address: 22 West 19th Street, 6th Floor, New York, NY 10011
- Phone: +1 (212) 691 3020
- Email: info@agilelens.com
- Google Maps embed
- Contact form via Formspree (NOT mailto)

## File Structure

```
src/
  app/
    layout.tsx
    globals.css
    page.tsx            # Homepage
    portfolio/
      page.tsx          # Portfolio grid
      [slug]/
        page.tsx        # Portfolio detail
    team/
      page.tsx
    contact/
      page.tsx
  components/
    Navigation.tsx
    Footer.tsx
    ImageGallery.tsx    # Pulled from source, basePath removed
  data/
    projects.ts         # Pulled from source, basePath removed
public/
  logos/                # Pulled from source
  portfolio/            # Pulled from source (~99MB)
  products/             # Pulled from source
  team/                 # Pulled from source
```

## Technical Notes

- **No basePath.** Remove ALL hardcoded `/agilelens-website` prefixes everywhere.
- **No `output: "export"`.** Vercel handles SSR natively.
- **next.config.ts** should just be `{ images: { unoptimized: true } }`
- The Gemini `data/projects.ts` has helper functions `getProjectBySlug()` and `getAdjacentProjects()` — keep these.
- ImageGallery has keyboard nav (Escape, Arrow keys) — keep this.
- The portfolio detail page handles YouTube and Vimeo embed extraction — keep this.

## Deployment

Vercel. When connected:
- Push to `main` → live at agilelens.com
- Push to any branch → preview URL
- Custom domain configured in Vercel dashboard

## Workflow for Future Updates

When anyone says "add a portfolio page for [project name]":
1. Add images to `public/portfolio/[slug]/`
2. Add project data to `src/data/projects.ts` (follow the exact schema of existing entries)
3. Push to `main` — Vercel auto-deploys and generates preview URL
4. Verify the portfolio grid and detail page render correctly
5. Share preview URL for review

**Important**: Read the brand guidelines at `C:\Users\Sam\.claude\knowledge\context\brand\brand-identity.md` before writing any copy. Read the full project doc at `C:\Users\Sam\.claude\knowledge\projects\website.md` for architecture details and gotchas.

## Content Rules

- **Never paraphrase testimonials** — use exact quotes from the testimonials list above
- **Never invent product descriptions** — use the verified descriptions above
- **No hype language** — avoid "revolutionary", "disruptive", "game-changing"
- **Portfolio pages must match existing layout** — same card style, same metadata sidebar, same gallery
- **Use Tailwind theme tokens** — never `text-[var(--color-*)]`, always `text-muted`, `text-pink`, etc.

## Technical Gotchas

- **Deploy via git push only** — `vercel deploy` CLI fails on this project. Always `git push origin main`.
- **Turbopack CSS bug** — never use arbitrary CSS var() values in Tailwind classes. Use `@theme` tokens defined in `globals.css`.
- **Static export** — `output: 'export'` is required in next.config.ts. Don't remove it.
- **Homepage images from Webflow CDN** — will break when Webflow subscription ends. Self-host migration is TODO.

## Owner

Alex Coulombe — Founder/CEO of Agile Lens. Prefers direct, technically precise communication. No hand-holding.
