# Nishika Sadane — Premium Portfolio (React + Vite)

Premium, animated portfolio site for **Nishika Sadane** with a dark luxury theme, glassmorphism, smooth scrolling, and scroll-triggered animations.

## Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis (smooth scrolling)
- React Router

## Setup

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Preview build:
   - `npm run preview`

## Content Editing

- Primary content lives in `src/data/siteContent.js`
- Resume PDF is served from `public/Profile.pdf`
- Optional profile photo: put your image at `public/profile.png` (the site falls back to an SVG if missing)

## Imports

- `@/` alias maps to `src/` (see `vite.config.js` and `jsconfig.json`)

## Folder Structure

- `src/components/` — UI building blocks + sections
- `src/pages/` — Router pages (`/`, `/work`, `/contact`, `/resume`)
- `src/assets/` — Local SVG visuals (portrait + project covers)
- `src/animations/` — Lenis + GSAP scroll FX
- `src/styles/` — Global Tailwind + premium CSS

## Notes

- Testimonials are intentionally written to look like client-style feedback (demo content).
- Links pulled from the provided PDF:
  - Email: `nishika.sadane2426m@ves.ac.in`
  - LinkedIn: `linkedin.com/in/nishika-sadane-522a7b349`
