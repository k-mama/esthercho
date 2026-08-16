# CSS Layer Map — Sprint 0

Status: INITIAL INVENTORY

This document records the current global import stack before refactoring. It is descriptive, not prescriptive. No file should be deleted merely because its name suggests debt; actual selector impact must be measured before migration.

## Current import order

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

Because later files can override earlier declarations, import order is currently part of the visual behavior and must be preserved until migration proves an equivalent result.

## Initial role classification

| File | Current apparent role | Long-term target | Risk before measurement |
| --- | --- | --- | --- |
| `tokens.css` | design tokens | keep/consolidate | low |
| `global.css` | global shell/base | split toward reset/base | high |
| `korean.css` | Korean typography override | replace with equal sibling typography system | high |
| `shell-redteam.css` | shell corrective overrides | absorb into shell components/base | high |
| `home-shell-polish.css` | HOME shell overrides | absorb into Home/Header modules | high |
| `home-geometry-contrast.css` | HOME spatial/palette override | absorb into Home template/tokens | high |
| `home-video-lock.css` | HERO behavior protection | absorb into HouseVideo/Home module | very high |
| `home-mobile-studio-fix.css` | HOME mobile correction | eliminate through component ownership | high |
| `mobile-menu-glass.css` | mobile navigation implementation | SiteHeader module | very high |
| `desktop-subnav-hover.css` | desktop subnav behavior | SiteHeader module | very high |
| `room-interiors.css` | shared room visual language | room primitives/tokens | high |
| `room-photo-composition.css` | shared photo composition | Photo/Gallery/room modules | high |
| `remaining-room-interiors.css` | later room overrides | dissolve into approved owners | high |
| `room-exits.css` | room-to-footer transitions | template/room modules | medium |
| `mobile-room-balance.css` | responsive photo/layout corrections | colocated component/template media rules | high |
| `mobile-room-rhythm.css` | responsive type/spacing corrections | typography + template modules | high |
| `interface-finish.css` | final global finishing overrides | dissolve last after ownership migration | very high |

## Known architectural symptoms

- The stack contains multiple names that describe correction rather than ownership: `redteam`, `polish`, `contrast`, `lock`, `fix`, `remaining`, `balance`, `finish`.
- Mobile behavior is often separated from the component it modifies.
- Korean typography currently follows an override model rather than an equal sibling model.
- Header behavior is spread across shell/global CSS plus dedicated mobile and desktop corrective files.
- HOME behavior is distributed across page CSS/module CSS and multiple global override layers.
- `interface-finish.css` is imported last, so it can silently become the final source of truth regardless of earlier ownership.

## Measurement work still required

This inventory is not yet the completed dependency map. Sprint 0 must still determine:

- selector count per file
- `!important` count per file
- selectors with zero matches on all audited routes
- selectors matching only one component/page
- duplicate property declarations across layers
- specificity conflicts
- media-query overlap
- `:root` or token redefinitions outside the token layer
- global selectors that should become component ownership
- route-by-route files that materially affect layout/typography/navigation

## Migration rule

No visual rewrite is authorized by this document.

Each later migration unit must have:

1. a named destination owner (component/template/global base),
2. a structural or editorial visual baseline,
3. lint/build checks,
4. an independently reversible change,
5. no increase in `!important` debt.

`interface-finish.css` should be dismantled late, not first, because it currently has the highest probability of containing declarations that compensate for earlier layers.
