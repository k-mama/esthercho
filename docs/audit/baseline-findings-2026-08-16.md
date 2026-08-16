# Sprint 0 Baseline Findings — 2026-08-16

Status: OBSERVATION BASELINE

Reference commit: `c1ba8c45442336160e69dab3a4f2209c8782240c`
Reference Quality run: #217

This document records measured conditions before architecture refactoring. It does not declare every current behavior desirable. Known defects are explicitly separated from intended design.

## 1. Route census

- App page routes detected from `src/app/**/page.tsx`: 18
- English page routes: 10
- Korean page routes: 8
- Story detail routes: 2
- Both current story detail routes are English-only.
- Production build generates 23 static routes when framework-generated routes such as sitemap, robots, not-found, and apple icon are included.

Known URL-policy issue:

- `sitemap.ts` currently includes `/` and `/ko/` as localized sitemap URLs.
- Cloudflare `_redirects` currently sends those entry points to `/home/` and `/ko/home/` with 302 redirects.
- Canonical entry policy must be decided before changing either side.

## 2. CSS census

Measured under `src/`:

- CSS files: 29
- Approximate CSS weight: 175.9 KB
- Root global CSS layers imported by `src/app/layout.tsx`: 17
- `!important` declarations: 651
- Files containing at least one `!important`: 18

Highest `!important` counts:

1. `src/styles/home-shell-polish.css` — 137
2. `src/styles/home-geometry-contrast.css` — 107
3. `src/styles/interface-finish.css` — 76
4. `src/styles/mobile-menu-glass.css` — 65
5. `src/styles/mobile-room-rhythm.css` — 59
6. `src/styles/remaining-room-interiors.css` — 57
7. `src/styles/mobile-room-balance.css` — 43
8. `src/styles/home-mobile-studio-fix.css` — 27
9. `src/styles/room-interiors.css` — 20
10. `src/app/page.module.css` — 19

Interpretation:

- The CSS debt is not hypothetical. The measured cascade confirms that the current visual system depends heavily on override layers.
- The existing appearance must be captured before structural CSS migration.
- New `!important` declarations should be prevented from increasing the baseline; existing declarations should be reduced only after component boundaries are agreed.

## 3. Delivery asset census

Public directory:

- Public assets: 50
- Images: 42
- Videos: 1
- Total public asset weight: 28.62 MB

Additional Next app-directory static asset:

- `src/app/apple-icon.png` — 1,816,816 bytes (~1.73 MB)

Largest public assets at baseline include:

- `public/brand/esther-cho-wordmark.png` — ~2.97 MB
- `public/media/covers/books-cover-final-20260802.png` — ~2.69 MB
- `public/media/home/esther-house-entry.mp4` — ~2.15 MB
- `public/media/esther/still-making-father-child-collage-20260802.png` — ~1.96 MB
- `public/media/covers/books-cover-2026-08.png` — ~1.89 MB
- `public/media/covers/books-cover-mobile-2026-08.png` — ~1.89 MB
- `public/favicon-esther-cho.png` — ~1.73 MB

The house-entry HERO video is a protected brand asset and is not a deletion candidate merely because it is large. Optimization decisions must preserve the desktop and mobile video experience.

## 4. Exact duplicate delivery assets

Exact SHA-256 duplicates currently detected:

- `public/media/covers/books-cover-2026-08.png` and `public/media/covers/books-cover-mobile-2026-08.png`
- `public/brand/esther-cho-monogram.png` and `public/brand/future-app/esther-cho-app-icon-gold-on-navy.png`
- `public/brand/esther-cho-wordmark-silver-refined.png` and `public/brand/esther-cho-wordmark-silver-transparent.png`
- `public/favicon-esther-cho.png` and `src/app/apple-icon.png`

These are inventory findings, not automatic deletion instructions. Each pair needs ownership/usage review before cleanup.

## 5. Confirmed production static-reference defect

One missing static asset URL remains after query-string normalization:

`/media/home/childhood-garden.jpg`

It is referenced by:

- `src/app/stories/my-father-dreamed-of-a-tiger/page.tsx`
- `src/app/stories/the-youngest-daughter-in-every-house/page.tsx`

The intended archival photograph still exists at:

`/media/esther/childhood-garden.jpg`

This is classified as an old-path migration residue, not a missing source photograph.

The defect should not be treated as desired baseline behavior. A narrow integrity correction is permitted before the long-term Story component migration, provided it changes only the broken path and not layout/copy/art direction.

## 6. Rejected media still physically present

`public/media/esther/hand-drawn-story.jpg` is still physically present in the public asset tree even though it is not used by production source code and has been editorially rejected for future use.

It must not be ingested into the future canonical media registry. Removal from public delivery should be handled as asset hygiene, not as a visual redesign.

## 7. Audit automation now in CI

`npm run audit:census` now produces:

- `.reports/sprint0-census.json`
- `.reports/sprint0-census.md`
- `.reports/sprint0-asset-integrity.json`
- `.reports/sprint0-asset-integrity.md`

The Quality workflow uploads these as the `sprint0-census` artifact with 14-day retention.

The generated reports are ignored by Git and are not part of production output.

## 8. Immediate Sprint 0 priorities after this baseline

1. Capture structural visual baseline before CSS ownership migration.
2. Establish a CI guardrail that prevents the `!important` baseline from increasing.
3. Perform the narrow broken Story asset-path correction before Story vertical-slice work.
4. Remove or quarantine explicitly rejected/unowned public media before media-registry ingestion.
5. Complete URL/canonical/indexed-route policy inventory before route restructuring.
6. Continue asset census with dimensions and provenance/master-status fields before deciding any R2 migration threshold.

## 9. What this baseline does not authorize

This baseline does not authorize:

- visual redesign,
- HOME HERO replacement,
- large-scale asset deletion,
- CSS consolidation before visual references exist,
- CMS selection,
- Story URL changes,
- R2 migration.

Those remain governed by the Architecture Constitution and Sprint exit criteria.
