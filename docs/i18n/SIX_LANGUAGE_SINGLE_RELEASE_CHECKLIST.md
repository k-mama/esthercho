# Esther Cho — Six-Language Website Rollout (Staging Only)
Date: 2026-11-18
Status: NOT RELEASED. Do not merge to main before all six languages have individually passed full acceptance checks.

## Product owner rollout decision
1. German (de)
2. Brazilian Portuguese (pt-br)
3. Latin American Spanish (es)
4. French (fr)
5. Italian (it)
6. Japanese (ja)
Only then: one single production deployment including all six.

## Separation from production
- Production branch: `main`, currently contains only existing EN/KO pages.
- All new locale templates, translation drafts, new selector, SEO updates and QA belong to `feature/multilingual-foundation-20261118`.
- English/Korean content and photo assets must not be replaced.
- No branch merge, production push or launch communication is authorized until all six gates pass.

## Current status
| Language | Translation draft | Individual editorial acceptance | Browser/mobile acceptance | Production |
| --- | --- | --- | --- | --- |
| German | Yes | In progress: German guide and verified German book edition checked | Not yet | Not released |
| Portuguese (Brazil) | Yes: 7 rooms + 2 full stories | Internal editorial pass complete; independent native review pending | Local desktop/mobile screenshots and 9-page build audits passed; real-device release check pending | Not released |
| Spanish (Latin America) | Yes: 7 rooms + 2 full stories | Internal editorial pass; independent regional native proof pending | Nine-page build, local screenshots, and original Spanish cover-load proof passed; real-device checks pending | Not released |
| French | Yes | Pending | Not yet | Not released |
| Italian | Yes | Pending | Not yet | Not released |
| Japanese | Yes | Pending | Not yet | Not released |

The six drafts exist to make shared routing testable but are **not** equivalent to editorial lock/approval. Review and accept them individually in the requested order.

## Individual language acceptance checklist
- Complete seven-route website coverage (home plus six rooms).
- Entire UI translated, including footer, menu, skip link and image alternative text.
- Natural literary tone, no AI-sounding uniform voice or artificial religious uplift.
- Exact factual fidelity: Esther Cho / Cho Sungyeon naming, institutions, completed *coursework* vs a granted degree, original photo status.
- Accurate publication status: Big Dreams EN live, verified German edition paperback live; Manna manuscript in progress; never invent translations or localized Amazon links.
- Six room CTA paths preserve locale.
- Language switch preserves room path and serves a real reviewed translation.
- `lang`, canonical, sitemap and all reciprocal `hreflang` alternates correct.
- Desktop and mobile view with long German words / Japanese typography checked.
- Videos, poster images and book covers verified and responsive.
- CI quality, build, HTML audit, keyboard navigation and browser sanity checks pass.

## Single publication gate
- All six editorial gates explicitly completed.
- All six mobile/desktop presentation gates completed.
- GitHub Actions green at release head.
- Final diff reviewed for accidental EN/KO regressions.
- Then and only then: one merge/update to `main`, followed by one production verification pass.

## Source-policy note
The author-provided Master Translation Guides are for the corresponding **devotional manuscripts**, not blanket permission to translate or publish those manuscripts on the website. Website copy is editorially localized in a restrained register, while actual devotional entries will be translated only from locked source text.
