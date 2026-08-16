# Esther Cho Website Architecture Constitution v1.0

Status: RATIFIED

This document governs the long-term design, content, media, publishing, and technical architecture of the Esther Cho / 조성연 author website. It exists to preserve the site's identity while allowing the archive to grow for years without accumulating hidden structural debt.

## 1. Identity

The website is not a generic author portfolio. It is a living digital house in which Esther Cho's stories, photographs, meals, drawings, faith, books, family memory, service, and ongoing work accumulate over time.

The site should improve through accumulation rather than frequent redesign.

REAL LIFE IS THE LUXURY MATERIAL.

## 2. Authenticity

The site uses real Esther Cho materials: real photographs, the real house and garden, real meals, real drawings, real manuscripts, real service and family records, and clearly labelled later reinterpretations rooted in genuine source material.

The site must not fabricate fictional Esther Cho interiors, scenes, objects, photographs, or archival evidence merely to fill visual space.

A later editorial or AI-assisted reinterpretation must never be presented as an original historical artifact.

## 3. Visual language

Primary palette: ivory, silver grey, sky blue, blue, navy.

Interface behavior is quiet. Photography may be visually strong. Typography is restrained. Cards are rare. Decoration must not compete with content.

The following visual directions are prohibited unless this Constitution is amended: old/antique/cottage styling, generic Christian website styling, SaaS/card-wall language, decorative botanical UI objects, ornamental cracked/diagonal line systems, habitual gold accents, and visual effects whose primary purpose is trend imitation.

## 4. Primary information architecture

The stable top-level architecture is:

- STORIES
- BOOKS
- STUDIO
- ESTHER

STORIES is the canonical center for all story content.

Morning Table and Childhood are currently featured editorial entrances into STORIES. They are not the complete taxonomy. Featured entrances are curated, not exhaustive, and should remain scarce. They may change over time without destroying the underlying collection URLs or story identities.

A featured entrance must never become the only route to content that falls outside that entrance.

## 5. Bilingual principle

English and Korean are two original editorial editions, not an original plus a translation shadow.

A story may legitimately exist in Korean only, English only, or both.

Publication in one language must not be blocked merely because the other language is incomplete.

When one language edition is unavailable, the site must preserve the same story identity and communicate availability honestly. It must not silently show the wrong-language body under the other language's URL.

## 6. Story identity

Every story has one immutable language-independent storyId.

Titles, slugs, summaries, captions, bodies, publication dates, and publication states may differ by language.

A slug may change. A storyId must not.

Any published slug change must create a redirect record.

The exact physical file layout is not constitutional. It will be selected after the CMS proof of concept. However the following physical invariants are mandatory:

1. The canonical text content remains human-readable plain text in the repository.
2. storyId is independent of file path and CMS-internal identifiers.
3. Publication status is explicit data, not inferred only from file existence.
4. If shared fields are duplicated across locale files, the implementation must define a canonical authority and a drift-detection rule.

## 7. Universal media identity

Every archival/editorial photograph, drawing, scan, and video receives a durable media identity at first ingestion, including media that appears only once.

The media identity mechanism must not depend on a fragile shared sequential allocator. It must be collision-safe and suitable for automation. A content-hash-derived identifier is the default implementation candidate, but the exact generation rule belongs in the Media ADR after CMS and ingestion behavior are tested.

A media record outlives any single story. Removing a media item from a story does not erase its archival record.

A rescanned or materially new source object may become a new media object and may point to its predecessor through provenance fields such as supersedes/sourceOf.

## 8. Media provenance

The media model must be capable of preserving, where known:

- source/origin
- approximate capture or creation date
- date precision
- people depicted
- rights status
- consent/review status
- media type
- original/reinterpretation relationship
- primary room
- focal point
- archival master reference
- web delivery reference

Consent/review states are at minimum: cleared, review, restricted.

The safe default is review, not public.

Sensitive service/mission imagery, including Bangladesh material involving identifiable people, begins in review state until editorial and rights review is complete.

## 9. Media usage

A media item may have one primary room, but it may reappear elsewhere when the repetition serves a real narrative purpose.

HOME may reuse representative media as an entrance to another room.

Media appearances are system-derived whenever practical, not manually maintained as editorial metadata. Usage reports should inform editors rather than automatically ban repetition.

Archival/editorial photography should ultimately pass through a single media rendering system so focal point, alt text, consent, responsive delivery, and usage reporting can be managed centrally. Brand UI assets and the HOME house film may use separate systems.

## 10. Publishing UX

The publishing system is judged by Esther's ability to use it, not only by developer elegance.

The acceptance test for the final CMS workflow is: Esther can create and publish a story with photos and metadata without developer assistance, and later add the other language edition to the same story identity.

CMS selection is not ratified by this document. Sveltia CMS and Keystatic are the primary Sprint 0 proof-of-concept candidates. The CMS must not move the canonical text archive into a proprietary database or opaque format.

## 11. CSS architecture

New override debt is prohibited.

The final architecture should converge toward a small explicit set of global stylesheets plus colocated component/template CSS Modules.

Allowed CSS forms are:

1. global stylesheets explicitly listed by the architecture, or
2. `*.module.css` colocated with the component or template it styles.

New ad-hoc global fix layers are not allowed. Naming patterns such as fix, patch, polish, lock, remaining, correction, tune, or adjust do not constitute a valid architecture category.

The global stylesheet allowlist and any changes to it require an Architecture Decision Record.

`:root` design-token definitions belong only in the token layer. Components may consume global tokens but may not redefine the site's root design system.

