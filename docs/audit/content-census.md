# Sprint 0 — Current Content Census

Status: BASELINE INVENTORY

This census distinguishes editorially listed material from actually published detail routes. It describes the current codebase before the future semantic content model exists.

## 1. Stories

### Editorial opening collection

The STORIES landing currently presents seven named opening memories in both English and Korean.

1. My Father Dreamed of a Tiger / 아버지는 호랑이 꿈을 꾸었다
2. The Youngest Daughter in Every House / 가는 집마다 막내딸
3. Back to the Yard in Clean Pajamas / 깨끗한 잠옷을 입고 다시 마당으로
4. Our Family Restaurant / 우리 가족의 식당
5. Mom, I'm So Happy / 엄마, 나 너무 행복해
6. July, My First Year of Middle School / 중학교 1학년, 그해 7월
7. The Happiness Collector / 행복을 모으는 사람

These seven names are an editorial starting collection, not seven published Story pages.

### Published Story detail routes

English detail pages currently exist for two Stories:

- `/stories/my-father-dreamed-of-a-tiger/`
- `/stories/the-youngest-daughter-in-every-house/`

Korean Story detail pages currently exist for zero Stories.

Therefore the current published-detail count is:

- EN published detail routes: 2
- KO published detail routes: 0
- paired EN+KO detail routes: 0

### Current publication-state weakness

Publication state is currently implicit in page/`href` existence rather than expressed as durable content data.

The Korean STORIES landing labels the seven memories as `기록됨`, but this is editorial UI language and must not be interpreted as seven published detail pages.

The future content model must separate at least:

- recorded/planned memory,
- draft locale original,
- published locale original,
- unavailable locale original.

## 2. Story-era/chapter framing

The current STORIES landing also contains eight editorial life chapters:

1. Childhood
2. The Years with Father
3. After July
4. School and Art
5. Becoming a Family
6. Becoming a Writer
7. A Life with God
8. The Life Now

The Korean page carries the corresponding independently written chapter labels.

These are current editorial framing, not yet canonical taxonomy IDs.

They should not be migrated blindly into the future schema without S1 review.

## 3. Curated Story entrances

Two current curated entrances have full EN/KO routes:

### Morning Table

- EN: `/notes/`
- KO: `/ko/notes/`

Role: recurring present-life/table/devotional doorway.

### Childhood

- EN: `/archive/`
- KO: `/ko/archive/`

Role: childhood/archive doorway with photographs and remembered fragments.

These are featured editorial entrances into STORIES, not the complete collection taxonomy.

## 4. Books / manuscripts

The current structured book data contains one featured manuscript entity:

### Manna on the Table

- data slug: `manna-on-the-table`
- EN status: `In progress`
- KO status label: `원고 작업 중`
- source language value: English
- format: Literary devotional essays / 문학적 묵상 에세이
- publication: To be confirmed / 미정

Public route presentation currently exists at:

- `/books/`
- `/ko/books/`

There is not yet a dedicated book-detail route keyed by the data slug.

The current entity is an in-progress manuscript, not a confirmed published edition.

## 5. Primary author/room pages

Current bilingual primary/room destinations outside individual Story detail routes:

- HOME: `/home/`, `/ko/home/`
- STORIES: `/stories/`, `/ko/stories/`
- BOOKS: `/books/`, `/ko/books/`
- STUDIO: `/studio/`, `/ko/studio/`
- ESTHER: `/about/`, `/ko/about/`
- MORNING TABLE: `/notes/`, `/ko/notes/`
- CHILDHOOD: `/archive/`, `/ko/archive/`

These pages contain editorial content but are not counted as Story entities merely because they contain prose.

## 6. Current counts

- Editorially named opening Story memories: 7
- Published EN Story detail pages: 2
- Published KO Story detail pages: 0
- Fully paired Story detail identities in production: 0
- Current curated Story entrances: 2
- Current structured manuscript/book projects: 1
- Dedicated published book detail routes: 0
- Bilingual primary/room route pairs: 7

## 7. Gaps the future model must solve

The current codebase does not yet provide:

- immutable `storyId`,
- explicit locale publication state,
- canonical Story data separate from page JSX,
- canonical media IDs,
- data-driven previous/next Story navigation,
- data-driven collection membership,
- a stable distinction between recorded memory and published Story,
- a non-developer publishing UI,
- dedicated Book/edition identities,
- rights/publication-state data suitable for public rendering.

These are S1/S3 architecture targets, not Sprint 0 production fixes.

## 8. Migration warning

Do not infer publication state from the current word `Recorded / 기록됨` alone.

Do not create seven Story files merely because seven titles are displayed.

During S1, each named memory must be mapped to a semantic state deliberately. Only the two currently published English detail routes have unambiguous public-detail status today.
