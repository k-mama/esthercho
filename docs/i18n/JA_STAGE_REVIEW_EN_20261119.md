# Japanese Website Localization — Staging Review
Date: 2026-11-19 | Working branch: feature/multilingual-foundation-20261118 | **NOT LIVE**

Seven Japanese core pages plus two fully translated archive stories are staged: `父は虎の夢を見た` and `どの家でも末娘`. All original author images, childhood photographs, home video and book trailers are preserved. Japanese text and accessibility descriptions use a restrained everyday voice, keeping the boundaries of recorded memories. The Japanese Master Translation Guide was consulted for voice, not as publication permission for the unfinished devotional text.

**Resolved issue:** Early local Chromium images contained Japanese tofu (□) in the navigation. Root cause: global Korean CSS triggered by a hidden Korean option in the language picker. The selector was narrowed to actual `html:lang(ko)`; Japanese-specific Noto font stacks were added. Local Japanese screenshots were rechecked and the shared Korean language selector regression corrected.

**Technical evidence:** Japanese 9/9 staging pages and the full 70-page integrated SEO/media test pass. Latest original Japanese internal preview run: `44354257510` (successful). Academic records distinguish 1999 master's coursework completion from receiving the degree. No unverified Japanese book edition is sold.

**Open before launch:** Independent native Japanese editor review, real-device/mobile menu and typography test, keyboard/link verification, combined eight-language page scroll review, final EN/KO regression. No production merge.
