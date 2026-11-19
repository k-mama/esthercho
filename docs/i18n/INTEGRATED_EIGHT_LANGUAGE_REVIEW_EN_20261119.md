# Esther Cho Website — Eight-Language Integrated Staging Review

Date: 19 November 2026
Branch: `feature/multilingual-foundation-20261118`
Release decision: **HOLD — NOT DEPLOYED**

## Scope and completed checks
- English and Korean original site, plus German, Brazilian Portuguese, Latin American Spanish, French, Italian and Japanese.
- 56 main pages (7 per language) and 14 published memoir detail pages (2 each in EN, DE, PT-BR, ES, FR, IT and JA), for **70 page routes**.
- All six prospective languages have home + Stories, Books, Studio, Esther, Morning Table and Childhood rooms and two translated full narrative stories.
- Every locale's HTML lang, canonical URL, reciprocal hreflang alternatives, story-to-story path preservation, and local media presence passed the integrated static-export audit.
- Real author and childhood photographs are preserved; the English and Korean homepage and original Stories/About photographs remain in place.
- German publication purchase CTA points to verified paperback `B0HRS6F2MH`; Spanish paperback `B0HRZ54WMS` and Kindle `B0HRVXGBVR` are linked only where verified. English original `B0HQ9Z7SRD` remains available. No unverified edition was invented.
- `Manna on the Table` remains described as an unpublished devotional manuscript in progress.

## Actual CI results at release-candidate staging SHA
Staging commit: `161e4a6665bae412bac5bae297cfab40a2bedf61`.
- GitHub Actions Quality run `44454661383`: **SUCCESS** (lint, CSS architecture and important guards, romanization guard, dependency audit, Next.js build).
- Eight-language staging browser run `44454661382`: **SUCCESS**.
- Integrated static build: **56 main + 14 article pages passed**. The export also emits extra utility pages not counted in the 70-route editorial target.
- German, PT-BR, ES, FR, IT, JA individual 9-page audits remained active and passed.

## Defect found and corrected during visual review
The original Korean homepage and Korean navigation initially showed blank-box glyphs in the Linux headless screenshot, even though automated tests returned success. The root issue was insufficient Korean font availability in that browser environment. A Korean-only Noto Sans KR webfont with system CJK fallbacks was added to `src/styles/korean.css`, without replacing the original English design or author photos. The regenerated **desktop/mobile Korean home and desktop Korean Stories** screenshots now display proper Korean characters. The Japanese and English main pages were checked again and remain readable. Evidence: browser run `44454661382`.

This illustrates why an automated pass alone is not sufficient for release approval.

## Publication blockers and required user-facing safety checks
1. Independent native-language literary proofreading of all six new languages. Internal model review is not equivalent.
2. Actual-device end-to-end QA, including menu interaction, keyboard accessibility, 320–430px mobile widths, full-page scrolling, video playback, remote book cover fetches, and marketplace purchase URL clicks.
3. Complete page-by-page EN/KO content and layout regression sign-off, not only first-view images.
4. Final release-branch diff review, international SEO/structured-data and external-links verification, and explicit owner approval.
5. Only after these checks: **one single merge to `main`** and one production verification. Do not deploy language-by-language or represent the staging URLs as live.

The release gate remains **HOLD**. No production change is authorized by this document.
