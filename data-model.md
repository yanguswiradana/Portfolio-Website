# Data Model

All data is **typed TypeScript** and lives in `src/data/*.ts`. No CMS, no database, no JSON files imported at runtime.

---

## 1. `Profile` — `src/data/profile.ts`

```ts
export const profile = {
  name: "{{YOUR_NAME}}",
  role: "{{YOUR_TITLE}}",
  tagline: "{{ONE-LINE_PITCH}}",
  location: "{{CITY, COUNTRY}}",
  bio: "{{2-3 SENTENCES_ABOUT_YOU}}",
  avatarUrl: "/images/avatar.jpg",
  resumeUrl: "/resume.pdf",
  email: "hello@yourdomain.com",
  socials: {
    github: "https://github.com/{{handle}}",
    linkedin: "https://linkedin.com/in/{{handle}}",
    twitter: "https://twitter.com/{{handle}}",
    website: "https://yourdomain.com",
  },
  seo: {
    title: "{{YOUR_NAME}} — {{YOUR_TITLE}}",
    description: "{{160_CHAR_META_DESCRIPTION}}",
  },
} as const;

export type Profile = typeof profile;
```

---

## 2. `Skill` & `SkillGroup` — `src/data/skills.ts`

```ts
export type Skill = {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;  // optional; no UI for it in MVP
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: [{ name: "TypeScript" }, { name: "Python" }] },
  { category: "Frontend",  skills: [{ name: "React" }, { name: "Astro" }, { name: "Tailwind" }] },
  { category: "Backend",   skills: [{ name: "Node.js" }, { name: "PostgreSQL" }] },
  { category: "Tools",     skills: [{ name: "Git" }, { name: "Docker" }, { name: "Figma" }] },
];
```

---

## 3. `Project` — `src/data/projects.ts`

```ts
export type Project = {
  title: string;
  description: string;     // 1–2 sentences, shown on card
  image: string;           // path under /public
  tags: string[];          // tech stack pills
  liveUrl?: string;        // external link, opens new tab
  githubUrl?: string;      // external link, opens new tab
  featured: boolean;       // MVP: controls sort order (true first)
};

export const projects: Project[] = [
  {
    title: "{{PROJECT_1}}",
    description: "{{1-2 sentence description of what it does and why it matters.}}",
    image: "/images/projects/p1.png",
    tags: ["Astro", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/handle/repo",
    featured: true,
  },
  // ... 3–6 total recommended
];
```

---

## 4. `Experience` — `src/data/experience.ts`

```ts
export type Experience = {
  company: string;
  role: string;
  location?: string;        // e.g. "Remote" or "Berlin, DE"
  startDate: string;        // human-readable: "Jan 2023"
  endDate: string | null;   // null = current/present
  description: string;      // 2–4 line summary
  highlights?: string[];    // optional bullet list
  tech?: string[];          // optional tech tags
  link?: string;            // company URL
};

export const experience: Experience[] = [
  // most recent first
];
```

---

## 5. `FormspreeConfig` — `src/consts.ts`

```ts
// PUBLIC_ prefix required by Astro to expose to client.
// Formspree form IDs are public-by-design (safe to expose).
export const FORMSPREE_ID: string =
  import.meta.env.PUBLIC_FORMSPREE_ID ?? "{{YOUR_FORMSPREE_FORM_ID}}";

export const FORMSPREE_ENDPOINT: string = `https://formspree.io/f/${FORMSPREE_ID}`;

export const SITE_URL: string = "https://{{YOUR_DOMAIN}}";
```

---

## 6. `ContactPayload` — client-side form script

Lives inside `ContactForm.astro`'s `<script>` tag. Not exported.

```ts
type ContactPayload = {
  name: string;       // min 2, max 100
  email: string;      // valid email
  message: string;    // min 10, max 2000
  _gotcha?: string;   // honeypot — must be empty
};

type ContactResponse = {
  ok: boolean;
  error?: string;
};
```

---

## 7. Validation Rules

| Field | Rule | Error message |
|-------|------|---------------|
| `name` | required, 2–100 chars | `"Please enter your name (at least 2 characters)."` |
| `email` | required, matches `^[^@\s]+@[^@\s]+\.[^@\s]+$` | `"Please enter a valid email address.""` |
| `message` | required, 10–2000 chars | `"Message must be at least 10 characters."` |
| `_gotcha` | must be empty | (silent — submission skipped) |

---

## 8. What is NOT a data model concern

- Animation variants — live in component `<style>` or `lib/motion.ts`
- Email template content — handled by Formspree's default template
- SEO meta beyond title/description — derived in `lib/seo.ts`
