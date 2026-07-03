# Product Requirements Document — Personal Portfolio

## 1. Vision
A fast, modern, single-page portfolio that makes a strong first impression in under 5 seconds, clearly communicates identity/skills/work, and gives visitors a frictionless way to **send a real message** or browse work.

## 2. Target Users

| User | Primary Goal | Success Signal |
|------|-------------|----------------|
| **Recruiter** | Quickly assess skills & experience | Clicks a project, reads experience, downloads resume |
| **Freelance client** | Evaluate fit for a project | Browses projects, checks tech stack, contacts you |
| **Collaborator** | See your work & interests | Reads About, checks Skills, reaches out |
| **Casual visitor** | Browse & enjoy the site | Reads through smoothly |

## 3. MVP Scope (In)

- 7 sections: Hero, About, Skills, Projects, Experience, Contact, Footer
- Smooth scroll navigation with active-section indicator
- Responsive (mobile, tablet, desktop)
- **Working contact form via Formspree** (name, email, message)
- Client-side validation with custom error messages
- Spam protection (Formspree honeypot + optional reCAPTCHA)
- Project cards with image, title, description, tech stack, links
- Resume download button
- Accessible (semantic HTML, keyboard nav, focus states, `prefers-reduced-motion`)
- SEO meta tags + Open Graph image
- Deploy-ready on Vercel (static)

## 4. Out of Scope (MVP)

- CMS, blog, i18n, analytics, auth, custom backend
- Server-side validation or rate limiting (Formspree handles)
- Light mode (dark only for MVP)
- Multi-page navigation, view transitions (single page only)

## 5. Non-Functional Requirements

- Lighthouse ≥ 90 (Performance, A11y, Best Practices, SEO)
- LCP < 2.5s
- Form works without JavaScript (progressive enhancement)
- Self-hosted fonts (privacy + performance)
- Zero client-side framework (no React/Vue/Svelte islands)

## 6. Tech Stack (locked)

| Layer | Choice |
|-------|--------|
| Framework | Astro 4 (static output) |
| Language | TypeScript strict |
| Styling | Tailwind CSS via `@astrojs/tailwind` |
| Icons | `astro-icon` with `@iconify-json/lucide` |
| Form | **Formspree** (free tier, 50 submissions/mo) |
| Fonts | `@fontsource-variable/inter` (self-hosted) |
| Hosting | Vercel (static) |
| Data | Typed TS files in `src/data/` |

## 7. Success Metrics (post-launch)

- Bounce rate < 60%
- Avg. time on page > 45s
- Contact form conversion > 3% of visitors
- Lighthouse a11y score = 100
