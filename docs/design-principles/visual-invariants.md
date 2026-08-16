# Esther Cho Website — Visual Invariants

Status: ACTIVE SPRINT-0 DESIGN CONTRACT

This document translates the Architecture Constitution into visual review criteria. It exists so architecture and CSS cleanup do not accidentally erase the site's identity.

## 1. The real house remains the entrance

- HOME begins with the real moving film of the house Esther actually lived in.
- Desktop and mobile both retain video as the primary HERO medium.
- The poster is a loading, reduced-motion, social-preview, and failure fallback; it is not a replacement design.
- Performance work may change encoding, preload, poster sequencing, and delivery, but not the fact that the public HOME opens through this film.

## 2. Real life outranks interface decoration

REAL LIFE IS THE LUXURY MATERIAL.

When choosing between another visual effect and a genuine Esther photograph, drawing, manuscript, meal, or memory object, the genuine material wins.

The interface must never fabricate fictional Esther Cho rooms, meals, gardens, service scenes, objects, or archival evidence to fill empty space.

Clearly labelled later editorial or AI-assisted reinterpretations may exist only when rooted in identifiable genuine source material.

## 3. Palette

The stable visual family is:

- ivory
- silver grey
- sky blue
- blue
- navy

Do not reintroduce habitual gold, pink, mint, lilac, or decorative warm-sage systems as general UI language.

Color behaves as atmosphere and spatial light, not as SaaS gradient decoration.

## 4. Prohibited visual language

Unless the Constitution is explicitly amended, do not introduce:

- old / antique / cottage styling,
- generic Christian website styling,
- generic author-template styling,
- SaaS dashboard or card-wall composition,
- decorative flower or leaf UI objects,
- cracked-monitor diagonal line systems,
- ornamental circles or hairline geometry without narrative function,
- routine gold accents as a shortcut to luxury,
- generalized glassmorphism,
- hover motion whose main purpose is to make the interface feel busy or premium.

## 5. Photography

- Photography may be visually bold; UI around it stays quiet.
- A photograph has one primary editorial room, but may deliberately reappear in HOME or a Story when the narrative role is different.
- Repetition is reviewed, not automatically forbidden.
- Removing a repeated image does not create an obligation to replace it with fake or generic imagery. Empty space may remain until real material exists.
- Long-term crop and focal position belong to media metadata, not scattered page-specific CSS.

## 6. Spatial rhythm

Preferred rhythm:

one strong scene → air → next strong scene.

Avoid turning every section into an outlined, shadowed, rounded, or floating container.

Whitespace is a first-class material. It should feel intentional rather than unfinished.

## 7. Geometry

- At most one dominant geometric/color field per room or major section unless there is a clear compositional reason.
- Prefer large, sparse, filled translucent fields to multiple outlines and decorative strokes.
- Geometry supports a photograph or text block; it must not become the subject.

## 8. Typography

- English and Korean are equal systems, not parent and override.
- English may use the editorial serif/interface contrast already established.
- Korean must retain native Korean measure, weight, line height, letter spacing, and meaningful line breaks.
- Do not scale Hangul merely by copying English display sizes.
- Do not use ultra-thin Korean type.
- Korean text should preserve `word-break: keep-all` behavior unless a specific component requires a documented exception.

## 9. Interface hierarchy

MEDIA = EMOTIONAL

UI = QUIET

PHOTOGRAPHY = BOLD

TYPOGRAPHY = RESTRAINED

MEMORY = TEXTURED

LAYOUT = SIMPLE

LIGHT = ATMOSPHERIC

CARDS = RARE

CONTENT = HUMAN

INTERFACE = ALMOST INVISIBLE

## 10. HOME is a house, not a dashboard

HOME must not become:

- a latest-post dashboard,
- a publisher catalogue,
- a grid of products,
- an agent-facing landing page,
- a stack of equal-weight cards.

It remains a walk through Esther's house and life. BOOKS and ESTHER can be made discoverable without taking over the entrance.

## 11. Rooms share grammar, not identical templates

Shared components may standardize spacing, media behavior, typography primitives, and accessibility, but Morning Table, Childhood, Studio, Stories, Books, and Esther are not required to have identical layouts.

A successful architecture migration should reduce CSS duplication without making every room feel generated from the same template.

## 12. Mobile is art-directed, not compressed desktop

- Mobile typography and photo crops may differ intentionally.
- Navigation hierarchy must remain immediately understandable.
- Large media can remain cinematic where useful.
- Decorative shapes may move partially off-canvas rather than crowding content.
- Mobile must not become a pile of cards merely to simplify responsive implementation.

## 13. Interaction

- Hover and focus behavior should be calm and predictable.
- A submenu must not remain open because mouse-click focus accidentally persists.
- Keyboard focus must remain visible even when the visual treatment is quiet.
- Reduced-motion support may change movement, never remove access to content.

## 14. Red-team questions for every visual change

Before accepting a visual change, ask:

1. Does this make the site look more like a generic author, church, lifestyle, or SaaS template?
2. Is a card, border, shadow, gradient, or decorative object doing work that a photograph, sentence, or whitespace could do better?
3. Is the typography trying harder than the story?
4. Is the design prettier than the human material it is supposed to serve?
5. Could 30% of this interface disappear without losing meaning?
6. Does this preserve the sense that the visitor is entering one real person's accumulated life?

If the answer exposes unnecessary interface, subtract before adding.
