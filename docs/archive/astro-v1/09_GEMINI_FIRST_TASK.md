# Gemini First Task

Paste the following prompt into Gemini Code Assist.

---

Read every Markdown file inside the `/docs` directory before changing any code.

This is the Esther Cho author website repository. The Astro project has already been initialized, committed to GitHub, and deployed through Cloudflare Pages.

Your first task is deliberately small.

## Create

1. `src/config/site.ts`
2. `src/config/navigation.ts`
3. `src/i18n/locales.ts`
4. `src/styles/tokens.css`
5. `src/styles/global.css`
6. `src/layouts/BaseLayout.astro`

## Update

1. `src/pages/index.astro`
2. `astro.config.mjs` only if a small required configuration change is necessary

## Requirements

- English is the default locale.
- Initial locales are English and Korean.
- Navigation labels must be HOME, STORIES, BOOKS, ARCHIVE, STUDIO, NOTES, ABOUT.
- Use CSS custom properties from `docs/03_DESIGN_SYSTEM.md`.
- Use semantic HTML.
- Include a skip-to-content link in the base layout.
- Add basic metadata support: title, description, canonical placeholder, locale.
- Do not build the final header, menu, hero video, homepage sections, content collections, or book pages yet.
- Do not add React, Tailwind, external animation libraries, or a CMS.
- Do not invent Esther Cho biography or book copy.
- The temporary homepage should display only:
  - ESTHER CHO
  - A House of Stories
  - Foundation build in progress.
- Keep the page visually quiet and minimal.
- Preserve Cloudflare Pages static compatibility.
- Do not modify unrelated files.

Before editing, state which files you will create or modify.

After editing:
1. summarize the changes
2. identify accessibility considerations
3. identify localization considerations
4. provide one Git commit message
5. stop
