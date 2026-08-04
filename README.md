# SJFK FINTECH — Import & Export Website

A static Next.js (App Router) website for **SJFK FINTECH PRIVATE LIMITED**,
built with the same brand color palette as the original SJFK FinTech
property platform:

| Token       | Hex       | Usage                          |
|-------------|-----------|---------------------------------|
| Primary     | `#00B98E` | CTAs, icons, accents            |
| Secondary   | `#FF6922` | Section eyebrows, highlights    |
| Dark (Ink)  | `#0E2E50` | Header/nav, dark sections, text |
| Light       | `#EFFDF5` | Section backgrounds             |

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build a static site

```bash
npm run build
```

This produces a fully static export in the `out/` folder (configured via
`output: "export"` in `next.config.js`). You can upload the contents of
`out/` to any static host — Netlify, Vercel, GitHub Pages, S3, cPanel, etc.
No Node.js server is required to serve it.

## Project structure

```
app/
  layout.js       # Root layout, fonts, metadata
  page.js         # Assembles all sections
  globals.css     # Tailwind + brand tokens + signature animations
components/
  Navbar.jsx
  ManifestTicker.jsx   # Scrolling product manifest (signature element)
  Hero.jsx             # Trade-route animated SVG (signature element)
  About.jsx
  Products.jsx
  Expertise.jsx
  Branding.jsx
  WhyUs.jsx
  VisionMission.jsx
  Contact.jsx
  Footer.jsx
```

## Editing content

All copy lives directly inside the component files under `components/` —
update the arrays/text at the top of each file (e.g. `PRODUCTS` in
`Products.jsx`, `REASONS` in `WhyUs.jsx`) to change content quickly.

## Notes

- Uses Google Fonts (Space Grotesk + Inter) loaded via `<link>` tags, so an
  internet connection is required at runtime (not at build time).
- Icons via [lucide-react](https://lucide.dev/).
- Styling via Tailwind CSS, with brand colors defined in `tailwind.config.js`.

## Animation

Motion is powered by [framer-motion](https://www.framer.com/motion/):

- `components/motion.jsx` exports shared `Reveal` / `RevealGroup` /
  `RevealItem` helpers — every section fades + lifts into view once as the
  user scrolls to it, and grids (Products, Why Choose Us, Expertise,
  Branding) stagger their items in together instead of animating
  independently.
- The hero plays an orchestrated on-load sequence (eyebrow → headline →
  copy → buttons), and its SVG trade route has a flowing dashed line plus
  a dot travelling from Navi Mumbai to global markets.
- The manifest ticker under the header scrolls continuously (pure CSS).
- Cards and buttons lift slightly on hover; the mobile menu slides open
  with a height/opacity transition.
- All of it respects `prefers-reduced-motion` — wrapped globally via
  `<MotionConfig reducedMotion="user">` in `components/MotionProvider.jsx`,
  plus a CSS media query for the manifest ticker and route line.
