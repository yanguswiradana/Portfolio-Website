# User Flows

## Flow A — Recruiter Quick Scan
**Target:** 30 seconds

1. Lands on `#hero` → reads name, role, tagline
2. Sees CTAs: `[ View Projects ]` · `[ Download Resume ]`
3. Clicks "Download Resume" → PDF opens
4. Scrolls to `#projects` → scans 3–6 cards
5. **Exits with enough info to evaluate**

## Flow B — Freelance Client Evaluation
**Target:** 1–2 minutes

1. Lands → `#hero` → reads tagline
2. Clicks "View Projects" → `#projects` → opens a live demo in new tab
3. Returns → clicks `#skills` in nav → checks for required stack
4. Clicks `#contact` → fills form OR clicks "Email directly"
5. **Conversion: outbound contact**

## Flow C — Casual Browsing
**Target:** 2–3 minutes

1. Hero → About → Skills → Projects → Experience → Contact
2. Smooth scroll, no friction
3. Reaches Contact → may or may not message

## Flow D — Contact Form Submission (primary conversion)

1. Visitor lands on `#contact` (via nav click or natural scroll)
2. Reads lead: *"Have a project, a question, or just want to say hi? Drop a message below."*
3. Fills the form:
   - `name` (required, ≥ 2 chars, ≤ 100)
   - `email` (required, valid email format)
   - `message` (required, ≥ 10 chars, ≤ 2000)
   - `_gotcha` (hidden honeypot — must remain empty)
4. **Client-side validation** runs on blur + on submit
5. Submits:
   - **No JS:** standard `<form method="POST" action="https://formspree.io/f/{ID}">` → Formspree's thank-you page
   - **With JS:** `fetch` POST to same endpoint, button shows spinner, fields disable, body adds `aria-busy="true"`
6. **Success path:**
   - Form fields reset
   - Green toast: `"Thanks! I'll get back to you within 48 hours."`
   - Toast auto-dismisses after 6s
7. **Error path:**
   - Red inline error: `"Something went wrong. Please try again or email me directly."`
   - `mailto:` link visible as fallback
8. **Spam:**
   - Honeypot field hidden via CSS (`absolute opacity-0 pointer-events-none`)
   - If filled, JS skips submission entirely
   - Formspree also provides optional reCAPTCHA toggle in dashboard

## Flow E — Navigation Behavior

- On scroll > 50px, `<Nav>` gets `bg-base/80 backdrop-blur-md border-b border-subtle`
- Active section (currently in viewport) gets `text-accent` + underline
- Mobile (< 768px): hamburger button opens `<dialog>`-based full-screen menu
- All nav links use `scroll-behavior: smooth` (CSS) — no JS hijack
- Keyboard: Tab through nav links, Enter activates smooth scroll

## CTAs Summary

| Section | Primary CTA | Secondary CTA |
|---------|-------------|---------------|
| Hero | View Projects (#projects) | Download Resume (PDF) |
| Projects (per card) | Live Demo (external) | Code (GitHub) |
| Contact | Send Message (form) | Email directly (mailto:) |
| Nav (always) | — | Resume icon button |

## Out of Flow (deliberate)

- No "back to top" button in MVP — smooth scroll is fast enough on a single page
- No search/filter on projects — keep MVP simple (3–6 projects, all visible)
- No newsletter signup — use the contact form for outbound only
