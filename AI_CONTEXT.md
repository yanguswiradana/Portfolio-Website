# AI Context Document

> **For the AI Assistant:** If you are reading this file, you have been summoned by the developer (I Wayan Agus Wiradana) to continue working on this portfolio website on a new device or Operating System. Please read this entire document carefully to understand the project architecture, recent updates, and coding conventions before making any changes.

## 1. Project Identity & Stack
- **Project Name:** Portfolio Website
- **Owner:** I Wayan Agus Wiradana (Junior Web Developer / Frontend / Fullstack)
- **Framework:** Astro (v4.x)
- **Styling:** Tailwind CSS
- **UI Frameworks:** React (for specific interactive components), Alpine.js (for lightweight interactions)
- **CMS:** Keystatic (Local-first Git-based CMS workflow)
- **Package Manager:** npm
- **Deployment:** Vercel (using `@astrojs/vercel/serverless` adapter, Node.js 20.x runtime)

## 2. Cross-OS Compatibility Notes
- This project is developed across multiple OS environments (Windows, macOS, Linux).
- Always use standard `npm run dev` to start the server.
- When generating paths in code, always use cross-platform path utilities (e.g., `path.join()`) or POSIX-style forward slashes (`/`). Do not hardcode Windows backslashes (`\`) in the Astro/TypeScript codebase.

## 3. Architecture & File Structure
- `astro.config.mjs`: Configured for Vercel deployment (`output: 'hybrid'`).
- `keystatic.config.ts`: Controls the CMS schema. Configured to use `kind: 'local'` during development so the developer can run `npm run dev` and edit data via `http://localhost:4321/keystatic`.
- `src/data/`: The heart of the portfolio data.
  - `en/` and `id/`: Contains JSON files for Profile, Skills, Experience, and Projects in English and Indonesian.
- `src/lib/translations.ts`: Contains the dictionary for UI translations (i18n).
- `public/`: Static assets. **Note:** `cv.pdf` is stored here and is the active resume downloaded by users.

## 4. Key Features & Recent Updates
- **Bilingual Support:** The site fully supports English and Indonesian. Any UI text changes MUST be added to `src/lib/translations.ts`.
- **Experience Filter:** The `Experience` section has an Alpine.js-powered filter (Work vs Organization). The data JSON uses a `category` field to manage this.
- **Node Engine Fix:** `package.json` has `"engines": { "node": "20.x" }` to prevent Vercel build failures.
- **ATS CV:** The project includes a highly optimized ATS CV. The source PDF is managed by the developer and placed in `public/cv.pdf`.

## 5. Coding Conventions
1. **Component-First:** Build modular Astro or React components.
2. **Tailwind Best Practices:** Avoid inline styles. Use Tailwind utility classes.
3. **TypeScript:** Strictly type data models, especially when reading from `src/data/`.
4. **No Paragraphs for CV Data:** When updating `experience.json` or `projects.json`, ALWAYS use array of bullet points or strict concise strings, never long walls of text. ATS guidelines apply to the portfolio data as well.

## 6. How to Continue Work
1. Run `npm install` (if freshly cloned).
2. Run `npm run dev`.
3. Ask the user what they want to build today. You have full context!