New `!important` declarations are prohibited. Existing declarations are migration debt and must only decrease over time. CI should prevent the baseline count from increasing.

## 12. Typography

English and Korean typography are equal sibling systems.

Korean typography is not an override patch applied to an English design.

The long-term structure should use independent English and Korean typography definitions while sharing the same overall brand grammar.

## 13. Component design

Shared components define grammar, not sameness.

PageCover, Photo, StoryBody, StoryMeta, StoryNav, SiteHeader, SiteFooter, LanguageSwitch, and shared room primitives may centralize repeated behavior and constraints.

Different rooms may retain different emotional rhythms, image compositions, and spatial pacing. Componentization must not flatten the site into a generic template.

## 14. HOME

The real-house entrance film is a protected brand asset.

HOME remains an experience of entering and walking through Esther's house. It must not be converted into a publishing dashboard, agent catalogue, SaaS landing page, or latest-post feed.

Books and author information must remain discoverable without displacing the house experience.

The HOME film master must be preserved separately from web delivery encodes.

## 15. Books, unpublished work, and rights

Unpublished manuscripts are private by default.

The site must not publish a full unpublished manuscript by default.

An excerpt may be published only after an explicit publishing/rights review. Approval must be recorded as data, including approval state, date, and reviewer where practical.

The review must consider whether the excerpt is itself a complete, separately saleable work or could prejudice first-publication/serial rights. Length alone is not a sufficient safety rule.

Rights information should be quiet but discoverable, with contextual access from BOOKS, ESTHER/About, and the footer. A short stable URL such as `/rights/` is preferred subject to final IA implementation.

## 16. Archive preservation

The website is not the archive master.

Three conceptual layers must remain distinct:

1. Archive Master — the best available original or preservation-quality source.
2. Preservation Copy — an independent backup copy stored separately.
3. Web Delivery — files optimized for site delivery.

The site may be rebuilt. The archive master must survive the site.

The exact preservation providers and storage media will be decided after the Sprint 0 asset census and ownership review.

## 17. Visual regression and art direction

Production visual behavior must not be intentionally changed during Sprint 0.

Future architecture migration requires three complementary review layers:

- Structural baseline: deterministic automated checks with media neutralized where appropriate.
- Editorial reference: human review of selected routes using real media.
- Media art direction: focal-point data and contact-sheet review across delivery aspect ratios.

Automated screenshot tests are not a substitute for editorial review of photographs.

## 18. Performance and accessibility

Performance and accessibility are architecture requirements, not finishing tasks.

The site must maintain measurable baselines for layout overflow, keyboard access, focus visibility, motion control, contrast, and major performance metrics.

The HOME film must remain controllable. Reduced-motion behavior, poster-first loading, preload policy, and mobile delivery are to be evaluated during the media/performance sprint against measured baselines.

## 19. Change management

Architecture changes must be small enough to review, verify, and reverse independently.

The project should prefer measurable exit criteria to arbitrary calendar deadlines.

Changes to constitutional architecture require an Architecture Decision Record that states:

- what changes
- why the previous rule is insufficient
- migration impact
- compatibility/redirect implications
- which constitutional article is amended

A constitutional amendment becomes effective only after the document is updated. Existing code that conflicts with an approved amendment must receive an explicit migration plan rather than being left as permanent exception debt.

## 20. Ownership and succession

Before Sprint 0 exits, the project must document the owner and recovery path for all critical assets and accounts, including at minimum:

- domain/DNS
- GitHub repository or organization
- Cloudflare account and Pages project
- future R2/media storage
- CMS authentication/integration
- archive master locations
- preservation copies
- rights/contact mailbox

The record must include how access can be transferred or recovered if the current technical operator is unavailable.

No ownership facts should be invented; unknown ownership must be marked unresolved and closed before it becomes a single point of archival failure.

## 21. Non-goals

The website is not, by default:

- a social network
- a comments platform
- a membership/community product
- an ecommerce store
- an events platform
- a marketing automation funnel
- a dashboard
- an embedded social-media wall
- a feature-heavy newsletter product

Any future request to add such a product category requires a deliberate architecture review. Convenience alone is not sufficient reason.

Search may be added when the growing archive requires it because search serves retrieval of the archive rather than product expansion.

## 22. Sprint order

The approved high-level sequence is:

### S0 — Audit & Baseline
No intentional production UI redesign. Inventory, baselines, guardrails, ownership review, media census, and CMS proof of concept.

### S1 — Architecture Contract
Story/media semantic schemas, IA data model, language availability policy, URL policy, component boundaries, and one real vertical-slice story.

### S2 — CSS Migration
Move styling into the approved architecture and dismantle override layers in reversible units.

### S3 — Content Migration & Publishing
Migrate existing story content, connect the selected CMS, and complete the Esther self-publishing acceptance test.

### S4 — Media System
Universal media rendering, focal data, usage reports, contact sheets, preservation separation, and HOME/media performance work.

### S5 — IA, Rights & Discovery
Featured entrances, collections index, rights, books metadata, locale availability pages, structured data, and search when justified.

### S6 — Accessibility, Consent & Preservation
Complete contrast/focus/motion/keyboard work, media review states, checksum/backup procedures, and operational publishing guidance.

### S7 — Final Art Direction
Only after the architecture is stable: refine crop, typography, spacing, rhythm, page endings, and bilingual visual balance.

## 23. Governing principle

When design elegance conflicts with truthful archival structure, preserve truth first.

When technical elegance conflicts with Esther's ability to publish and preserve her work, preserve usability and ownership first.

When a new feature conflicts with the identity of a quiet digital house, the default answer is no until a compelling long-term reason is demonstrated.
