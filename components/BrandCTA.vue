<template>
  <section
    id="cta"
    class="relative py-20 md:py-28 lg:py-32 px-5 sm:px-8 md:px-12 bg-background overflow-hidden border-b border-line"
  >
    <!-- Background atmospheric glow -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[25vw] rounded-full bg-accent/8 blur-[140px] pointer-events-none"
      aria-hidden="true"
    />

    <div class="max-w-[1440px] mx-auto text-center relative z-10 flex flex-col items-center">
      <div class="reveal-item eyebrow-badge mb-6">
        <span class="eyebrow-dot" />
        <span class="text-xs">EDISI 01 / TERSEDIA DI SELURUH DUNIA</span>
      </div>

      <!-- Balanced Climax Typography -->
      <h2 class="reveal-item font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.88] tracking-tightest uppercase text-foreground select-none">
        WUJUDKAN<br />
        <span class="text-accent">KEHADIRAN</span><br />
        DIRIMU.
      </h2>

      <p class="reveal-item mt-6 max-w-md text-sm sm:text-base text-foreground/70 font-light leading-relaxed">
        Sempurnakan ritual harian Anda. Koleksi Musim Gugur-Dingin 2026 kini tersedia dalam jumlah produksi bernomor yang sangat terbatas.
      </p>

      <div class="reveal-item mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
        <a
          href="#featured"
          class="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl"
          @click.prevent="$emit('navigate', '#featured')"
        >
          JELAJAHI KOLEKSI
        </a>

        <a
          href="#footer"
          class="w-full sm:w-auto px-7 py-4 border border-line hover:border-line-strong text-foreground text-xs uppercase tracking-eyebrow font-medium transition-colors rounded-sm"
          @click.prevent="$emit('navigate', '#footer')"
        >
          HUBUNGI LAYANAN PRIBADI
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'navigate', selector: string): void
}>()
</script>
