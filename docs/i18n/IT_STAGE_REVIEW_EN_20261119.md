# Italian Website Localization — Internal Stage Review

Date: 19 November 2026
Author website: Esther Cho
Branch: `feature/multilingual-foundation-20261118`
Release state: **UNPUBLISHED — DO NOT MERGE**

## Voice and source authority
The actual attached `Italian Master Translation Guide.docx` was read directly before editing. Its guiding voice is **«Intimo, luminoso, umano, spirituale, musicale ma sobrio»**: intimate, bright, human and spiritual, with musical but restrained rhythm. The guide governs translation of the Christian devotional manuscript; website language was adapted only for tone, without publishing the unfinished devotional text or adding theological commentary. Source truth for the website is the existing English author site and corroborating Korean author information.

## Delivered (staging only)
- Seven Italian destinations: `/it/`, `/it/stories/`, `/it/books/`, `/it/studio/`, `/it/about/`, `/it/notes/`, `/it/archive/`.
- Two complete Italian translations of published stories:
  1. `/it/stories/my-father-dreamed-of-a-tiger/` — **Mio padre sognò una tigre**.
  2. `/it/stories/the-youngest-daughter-in-every-house/` — **La più piccola di ogni casa**.
- Stories listing connects to these genuine translations; switching between EN/PT-BR/ES/FR/IT on a story preserves the same article.
- Website menus, buttons, editorial labels, accessibility image descriptions, mobile navigation, author biography and eight-chapter life chronology adapted to Italian.
- Original author photographs, childhood images, breakfast photos, site house-entry video and three original picture-book promotional videos preserved; no synthetic photograph or face edits.
- 1985 Yewon School, 1988 Seoul Arts High School, 1992 Seoul National University degree and 1999 Ewha master's-coursework chronology retained. Do **not** state that the master’s degree itself was conferred.
- Books area links only to previously verified English and German editions. No unverified Italian publication link or invented Italian edition, and no claim that `Manna on the Table` is already published.
- Italian document language, `it_IT` social metadata, article canonicals, 5-language reciprocal story alternates and sitemap integration.

## Tests and current evidence
- `scripts/audit-it.mjs` is a mandatory test within `npm run build`. Test checks nine Italian routes for localized content, correct links, image descriptions, published-book authenticity, `lang="it"`, canonical/hreflang and media.
- GitHub Actions Quality run `44345374003`: **passed** with 9/9 Italian pages, 9/9 French, 9/9 Spanish, 9/9 Brazilian Portuguese and 50 localized HTML outputs validated.
- GitHub Actions local-only Italian browser run `44345374452`: **passed**. Screenshots were visually inspected for home desktop/mobile, Stories, Books, Esther and two published articles.
- Found a shared mobile usability issue: the language picker was white on a light story article header. Updated CSS to use navy on light backgrounds and white on photo/video heroes. Rechecked through a fresh preview pipeline; release still requires a full mobile-device walkthrough.
- No production deployment: `main` stays unchanged.

## Remaining blockers for public release
- Independent native Italian literary edit of all pages and both stories.
- Final mobile/desktop real-device review: keyboard operation, language chooser, image/video loading, link click paths, whole-page scrolling, and overflow.
- Complete Japanese localization and separately finalize German.
- Final integrated 8-language regression test, including unchanged English and Korean pages, followed by one production deployment only.

**This is an internal stage pass, not final publishing approval.**
