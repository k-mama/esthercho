# Esther Cho Website — Component Boundary Draft

Status: SPRINT-0 DRAFT FOR S1 VALIDATION

This document defines ownership boundaries before CSS migration. It is not permission to refactor production components during Sprint 0.

The goal is to reduce cascade debt while preserving the distinct emotional rhythm of each room.

## 1. Boundary rule

A component should exist when it owns a stable responsibility that appears in more than one place or needs one enforcement point for accessibility, media, language, or interaction.

A component should not exist merely to make every page share the same visual template.

Shared grammar is desirable. Identical rooms are not.

## 2. Proposed source shape

```text
src/
  components/
    SiteHeader/
    SiteFooter/
    LanguageSwitch/
    PageCover/
    Photo/
    HouseVideo/
    StoryBody/
    StoryMeta/
    StoryNav/
    CollectionEntrance/
    RightsLink/

  templates/
    HomeTemplate/
    StoryTemplate/
    CollectionTemplate/
    BookTemplate/
    RoomTemplate/

  content/
    ... semantic content layer decided in S1/S3

  styles/
    tokens.css
    reset.css
    base.css
    typography.en.css
    typography.ko.css
```

Physical names may change during the S1 vertical slice. The responsibilities below are the important contract.

## 3. SiteHeader

Owns:

- primary navigation rendering,
- curated STORIES doorway rendering,
- mobile menu open/close behavior,
- desktop pointer/focus behavior,
- current-route state,
- keyboard interaction,
- accessible navigation labels.

Must not own:

- hard-coded knowledge that `index === 0` means STORIES,
- duplicated EN/KO navigation trees inside rendering logic,
- page-specific visual patches.

Input should come from a hierarchical navigation model.

Current production debt to migrate later:

- `src/components/site-header.tsx`
- `src/config/navigation.ts`
- `src/styles/mobile-menu-glass.css`
- `src/styles/desktop-subnav-hover.css`
- shell-related header rules in broader global layers.

## 4. LanguageSwitch

Owns:

- locale-pair availability,
- corresponding-room/story navigation,
- behavior when the target-language original is not published,
- accessible language label.

Must not assume every EN route has a KO equivalent.

For Stories, it eventually consults the immutable Story identity and locale publication state rather than string-rewriting URLs.

## 5. PageCover

Owns:

- full-bleed cover media presentation,
- shade treatment,
- cover title/eyebrow/description placement,
- declared desktop/mobile focal behavior,
- cover accessibility semantics.

Must not accumulate room-specific override files.

Current source:

- `src/components/page-cover.tsx`
- `src/components/page-cover.css`

Long-term target: co-located component module after S1 boundary validation.

## 6. Photo

Applies to archival/editorial Esther media, not brand UI assets.

Owns:

- canonical `mediaId` lookup,
- delivery URL,
- dimensions/aspect ratio,
- alt text by locale,
- focal point,
- consent/publication gate,
- responsive delivery strategy,
- future media-usage reporting hook.

Must not own:

- brand wordmarks/icons,
- HOME house video,
- arbitrary decorative backgrounds.

Long-term rendering rule: archival/editorial photographs should enter production through this boundary once the media schema exists.

## 7. HouseVideo

Owns the protected HOME entrance film only.

Owns:

- autoplay attempt,
- muted/playsInline behavior,
- poster sequencing,
- pause/play control,
- reduced-motion behavior,
- future mobile/desktop encoding selection,
- video loading policy.

Must preserve the fact that HOME uses the moving real-house film on desktop and mobile.

Current source:

- `src/app/home-hero-video.tsx`
- HOME video rules currently spread across page and global CSS layers.

## 8. StoryTemplate

Owns the stable page skeleton for a published Story identity:

- story header,
- body region,
- archival media placements,
- archive/editorial note region,
- previous/next navigation,
- locale availability state.

It must support:

- long and short Stories,
- one-language-only publication,
- Stories with no photograph,
- Stories with one or more archival photographs,
- future collection and related-story metadata.

It must not encode the content of a specific story.

## 9. StoryBody

Owns reusable literary typography rather than page layout:

- paragraphs,
- headings,
- blockquotes,
- lists,
- simple inline links,
- captions/notes where semantically part of body text.

The same body typography may later be reused for safe BOOKS excerpts without forcing BOOKS to use the Story page layout.

## 10. StoryMeta

Owns presentation of stable Story metadata when the final schema exists, such as:

- event date/precision,
- collections,
- archival tags,
- publication state where appropriate,
- language/original availability.

Editorial metadata should remain restrained; the site must not look like a database UI.

## 11. StoryNav

Owns previous/next/return navigation based on content data, not hand-written JSX per Story.

It must support missing locale siblings and unpublished next items without broken links.

## 12. CollectionEntrance

Represents a curated doorway such as Morning Table or Childhood.

Owns:

- label,
- route,
- representative real media if available,
- short editorial invitation,
- promoted/retired state when collection data supports it.

It must not invent a unique UI design system per collection. Doorways share the STORIES visual grammar and differ primarily through content/media.

## 13. HomeTemplate

Owns HOME sequence and spatial rhythm, not reusable component styling.

Current narrative order may evolve editorially, but the template preserves the house-walk concept:

- real-house entrance,
- threshold/room orientation,
- selected lived-life scenes,
- closing toward Books/Esther.

HOME may use room representative media as intentional teasers.

It must not become a card dashboard or publishing catalogue.

## 14. RoomTemplate

This is a grammar, not a single mandatory layout.

May own shared constraints such as:

- section measure,
- common spacing primitives,
- accessible heading relationships,
- shared light/dark room tokens,
- room-exit behavior.

Individual rooms may still own distinctive composition through their own template/module where the narrative requires it.

Do not force Morning Table, Childhood, Studio, Books, and Esther into identical section grids merely to reduce CSS.

## 15. BookTemplate

Long-term responsibility:

- published-book identity,
- cover/edition metadata,
- safe excerpt region if approved,
- translation/publication state,
- contextual Rights link.

Unpublished manuscript material is not automatically rendered as a Book page. Publication/rights policy decides what becomes public.

## 16. RightsLink

A small reusable affordance, not a primary navigation item.

May appear in:

- BOOKS context,
- ESTHER/About context,
- Footer.

The eventual `/rights/` destination and publishing data are S5 concerns.

## 17. Typography ownership

Global typography eventually splits into equal siblings:

- `typography.en.css`
- `typography.ko.css`

Components consume those systems but should not rebuild a second global Korean override layer inside individual modules.

Component-local differences are allowed when semantically required.

## 18. CSS ownership migration target

Current historical global layers are not deleted in Sprint 0.

In S2, declarations should migrate toward the owner above:

- shell interaction → SiteHeader / SiteFooter / LanguageSwitch,
- cover rules → PageCover,
- archival media behavior → Photo,
- Story typography/layout → StoryBody / StoryTemplate,
- HOME layout/video → HomeTemplate / HouseVideo,
- shared room rhythm → RoomTemplate primitives,
- EN/KO typography → equal global typography files.

Each migration unit must be independently reversible and compared against the accepted structural visual baseline.

## 19. S1 vertical-slice acceptance test

Before S2 CSS consolidation begins, one real existing Story must be rendered through the proposed Story/Photo/navigation boundaries using genuine current content.

The slice must prove:

- the semantic model can express the real Story,
- EN/KO asymmetry is supported,
- media can carry provenance/consent/focal metadata without burdening the author UI,
- Story navigation can be data-driven,
- the resulting page can preserve current editorial quality without page-specific global patches.

Failure of the slice means the boundary draft changes before CSS migration.
