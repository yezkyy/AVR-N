<template>
  <div
    v-if="!isFinished"
    ref="preloaderEl"
    class="fixed inset-0 z-50 flex flex-col justify-between bg-background p-6 sm:p-10 text-foreground select-none overflow-hidden"
    :class="{ 'pointer-events-none': isWiping }"
  >
    <!-- Background Sculptural Monogram Watermark -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035] overflow-hidden"
      aria-hidden="true"
    >
      <span class="font-display text-[35vw] tracking-tightest leading-none">
        AVRÉN
      </span>
    </div>

    <!-- Background Atmospheric Red Accent Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-accent/6 blur-[150px] pointer-events-none"
      aria-hidden="true"
    />

    <!-- Top Status Bar -->
    <div class="relative z-10 flex items-center justify-between w-full border-b border-line pb-4 max-w-[1440px] mx-auto">
      <div class="eyebrow-badge">
        <span class="eyebrow-dot animate-ping" />
        <span class="text-xs">INISIALISASI SISTEM ATELIER</span>
      </div>
      <div class="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow text-muted">
        <span class="hidden sm:inline">MILAN • JAKARTA • TOKYO</span>
        <span class="hidden sm:inline text-line-strong">•</span>
        <span>EDISI 01 / 2026</span>
      </div>
    </div>

    <!-- Center Cinematic Counter & Dynamic Phase Narrative -->
    <div class="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4">
      <!-- Minimalist Brand Identifier -->
      <div class="flex items-center gap-2.5 mb-3 opacity-80">
        <img
          src="/logo.png"
          alt="AVRÉN"
          class="h-6 w-auto object-contain"
          onerror="this.style.display='none'"
        />
        <span class="font-display text-lg tracking-widest text-foreground">AVRÉN</span>
      </div>

      <!-- Giant Architectural Percentage Counter -->
      <div class="relative overflow-hidden py-1">
        <span
          ref="counterEl"
          class="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] tracking-tightest text-foreground block tabular-nums select-none"
        >
          {{ formattedCount }}<span class="text-accent text-4xl sm:text-6xl md:text-7xl lg:text-8xl ml-1">%</span>
        </span>
      </div>

      <!-- Sleek Dual-line Progress Bar with Glowing Head -->
      <div class="w-48 sm:w-72 md:w-80 h-[2px] bg-surface-2 mt-6 relative overflow-hidden rounded-full">
        <div
          class="h-full bg-accent transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(255,59,29,0.8)]"
          :style="{ width: `${progress}%` }"
        />
      </div>

      <!-- Dynamic Stepper Phase Narrative -->
      <div class="mt-5 h-6 flex items-center justify-center overflow-hidden">
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <p
            :key="currentPhaseText"
            class="text-[11px] sm:text-xs uppercase tracking-eyebrow text-foreground/75 font-medium"
          >
            {{ currentPhaseText }}
          </p>
        </Transition>
      </div>
    </div>

    <!-- Bottom Metadata & Coordinates Bar -->
    <div class="relative z-10 flex items-end justify-between w-full border-t border-line pt-4 max-w-[1440px] mx-auto text-[11px] uppercase tracking-eyebrow text-muted">
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-accent" />
        <span>ESENSIAL MODERN</span>
      </div>
      <span class="font-mono text-[10px] text-muted hidden sm:inline">
        LAT. 45.4642° N • LON. 9.1900° E
      </span>
      <span>
        DITEGASKAN OLEH DETAIL
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const emit = defineEmits<{
  (e: 'complete'): void
}>()

const progress = ref(0)
const isWiping = ref(false)
const isFinished = ref(false)
const preloaderEl = ref<HTMLElement | null>(null)

const formattedCount = computed(() => {
  return progress.value.toString().padStart(2, '0')
})

const currentPhaseText = computed(() => {
  if (progress.value < 35) {
    return '01 / MEMUAT ESENSI MATERIAL & TEKSTIL'
  } else if (progress.value < 75) {
    return '02 / MENGALIBRASI STRUKTUR ARSITEKTURAL'
  } else {
    return '03 / MEMBUKA KAMPANYE AVRÉN 2026'
  }
})

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    isFinished.value = true
    emit('complete')
    return
  }

  const duration = 2000 // Total ms
  const startTime = performance.now()

  const updateCounter = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const t = Math.min(1, elapsed / duration)

    // Smooth cubic bezier easing for organic motion
    const easeProgress = t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2

    progress.value = Math.min(100, Math.round(easeProgress * 100))

    if (t < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      progress.value = 100
      setTimeout(() => {
        isWiping.value = true
        if (preloaderEl.value) {
          preloaderEl.value.style.transition = 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1)'
          preloaderEl.value.style.transform = 'translateY(-100%)'
          preloaderEl.value.style.opacity = '0.98'
        }

        setTimeout(() => {
          isFinished.value = true
          emit('complete')
        }, 850)
      }, 250)
    }
  }

  requestAnimationFrame(updateCounter)
})
</script>
