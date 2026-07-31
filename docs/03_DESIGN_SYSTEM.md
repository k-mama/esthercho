# Esther Cho Website — Design System

## 1. Creative Direction

Internal visual concept: **A story house in morning light**

The visual language combines Korean domestic memory, North American editorial warmth, natural light, lived-in textures, quiet cottage-film pacing, refined book design, and family archive honesty.

## 2. Use

- warm off-white space
- editorial typography
- soft natural light
- full-bleed photography where appropriate
- asymmetrical image grids
- restrained motion
- paper, linen, ceramic, wood, garden, and archival textures

## 3. Avoid

- generic beige luxury
- gold foil styling
- corporate card dashboards
- SaaS gradients
- glassmorphism
- oversized pill buttons
- decorative handwriting everywhere
- constant parallax
- fake film dust on every image
- forced traditional ornament
- children’s characters in global navigation

## 4. Color Tokens

```css
:root {
  --color-paper: #F4F0E7;
  --color-paper-light: #FBF8F1;
  --color-ink: #242321;
  --color-ink-soft: #55514B;
  --color-father-blue: #9CB8CC;
  --color-burgundy-memory: #754850;
  --color-garden-green: #667565;
  --color-dawn-gold: #B58C58;
  --color-quiet-night: #29333D;
  --color-line: rgba(36, 35, 33, 0.14);
}
```

Use one accent family per section.

## 5. Typography

- English story: Newsreader
- English interface: Inter
- Korean story: MaruBuri
- Korean interface: Pretendard

## 6. Layout

### Desktop
Editorial reading width, generous spacing, image-led sections, no corporate three-column layout.

### Mobile
Mobile-first, readable body size, large touch targets, no unreadable text inside images, no sticky controls covering content.

## 7. Motion

Opening film: 8–12 seconds, muted autoplay, playsinline, skip control, sound control, static fallback.

General motion: short fade, subtle image scale, one moving element per frame, no archival face animation, respect `prefers-reduced-motion`.

## 8. Accessibility

- target 4.5:1 body contrast
- keyboard-accessible language selector
- visible focus states
- semantic headings
- descriptive alt text
- captions and transcripts
- no meaning by color alone
