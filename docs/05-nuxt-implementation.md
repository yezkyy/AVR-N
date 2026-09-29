# AVRÉN — Nuxt Implementation Guide

## 1. Architecture

Keep the Nuxt project intentionally simple.

Suggested structure:

```text
app/
├── app.vue
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── Preloader.vue
│   ├── Navbar.vue
│   ├── Hero.vue
│   ├── Marquee.vue
│   ├── FeaturedCollection.vue
│   ├── BrandStory.vue
│   ├── ProductGrid.vue
│   ├── Lookbook.vue
│   ├── BrandCTA.vue
│   └── Footer.vue
├── data/
│   └── products.ts
├── pages/
│   └── index.vue
└── public/
    └── images/
```

Adjust Nuxt conventions if the generated project uses a slightly different structure.

## 2. Component Responsibility

### Preloader.vue
Own:
- loading counter
- page lock
- wipe animation
- Lenis start/stop coordination

### Navbar.vue
Own:
- desktop navigation
- mobile menu
- active/hover states
- smooth anchor navigation

### Hero.vue
Own:
- large AVRÉN typography
- hero image/video
- hero reveal sequence
- scroll cue

### Marquee.vue
Own:
- duplicated marquee track
- infinite animation
- reduced-motion behavior

### FeaturedCollection.vue
Own:
- dominant featured products
- editorial composition
- product metadata

### BrandStory.vue
Own:
- brand philosophy
- large statement
- supporting text

### ProductGrid.vue
Own:
- static product list
- responsive layout
- product hover interactions

### Lookbook.vue
Own:
- campaign imagery
- editorial image compositions

### BrandCTA.vue
Own:
- closing brand statement
- primary CTA

### Footer.vue
Own:
- brand signature
- social/navigation links
- copyright

## 3. Styling

Prefer a centralized CSS variable system.

Do not scatter arbitrary colors throughout components.

Use:
- CSS variables
- semantic classes
- responsive media queries
- reusable motion classes

Avoid a large utility-class wall when it reduces readability.

## 4. Motion Implementation

Use CSS transitions/keyframes for straightforward motion.

Use JavaScript/GSAP only for:
- complex text splitting
- coordinated sequences
- liquid SVG filter values
- interactions that are difficult to express reliably in CSS

Do not introduce multiple animation libraries for the same job.

## 5. Image Handling

Use optimized local assets where possible.

Recommended formats:
- WebP for photography
- AVIF where supported and practical
- MP4/WebM for hero video

Always define:
- width/height or aspect ratio
- object-fit
- object-position

Avoid layout shift.

## 6. Responsive Behavior

Desktop is the primary editorial composition.

Mobile must not simply shrink desktop.

Explicitly redesign:
- hero typography
- image positioning
- product grids
- lookbook composition
- navigation
- spacing

Disable desktop-only hover effects on touch devices.

## 7. Accessibility

Implement:
- semantic headings
- alt text
- keyboard navigation
- visible focus states
- accessible mobile menu
- `aria-expanded` where appropriate
- reduced-motion support
- sufficient contrast

Decorative images can use empty alt text.

## 8. Performance

Avoid:
- unnecessary dependencies
- huge unoptimized images
- excessive JavaScript
- continuous expensive calculations

IntersectionObserver should be used for one-time section reveals.

Liquid distortion should run only when needed and primarily on desktop hover.

Lazy-load below-the-fold imagery.

## 9. Static Deployment

The site should be compatible with Nuxt static generation.

No runtime server requirement should be introduced unless a future feature explicitly requires it.
