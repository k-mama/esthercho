# CSS Layer & Route Dependency Map — Sprint 0

Status: COMPLETE PRE-REFACTOR BASELINE

Accepted CSS Dependency Audit run: `#2` (`31926110971`)
Accepted source commit: `8feccb6ac8646793ca63b64b6f5bc5d4fc6839db`
Artifact ID: `9257878974`

This document records the current cascade and measured route impact before S2 migration. It is descriptive, not a deletion plan.

## 1. Root global import order

The root layout currently imports global CSS in this order:

1. `tokens.css`
2. `global.css`
3. `korean.css`
4. `shell-redteam.css`
5. `home-shell-polish.css`
6. `home-geometry-contrast.css`
7. `home-video-lock.css`
8. `home-mobile-studio-fix.css`
9. `mobile-menu-glass.css`
10. `desktop-subnav-hover.css`
11. `room-interiors.css`
12. `room-photo-composition.css`
13. `remaining-room-interiors.css`
14. `room-exits.css`
15. `mobile-room-balance.css`
16. `mobile-room-rhythm.css`
17. `interface-finish.css`

Later files can override earlier declarations, so import order is part of current production behavior until S2 proves an equivalent owner-based result.

## 2. Measured cascade size

Across the accepted audit:

- non-module CSS files scanned: 26
- CSS Modules excluded from source-selector matching: 3
- non-module selector rules extracted: 724
- queryable after state/pseudo-element normalization: 722
- current-route zero-match candidates: 33
- selectors matching exactly one audited route: 34
- stateful/pseudo-element selectors: 121
- invalid/unqueryable normalized selectors: 2
- current `!important` declarations across all source CSS: 651
- root global CSS layers: 17

The three CSS Modules are already explicit owners and were deliberately excluded from source-selector DOM matching because their class names are hashed in production:

- `src/app/books/books.module.css`
- `src/app/home-polish.module.css`
- `src/app/page.module.css`

## 3. Measured non-module route-impact matrix

| File | Rules | Audited routes touched | Zero-match candidates | One-route rules | Stateful rules |
| --- | ---: | ---: | ---: | ---: | ---: |
| `src/styles/global.css` | 55 | 18 | 15 | 0 | 10 |
| `src/components/page-cover.css` | 35 | 12 | 7 | 0 | 9 |
| `src/components/section-placeholder.css` | 3 | 0 | 3 | 0 | 0 |
| `src/app/archive/archive.css` | 47 | 2 | 2 | 0 | 1 |
| `src/styles/shell-redteam.css` | 28 | 18 | 2 | 0 | 3 |
| `src/app/about/about.css` | 51 | 2 | 1 | 8 | 0 |
| `src/app/notes/notes.css` | 46 | 2 | 1 | 8 | 7 |
| `src/styles/home-shell-polish.css` | 46 | 4 | 1 | 0 | 19 |
| `src/styles/interface-finish.css` | 37 | 18 | 1 | 0 | 11 |
| `src/app/stories/stories.css` | 64 | 2 | 0 | 7 | 3 |
| `src/styles/room-interiors.css` | 44 | 6 | 0 | 0 | 9 |
| `src/styles/mobile-menu-glass.css` | 36 | 18 | 0 | 0 | 16 |
| `src/styles/remaining-room-interiors.css` | 31 | 6 | 0 | 0 | 12 |
| `src/app/archive/archive-luminous.css` | 29 | 2 | 0 | 10 | 7 |
| `src/app/stories/my-father-dreamed-of-a-tiger/story-detail.css` | 29 | 2 | 0 | 1 | 2 |
| `src/app/studio/studio.css` | 26 | 2 | 0 | 0 | 0 |
| `src/styles/home-geometry-contrast.css` | 25 | 2 | 0 | 0 | 9 |
| `src/styles/mobile-room-rhythm.css` | 24 | 12 | 0 | 0 | 0 |
| `src/styles/mobile-room-balance.css` | 19 | 12 | 0 | 0 | 0 |
| `src/styles/room-photo-composition.css` | 17 | 6 | 0 | 0 | 0 |
| `src/styles/room-exits.css` | 14 | 10 | 0 | 0 | 1 |
| `src/styles/korean.css` | 7 | 8 | 0 | 0 | 0 |
| `src/styles/desktop-subnav-hover.css` | 6 | 18 | 0 | 0 | 2 |
| `src/styles/home-mobile-studio-fix.css` | 3 | 2 | 0 | 0 | 0 |
| `src/styles/home-video-lock.css` | 1 | 4 | 0 | 0 | 0 |
| `src/styles/tokens.css` | 1 | 18 | 0 | 0 | 0 |

## 4. Zero-match candidates: classification, not deletion

The accepted audit found 33 current-route zero-match candidates. They fall into different categories.

### High-confidence dead/retired candidates

These deserve first review in S2 because their owning UI appears retired from the current route set:

- `src/components/section-placeholder.css`
  - `.section-placeholder`
  - `.section-placeholder-title`
  - `.section-placeholder-description`
- `src/styles/shell-redteam.css`
  - `.site-header-nav-mobile-room-start`
  - `body:has(.home-video-hero, .page-cover-shell) .site-header-nav-mobile-room-start`

