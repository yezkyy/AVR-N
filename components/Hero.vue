<template>
  <section
    id="hero"
    ref="heroRef"
    class="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 pb-8 md:pb-12 px-5 sm:px-8 md:px-12 overflow-hidden bg-background"
  >
    <!-- Background atmospheric glow -->
    <div
      class="absolute top-1/4 -right-24 w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none"
      aria-hidden="true"
    />



    <!-- Center Composition: Proportioned Typography & Layered Campaign Image -->
    <div class="relative z-10 my-auto py-6 md:py-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <!-- Left / Typography Column -->
      <div class="lg:col-span-7 flex flex-col justify-center select-none">
        <!-- Brand Title Letters -->
        <h1 class="flex flex-col font-display leading-[0.88] tracking-tightest">
          <div class="overflow-hidden py-0.5">
            <span class="hero-title-line inline-block text-[15vw] sm:text-[13vw] md:text-8xl lg:text-[7rem] xl:text-[8.5rem] text-foreground transition-transform">
              AVR<span class="text-accent">É</span>N
            </span>
          </div>
          <div class="overflow-hidden py-0.5">
            <span class="hero-title-line-2 inline-block text-[6vw] sm:text-[5vw] md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] text-foreground/80 tracking-tight">
              ESENSIAL MODERN
            </span>
          </div>
        </h1>

        <!-- Editorial statement below headline -->
        <div class="hero-fade mt-5 md:mt-6 max-w-lg">
          <p class="text-sm sm:text-base text-foreground/75 font-light leading-relaxed">
            Diciptakan untuk era minimalisme mutakhir. Siluet arsitektural yang dirancang dengan serat wol murni dan ketenangan berwibawa.
          </p>

          <div class="mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#featured"
              class="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-foreground text-background font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-xl"
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
              class="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 border border-line text-foreground/80 hover:text-foreground hover:border-line-strong text-xs uppercase tracking-eyebrow font-medium transition-colors rounded-sm"
              @click.prevent="$emit('navigate', '#story')"
            >
              <span>FILOSOFI KAMI</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right / Layered Editorial Campaign Visual -->
      <div class="lg:col-span-5 relative mt-4 lg:mt-0">
        <div class="hero-image-wrapper relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden bg-surface-2 shadow-2xl border border-line">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85"
            alt="Tampilan Kampanye AVRÉN 2026"
            class="hero-image w-full h-full object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            loading="eager"
          />
          <!-- Editorial image badge -->
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground">
            <span class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              LOOK 01 / OBSIDIAN FORM
            </span>
            <span class="text-muted">GUGUR 2026</span>
          </div>
        </div>

        <!-- Floating Decorative Accent Box -->
        <div class="hidden xl:block absolute -bottom-4 -left-6 bg-surface/95 backdrop-blur-md border border-line p-3.5 rounded-sm shadow-xl max-w-[240px] z-20">
          <p class="text-[10px] uppercase tracking-widest text-accent font-semibold mb-0.5">
            KEMURNIAN MATERIAL
          </p>
          <p class="text-[11px] text-foreground/70 leading-snug">
            100% Wol Virgin Italia & Gabardine Bonded Jepang.
          </p>
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
    el.style.transition = `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.35 + index * 0.1}s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.35 + index * 0.1}s`
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
    el.style.transform = 'translateY(30px)'
  })

  if (props.ready) {
    triggerEntrance()
  }
})
</script>
