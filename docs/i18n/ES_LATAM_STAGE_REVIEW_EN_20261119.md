# Spanish (Latin America) Website — Internal Stage Review

Date: 19 November 2026
Project: Esther Cho author website
Branch: `feature/multilingual-foundation-20261118`
Production status: **NOT DEPLOYED**. Do not merge until German, Brazilian Portuguese, Spanish, French, Italian and Japanese are all fully accepted.

## Scope and language decision
- Localized for Latin American readers, not Spain-specific Castilian usage. Use warm, intimate, restrained storytelling and neutral vocabulary that travels across Latin America.
- Source of website facts: existing English website and its Korean author introduction; preserved layout, photographs and original content. The author-provided `Spanish Translation Guide.docx` was read directly for voice, human rhythm and terminology, but it governs devotional manuscript translation and does not authorize publication of the unpublished devotional manuscript.
- The site does not invent additional memoir content, reconstructed childhood scenes or a published edition of the devotional book.

## Delivered
1. Seven localized destinations: `/es/`, `/es/stories/`, `/es/books/`, `/es/studio/`, `/es/about/`, `/es/notes/`, `/es/archive/`.
2. Two complete translated public stories, maintaining the source order and all material details:
   - `/es/stories/my-father-dreamed-of-a-tiger/` — *Mi padre soñó con un tigre*.
   - `/es/stories/the-youngest-daughter-in-every-house/` — *La hija menor en cada casa*.
3. All page navigation, interface labels, accessibility image descriptions, and published-story links localized. Article-level language switching preserves article identity across EN / PT-BR / ES.
4. Existing genuine author photography and video assets preserved, including three short picture-book trailers on the home and Books pages. No AI changes to the author's face.
5. Academic timeline retained (1985, 1988, 1992, 1999). Ewha master's **coursework** is described without claiming a conferred master's degree.
6. Metadata: `lang="es"`, `og:locale="es_419"`, canonical routes, Spanish article sitemap entries, and reciprocal `hreflang` for all three published story languages.

## Verified published Spanish editions
On 19 November 2026, the Spanish picture book was confirmed through actual Amazon.es item pages:
- Paperback `Grandes sueños de todos los colores`: `https://www.amazon.es/dp/B0HRZ54WMS`
- Kindle eBook: `https://www.amazon.es/dp/B0HRVXGBVR`
Spanish edition links are shown **before** English and German editions in the Spanish Books section. The Spanish homepage primary purchase CTA leads to the Spanish paperback. The cover displayed is the retail image returned by Amazon.es: `https://m.media-amazon.com/images/I/71s1fdCsbwL._SL1499_.jpg`.
Book marketplace URLs and cover should be retested during final release QA; no book price has been hardcoded.

## Checks performed
- Nine-route static HTML content/metadata/link tests added to `scripts/audit-es.mjs` and made mandatory in `npm run build`.
- Existing PT-BR audit, CSS guards, lint, TypeScript and Next.js static export remained intact.
- Local-only GitHub Actions browser screenshots captured for desktop and mobile home, Stories, Books, About and the two story detail pages. Layout was visually reviewed: warm original house opening, correct real Stories and About portraits, readable Spanish headings at desktop/mobile widths.
- The below-hero Spanish edition cover was verified in headless Chrome: external original Amazon image loaded successfully (naturalWidth=1000, naturalHeight=1499). Local-only browser run `44337130415` passed; no production deployment.
- A native Latin American Spanish editor has **not** independently proofread this work. Automated and internal editorial checks do not substitute for that acceptance gate.

## Outstanding publication gates
- Independent native-language literary proof for all Spanish text, with emphasis on the humor and family relationship terms.
- Live-browser/actual-device check of language menu, keyboard navigation, responsive overflow, remote edition cover and Amazon purchase links.
- Complete EN/KO regression audit and merged six-language review at final release head.
- **No interim deployment.** Only one production deployment after Japanese and all six language gates pass.

This is a staged internal review, not permission to merge.
