# Esther Cho Website — Media Semantic Schema Draft

Status: SPRINT-0 SEMANTIC DRAFT

Every archival/editorial media object receives a canonical identity from first ingestion. This record exists independently of any Story and must outlive the Story page that first used it.

The exact physical storage format and ID-generation algorithm remain implementation decisions for the media/CMS ADR.

## 1. Core invariant

A media record is an independent archival object.

Removing a photograph from a Story must not delete its provenance record.

Reusing a photograph in HOME or another Story must not create another media identity for the same archival object.

## 2. Conceptual record

```json
{
  "mediaId": "immutable-id",
  "type": "photograph",
  "state": "active",
  "source": {
    "collection": "...",
    "filename": "...",
    "creator": null
  },
  "createdOrCapturedDate": null,
  "datePrecision": "unknown",
  "people": [],
  "rights": {
    "holder": null,
    "basis": "unknown"
  },
  "consent": {
    "status": "review",
    "note": null
  },
  "archive": {
    "masterStatus": "unknown",
    "masterLocation": null,
    "preservationCopyStatus": "unknown"
  },
  "delivery": [],
  "primaryRoom": null,
  "focal": {
    "default": { "x": 0.5, "y": 0.5 }
  },
  "sourceOf": [],
  "supersedes": null
}
```

## 3. Identity

`mediaId` is immutable and collision-safe.

The Constitution does not require sequential IDs or a specific hash prefix. A content-derived hash remains a leading candidate because it can detect exact duplicate ingest without a central allocator, but the final algorithm must be tested against CMS upload/re-encoding behavior.

The ID must not depend on:

- public filename,
- current route,
- caption,
- primary room,
- CMS vendor ID.

## 4. Media types

Minimum supported types:

- `photograph`
- `scan`
- `drawing`
- `reinterpretation`
- `video`
- `document`
- `other`

A later editorial/AI-assisted image rooted in Esther's source drawing is `reinterpretation`, not `photograph` or historical `drawing`.

## 5. Lifecycle state

Suggested values:

- `active`
- `review`
- `restricted`
- `rejected-retired`
- `superseded`

Lifecycle state is distinct from consent state.

The explicitly rejected hand-drawn story image must be represented historically as `rejected-retired` if imported into audit history, and must not become an active media option.

## 6. Source provenance

Where known, record:

- original source collection/archive group,
- original filename,
- creator/photographer if known,
- ingest note,
- whether the website file is original, resized derivative, screenshot, crop, or encoding derivative.

Unknown remains unknown.

Transient paths such as old `/mnt/data/...` work directories are ingest evidence, not durable archive-master locations.

## 7. Date and precision

A media object may have:

- exact day,
- month,
- year,
- approximate year,
- decade,
- unknown date.

Do not manufacture exact dates from filenames unless provenance supports that interpretation.

## 8. People

`people` may reference canonical person records or controlled names in a later schema.

Do not publicly identify third parties solely because they can be visually recognized.

People metadata may need to remain internal even when the image itself is public.

## 9. Rights

The record must support:

- known family/personal archive ownership,
- photographer/creator rights where relevant,
- uncertain rights,
- permission notes,
- publication restrictions.

Rights uncertainty defaults toward review rather than publication certainty.

## 10. Consent / ethical review

Minimum states:

- `cleared`
- `review`
- `restricted`

Default on ingest: `review`.

A media object in `review` or `restricted` must not become publicly renderable merely because a Story references it.

The future `<Photo>` boundary should enforce this fail-safe centrally.

Bangladesh/refugee-camp service photographs begin at `review` even if a cropped version is already used in the current site.

## 11. Archive preservation fields

Separate:

### Archive Master

Highest-quality known source suitable for long-term preservation.

### Preservation Copy

Independent backup copy of the master.

### Web Delivery

Optimized derivative intended for public use.

A public JPEG/WebP/PNG does not become the archive master merely because it is the only file currently present in the repository.

Suggested fields:

```json
{
  "archive": {
    "masterStatus": "known | unknown | missing",
    "masterLocation": "private reference, not public URL",
    "masterChecksum": null,
    "preservationCopyStatus": "known | unknown | missing"
  }
}
```

Sensitive physical/account locations should not be exposed in public site output.

## 12. Delivery derivatives

A media record can own multiple delivery derivatives without creating new archival identities.

Conceptual example:

```json
{
  "delivery": [
    {
      "role": "web-default",
      "path": "...",
      "format": "webp",
      "width": 1600,
      "height": 1200,
      "bytes": 210000
    },
    {
      "role": "mobile-cover",
      "path": "...",
      "format": "webp",
      "width": 900,
      "height": 1200,
      "bytes": 125000
    }
  ]
}
```

When the project eventually adopts R2/transformation delivery, the media schema should keep archive identity stable while delivery records change.

## 13. Primary room

`primaryRoom` is an editorial ownership field.

Examples in the current site:

- childhood house/garden → CHILDHOOD,
- morning table → MORNING TABLE,
- young artist / Bangladesh service → ESTHER,
- father-child reinterpretation → STUDIO.

HOME may intentionally reuse representative media as a doorway/teaser.

`primaryRoom` does not prohibit narrative reappearance.

## 14. Usage / appearances

Actual appearances are system-generated observations, not canonical handwritten metadata.

Future usage report should answer:

- which routes/content identities render this media,
- how many distinct appearances exist,
- which active media are orphaned,
- which media appear unusually often and deserve editorial review.

The report may warn about repeated usage; it should not automatically fail simply because a photo appears three or four times.

## 15. Focal point

Crop intent belongs to data rather than scattered CSS overrides.

Normalized coordinates:

- x: 0 to 1
- y: 0 to 1

Default center:

```json
{ "x": 0.5, "y": 0.5 }
```

Optional variant focal points may be added only when one coordinate cannot preserve the subject across meaningfully different compositions.

The future contact-sheet audit should show common aspect ratios with the stored focal point applied.

## 16. `sourceOf` and reinterpretation lineage

A reinterpretation must point back to one or more actual source media identities once those originals are registered.

This is critical for STUDIO, where later editorial/AI-assisted work must never be mistaken for an original historical drawing.

The public UI may phrase the lineage elegantly; the underlying data must remain explicit.

## 17. `supersedes`

If an original is rescanned/rephotographed and produces a genuinely new preservation object, it may receive a new media identity and point to the earlier object via `supersedes`.

This preserves archival lineage instead of silently replacing history.

## 18. Author-facing ingest UX

Esther should not manage this schema directly.

The publishing UI should ask human questions such as:

- add photo,
- approximate year,
- who is in it,
- caption,
- is publication permission clear?,
- any note we should know?

The system should create/link the canonical media record behind that interaction.

Complex registry management is an implementation responsibility, not an author burden.

## 19. Migration acceptance criteria

The future media system is not ready until it can:

- ingest a real Esther photograph once,
- assign/preserve immutable identity,
- keep provenance separately from Story body,
- default consent safely to review,
- render only cleared/public-safe media,
- preserve current crop intent through focal metadata,
- allow deliberate reuse without file duplication,
- distinguish archive master from website derivative,
- preserve rejected/retired states without making those assets selectable as active content.
