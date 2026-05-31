## Lolipop Beverages

Lolipop Beverages is a cinematic, scroll-driven product landing page built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

The hero section renders a high-quality **image sequence on a canvas** and scrubs frames based on scroll position. Users can switch between drink variants (Cherry, Grape, Lemon), each backed by a separate frame sequence URL.

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI / shadcn-style components**

## How it works (briefly)

- **Entry points**: `src/app/layout.tsx` and `src/app/page.tsx`
- `src/app/page.tsx` preloads the initial variant frames and shows a loading screen.
- `src/components/ParallaxHero.tsx`:
  - Preloads frames for the active variant
  - Draws frames to a `<canvas>`
  - Maps scroll progress to a frame index for smooth scrubbing
- Variants and frame URL generation live in `src/lib/variants.ts`.

## Getting started

### Prerequisites

- Node.js (recommended: 18+)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open `http://localhost:9002`.

## Build

This project is configured for **static export** (`output: 'export'`), so `next build` generates an `out/` folder.

```bash
npm run build
```

## Netlify deployment

### Option A: Generate a ready-to-upload folder

```bash
npm run deploy:netlify
```

This creates `deploy/netlify/`. Upload that folder to Netlify (drag-and-drop) or use it as a publish directory.

### Option B: Netlify Git deploy settings

- **Build command**: `npm run build:netlify`
- **Publish directory**: `out`

## Notes

- `.env` is ignored by git. If you add keys locally, do not commit them.
