# Agent Working Agreement

This file tells any AI (or human) contributor how to work on this project consistently. **Read this before making changes.**

---

## 1. Project Conventions

- **Framework:** Astro 4, **static output** (no `output: 'server'`, no API routes, no SSR adapter)
- **Language:** TypeScript strict mode
- **Styling:** Tailwind CSS via `@astrojs/tailwind`; design tokens as CSS variables in `src/styles/globals.css`; theme extension in `tailwind.config.mjs`
- **Components:** `.astro` files only. **No React/Vue/Svelte islands** unless explicitly requested.
- **Interactivity:** small `<script>` tags with vanilla TypeScript inside `.astro` files (Astro bundles them)
- **Icons:** `astro-icon` with `@iconify-json/lucide`
- **Fonts:** `@fontsource-variable/inter` (self-hosted, no Google Fonts request)
- **Form:** Formspree — no server-side code, no API routes, no validation library
- **Imports:** `~/` alias maps to `src/` (configured in `tsconfig.json`)
- **Naming:**
  - Components: `PascalCase.astro`
  - Utilities: `kebab-case.ts`
  - Data files: `kebab-case.ts` exporting typed const
- **File location:**
  - Reusable UI: `src/components/ui/`
  - Page sections: `src/components/sections/`
  - Data: `src/data/`
  - Helpers: `src/lib/`
  - Styles: `src/styles/`

---

## 2. Code Patterns

### 2.1 Section components take no props
Section components read directly from `src/data/`. They take no props because the page is single-instance. Example:

```astro
---
// src/components/sections/Hero.astro
import { profile } from "~/data/profile";
import { FORMSPREE_ID } from "~/consts";
---
<section id="hero">
  <h1>{profile.name}</h1>
  <p>{profile.tagline}</p>
</section>
```

### 2.2 Forms use progressive enhancement
Forms must work without JavaScript. Use a standard `<form action="..." method="POST">`. Layer AJAX on top with a small `<script>` for better UX.

### 2.3 Class merging
Use the `cn()` helper from `~/lib/cn` to merge Tailwind classes conditionally:

```ts
import { cn } from "~/lib/cn";
class={cn("base-classes", { "active-classes": isActive }, className)}
```

### 2.4 Motion
- Default: CSS transitions + `transition-{property} duration-{ms}`
- Scroll-in: `IntersectionObserver` in `~/lib/motion.ts` toggles `.is-visible` class
- Always respect `prefers-reduced-motion`

### 2.5 Environment variables
- Public (exposed to client): prefix with `PUBLIC_` (Astro convention)
- Use `import.meta.env.PUBLIC_*` to access
- Never read process.env in client code

### 2.6 Data access
- Read profile/socials from `src/data/profile.ts`
- Read skills, projects, experience from their respective `src/data/*.ts` files
- Never hardcode user-facing content in components — always reference data files

---

## 3. Rules

### DO
- ✅ Keep components small (< 150 lines) and single-purpose
- ✅ Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<main>`)
- ✅ Add `aria-*` attributes and `alt` text where needed
- ✅ Respect `prefers-reduced-motion`
- ✅ Use the design tokens — never hardcode hex values
- ✅ Test the form with JavaScript disabled
- ✅ Use TypeScript types for all data shapes

### DO NOT
- ❌ Add React, Vue, Svelte, or any other framework island
- ❌ Add `output: 'server'` or any API route
- ❌ Import server-only packages (Resend, Zod, Nodemailer, etc.)
- ❌ Use `any` — use `unknown` with type guards if needed
- ❌ Add a CMS, blog, auth, or backend in MVP
- ❌ Hardcode user-facing content (name, bio, projects) in components
- ❌ Ship `{{}}` placeholder content to production
- ❌ Add comments to code unless asked
- ❌ Use `find`/`grep`/`cat` in bash — use the dedicated tools

---

## 4. Workflow

For every task:

1. **Pick** the next unchecked task from `task-list.md` (or the user's instructions)
2. **Read** the relevant spec:
   - Visual question → `design.md`
   - Data shape → `data-model.md`
   - Layout/location → `sitemap.md`
   - Copy/text → `copywriting.md`
   - Goal/scope question → `PRD.md`
3. **Implement** the smallest change that satisfies the task
4. **Verify** with `npm run build` (and `astro check` if TypeScript is involved)
5. **Mark** the task done in `task-list.md` only after verification passes
6. **Move on** to the next task — don't bundle unrelated work

If a task is blocked or ambiguous, **ask the user** — don't invent.

---

## 5. When You're Stuck

| Question type | Check |
|---------------|-------|
| "What color / size / spacing?" | `design.md` |
| "What data shape?" | `data-model.md` |
| "Where does this go in the file tree?" | `sitemap.md` |
| "What should the text say?" | `copywriting.md` |
| "Is this in scope?" | `PRD.md` |
| "What's the plan / order?" | `task-list.md` |
| "How do I work on this project?" | `agent.md` (this file) |

If none of those answer it, **ask the user**.

---

## 6. Definition of Done (per task)

A task is "done" when:

- [ ] Code is written and matches the conventions in this file
- [ ] TypeScript compiles with zero errors
- [ ] `npm run build` succeeds
- [ ] Visual output matches `design.md` intent
- [ ] Content matches `copywriting.md` (or uses `{{}}` placeholder)
- [ ] Task checkbox is ticked in `task-list.md`
