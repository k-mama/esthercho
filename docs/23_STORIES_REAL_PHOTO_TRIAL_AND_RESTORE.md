# Stories hero reversible real-photo trial (2026-11-18)

Only the English and Korean Stories page hero references changed, plus a media manifest update. Existing production media is intentionally preserved.

## Trial assets
- Desktop: `public/media/covers/stories-real-photo-trial-desktop.webp`
- Mobile: `public/media/covers/stories-real-photo-trial-mobile.webp`

These assets come from an author-supplied unretouched portrait taken beside a bright window. The desktop derivative uses a blurred extension created from the same image for typography space. No facial replacement, face reshaping or smoothing.

## Rollback (without touching any other website sections)
In BOTH `src/app/stories/page.tsx` and `src/app/ko/stories/page.tsx`, change:
- `image="/media/covers/stories-real-photo-trial-desktop.webp"` back to `image="/media/covers/stories-cover.webp"`
- `mobileImage="/media/covers/stories-real-photo-trial-mobile.webp"` back to `mobileImage="/media/covers/stories-cover-mobile.webp"`
- Restore the earlier alt text for a tree-lined stone-wall path.

In `MEDIA_MANIFEST_PAGE_COVERS.json`, restore `routes["/stories/"]` to `stories-cover.webp` and `mobile_routes["/stories/"]` to `stories-cover-mobile.webp`.

The original `stories-cover.jpg`, `stories-cover.webp`, and `stories-cover-mobile.webp` have NOT been overwritten.
