# bidaman

> Presence, not promises.

Marketing site for **bidaman** — a reliable skeleton crew for editing, Meta
Business ads, and content strategy. Available across **EU · US · LATAM**.

Built to be light and fast: a fully **static** Next.js site with almost no
client JavaScript. All contact is direct to **hello@bidaman.com** (mailto — no
backend, no forms, no tracking).

---

## Stack

| | |
| :-- | :-- |
| Framework | **Next.js 15** (App Router, static export-ready) |
| Styling | **Tailwind CSS v4** + a small custom design layer |
| Fonts | **Google Sans Code** (body), **Silkscreen** (titles) — self-hosted via `next/font`. The logo is a hand-built pixel-block SVG (no font). |
| JS shipped | ~104 kB First Load · every route prerendered static |
| Deploy target | **Vercel** (zero-config) |

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx       # fonts, metadata, <html>/<body>
  page.tsx         # section order: hero → use-cases → what → services → ...
  globals.css      # design system: tokens, .block, .tag, .btn, hard shadows
  icon.svg         # favicon — the "i + mark" glyph
components/
  Logo.tsx         # bidaman wordmark, hand-built pixel-block SVG + the mark
  Hero.tsx         # blocky hero: logo, tagline, CTAs
  UseCases.tsx     # the centerpiece — blocky tabs (Businesses/Corporate/Creators)
  What.tsx         # what is bidaman + the honest facts
  Services.tsx     # editing · meta ads · content strategy
  Availability.tsx # EU · US · LATAM
  Manifesto.tsx    # the principles, as block cards
  Contact.tsx      # → hello@bidaman.com (copy + compose)
  Footer.tsx
```

## Brand system (single source of truth)

All design tokens live at the top of [`app/globals.css`](app/globals.css):

```css
--color-bg:    #000000;  /* pure black background */
--color-star:  #edefe8;  /* Star White  — brightest emphasis */
--color-bone:  #e5ddc9;  /* Bone White  — all text */
--color-dove:  #a8aaa1;  /* Dove        — secondary / muted / borders */
--color-night: #232b33;  /* Moonless Night — panels / depth */
```

A muted, near-monochrome system (PANTONE: Star White 11-4202, Bone White
12-0105, Dove 15-0000, Moonless Night 19-4203). Roles: **Bone** is primary text,
**Star** is the bright emphasis (highlights, active tabs, primary CTAs),
**Dove** is secondary text / borders / muted shadows, and **Moonless Night**
tints the panels so they lift off pure black. Hard offset shadows are tonal
(star / bone / dove), never colored.

Design language: **square, heavy-block** — sharp corners, thick 2px borders,
**hard offset shadows** (no blur), solid label blocks (`.tag`), no gradients,
no soft shadows, no terminal chrome. The whole UI echoes the blocky logo. The
**Use Cases tabs are the centerpiece**, placed right after the hero. There is no
top nav — single scroll, navigable via section CTAs and the footer index. Copy
is concise; no em dashes.

### Changing copy / email

- Copy lives inline in each component under `components/`.
- The contact address is `hello@bidaman.com` — search the repo for it to change
  it everywhere (it appears in `Hero.tsx`, `UseCases.tsx`, `Contact.tsx`,
  `Footer.tsx`, and `app/layout.tsx` metadata).

## Deploy to Vercel

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

No environment variables, no database, no server — it deploys as static assets
+ CDN. Point the `bidaman.com` domain at the Vercel project and you're live.
