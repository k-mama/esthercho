# Gemini Code Assist — Build Instructions

Before modifying code, read all files in `/docs`, starting with `00_START_HERE_KO.md`.

## Non-Negotiable Rules

1. Do not redesign the approved project without explicit permission.
2. Do not change approved global navigation labels.
3. Do not invent biographical facts, book facts, dates, people, or quotes.
4. Do not present AI-generated images as archival evidence.
5. Keep English as the default locale.
6. All major content templates must support localization.
7. Prioritize mobile layout, accessibility, and image performance.
8. Use client-side JavaScript only when interaction requires it.
9. Do not add React, Tailwind, animation libraries, CMS packages, or UI frameworks without approval.
10. Preserve the quiet, warm, editorial visual language.
11. Do not use SaaS layouts, dashboards, glassmorphism, generic gradients, or corporate landing-page patterns.
12. Do not commit private archival originals.
13. Do not add placeholder biographies or fake book content.
14. Do not replace Astro with another framework.
15. Do not make broad changes outside the stated task.

## Technical Baseline

- Astro
- TypeScript strict mode
- Static output
- Cloudflare Pages
- CSS custom properties and component-scoped styles
- Astro Content Collections
- English root routes
- prefixed non-English routes

## Working Method

For each task:

1. Restate the task in one sentence.
2. List files to create or modify.
3. Inspect existing files.
4. Make the smallest coherent change.
5. Do not modify unrelated files.
6. Confirm accessibility considerations.
7. Confirm localization considerations.
8. Summarize changes.
9. Propose one commit message.
10. Stop.

## Code Quality

Use semantic HTML, descriptive component names, centralized navigation and locale config, typed content schemas, and reusable media components. Do not run destructive commands.
