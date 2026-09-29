# AVRÉN — Visual System

## 1. Color

Baseline palette:

```css
--background: #08080a;
--foreground: #f3f1ea;
--surface: #111114;
--surface-2: #17171b;
--muted: #807f78;
--line: rgba(243,241,234,0.1);
--line-strong: rgba(243,241,234,0.22);
--accent: #ff3b1d;
--accent-2: #ff6a3d;
```

Black is the dominant color.

White/off-white is the primary text color.

Red is a signature accent and should be used selectively:
- hero typography
- small indicators
- active states
- hover details
- separators
- CTA accents

Do not flood the interface with red.

## 2. Typography

The reference uses a condensed display face and a modern sans-serif.

Recommended starting fonts:
- Display: Anton or another similarly condensed display face
- Sans: Onest or another clean modern sans-serif

Display font:
- hero typography
- section headings
- marquee
- large numbers
- brand signature

Sans:
- navigation
- product information
- descriptions
- labels
- supporting copy

Typography should be oversized and confident.

## 3. Type Scale

Use a responsive rem-based scale inspired by the reference:

- Hero: approximately 28rem on large desktop
- Mega: approximately 13rem
- Display: approximately 7.5rem
- H1: approximately 5rem
- H2: approximately 3.25rem
- H3: approximately 1.75rem
- Lead: approximately 1.375rem
- Body: approximately 1.0625rem
- Eyebrow: approximately 0.8125rem

These are starting values. Tune based on actual AVRÉN photography and viewport composition.

## 4. Spacing

Desktop gutter:
`2.5rem`

Mobile gutter:
`16px`

Large section vertical spacing:
approximately `9rem`

Use generous whitespace.

Avoid compressing sections simply to show more content at once.

## 5. Grid

Breakpoints:
- mobile: below 640px
- tablet: 640–1023px
- desktop: 1024px+

Use:
- 12-column editorial grid for major desktop sections
- 2-column product grid where appropriate
- single-column mobile layouts

Asymmetry is encouraged where it improves the fashion-editorial character.

## 6. UI Details

Eyebrow:
- uppercase
- small
- letter spacing around 0.18–0.22em
- muted color
- red circular dot before label

Dividers:
- 1px
- low-opacity white
- used to establish rhythm rather than decoration

Buttons/links:
- minimal
- typography-led
- subtle movement
- red accent on interaction

Border radius:
- generally minimal
- image corners can use a very subtle radius
- avoid rounded SaaS-style cards

## 7. Image Direction

Photography is the most important visual asset after typography.

Prefer:
- editorial fashion photography
- high contrast
- clean studio compositions
- full-body/portrait compositions
- intentional negative space
- dark or neutral environments
- occasional red visual accents

Do not use generic stock imagery if the generated campaign imagery can provide a consistent art direction.
