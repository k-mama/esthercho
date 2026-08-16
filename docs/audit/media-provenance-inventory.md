# Sprint 0 — Media Provenance Inventory

Status: CURRENT-STATE AUDIT

This inventory reconciles current public delivery assets with the repository's historical media manifests and provenance notes. It does not invent archive-master locations that the repository cannot prove.

## Status vocabulary

- `active` — currently present and intentionally usable in the public site.
- `derivative` — delivery/crop/encoding derived from another known source.
- `review` — may be public today, but consent/rights/ethical review remains required before migration into the long-term media registry.
- `rejected-retired` — must not be used or re-ingested, even if an old manifest still mentions it.
- `master-unknown` — source filename/history is known, but a durable archive master location has not been proven by the repository.

## 1. Core Esther editorial media

| Current public asset | Current state | Provenance supported by repo | Archive master status | Consent/review state | Future primary role |
| --- | --- | --- | --- | --- | --- |
| `public/media/esther/childhood-garden.jpg` | active | source collection `5살부터 초등학교`; source file `20260730_163028.jpg`; classified as real childhood photograph | master-unknown | review pending formal registry | CHILDHOOD primary; HOME/Story reappearance allowed |
| `public/media/esther/childhood-house.jpg` | active | source collection `5살부터 초등학교`; source file `1785397071482.jpg`; real place photograph | master-unknown | review pending formal registry | CHILDHOOD primary |
| `public/media/esther/young-artist.jpg` | active | source collection `대학생 때 사진`; source file `20260730_192409.jpg`; real personal photograph | master-unknown | review pending formal registry | ESTHER/About primary |
| `public/media/esther/morning-table.jpg` | active | source collection `내 밥상`; source file `20260716_103859.jpg`; real household photograph | master-unknown | review pending formal registry | MORNING TABLE primary; HOME teaser allowed |
| `public/media/esther/bangladesh-service.jpg` | active + review | source collection `방글라데시의 미얀마 난민촌 봉사`; source file is an Instagram screenshot; real volunteer-service photograph; prior processing intentionally reduced third-party exposure | master-unknown | **review** — third-party/child/privacy/ethical context must be reassessed | ESTHER/About only unless later review approves another use |
| `public/media/esther/still-making-father-child-collage-20260802.png` | active derivative | known as a later editorial/AI-assisted reinterpretation rooted in Esther-supplied original drawing material | original-source linkage incomplete | review provenance link before registry migration | STUDIO primary; must never be labelled historical archive |

## 2. Rejected / retired media

### `hand-drawn-story.jpg`

Historical manifests refer to:

- source collection `동화습작 (2)`
- source file `20260718_141326.jpg`
- classification `Original hand drawn story study`

Editorial decision supersedes the old manifest state:

- the image was explicitly rejected for future use,
- the public file has been removed from `public/media/esther/`,
- it must not be reintroduced to HOME, STUDIO, covers, collages, Stories, or the future canonical media registry as an active asset.

State: `rejected-retired`.

The old manifests remain historical evidence of an earlier ingest; they are not the current publication authority.

## 3. HOME house film

### `public/media/home/esther-house-entry.mp4`

Repository evidence records:

- original upload filename: `홈페이지에_처음_방문_한_사람에게_집에_초대되어_입장하(1).mp4`
- published video: `public/media/home/esther-house-entry.mp4`
- published poster: `public/media/home/esther-house-entry-poster.jpg`
- duration: 10 seconds
- delivery dimensions: 1280 × 720
- codec: H.264
- audio removed

State: `active`, protected brand/narrative asset.

Archive-master status: `master-unknown` until the original upload is located in a durable archive outside transient build/upload storage.

The future preservation record should keep the original upload/master distinct from website encodings and poster derivatives.

## 4. Page-cover derivatives

The repository has explicit source/derivative records for several covers.

### STORIES cover

- source supported: `대학생 때 사진/20260730_163303.jpg`
- current route assets include WebP/mobile derivatives.
- state: derivative of real personal photograph.

### ESTHER cover

- source supported: `대학생 때 사진/20260730_192409.jpg`
- shares source lineage with `young-artist.jpg`.
- current route assets include WebP/mobile derivatives.
- state: derivative of real personal photograph.

### MORNING TABLE cover

- source supported: `내 밥상/.../20260716_103859.jpg`
- shares source lineage with `morning-table.jpg`.
- current route assets include WebP/mobile derivatives.
- state: derivative of real household photograph.

### STUDIO cover

- historical manifest describes it as an editorial collage based on Esther Cho's supplied original hand-drawn story studies.
- state: derivative / reinterpretation.
- future registry requires explicit `sourceOf` links to the actual approved original drawing IDs before archival provenance is considered complete.

### CHILDHOOD cover

- historical manifest records a source upload path, but the durable archive identity of that source is not yet established.
- state: active derivative; master-unknown.

### BOOKS cover family

- historical manifest references `48597.png` for earlier desktop/mobile derivatives.
- current delivery uses `books-cover-final-20260802.webp` on the route.
- exact source/ownership chain for every BOOKS cover variant must be reconciled before long-term media-registry ingestion.
- duplicate obsolete PNG variants are currently an asset-hygiene finding, not an automatic deletion instruction.

## 5. What `/mnt/data/...` proves and does not prove

Historical manifest paths under `/mnt/data/...` prove that a file with that name existed in a working ingest environment when the derivative was made.

They do **not** prove:

- that the original still exists today,
- that it is backed up,
- that it is the highest-quality master,
- where a preservation copy lives,
- who controls the storage account/device.

Therefore these records are `source-known / master-unknown` until a durable archive location is verified.

## 6. Current privacy boundary inherited from earlier curation

The earlier provenance review explicitly held back or required review for categories including:

- funeral photographs,
- wedding photographs,
- photographs of the author's child,
- extended-family photographs,
- photographs of parents,
- large meal archives,
- additional refugee-camp photographs showing identifiable children,
- AI-reimagined house/table imagery.

That caution remains active. Sprint 0 must not reinterpret “uploaded to the project” as “cleared for public publication.”

## 7. Registry migration requirements

Before an active archival asset enters the future canonical media registry, the model must be able to represent:

- immutable media identity,
- source filename/collection where known,
- archive-master status/location,
- delivery derivatives,
- classification: photograph / scan / drawing / reinterpretation / video,
- approximate captured/created date and precision,
- people where appropriate,
- rights/source ownership,
- consent state: cleared / review / restricted,
- primary editorial room,
- focal point,
- `sourceOf` / `supersedes` relationships where applicable.

Unknown values remain unknown. They are not filled with plausible guesses.

## 8. Current audit conclusion

The repository already contains useful provenance history for core assets, so the future registry does not start from zero.

The major gap is preservation, not naming: source filenames are often known, but durable Archive Master and Preservation Copy locations are not established in the repository.

That gap must be resolved with the user/Esther archive holders; code alone cannot determine it.
