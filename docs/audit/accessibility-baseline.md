# Accessibility Baseline v1

Status: ACCEPTED FOR SPRINT 0

Accepted source commit: `5b9a736c132cbf8fd39c61fc7c0be24ebe1b1f78`
Accessibility Baseline workflow run: `#2` (`31924750718`)
Artifact ID: `9257494139`
Artifact retention: 30 days

## Purpose

This document records the current accessibility state before architecture and CSS migration. Existing findings do not yet fail production CI. The baseline exists so later work cannot accidentally erase known behavior or claim accessibility based on visual impression alone.

Automated scanning is only one layer. Keyboard, focus visibility, motion, screen-reader semantics, language-of-parts, and cognitive usability still require manual review.

## Coverage

16 representative routes were scanned at:

- mobile: 390 × 844
- desktop: 1440 × 1000

Total axe scans: 32.

The scan is limited to WCAG A/AA rules represented by these axe tags:

- `wcag2a`
- `wcag2aa`
- `wcag21a`
- `wcag21aa`
- `wcag22aa`

HOME video media payloads are blocked during the audit so the poster/static interface can be evaluated deterministically.

## Automated WCAG result

Unique automatically detected violation rules: 1.

The rule is:

- `color-contrast` — serious

Measured across the full route/viewport matrix:

- violation occurrences: 12
- violating nodes across repeated route/viewport scans: 108

The 108 nodes are not 108 independent design systems. They are repeated uses of a smaller group of selectors concentrated in:

- STORIES landing EN / KO
- the two current English Story detail pages
- CHILDHOOD EN / KO

No automatically detectable WCAG A/AA violations were reported in this baseline for:

- HOME EN / KO
- MORNING TABLE EN / KO
- BOOKS EN / KO
- STUDIO EN / KO
- ESTHER EN / KO

This does not mean those pages are fully accessible; it means no violation was automatically detected by the selected axe rules in this scan.

## Representative contrast findings

Examples from the baseline:

- STORIES small blue kicker: approximately 4.36:1 on ivory, below the required 4.5:1 for the measured text size.
- STORIES large pale story number: approximately 1.58:1 on ivory, below the 3:1 threshold applied to that large text.
- CHILDHOOD figure caption: approximately 3.68:1, below 4.5:1.
- Story detail tag text: approximately 4.09:1, below 4.5:1.

The future correction should adjust the relevant semantic color tokens/selectors, not add one-off page patches.

## Language and document structure

After waiting for client-side language synchronization, no `html lang` mismatch remained in the accepted baseline.

All scanned pages retained the expected single H1 / single main-page structure under the custom checks.

One bilingual UI issue remains:

- Korean pages render the skip link text `Skip to main content` without declaring that small phrase as English.
- This appears in 7 KO routes × 2 viewports = 14 structural observations.

Long-term resolution should localize the skip-link label as part of the equal EN/KO shell architecture rather than patching individual pages.

## Keyboard observations

On HOME EN and HOME KO mobile:

- first Tab focus reaches the skip link,
- the mobile menu opens with keyboard Enter,
- the opened menu is visible,
- the first Tab after opening moves to STORIES / 이야기,
- the open mobile menu produced 0 axe violations in the scoped scan,
- Escape does not currently close the mobile menu.

Escape-to-close is recorded as a keyboard UX improvement target. It is not being patched during the audit-only phase.

## Incomplete / manual-review findings

Axe reported 58 incomplete occurrences requiring human judgment across the matrix. Repeated rule families include:

- `color-contrast`
- `link-in-text-block`
- `aria-prohibited-attr`

Incomplete results are not treated as confirmed failures or silently ignored. They remain part of the manual-review queue.

## Sprint implications

Before final accessibility sign-off, the project must:

1. correct the repeated contrast token/selector families,
2. localize the KO skip link,
3. define and test Escape behavior for the mobile menu,
4. manually inspect incomplete findings,
5. verify visible focus states in real media contexts,
6. test reduced-motion behavior and the HOME video control,
7. perform a screen-reader semantics pass after the S1/S2 component architecture is stable.

These are measured debts, not permission to add new visual override layers. Corrections must follow the Architecture Constitution and the future component/token boundaries.
