# Architecture decision: Japanese global typography (19 November 2026)

**Scope:** Staging branch only, not production deployment.

The multilingual static website uses one root layout shared by English, Korean, and six prospective locales. Japanese requires a language-scoped webfont on the entire document: the global site header, footer, language chooser, seven main routes and two separately defined published-story routes.

A co-located CSS module cannot reach all global shell elements consistently without leaking internals, so the design uses a dedicated and narrowly scoped `src/styles/japanese.css` stylesheet imported once by the root layout.

- Selectors are qualified with `html:lang(ja)`, preserving existing EN/KO typography.
- Browser fonts: Noto Sans JP and Noto Serif JP, loaded as needed from Google Fonts, with macOS/Windows/Linux Japanese fallback faces.
- Written style: Japanese `line-break: strict` with controlled narrow-screen headline sizing.
- No font binaries are copied or provided as a downloadable artifact.
- CSS architecture guard stays enforced; this decision adds exactly one reviewed non-module CSS file to the explicit baseline.
- Must pass Japanese mobile/desktop screenshots and complete general CSS regression before the six-language release.
