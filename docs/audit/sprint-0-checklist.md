# Sprint 0 — Audit & Baseline

Status: IN PROGRESS

Production visual behavior is frozen during this sprint. Sprint 0 may add documentation, audit scripts, tests, CI guardrails, proof-of-concept code, and reports, but must not intentionally redesign the public site.

## Exit criteria

### Required before refactor

- [x] Architecture Constitution v1.0 ratified and committed.
- [x] Route inventory complete, including language, redirect/canonical state, `stable | will-change` intent, and explicit `unknown` where external index state cannot be proven from repository/public search evidence.
- [ ] CSS override/dependency map complete.
- [x] Structural visual baseline complete at agreed viewports.
- [x] Performance baseline complete.
- [x] Accessibility baseline complete.
- [x] Design prohibitions and visual invariants extracted into an audit-readable document.
- [x] Component-boundary draft complete.
- [x] Guardrails prevent new unapproved non-module CSS and new/increased `!important` debt.

### Required before content migration

- [x] Content census complete: number of stories, books, collections, language variants, and current publication states.
- [x] Asset census baseline complete: file path, type, bytes, dimensions, duplicate hash, current source references, and known/unknown archive-master state. Unknown durable masters remain explicitly unresolved rather than guessed.
- [x] Existing/public/indexed URL inventory complete to the evidence currently available; repository-public URLs are inventoried and external search-index status is explicitly `unknown` without first-party Search Console evidence.
- [x] URL and redirect policy draft complete.
- [x] Story semantic schema draft complete.
- [x] Media semantic schema draft complete.
- [x] Consent/review policy draft complete.
- [x] Ownership and succession inventory complete with human-confirmation gaps explicitly recorded and no credentials committed.
- [ ] Sveltia CMS proof of concept completed.
- [ ] Keystatic proof of concept completed.
- [ ] CMS decision recorded by ADR after Esther publishing test.

### Can wait until later sprints

- Full media registry migration.
- Full archive checksum manifest.
- Production R2/Cloudflare Images migration.
- Search.
- Structured data expansion.
- Full accessibility remediation.
- Full CSS migration.
- Final art-direction polish.

## Sprint 0 operating rules

1. No intentional production visual redesign.
2. No new ad-hoc global CSS layer.
3. No new `!important` declaration.
4. Do not delete existing CSS merely because it looks obsolete until its actual route impact is known.
5. Do not change public URLs until URL inventory and redirect policy are complete and the implementation gate is explicitly opened.
6. Do not select a CMS before both proof-of-concepts are tested against the same real publishing task.
7. Do not add archival media without recording its provenance/review state during the audit period.
8. Findings may be documented immediately; production fixes wait unless they are security, data-loss, broken-navigation, or critical accessibility defects.

## Completed measurement layers

### Structural visual baseline

- 15 representative routes × 3 viewports = 45 captures.
- Accepted structural baseline preserves layout/typography proportions while neutralizing ordinary image content.
- 0px horizontal overflow was measured across all 45 captures.
- Real-media art direction remains a separate human-review track.

### Accessibility baseline

- 16 representative routes × 2 viewports = 32 axe scans.
- One confirmed automated violation family: `color-contrast`, concentrated in STORIES, Story detail, and CHILDHOOD.
- Korean `html lang` synchronization passed after deterministic waiting.
- Korean skip-link copy remains English without a language-of-parts declaration.
- Mobile menu opens by keyboard; Escape-to-close is not currently implemented.

### Performance baseline

- Lighthouse 13.4.1 measured HOME / STORIES / BOOKS / ESTHER in mobile and desktop modes.
- HOME mobile: score 66, LCP ~21.7s, transfer ~7.26 MB in the accepted local-CI observation.
- HOME desktop: score 96, LCP ~1.44s, transfer ~7.56 MB.
- The HOME mobile LCP node was the HERO H1, not the video element.
- The real-house HERO MP4 transferred ~2.15 MB in both observed modes.
- Shared shell assets are a major measured cost: favicon ~1.73 MB, globe ~1.09 MB, silver wordmark ~1.03 MB.

### Automated repository census

- 18 app page routes detected: 10 EN / 8 KO.
- 2 current Story detail routes, both EN-only.
- 49 public assets after rejected-sketch removal.
- 41 public images, all 41 dimension-readable by the current census.
- 0 images at or above 10 megapixels; the largest measured image dimensions are 2400×1800 (4.32 MP).
- 1 video asset: the protected HOME house-entry film.
- Missing production static references: 0 after narrow Story path repair.
- 29 CSS files under `src`.
- 17 root global CSS layers.
- 651 existing `!important` declarations; CI prevents that baseline from increasing.
- CI also prevents new unapproved non-module CSS files while allowing future co-located `*.module.css` files.

## Architecture/content documents completed in Sprint 0

- `docs/architecture/constitution-v1.md`
- `docs/architecture/component-boundaries.md`
- `docs/architecture/ownership-succession.md`
- `docs/design-principles/visual-invariants.md`
- `docs/content-model/url-policy.md`
- `docs/content-model/story-schema.md`
- `docs/content-model/media-schema.md`
- `docs/media-policy/consent-policy.md`
- `docs/audit/content-census.md`
- `docs/audit/media-provenance-inventory.md`

## Current audit observations

- The project has healthy build gates: dependency audit, lint, production build, repository census, CSS `!important` ratchet, and non-module CSS architecture guard.
- The global CSS import stack contains multiple historical refinement/override layers; a full selector/dependency ownership map is the remaining pre-refactor audit task.
- The current navigation data separates primary navigation and room links, while the mobile header manually assumes the first primary item is STORIES. This is a known S1 architecture target, not a Sprint 0 visual fix.
- The sitemap and Cloudflare root redirects currently require reconciliation: the sitemap includes `/` and `/ko/`, while `_redirects` sends those entries to `/home/` and `/ko/home/`. A URL-policy draft now proposes named HOME routes as canonical candidates, but production implementation remains gated.
- Exact duplicate delivery assets remain, including duplicated BOOKS cover PNGs, duplicated silver wordmarks, and the favicon/apple-icon binary. They are inventory findings, not automatic deletion instructions.
- The public delivery tree is not currently dominated by ultra-high-resolution photographs; measured performance debt is more strongly associated with inefficiently heavy shell/brand assets and route-specific delivery behavior.
- Durable Archive Master locations remain a human-confirmation gap. Repository manifests preserve useful source filenames/collections but do not prove preservation storage.
- Sveltia and Keystatic remain PoC candidates; neither is selected. Official current documentation shows Sveltia's non-technical GitHub OAuth flow still needs an authenticator service, while Keystatic's deployed Next admin requires server-side/API-route capability that does not fit the current pure static public app without a separate runtime.

## Review cadence

Sprint 0 is exit-criteria based. A review checkpoint should occur before the audit expands beyond useful scope. At that checkpoint, criteria may be reduced or reordered only through an explicit documented decision; unfinished critical ownership, URL, or archive-risk items may not be silently waived.
