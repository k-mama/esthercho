# Esther Cho Website — French Localization Stage Review
Date: 19 November 2026
Status: INTERNAL STAGING REVIEW · NOT DEPLOYED
Repository branch: `feature/multilingual-foundation-20261118`

## Editorial brief
Reference: the actual author-supplied `French Master Translation Guide.docx` was opened and studied, including the founding voice *« Sobre, élégant, intime, spirituel, retenu »*. The guide governs devotional manuscript translation; it was used for voice and terms only, not as authorization to publish an unfinished manuscript. Existing English website stories and Korean author facts were used as the source for website copy. The French version avoids overly sweet religious slogans, inflated emotion, added plot, and invented memories.

## Delivered
- **Seven French destinations:** `/fr/`, `/fr/stories/`, `/fr/books/`, `/fr/studio/`, `/fr/about/`, `/fr/notes/`, `/fr/archive/`.
- **Two complete public memory stories:** `Mon père avait rêvé d’un tigre` and `La petite dernière dans chaque maison`, each with their own `/fr/stories/<slug>/` route, source-faithful body, photo notes, metadata, and next-story links.
- Native French menu labels, footer, language picker, links, image alternative descriptions, and eight-part life timeline.
- Original home video, author photographs, childhood archive photograph, original breakfast images and three promotional picture-book trailers preserved. No generated substitute portrait.
- Accurate academic chronology: 1985 Yewon, 1988 Seoul Arts High School, 1992 Seoul National University degree, 1999 Ewha master's coursework. Coursework is **not** presented as a conferred master's degree.
- Published **English** and **German** picture-book links only. No unsupported claim that a French edition has been published. `Manna on the Table` remains a manuscript in progress.
- French document lang, `fr_FR` social metadata, canonical tags, reciprocal English/Brazilian Portuguese/Spanish/French alternates for both stories, and updated sitemap.

## Evidence and acceptance boundaries
- GitHub Actions Quality run `44339809525`: SUCCESS at feature commit `7ada12fac64495f01af70fde0143f981299ca62a`; lint and static build passed.
- `npm run build` verified **48 localized HTML pages** across six prospective languages and completed **French 9/9**, PT-BR 9/9 and Spanish 9/9 content/link tests.
- GitHub Actions French local-only browser run `44339809585`: SUCCESS; screenshots of the French home desktop/mobile, Stories, Books, Esther and both story pages. The original photos, readable headings and responsive first view were visually inspected.
- Checks ran against unpublished static output; no change to the production `main` branch.
- Outstanding: independent French native-language literary proofreading, physical-device/keyboard/link walkthrough, full-page screenshot or scroll review, combined multilingual SEO and existing English/Korean regression checks.

## Single-release policy
French staging passes the internal functional/editorial gate, **not the public-release gate**.
Continue separately with Italian and Japanese, and finish the German validation and all outstanding native/device gates. Deploy all six languages only after the Japanese stage and final integrated acceptance are complete.
