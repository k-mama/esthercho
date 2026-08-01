# Content Source of Truth and Books Sprint

## Purpose

This sprint stops repeated page level duplication of names, education data, and book status.

## Source of truth files

- `src/content/author-profile.ts`
- `src/content/books.ts`

## Locked public author naming

- Global author name: `Esther Cho`
- Korean name: `조성연`
- Romanized Korean name: `Cho Seongyeon`

Do not use `Cho, Seongyun`, `Cho Seongyun`, or `CHO, SEONGYUN`.

## Education wording

The 1999 line must state that Esther Cho completed the coursework for a master's program in Art Education at Ewha Womans University.

It must not state that she earned or holds a master's degree.

## Books status policy

Until publication facts are formally confirmed:

- use `In development`
- use `Details to be announced`
- do not claim that the work has been published
- do not add dates, ISBNs, publishers, editions, or rights availability

## Scope

This sprint:

- centralizes author data
- corrects the remaining Romanization error
- replaces the empty BOOKS followup with a real project introduction
- preserves the approved BOOKS cover
- keeps English and Korean BOOKS pages structurally aligned

This sprint does not:

- add an unconfirmed book cover asset
- add a publisher, publication date, ISBN, price, or sales link
- redesign the homepage
- complete the long Korean ESTHER biography
