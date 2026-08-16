# Structural Visual Baseline v1

Status: ACCEPTED FOR SPRINT 0

Accepted source commit: `40dd83b0f45099c9e29c5c656e3cc97a1582339f`
Visual Baseline workflow run: `#3` (`31924329897`)
Artifact ID: `9257372452`
Artifact name: `visual-structural-40dd83b0f45099c9e29c5c656e3cc97a1582339f`
Artifact retention: 30 days
Artifact compressed size: ~7.7 MB

## Purpose

This baseline exists to protect layout, typography, spacing, responsive structure, and gross geometry while the architecture is refactored.

It is not the final art-direction reference for photographic crop, focal point, color, or emotional image sequencing.

## Coverage

15 representative routes are captured at three widths:

- mobile: 390 × 844
- tablet: 768 × 1024
- desktop: 1440 × 1000

Routes:

- HOME EN / KO
- STORIES EN / KO
- one published Story detail
- MORNING TABLE EN / KO
- CHILDHOOD EN / KO
- BOOKS EN / KO
- STUDIO EN / KO
- ESTHER EN / KO

Total captures: 45.

## Determinism strategy

- Motion and transitions are disabled in the capture environment.
- Video payloads are blocked and the video surface is represented by a neutral poster.
- Standard HTML image elements are replaced after their intrinsic aspect ratios are known, using neutral placeholders whose maximum edge is normalized to 256px.
- Static imagery rendered through cover/background presentation layers may remain visible. These files are immutable build assets and do not introduce timing variance, but they mean this baseline is not a fully media-free pixel fixture.
- Fonts are awaited before capture.
- Captures run in the same Ubuntu/Chromium CI environment.

## Measured result

All 45 captures reported horizontal overflow of 0px.

This is a baseline observation, not a guarantee that every current page is visually ideal or fully accessible.

## Human sample review

The following samples were manually opened after workflow completion:

- HOME EN mobile
- HOME EN desktop
- STORIES EN desktop
- ESTHER KO mobile

The samples preserved expected logo/media proportions and page rhythm after the neutral-placeholder correction. An earlier run that replaced every image with a square placeholder was rejected and is not a valid baseline.

## Artifact policy

The screenshots are not committed to the production repository. They are stored as workflow artifacts so the application repository does not accumulate binary visual history.

The machine-readable metrics and this acceptance record are the durable repository evidence.

A future editorial reference track will preserve a much smaller set of real-media views for human art-direction review. It is separate from this structural baseline.

## Use during refactoring

Before accepting a structural CSS or component migration:

1. capture the same route/viewport set,
2. compare structural metrics and representative images,
3. explain intentional differences,
4. reject unexplained overflow, typography, header, or major spacing regressions.

The baseline may be replaced only by an explicitly accepted successor after intentional design or architecture changes.
