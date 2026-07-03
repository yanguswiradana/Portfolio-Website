# Design System

## 1. Visual Style

- **Aesthetic:** Modern minimal, generous whitespace, subtle motion, slightly playful
- **Mood:** Confident, approachable, technical-but-human
- **Reference vibe:** Linear, Vercel, rauno.me, leerob.io
- **Mode:** Dark only (MVP)

## 2. Color Palette

Defined as Tailwind theme extensions and CSS variables in `globals.css`.

| Token | Hex | Tailwind Class | Use |
|-------|-----|----------------|-----|
| `bg-base` | `#0A0A0B` | `bg-base` | Page background |
| `bg-elevated` | `#111114` | `bg-elevated` | Cards, nav |
| `border-subtle` | `#1F1F23` | `border-subtle` | Borders, dividers |
| `text-primary` | `#FAFAFA` | `text-primary` | Headings |
| `text-secondary` | `#A1A1AA` | `text-secondary` | Body text |
| `text-muted` | `#71717A` | `text-muted` | Captions, hints |
| `accent` | `#A78BFA` | `text-accent` / `bg-accent` | Links, CTAs, focus |
| `accent-hover` | `#C4B5FD` | `text-accent-hover` | Hover state |
| `success` | `#34D399` | `text-success` | Form success |
| `error` | `#F87171` | `text-error` | Form error |

All text/background combinations meet WCAG AA (≥ 4.5:1).

## 3. Typography

- **Sans (UI + body):** `Inter Variable` via `@fontsource-variable/inter`
- **Display (headings):** `Inter` with `tracking-tight` and `font-semibold`
- **Mono (code/tags):** `JetBrains Mono` (load only if used)
- **Type scale (px):** `12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 56 / 72`
- **Line height:** `1.6` body, `1.2` headings, `1.5` UI
- **Tracking:** `-0.02em` on display, `0` on body

## 4. Spacing & Layout

- Base unit: 4px (Tailwind default)
- Container: `max-w-6xl mx-auto px-6`
- Section vertical padding: `py-24 md:py-32`
- Card padding: `p-6` to `p-8`
- Grid gaps: `gap-6` (mobile) → `gap-8` (desktop)
- 12-column grid on desktop, stacked on mobile

## 5. Border Radius

- `rounded-sm` (4px) — tags
- `rounded-md` (6px) — buttons, inputs
- `rounded-lg` (8px) — cards
- `rounded-xl` (12px) — large cards, hero elements
- `rounded-full` — pills, avatars

## 6. Components

| Component | Variants | Notes |
|-----------|----------|-------|
| `<Button>` | `primary`, `secondary`, `ghost` | Sizes: `sm`, `md`, `lg` |
| `<Section>` | — | Props: `id`, `title`, `subtitle` |
| `<Nav>` | — | Sticky, blur-on-scroll |
| `<MobileMenu>` | — | Uses HTML `<dialog>` element |
| `<Card>` | — | `bg-elevated` + `border-subtle` |
| `<Tag>` | — | Small pill, mono font optional |
| `<SocialIcon>` | — | lucide icon, hover scale |
| `<ContactForm>` | — | Formspree-backed |

## 7. Motion

- **Library:** None. CSS transitions + small `IntersectionObserver` script in `lib/motion.ts`.
- **Scroll-in:** Elements get `opacity-0 translate-y-4`, then `.is-visible` class flips to `opacity-100 translate-y-0` (300ms ease-out).
- **Hover:** `transition-colors duration-150` for links; `transition-transform duration-200` for cards (scale 1.02).
- **Reduced motion:** `prefers-reduced-motion: reduce` → disable all transforms, keep opacity transitions.

## 8. Accessibility

- Color contrast ≥ 4.5:1 (palette verified)
- All interactive elements keyboard-reachable
- Visible focus ring: `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base`
- Skip-to-content link as first focusable element
- Semantic landmarks: `<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`
- Form inputs have associated `<label>`s
- Icon-only buttons have `aria-label`

## 9. Icons

- Source: `lucide` via `astro-icon`
- Default size: 20px (UI), 24px (feature), 16px (inline)
- Stroke width: 2 (default)
- Color: inherits from `currentColor`
