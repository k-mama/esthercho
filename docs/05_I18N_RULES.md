# Esther Cho Website — Internationalization Rules

## Locale Strategy

Default locale: English

Initial active locales:
- `en`
- `ko`

Planned:
- `ja`
- `zh-tw`
- `es`
- `pt-br`

## URL Rules

English uses root paths. All other languages use locale prefixes.

```text
/            English
/ko/         Korean
/ja/         Japanese
/zh-tw/      Traditional Chinese
/es/         Spanish
/pt-br/      Brazilian Portuguese
```

## Language Selector

Use a globe icon. The selector must be keyboard accessible, show language names in their own language, preserve the current content when a translation exists, and show a clear availability notice when it does not.

Example:

> This page is currently available in English.

Do not silently redirect to unrelated translated content.

## Editorial Rule

English is the editorial master. Edit for North American rhythm and context. Do not translate Korean sentence structure literally or erase Korean cultural specificity.

## Navigation Labels

```text
HOME
STORIES
BOOKS
ARCHIVE
STUDIO
NOTES
ABOUT
```

## Metadata

Every locale page must include localized title, description, canonical URL, alternate language links, Open Graph metadata, social image, and language tag.
