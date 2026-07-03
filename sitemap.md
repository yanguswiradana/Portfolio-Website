# Sitemap

## 1. Routes

| Path | File | Purpose |
|------|------|---------|
| `/` | `src/pages/index.astro` | Single-page portfolio (all sections) |
| `/404` | `src/pages/404.astro` | Not-found page |

No other routes. Single-page MVP.

## 2. Section Anchors (in-page)

| Anchor | Section | Nav Label | Order |
|--------|---------|-----------|-------|
| `#hero` | Hero | (logo) | 1 |
| `#about` | About | About | 2 |
| `#skills` | Skills | Skills | 3 |
| `#projects` | Projects | Projects | 4 |
| `#experience` | Experience | Experience | 5 |
| `#contact` | Contact | Contact | 6 |

## 3. File Structure

```
portofolio/
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── MobileMenu.astro
│   │   ├── Footer.astro
│   │   ├── ContactForm.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Experience.astro
│   │   │   └── Contact.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Section.astro
│   │       ├── Card.astro
│   │       ├── Tag.astro
│   │       └── SocialIcon.astro
│   ├── data/
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   └── experience.ts
│   ├── lib/
│   │   ├── cn.ts
│   │   ├── seo.ts
│   │   └── motion.ts
│   ├── styles/
│   │   └── globals.css
│   ├── consts.ts
│   └── env.d.ts
├── public/
│   ├── images/
│   │   ├── avatar.jpg
│   │   └── projects/
│   │       ├── p1.png
│   │       ├── p2.png
│   │       └── ...
│   ├── resume.pdf
│   ├── favicon.svg
│   └── og.png
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── .env.example
├── .gitignore
├── PRD.md
├── design.md
├── sitemap.md
├── user-flow.md
├── data-model.md
├── copywriting.md
├── task-list.md
└── agent.md
```

## 4. Component Ownership

- `BaseLayout.astro` — owns `<head>`, fonts, global `<Nav>`, global `<Footer>`, page `<slot />`
- Section components — own their own markup, read from `/data/`
- UI primitives — pure presentational, take slots/children
- Data files — no logic, just typed exports

## 5. Build Output

- **Output mode:** `static` (Astro default)
- **Output directory:** `dist/`
- **No API routes, no SSR, no serverless functions**