The second group corresponds to an older mobile-menu structure that was replaced by the nested STORIES submenu.

### Likely retired footer/source-shell selectors

`src/styles/global.css` currently contains multiple zero-match footer selectors, including:

- `.site-footer-grid`
- `.site-footer-kicker`
- `.site-footer-credit`
- `.site-footer-roles`
- `.site-footer-maker-identity`
- `.site-footer-amazon-link` variants
- `.site-footer-creator-line` variants

These are strong cleanup candidates but must still be compared with the actual current Footer component before deletion.

### Dormant component variants, not automatically dead

`src/components/page-cover.css` has seven current-route zero matches around the `page-cover--center` variant and `page-cover-followup` structure.

A variant can be valid even when no current route instantiates it. S1/S2 must decide whether it is an intentionally supported component capability or obsolete design debt.

### State/test limitations

A structural presence audit does not prove stateful CSS is unused. For example, raw `:focus-visible` or current-route `aria-current` conditions can report zero in a neutral page state even though the style is required during interaction.

The audit deliberately normalizes many hover/focus/pseudo-element selectors, but state-specific behavior still requires keyboard/pointer tests before deletion.

### Page-local structural candidates

Additional zero-match candidates exist in:

- `archive.css` — 2
- `about.css` — 1
- `notes.css` — 1
- `home-shell-polish.css` — 1
- `interface-finish.css` — 1

These are not deleted during Sprint 0. They become individually reviewable S2 migration candidates.

## 5. Ownership implications

The measurements confirm the architectural diagnosis:

- `global.css`, `shell-redteam.css`, `mobile-menu-glass.css`, `desktop-subnav-hover.css`, and `interface-finish.css` touch nearly the whole site and therefore form a high-risk shell cascade.
- HOME behavior is distributed across `home-shell-polish`, `home-geometry-contrast`, `home-video-lock`, `home-mobile-studio-fix`, CSS Modules, and final global finishing rules.
- room-level behavior is distributed across `room-interiors`, `remaining-room-interiors`, `room-photo-composition`, `room-exits`, `mobile-room-balance`, and `mobile-room-rhythm`.
- Korean typography currently acts as a later override layer rather than an equal EN/KO typography architecture.
- several page CSS files already touch only their expected EN/KO route pairs, making them safer candidates for later co-located module migration than the global shell layers.

## 6. Long-term owner map

| Current source | S1/S2 destination owner |
| --- | --- |
| `tokens.css` | global design-token layer |
| `global.css` base/reset rules | future reset/base layers |
| `korean.css` | equal `typography.ko.css` sibling to EN system |
| header/nav portions of global/shell/mobile/desktop files | `SiteHeader` / `LanguageSwitch` modules |
| `page-cover.css` | `PageCover` module |
| archival photo composition | future `Photo` / gallery / owning templates |
| Story detail typography/layout | `StoryBody` + `StoryTemplate` |
| HOME film behavior | `HouseVideo` |
| HOME sequence/layout | `HomeTemplate` |
| shared room rhythm | constrained room/template primitives |
| room-specific narrative composition | owning room/template module |
| `interface-finish.css` | dismantle late after owners have absorbed intentional behavior |

Shared grammar must not collapse every room into one identical template.

## 7. Migration risk order

### Lower-risk early S2 candidates

- confirmed dead selectors/components after source verification,
- page-local selectors with a clear owner,
- duplicated rules whose destination owner is already proven by the S1 vertical slice.

### Medium-risk

- room photo/rhythm layers,
- Korean typography split,
- room-exit behavior.

### Highest-risk / migrate late

- `global.css` shell behavior,
- `shell-redteam.css`,
- `mobile-menu-glass.css`,
- `desktop-subnav-hover.css`,
- HOME global correction layers,
- `interface-finish.css`.

`interface-finish.css` remains a late migration target because it can encode compensations for earlier layers.

## 8. Guardrails now active

Two CI ratchets prevent the cascade from worsening while migration is pending:

- existing `!important` baseline may decrease but may not increase,
- new `*.module.css` files are allowed, while new unapproved non-module CSS files fail Quality.

This preserves a path toward component ownership without allowing another generation of global fix files.

## 9. What is intentionally deferred to S2

The Sprint-0 dependency map is now sufficient to begin architecture work, but the following are best measured per migration unit rather than as another global audit project:

- declaration-level duplicate-property analysis,
- specificity graph/conflict tracing,
- media-query consolidation,
- token/value normalization,
- exact cascade winner tracing for every property.

Those analyses become useful only after the S1 component boundary/vertical slice names the destination owner. Performing them globally now would create large reports with little decision value.

## 10. Refactor acceptance rule

No selector/file is removed merely because this audit reports zero matches.

Every S2 migration unit must have:

1. a named destination owner,
2. source verification for any dead-code deletion,
3. comparison against the accepted structural visual baseline,
4. keyboard/accessibility checks where interaction is involved,
5. lint/build/Quality success,
6. an independently reversible change,
7. no increase in CSS debt baselines.

With the accepted route-impact audit, the Sprint-0 CSS override/dependency-map requirement is considered complete.
