# AVRÉN — Motion System

## 1. Motion Philosophy

Motion should feel:
- cinematic
- smooth
- controlled
- premium
- slightly springy
- never chaotic

The reference uses spring-based motion translated into duration/easing. AVRÉN should preserve that feel.

## 2. Smooth Scroll

Use Lenis.

Concept:

```js
const lenis = new Lenis({
  smoothWheel: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
```

Expose the instance where required for navigation anchors and preloader control.

## 3. Preloader

Full-screen dark preloader.

Suggested:
- AVRÉN wordmark at bottom/edge
- percentage counter
- counter: 0 → 100
- duration: ~2000ms
- labels fade: ~300ms
- delay: ~200ms
- full-screen wipe upward: ~650ms
- easing: `cubic-bezier(0.22,1,0.36,1)`

Lock scrolling during preload.

Start Lenis after the wipe finishes.

## 4. Hero Reveal

Hero typography:
- letter-by-letter
- translateY from approximately 100% to 0
- opacity 0 → 1
- duration: ~900ms
- easing: `cubic-bezier(0.16,1,0.3,1)`
- letter stagger: ~52ms

If hero contains multiple large text lines:
- second line starts roughly 240ms after the first

Supporting hero copy:
- translateY: 16px → 0
- opacity: 0 → 1
- duration: ~520ms
- easing: `cubic-bezier(0.16,1,0.3,1)`

Scroll cue:
- reveal after primary hero content
- subtle fade/slide

## 5. Section Headings

Headings reveal line-by-line.

Baseline:
- translateY: 110% → 0
- opacity: 0 → 1
- duration: 800–950ms
- easing: `cubic-bezier(0.16,1,0.3,1)`
- line stagger: ~90ms

Do not reveal every word independently unless the design specifically benefits from it.

## 6. Scroll-Triggered Content

Use IntersectionObserver or an equivalent Nuxt/Vue-compatible approach.

Trigger:
- first viewport intersection
- play once
- do not reverse

General reveal:
- opacity 0 → 1
- translateY: 40–60px → 0
- duration: 520–640ms
- easing: `cubic-bezier(0.16,1,0.3,1)`

Stagger:
- product cards: ~120ms
- text/list items: ~90ms
- stat-like items: ~110ms

## 7. Marquee

Infinite linear marquee.

Recommended:
- duplicate content once
- translate `0% → -50%`
- duration: 22s
- linear
- infinite

Disable animation under reduced-motion.

## 8. Image Interaction

Use an optional liquid/displacement effect based on SVG:
- `feTurbulence`
- `feDisplacementMap`

Resting state:
- displacement scale around 1
- base frequency around 0.009

Hover:
- displacement scale approximately 22–30 depending on image
- base frequency approximately 0.022
- duration around 520ms
- springy/elastic character

Use only on capable desktop pointers.

On touch/mobile:
- disable liquid hover effects.

## 9. Product Hover

On desktop:
- image distortion can activate subtly
- grayscale image may transition toward natural color
- product title can shift foreground → red
- optional red glow sweep

Do not animate scale aggressively.

## 10. Mobile Navigation

Menu:
- fade/open: ~450ms
- links slide upward from ~48px
- opacity 0 → 1
- staggered entrance
- each link can use ~100–120ms stagger

Burger:
- animate into X
- reverse cleanly on close

## 11. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  /* show final states */
}
```

Disable:
- preloader animation
- marquee animation
- liquid distortion
- entrance transitions

Content must remain fully accessible without animation.
