# Copywriting

All copy is content, not code. All `{{...}}` placeholders are yours to fill.

---

## 1. Hero

- **Eyebrow:** `Hi, I'm` *(small, accent color, uppercase, tracking-wider)*
- **H1:** `{{YOUR_NAME}}.` *(big — 56–72px, font-semibold, tracking-tight)*
- **Subhead:** `{{YOUR_TAGLINE}}` *(20–24px, text-secondary)*
  - Example: *"Full-stack developer crafting fast, accessible web experiences."*
- **CTAs:**
  - Primary: `[ View Projects ]` → `#projects`
  - Secondary: `[ Download Resume ]` (with `Download` icon) → `resumeUrl`
- **Hint (bottom):** `Scroll` + animated chevron-down

---

## 2. About

- **Section title:** `About`
- **Body:** `{{2–3 sentence bio — who you are, what you do, what you care about.}}`
  - Example: *"I'm a developer based in Berlin who loves turning complex problems into simple, beautiful interfaces. I care deeply about accessibility, performance, and writing code my future self won't hate. Outside of work, I write about what I learn and contribute to open source."*
- **Quick facts card (right column, optional):**
  - Location: `{{CITY, COUNTRY}}`
  - Focus: `{{e.g. "Full-stack web development"}}`
  - Currently: `{{e.g. "Learning Rust and building side projects"}}`

---

## 3. Skills

- **Section title:** `Skills`
- **Subtitle:** `Tools and technologies I work with.`
- **Layout:** 2–3 column grid of category cards
- **Per card:**
  - Category title (e.g. `Frontend`)
  - Row of `<Tag>` pills, one per skill

---

## 4. Projects

- **Section title:** `Projects`
- **Subtitle:** `A few things I've built recently.`
- **Per project card:**
  - Image (16:9 aspect, rounded-lg)
  - Title (font-semibold, 20–24px)
  - Description (1–2 sentences, text-secondary)
  - Row of `<Tag>` pills
  - Footer row with two icon links:
    - `[ ↗ Live ]` (ExternalLink icon) → `liveUrl`
    - `[ Code ]` (Github icon) → `githubUrl`
- **Order:** featured first, then most recent

---

## 5. Experience

- **Section title:** `Experience`
- **Subtitle:** `Where I've worked and what I shipped.`
- **Layout:** vertical timeline
  - Left: small dot (`bg-accent`) + vertical line connecting entries
  - Right: card with details
- **Per entry:**
  - Top row: `Role @ Company` (left) · `Date range` (right, text-muted)
  - Sub-row: `Location` (text-muted)
  - Body: 2–4 line description
  - Optional: bullet list of highlights
  - Optional: row of tech tags at bottom

---

## 6. Contact

- **Section title:** `Get in Touch`
- **Lead paragraph:** `Have a project, a question, or just want to say hi? Drop a message below.`
- **Form:**
  - `Name` — placeholder `Your name`
  - `Email` — placeholder `you@example.com`
  - `Message` — placeholder `What's on your mind?` (textarea, 5 rows)
  - Submit button: `Send Message` (with Send icon, hidden when loading)
- **Helper line below form:** `Or reach me directly at {{email}}`
- **Privacy line (small, text-muted):** `I never share your info. Form powered by Formspree.`
- **Status messages:**
  - Sending: button text → `Sending…`, icon replaced with spinner, fields disabled
  - Success: green toast — `Thanks! I'll get back to you within 48 hours.`
  - Error: red inline message — `Something went wrong. Please try again or email me directly.` (with `mailto:` link)

---

## 7. Footer

- **Left:** `© {{YEAR}} {{YOUR_NAME}}. Built with Astro & Tailwind.`
- **Right:** Row of social icons (smaller, 18px) + `Back to top ↑` link (smooth scrolls to `#hero`)

---

## 8. SEO Meta

- **Default title:** `{{YOUR_NAME}} — {{YOUR_TITLE}}`
- **Default description:** `{{160-char summary mentioning your craft + key tech.}}`
  - Example: *"Full-stack developer based in Berlin. I build fast, accessible web apps with TypeScript, React, and Astro."*
- **OG image:** `og.png` (1200×630px) — name + role on dark background, accent color accent
- **Twitter card:** `summary_large_image`

---

## 9. Tone & Voice

- **Confident but not arrogant.** No "passionate", "guru", "ninja", "rockstar".
- **Concrete, not fluffy.** "Built X that does Y" beats "experienced in building solutions."
- **First person, present tense** for current state ("I'm a developer...").
- **Avoid:** exclamation marks, emoji, marketing-speak, buzzword stacks.
- **Use:** plain English, specific tech names, real outcomes.
