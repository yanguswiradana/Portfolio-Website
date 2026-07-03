# Task List

Execution order. Each task has a clear "done" definition.

---

## Phase 0 — Scaffolding

- [ ] **T0.1** Create `package.json` with all deps locked
- [ ] **T0.2** Create `astro.config.mjs` (integrations: tailwind, sitemap; static output)
- [ ] **T0.3** Create `tsconfig.json` (extends `astro/tsconfigs/strict`)
- [ ] **T0.4** Create `tailwind.config.mjs` (content paths + design tokens)
- [ ] **T0.5** Create `src/env.d.ts` (Astro types + PUBLIC_ env)
- [ ] **T0.6** Create `src/consts.ts` (FORMSPREE_ID, SITE_URL, FORMSPREE_ENDPOINT)
- [ ] **T0.7** Create `src/styles/globals.css` (Tailwind directives + CSS variables)
- [ ] **T0.8** Create `src/lib/cn.ts`, `src/lib/seo.ts`, `src/lib/motion.ts`
- [ ] **T0.9** Create `.env.example` with `PUBLIC_FORMSPREE_ID=`
- [ ] **T0.10** Create `.gitignore`
- [ ] **T0.11** Run `npm install`
- [ ] **T0.12** Create empty `src/pages/index.astro` and `src/pages/404.astro` to verify build

---

## Phase 1 — UI Primitives

- [ ] **T1.1** `<Button.astro>` — primary, secondary, ghost variants; sizes sm/md/lg
- [ ] **T1.2** `<Section.astro>` — id, title, subtitle, default slot
- [ ] **T1.3** `<Card.astro>` — bg-elevated, border, padding
- [ ] **T1.4** `<Tag.astro>` — pill style, mono option
- [ ] **T1.5** `<SocialIcon.astro>` — lucide icon, hover scale, aria-label

---

## Phase 2 — Navigation

- [ ] **T2.1** `<Nav.astro>` desktop — sticky top, logo + links + resume button
- [ ] **T2.2** `<Nav>` scroll behavior — bg/blur on scroll > 50px
- [ ] **T2.3** Active section highlight via IntersectionObserver
- [ ] **T2.4** `<MobileMenu.astro>` — `<dialog>` element, hamburger trigger
- [ ] **T2.5** Mobile menu keyboard handling (ESC to close, focus trap)

---

## Phase 3 — Data Layer

- [ ] **T3.1** `src/data/profile.ts` with all fields
- [ ] **T3.2** `src/data/skills.ts` with 3–4 categories
- [ ] **T3.3** `src/data/projects.ts` with 3–6 projects
- [ ] **T3.4** `src/data/experience.ts` with 2–4 entries

---

## Phase 4 — Sections

- [ ] **T4.1** `<Hero.astro>` — eyebrow, h1, subhead, 2 CTAs, scroll hint
- [ ] **T4.2** `<About.astro>` — bio + optional quick facts
- [ ] **T4.3** `<Skills.astro>` — category grid of tag pills
- [ ] **T4.4** `<Projects.astro>` — featured-first grid of project cards
- [ ] **T4.5** `<Experience.astro>` — vertical timeline
- [ ] **T4.6** `<Contact.astro>` — wrapper, lead copy, contains ContactForm
- [ ] **T4.7** `<ContactForm.astro>` — form + JS script (Formspree AJAX)
- [ ] **T4.8** `<Footer.astro>` — copyright, socials, back-to-top

---

## Phase 5 — Compose & Motion

- [ ] **T5.1** Compose all sections in `src/pages/index.astro`
- [ ] **T5.2** Wire up `BaseLayout.astro` with Nav + Footer + slot
- [ ] **T5.3** Add scroll-in fade animations (IO + `.is-visible` class)
- [ ] **T5.4** Add `prefers-reduced-motion` fallback
- [ ] **T5.5** Add skip-to-content link in `BaseLayout`
- [ ] **T5.6** Verify keyboard navigation + focus rings across all interactive elements

---

## Phase 6 — Formspree Setup

- [ ] **T6.1** User creates Formspree account (formspree.io)
- [ ] **T6.2** User creates new form, copies form ID
- [ ] **T6.3** User adds `PUBLIC_FORMSPREE_ID` to `.env`
- [ ] **T6.4** Test form locally — JS path (fetch + success/error UI)
- [ ] **T6.5** Test form — no-JS path (native POST to Formspree)
- [ ] **T6.6** Verify email arrives at `email` from `profile.ts`
- [ ] **T6.7** (Optional) Enable reCAPTCHA in Formspree dashboard

---

## Phase 7 — Polish & Deploy Prep

- [ ] **T7.1** Replace all `{{}}` placeholders with real content
- [ ] **T7.2** Add project screenshots to `/public/images/projects/`
- [ ] **T7.3** Add `resume.pdf` to `/public/`
- [ ] **T7.4** Add avatar image to `/public/images/avatar.jpg`
- [ ] **T7.5** Create `favicon.svg` and `og.png`
- [ ] **T7.6** `npm run build` — verify clean production build
- [ ] **T7.7** `npm run lint` (or `astro check`) — zero errors
- [ ] **T7.8** Lighthouse audit — target ≥ 90 on all 4 categories
- [ ] **T7.9** Manual responsive test at 375 / 768 / 1280 / 1920 px
- [ ] **T7.10** Manual test with JS disabled — content + form fallback work
- [ ] **T7.11** Initialise git, first commit
- [ ] **T7.12** Push to GitHub
- [ ] **T7.13** Connect repo to Vercel
- [ ] **T7.14** Add `PUBLIC_FORMSPREE_ID` to Vercel env vars
- [ ] **T7.15** Deploy 🚀
