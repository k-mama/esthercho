# Esther Cho Website — Story Semantic Schema Draft

Status: SPRINT-0 SEMANTIC DRAFT

This document defines what a Story *means*. It deliberately does not decide whether the physical storage becomes paired Markdown files, MDX, YAML, Keystatic content files, or another Git-backed plain-text layout.

The CMS proof of concept may influence physical layout. It may not weaken these semantic invariants.

## 1. Immutable identity

Every Story has one language-independent immutable `storyId`.

Requirements:

- never reused,
- never derived from the current slug,
- never derived from a CMS vendor's internal ID,
- survives title, slug, collection, and language-availability changes.

Example conceptual identity:

```json
{
  "storyId": "story-immutable-id"
}
```

The exact ID-generation mechanism is an implementation ADR, not part of this semantic schema.

## 2. Shared Story metadata

Conceptual shared fields:

```json
{
  "storyId": "...",
  "editorialState": "recorded",
  "eventDate": null,
  "datePrecision": "unknown",
  "collections": [],
  "media": [],
  "relatedStories": [],
  "archiveNotes": [],
  "rights": {
    "publicExcerptApproval": "not-applicable"
  }
}
```

### `editorialState`

Suggested values:

- `recorded` — memory/title exists but no publishable Story original is yet complete,
- `developing` — one or more originals are being actively written,
- `active` — at least one locale original is publicly published,
- `retired` — Story identity retained but intentionally removed from normal discovery.

This is separate from each locale's publication state.

### Event date

`eventDate` means when the remembered event occurred, not when the Story was published.

`datePrecision` must support:

- `day`
- `month`
- `year`
- `approximate-year`
- `decade`
- `unknown`

No false date precision should be invented for archival neatness.

## 3. Locale-original records

English and Korean are independent originals attached to the same Story identity.

Conceptual shape:

```json
{
  "locales": {
    "en": {
      "status": "draft",
      "slug": "...",
      "title": "...",
      "deck": "...",
      "body": "...",
      "publishedAt": null,
      "updatedAt": null
    },
    "ko": {
      "status": "published",
      "slug": "...",
      "title": "...",
      "deck": "...",
      "body": "...",
      "publishedAt": "...",
      "updatedAt": "..."
    }
  }
}
```

Physical storage may split these records into separate plain-text files. The semantic pairing remains one Story identity.

## 4. Locale publication state

Locale publication state is explicit data. It is never inferred solely from file existence.

Suggested values:

- `not-started`
- `draft`
- `published`
- `retired`

Valid examples:

- KO published / EN not-started,
- EN published / KO draft,
- both published,
- both recorded but neither published.

No language is required to wait for the other.

## 5. Locale availability companion

When one original is unavailable, a visitor may still need a same-identity companion page.

This companion is not the missing original.

Optional locale fields may include:

```json
{
  "availability": {
    "summary": "A short editorial explanation in this locale.",
    "captionOverrides": {},
    "indexable": true
  }
}
```

Rules:

- an editorial summary is not labelled or stored as the Story original,
- a title-only/empty stub should normally be `noindex`,
- the language switch preserves Story identity rather than dumping the visitor at HOME,
- a Korean original must not be silently rendered inside an English URL as if it were English content.

Exact route/rendering behavior is an S5 implementation concern.

## 6. Titles and slugs

Title and slug are locale-owned fields.

The schema permits EN and KO slugs to differ.

The CMS PoC/URL ADR decides whether localized slugs are operationally desirable.

Slug changes require redirect history. `storyId` does not change.

## 7. Collections

A Story may belong to zero or more collections.

Collections are data identities, not global-navigation promises.

Examples may eventually include:

- childhood,
- morning-table,
- art,
- family,
- faith,
- service.

These examples are not all ratified production taxonomies.

Featured global doorway status belongs to collection/editorial configuration, not the Story itself.

## 8. Media references

Story media refers to canonical `mediaId` values rather than raw delivery paths once the media system is active.

Conceptual reference:

```json
{
  "media": [
    {
      "mediaId": "...",
      "role": "cover",
      "caption": {
        "en": "...",
        "ko": "..."
      }
    }
  ]
}
```

The media object's provenance, consent, source file, master state, and focal metadata belong to the Media record, not duplicated in every Story.

Locale-specific caption text can remain Story/editorial context when needed.

## 9. Related Stories

Relationships use `storyId`, never URL strings.

Possible relation types may later include:

- next/previous editorial sequence,
- related memory,
- same person/place/event.

The schema must not require every Story to have a next Story.

## 10. Archive notes

A Story may carry editorial/archive notes that distinguish:

- what Esther actually remembers,
- what a photograph proves,
- what remains uncertain,
- what a later reinterpretation is.

These notes protect against filling documentary gaps with plausible invention.

Public and internal notes may need different visibility in the eventual physical schema.

## 11. Rights / publication-sensitive fields

Story content and BOOK manuscript content are not automatically governed by the same publication-rights policy.

For Story material that overlaps a saleable manuscript or serial-rights opportunity, the model must be able to record a review state rather than assuming site publication is harmless.

Conceptual state:

- `not-applicable`
- `review`
- `approved`
- `restricted`

The future publishing workflow decides which fields are internal-only.

## 12. Shared-field authority

If a CMS forces shared metadata to be physically duplicated across EN and KO files, the project must define one deterministic authority/reconciliation rule.

Acceptable implementations may include:

- generated duplication from one shared source,
- CMS-level duplicate field with validation,
- one designated shared metadata file if the selected CMS supports it without harming Esther UX.

Unacceptable state:

- two locale files silently disagreeing with no declared authority.

The CMS PoC must explicitly test this.

## 13. Current Stories migration map

Current editorially named memories: 7.

Current unambiguous published detail states:

- `My Father Dreamed of a Tiger` — EN published, KO not yet published as a detail route.
- `The Youngest Daughter in Every House` — EN published, KO not yet published as a detail route.

The remaining five displayed memories should enter S1 as `recorded` candidates unless editorial review proves a stronger current state.

Do not manufacture Story body files merely to make the count symmetrical.

## 14. Acceptance criteria for S1 vertical slice

The schema is acceptable only if one real existing Story can prove all of the following:

- immutable identity independent of URL,
- EN published while KO may remain unpublished,
- real archival media reference,
- explicit media consent/provenance gate,
- locale-owned title/body,
- data-driven navigation,
- current public URL preserved,
- Esther-facing publishing form remains understandable.
