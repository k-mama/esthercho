# Sprint 0 — Audit & Baseline

Status: IN PROGRESS

Production visual behavior is frozen during this sprint. Sprint 0 may add documentation, audit scripts, tests, CI guardrails, proof-of-concept code, and reports, but must not intentionally redesign the public site.

## Exit criteria

### Required before refactor

- [x] Architecture Constitution v1.0 ratified and committed.
- [ ] Route inventory complete, including language, index state, redirect/canonical state, and `stable | will-change` intent.
- [ ] CSS override/dependency map complete.
- [x] Structural visual baseline complete at agreed viewports.
- [x] Performance baseline complete.
- [x] Accessibility baseline complete.
- [ ] Design prohibitions and visual invariants extracted into an audit-readable document.
- [ ] Component-boundary draft complete.
- [ ] Guardrails prevent new override-debt global CSS and new `!important` debt.

### Required before content migration

- [ ] Content census complete: number of stories, books, collections, language variants, and current publication states.
- [ ] Asset census complete: file path, type, bytes, dimensions where available, duplicate hash, current usage, and whether an archive master is known.
- [ ] Existing/public/indexed URL inventory complete.
- [ ] URL and redirect policy draft complete.
- [ ] Story semantic schema draft complete.
- [ ] Media semantic schema draft complete.
- [ ] Consent/review policy draft complete.
- [ ] Ownership and succession inventory complete or unresolved items explicitly recorded.
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
5. Do not change public URLs until URL inventory and redirect policy are complete.
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
- 651 existing `!important` declarations; CI currently prevents that baseline from increasing.

## Current audit observations

- The project already has healthy build gates: dependency audit, lint, and production build.
- The global CSS import stack contains multiple historical refinement/override layers; this is an audit target, not yet a deletion target.
- The current navigation data separates primary navigation and room links, while the mobile header manually assumes the first primary item is STORIES. This is a known S1 architecture target, not a Sprint 0 visual fix.
- The sitemap and Cloudflare root redirects currently require reconciliation: the sitemap includes `/` and `/ko/`, while `_redirects` sends those entries to `/home/` and `/ko/home/`. Record first; decide canonical policy before changing either file.
- Exact duplicate delivery assets remain, including duplicated BOOKS cover PNGs, duplicated silver wordmarks, and the favicon/apple-icon binary. They are inventory findings, not automatic deletion instructions.
- The public delivery tree is not currently dominated by ultra-high-resolution photographs; measured performance debt is more strongly associated with inefficiently heavy shell/brand assets and route-specific delivery behavior.

## Review cadence

Sprint 0 is exit-criteria based. A review checkpoint should occur before the audit expands beyond useful scope. At that checkpoint, criteria may be reduced or reordered only through an explicit documented decision; unfinished critical ownership, URL, or archive-risk items may not be silently waived.
