<div align="center">

# Portfolio Website

**A modern, minimal, dark-themed developer portfolio built with Astro.**

[![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](./LICENSE)

</div>

---

## Features

- **Dark Only** — Sophisticated dark theme with purple accent
- **Responsive** — Mobile-first, works on all screen sizes
- **Animated** — Smooth scroll-reveal animations with IntersectionObserver
- **Fast** — Static site, zero JavaScript bloat
- **Accessible** — Semantic HTML, ARIA attributes, keyboard navigation
- **SEO Ready** — Meta tags, Open Graph, sitemap generation
- **Contact Form** — Formspree-powered with AJAX + graceful fallback
- **Self-hosted Fonts** — Inter Variable, no external requests

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Icons | [astro-icon](https://www.astroicon.dev) + Lucide |
| Form | [Formspree](https://formspree.io) |
| Deploy | [Vercel](https://vercel.com) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- [npm](https://npmjs.com) / [pnpm](https://pnpm.io) / [yarn](https://yarnpkg.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/yanguswiradana/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Configuration

Edit `.env` and set your Formspree form ID:

```
PUBLIC_FORMSPREE_ID=your_formspree_form_id_here
```

Update these files with your personal info:

- `src/data/profile.ts` — Name, role, bio, social links
- `src/data/projects.ts` — Your projects
- `src/data/experience.ts` — Work experience
- `src/data/skills.ts` — Technical skills
- `src/consts.ts` — Site URL and name

### Development

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build
npm run check     # Run TypeScript checks
```

## Project Structure

```
portofolio/
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── components/
│   │   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/              # Reusable UI components (Button, Card, Tag)
│   ├── data/                # Content data (profile, projects, experience, skills)
│   ├── layouts/             # Base HTML layout
│   ├── lib/                 # Utilities (cn, motion, nav, seo)
│   ├── pages/               # Routes (index, 404)
│   └── styles/              # Global CSS
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com/new](https://vercel.com/new)
3. Set environment variable: `PUBLIC_FORMSPREE_ID`
4. Deploy

Or use the Vercel CLI:

```bash
npx vercel
```

### Other Platforms

This is a static site — works anywhere that serves HTML:

```bash
npm run build    # Output in dist/
```

Upload the `dist/` folder to Netlify, Cloudflare Pages, GitHub Pages, etc.

## Customization

| File | What to change |
|------|---------------|
| `src/data/profile.ts` | Your name, tagline, bio, avatar, social links |
| `src/data/projects.ts` | Project cards with images, descriptions, links |
| `src/data/experience.ts` | Work history timeline |
| `src/data/skills.ts` | Skill categories and tags |
| `src/styles/globals.css` | CSS variables for colors, theme |
| `tailwind.config.mjs` | Tailwind theme customization |
| `public/images/` | Add your avatar, project screenshots, og:image |

## License

[MIT](./LICENSE)
