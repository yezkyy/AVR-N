<template>
  <section
    id="hero"
    ref="heroRef"
    class="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-6 md:pb-10 px-5 sm:px-8 md:px-12 overflow-hidden bg-background"
  >
    <!-- Background atmospheric glow -->
    <div
      class="absolute top-1/3 -right-20 w-[45vw] h-[45vw] rounded-full bg-accent/6 blur-[140px] pointer-events-none"
      aria-hidden="true"
    />

    <!-- Main Editorial Hero Grid (Full balance without empty top void) -->
    <div class="relative z-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto py-2 sm:py-6">
      <!-- Left / Editorial Typography & Action Column (Col 1-7) -->
      <div class="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 select-none">
        <!-- Top Editorial Eyebrow Tag -->
        <div class="hero-fade flex items-center gap-3">
          <div class="eyebrow-badge">
            <span class="eyebrow-dot" />
            <span class="text-xs">KAMPANYE 2026 / EDISI 01</span>
          </div>
          <span class="h-3.5 w-[1px] bg-line-strong" />
          <span class="text-[11px] uppercase tracking-eyebrow text-muted hidden sm:inline-block">
            TAILORING & SILUET ARSITEKTURAL
          </span>
        </div>

        <!-- Giant Brand Title Letters -->
        <h1 class="flex flex-col font-display tracking-tightest">
          <div class="overflow-hidden py-1">
            <span class="hero-title-line inline-block text-[16vw] sm:text-[14vw] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.92] text-foreground transition-transform">
              AVR<span class="text-accent">É</span>N
            </span>
          </div>
          <div class="overflow-hidden py-1 mt-1 sm:mt-2">
            <span class="hero-title-line-2 inline-block text-[6.5vw] sm:text-[5vw] md:text-3xl lg:text-[2.5rem] xl:text-[3rem] leading-tight text-foreground/80 tracking-tight">
              ESENSIAL MODERN
            </span>
          </div>
        </h1>

        <!-- Editorial Statement Narrative -->
        <div class="hero-fade max-w-lg space-y-3">
          <p class="text-sm sm:text-base text-foreground/80 font-light leading-relaxed">
            Diciptakan untuk era minimalisme mutakhir. Siluet arsitektural yang dirancang dengan serat wol murni dan ketenangan berwibawa.
          </p>
        </div>

        <!-- Action Buttons Row -->
        <div class="hero-fade flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
          <a
            href="#featured"
            class="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-foreground text-background font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-xl"
            @click.prevent="$emit('navigate', '#featured')"
          >
            <span>JELAJAHI KOLEKSI</span>
            <svg
              class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#story"
            class="inline-flex items-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 border border-line text-foreground/80 hover:text-foreground hover:border-line-strong text-xs uppercase tracking-eyebrow font-medium transition-colors rounded-sm"
            @click.prevent="$emit('navigate', '#story')"
          >
            <span>FILOSOFI KAMI</span>
          </a>
        </div>

        <!-- Luxury Editorial Pillars Pill Bar -->
        <div class="hero-fade pt-4 border-t border-line grid grid-cols-3 gap-2 max-w-lg text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-muted">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" />
            <span class="text-foreground/80">WOL ITALIA</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" />
            <span class="text-foreground/80">JAHIT TANGAN</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" />
            <span class="text-foreground/80">EDISI BERMOR</span>
          </div>
        </div>
      </div>

      <!-- Right / Balanced Editorial Campaign Visual (Col 8-12) -->
      <div class="lg:col-span-5 relative mt-4 lg:mt-0 flex flex-col items-center">
        <div class="hero-image-wrapper relative aspect-[3/4] max-h-[520px] sm:max-h-[560px] lg:max-h-[580px] w-full max-w-md mx-auto rounded-sm overflow-hidden bg-surface-2 shadow-2xl border border-line">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85"
            alt="Tampilan Kampanye AVRÉN 2026"
            class="hero-image w-full h-full object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            loading="eager"
          />

          <!-- Gradient Vignette -->
          <div class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

          <!-- Editorial image badge bottom -->
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-foreground">
            <span class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              LOOK 01 / OBSIDIAN FORM
            </span>
            <span class="text-muted">GUGUR 2026</span>
          </div>
        </div>

        <!-- Floating Decorative Accent Tag Box -->
        <div class="hidden xl:flex items-center gap-3 absolute -bottom-3 -left-6 bg-surface/95 backdrop-blur-md border border-line p-3 rounded-sm shadow-xl z-20">
          <span class="w-2 h-2 rounded-full bg-accent" />
          <div class="flex flex-col">
            <span class="text-[9px] uppercase tracking-widest text-accent font-semibold">KEMURNIAN MATERIAL</span>
            <span class="text-[11px] text-foreground/80">100% Virgin Wool & Bonded Gabardine</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar & Scroll Cue -->
    <div class="relative z-20 flex items-center justify-between max-w-[1440px] w-full mx-auto pt-3 border-t border-line text-[11px] uppercase tracking-eyebrow text-muted">
      <div class="flex items-center gap-2">
        <span class="w-2 h-[1px] bg-accent" />
        <span>GULIR UNTUK MENJELAJAHI</span>
      </div>

      <a
        href="#featured"
        class="group flex items-center gap-2.5 text-foreground hover:text-accent transition-colors"
        aria-label="Gulir ke koleksi pilihan"
        @click.prevent="$emit('navigate', '#featured')"
      >
        <span class="hidden sm:inline">BABAK 01</span>
        <div class="w-7 h-7 rounded-full border border-line group-hover:border-accent flex items-center justify-center transition-colors">
          <svg
            class="w-3 h-3 text-foreground group-hover:text-accent transform group-hover:translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  ready?: boolean
}>()

defineEmits<{
  (e: 'navigate', selector: string): void
}>()

const heroRef = ref<HTMLElement | null>(null)

const triggerEntrance = () => {
  if (!process.client) return
  const lines = document.querySelectorAll('.hero-title-line, .hero-title-line-2')
  lines.forEach((line, index) => {
    const el = line as HTMLElement
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
    el.style.transition = `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s, opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`
  })

  const fades = document.querySelectorAll('.hero-fade, .hero-image-wrapper')
  fades.forEach((item, index) => {
    const el = item as HTMLElement
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
    el.style.transition = `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.25 + index * 0.08}s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.25 + index * 0.08}s`
  })
}

watch(() => props.ready, (isReady) => {
  if (isReady) {
    triggerEntrance()
  }
})

onMounted(() => {
  const lines = document.querySelectorAll('.hero-title-line, .hero-title-line-2')
  lines.forEach((line) => {
    const el = line as HTMLElement
    el.style.opacity = '0'
    el.style.transform = 'translateY(100%)'
  })

  const fades = document.querySelectorAll('.hero-fade, .hero-image-wrapper')
  fades.forEach((item) => {
    const el = item as HTMLElement
    el.style.opacity = '0'
    el.style.transform = 'translateY(25px)'
  })

  if (props.ready) {
    triggerEntrance()
  }
})
</script>
