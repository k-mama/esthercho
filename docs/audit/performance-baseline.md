# Performance Baseline v1

Status: ACCEPTED FOR SPRINT 0

Accepted source commit: `f495ac7ff7e66f22802750baf3fe225a870e3834`
Performance Baseline workflow run: `#1` (`31924961056`)
Artifact ID: `9257564512`
Artifact retention: 30 days
Lighthouse: `13.4.1`
Runner: GitHub-hosted Ubuntu 24.04, Node 24.18.0, Google Chrome

## Purpose

This baseline measures the locally served production static export before performance work. It is not a live Cloudflare Pages measurement and it is not yet a pass/fail performance budget.

GitHub-hosted runners and Lighthouse simulation introduce measurement noise. The values below are directional evidence for prioritization and future comparison, not contractual thresholds.

The real-house HOME video remains a protected brand asset. Performance work must improve its delivery without replacing the HOME experience with a static hero.

## Scenario matrix

Four representative routes were measured in Lighthouse mobile and desktop modes.

| Route | Mode | Performance | FCP | LCP | TBT | CLS | Speed Index | Transfer | Requests |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| HOME | mobile | 66 | 1503 ms | 21678 ms | 358 ms | 0 | 2786 ms | 7.26 MB | 26 |
| HOME | desktop | 96 | 324 ms | 1440 ms | 0 ms | 0 | 470 ms | 7.56 MB | 44 |
| STORIES | mobile | 79 | 1502 ms | 5703 ms | 37 ms | 0 | 1502 ms | 4.89 MB | 26 |
| STORIES | desktop | 97 | 363 ms | 1243 ms | 0 ms | 0 | 363 ms | 4.83 MB | 48 |
| BOOKS | mobile | 77 | 1355 ms | 6390 ms | 55 ms | 0 | 1355 ms | 4.65 MB | 24 |
| BOOKS | desktop | 84 | 324 ms | 2844 ms | 0 ms | 0 | 324 ms | 4.75 MB | 48 |
| ESTHER | mobile | 86 | 1504 ms | 4131 ms | 52 ms | 0 | 1504 ms | 4.84 MB | 28 |
| ESTHER | desktop | 98 | 365 ms | 1174 ms | 0 ms | 0 | 365 ms | 4.88 MB | 50 |

## HOME video observation

The HERO MP4 was requested and fully transferred in both observed modes:

- mobile: ~2.15 MB transferred
- desktop: ~2.15 MB transferred

This confirms that the current `preload="auto"` behavior is materially part of first-visit transfer cost.

The video is not the only major transfer cost.

## Shared brand-asset finding

Across HOME, STORIES, BOOKS, and ESTHER, three shared brand/shell assets dominate non-content transfer:

- `/favicon-esther-cho.png?v=20260813-1948` — ~1.73 MB transferred
- `/brand/esther-language-globe-silver-transparent.png` — ~1.09 MB
- `/brand/esther-cho-wordmark-silver-refined.png` — ~1.03 MB

Together these three requests are roughly 3.85 MB before route-specific photography and scripts.

This explains why non-HOME representative pages still transfer roughly 4.6–4.9 MB despite having no HERO video.

The favicon is also an exact duplicate of `src/app/apple-icon.png` in the current asset-integrity census, so the same ~1.73 MB binary exists in two source locations.

## HOME mobile LCP finding

In the accepted mobile HOME Lighthouse report, the LCP node is the HERO heading:

`A house of stories, built from memory.`

It is not the video element.

Therefore the 21.7s simulated mobile LCP cannot be addressed by deleting or replacing the video alone. Future investigation must include:

- hero text/font rendering and font availability,
- poster/LCP sequencing,
- video preload policy,
- shared shell/brand asset transfer,
- main-thread blocking during the simulated mobile run.

The accepted report should be used to compare future experiments rather than assuming a single cause from the score alone.

## Largest HOME mobile requests

1. real-house HERO MP4 — ~2.15 MB
2. favicon — ~1.73 MB
3. language globe — ~1.09 MB
4. silver wordmark — ~1.03 MB
5. childhood garden photo — ~355 KB
6. largest JS chunk observed — ~224 KB
7. morning table photo — ~160 KB
8. next JS chunk observed — ~157 KB
9. HOME poster — ~141 KB

The strongest low-risk optimization candidates are currently the oversized shell/brand PNGs, because reducing them does not alter Esther's narrative content or remove the HERO film.

## Baseline interpretation

Priority order for later performance work should be tested, not assumed. A sensible experiment sequence is:

1. optimize favicon / globe / wordmark delivery without visual change,
2. investigate HOME poster and text/font LCP path,
3. change video preload strategy and measure again,
4. produce a mobile-appropriate video encoding while preserving the same film,
5. establish responsive editorial image delivery after the Photo system exists.

No production optimization is authorized by this document during the audit-only phase.

## What this baseline does not prove

It does not prove live Cloudflare latency, cache behavior, or Core Web Vitals for real users.

It does not justify removing the HOME video.

It does not establish final performance budgets.

It does establish that current first-load transfer is large, that common brand PNGs are a major contributor across routes, and that HOME mobile is the most urgent measured performance path in this matrix.
