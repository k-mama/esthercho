# Eight-Language Website — Internal Integration QA
Date: 2026-11-19
Branch: `feature/multilingual-foundation-20261118`
**Production state: UNCHANGED. NO DEPLOYMENT AUTHORIZED.**

## Scope
English and Korean legacy sites plus six proposed locales (German, Brazilian Portuguese, Spanish, French, Italian, Japanese). The site uses **56 primary pages** (7 rooms × 8 languages) and **14 complete published memoir articles** (2 stories × 7 languages; Korean does not currently have independent long-form story routes).

## Automated tests
- Build: Next.js static export, lint, CSS architecture guard, six separate nine-page locale audits.
- Explicit HTML language correction, including the Korean `/ko/home/` alias: 62 non-English static pages patched.
- Strict integrated script `scripts/audit-integrated-release.mjs` verifies the 70 target pages, canonical URLs, reciprocal `hreflang`, article-preserving language switch, real author-portrait asset references, and local media file existence.
- Passing Quality run after integration: `44365004495`. German desktop/mobile QA: `44365004366`.
- The English/Korean base page source text and image assets are preserved. Metadata-only additions were made to 14 existing main-page files so search engines can discover all eight languages.
- The global Korean-selector/font collision was corrected. The Japanese font issue was tested separately.

## Product and publishing truth
- German book: prioritize verified `Große Träume in allen Farben` paperback URL on German home and Books. Spanish Books and home prioritize the verified Spanish paperback / Kindle pages. Other locales advertise only known editions, not imaginary books.
- Devotional manuscript `Manna on the Table` remains work in progress.
- Author biography preserves actual educational credentials and original family memories. Old photographs remain old photographs.

## Release blockers
1. Independent native editorial proofreading for all six languages is not complete.
2. Physical-device, keyboard accessibility, full-scroll, retailer checkout-page and end-to-end navigation tests remain.
3. German retail cover already loaded in unpublished Chrome (`44365696373`); retest the external image during the physical-device buying journey.
4. Final comparison of asset integrity and changes to English/Korean and consolidated branch CI required.

**One production merge/deployment may be considered only after every blocker is resolved and the owner authorizes release.**
