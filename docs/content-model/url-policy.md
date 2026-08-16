# Esther Cho Website — URL & Redirect Policy Draft

Status: SPRINT-0 DRAFT — NO PRODUCTION ROUTE CHANGE AUTHORIZED

This policy exists before content migration so Story IDs, language variants, canonical URLs, and legacy links do not become accidental implementation details.

## 1. General URL rules

- Public canonical routes use lowercase ASCII path segments unless a future Story/CMS ADR explicitly permits localized slugs.
- Canonical routes use trailing slashes, consistent with the current static-export configuration.
- A public URL that has been published or intentionally shared is treated as durable.
- Slug changes require an explicit permanent redirect record.
- Internal content identity must never depend on the current slug.

## 2. HOME canonical proposal

Proposed canonical HOME destinations:

- EN: `/home/`
- KO: `/ko/home/`

Rationale:

- these are the current practical HOME route destinations,
- HOME metadata already treats `/home/` as the English canonical destination,
- the Cloudflare root aliases currently redirect to these routes,
- keeping a named HOME route makes EN/KO pairing explicit in the current static-export structure.

Current mismatch to resolve only after review:

- sitemap currently lists `/` and `/ko/`,
- root aliases currently redirect to `/home/` and `/ko/home/`.

Proposed future state:

- sitemap lists `/home/` and `/ko/home/`, not redirecting aliases,
- `/` redirects to `/home/`,
- `/ko/` redirects to `/ko/home/`,
- root redirect permanence (301 vs current 302) is decided only after Cloudflare/Kakao entry behavior is reverified.

No production redirect change is authorized by this draft.

## 3. Stable top-level routes

These public destinations should remain stable unless a future ADR demonstrates a stronger reason to migrate them:

- `/stories/`
- `/books/`
- `/studio/`
- `/about/`
- `/ko/stories/`
- `/ko/books/`
- `/ko/studio/`
- `/ko/about/`

The visible navigation label may evolve independently of the URL. For example, ESTHER may continue to resolve to `/about/`.

## 4. Featured-entrance routes

Current curated STORIES entrances:

- `/notes/` — Morning Table
- `/archive/` — Childhood
- `/ko/notes/` — 아침 식탁
- `/ko/archive/` — 어린 시절

These URLs remain durable even if the entrances are later rotated out of global navigation.

A future collection architecture may change how their content is generated, but it should preserve these destinations or provide permanent redirects.

## 5. Legacy aliases

Current permanent compatibility redirects remain valid inventory:

- `/childhood/` → `/archive/`
- `/morning-table/` → `/notes/`
- `/esther/` → `/about/`
- `/ko/childhood/` → `/ko/archive/`
- `/ko/morning-table/` → `/ko/notes/`
- `/ko/esther/` → `/ko/about/`

Do not remove a legacy redirect merely because it is absent from current navigation.

## 6. Story identity and URLs

Each Story receives an immutable language-independent `storyId` in the S1 semantic model.

A Story URL is a presentation address, not identity.

Current published English Story URLs:

- `/stories/my-father-dreamed-of-a-tiger/`
- `/stories/the-youngest-daughter-in-every-house/`

These URLs must continue resolving after the content migration. If the eventual CMS/content model uses different slugs, the existing URLs require permanent redirects.

## 7. Language variants

Language pairing is based on immutable content identity, not string replacement of paths.

Valid states include:

- EN published + KO published,
- EN published + KO draft/unavailable,
- KO published + EN draft/unavailable.

When a requested counterpart is unavailable, the language switch must preserve the Story identity and follow the future locale-availability policy rather than dumping the visitor at an unrelated HOME or Stories page.

## 8. Localized slugs

Whether EN and KO should use different human-language slugs remains deliberately unresolved for the CMS PoC.

The architecture must permit both without changing `storyId`.

The chosen policy will be recorded in an ADR before Story migration.

## 9. Redirect registry

Before S3 content migration, redirects should move from ad-hoc memory into one machine-readable source of truth from which Cloudflare `_redirects` can be generated or validated.

Minimum fields:

- source path,
- destination path,
- status code,
- reason,
- date introduced,
- content/story identity when applicable.

Existing `_redirects` remains the production source during Sprint 0.

## 10. Canonical and sitemap invariants

After the future URL-policy implementation:

- a canonical sitemap URL must return content rather than immediately redirect,
- a redirect-only alias should not be emitted as a canonical sitemap entry,
- canonical metadata and sitemap destination should agree,
- EN/KO alternates should point to real language states defined by the content model,
- unavailable language originals must not be falsely advertised as equivalent full translations.

## 11. External index visibility

Sprint 0 can inventory every route the repository intentionally exposes, but exact search-engine indexing cannot be inferred from the codebase alone.

A public search-engine visibility check performed during Sprint 0 did not provide a reliable indexed-URL list. Therefore external index state remains `unknown` unless verified through a first-party search-console source or a future crawl/index report.

This uncertainty must not block the internal URL policy, but it prevents claiming that a specific URL is or is not indexed today.

## 12. Implementation gate

Do not alter sitemap, root redirects, Story slugs, or locale paths until:

1. this draft is reviewed in S1,
2. the Story semantic model is agreed,
3. CMS PoC confirms the physical slug workflow,
4. redirect generation/validation has a defined owner,
5. HOME entry behavior is rechecked on the deployed Cloudflare site.
