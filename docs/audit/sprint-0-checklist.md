# Sprint 0 — Audit & Baseline

Status: IN PROGRESS

Production visual behavior is frozen during this sprint. Sprint 0 may add documentation, audit scripts, tests, CI guardrails, proof-of-concept code, and reports, but must not intentionally redesign the public site.

## Exit criteria

### Required before refactor

- [x] Architecture Constitution v1.0 ratified and committed.
- [ ] Route inventory complete, including language, index state, redirect/canonical state, and `stable | will-change` intent.
- [ ] CSS override/dependency map complete.
- [ ] Structural visual baseline complete at agreed viewports.
- [ ] Performance baseline complete.
- [ ] Accessibility baseline complete.
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

## Current audit observations

- The project already has healthy build gates: dependency audit, lint, and production build.
- The global CSS import stack contains multiple historical refinement/override layers; this is an audit target, not yet a deletion target.
- The current navigation data separates primary navigation and room links, while the mobile header manually assumes the first primary item is STORIES. This is a known S1 architecture target, not a Sprint 0 visual fix.
- The sitemap and Cloudflare root redirects currently require reconciliation: the sitemap includes `/` and `/ko/`, while `_redirects` sends those entries to `/home/` and `/ko/home/`. Record first; decide canonical policy before changing either file.

## Review cadence

Sprint 0 is exit-criteria based. A review checkpoint should occur before the audit expands beyond useful scope. At that checkpoint, criteria may be reduced or reordered only through an explicit documented decision; unfinished critical ownership, URL, or archive-risk items may not be silently waived.
