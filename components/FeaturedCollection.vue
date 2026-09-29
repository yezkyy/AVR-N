<template>
  <section
    id="featured"
    class="relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 max-w-[1440px] mx-auto overflow-hidden"
  >
    <!-- Section Header Bar -->
    <div class="reveal-item flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-6 mb-12 gap-5">
      <div>
        <div class="eyebrow-badge mb-3">
          <span class="eyebrow-dot" />
          <span class="text-xs">01 / KOLEKSI PILIHAN</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest uppercase text-foreground">
          EDISI <span class="text-accent">MONOLITH</span>
        </h2>
      </div>

      <div class="max-w-md">
        <p class="text-xs sm:text-sm text-foreground/70 font-light leading-relaxed">
          Sebuah eksplorasi penjahitan tegas, proporsi tanpa kompromi, dan kedalaman tekstil. Didedikasikan bagi mereka yang melangkah di garis depan.
        </p>
      </div>
    </div>

    <!-- Asymmetric Editorial Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- Dominant Feature (Col 1-7) -->
      <NuxtLink
        v-if="featuredProducts[0]"
        :to="`/products/${featuredProducts[0].id}`"
        class="reveal-item lg:col-span-7 group flex flex-col cursor-pointer"
      >
        <div class="liquid-img-wrapper relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[580px]">
          <img
            :src="featuredProducts[0].image"
            :alt="featuredProducts[0].name"
            class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />

          <!-- Dominant Badge Tag -->
          <div class="absolute top-4 left-4 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            {{ featuredProducts[0].tag }}
          </div>

          <!-- Quick Action Hover Indicator -->
          <div class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span class="text-xs uppercase tracking-eyebrow text-foreground font-medium flex items-center gap-2">
              <span>LIHAT DETAIL & SPESIFIKASI</span>
              <span class="text-accent">→</span>
            </span>
          </div>
        </div>

        <!-- Dominant Meta Details -->
        <div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line pb-3 gap-2">
          <div>
            <span class="text-[11px] uppercase tracking-eyebrow text-muted block mb-0.5">
              {{ featuredProducts[0].category }} — {{ featuredProducts[0].collection }}
            </span>
            <h3 class="font-display text-xl sm:text-2xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {{ featuredProducts[0].name }}
            </h3>
          </div>
          <span class="font-sans text-base font-medium text-foreground tabular-nums">
            {{ featuredProducts[0].price }}
          </span>
        </div>
        <p class="mt-2 text-xs sm:text-sm text-foreground/60 font-light max-w-lg">
          {{ featuredProducts[0].description }}
        </p>
      </NuxtLink>

      <!-- Secondary Feature & Editorial Sidebar (Col 8-12) -->
      <div class="lg:col-span-5 flex flex-col space-y-10 lg:pt-8">
        <!-- Secondary Piece -->
        <NuxtLink
          v-if="featuredProducts[1]"
          :to="`/products/${featuredProducts[1].id}`"
          class="reveal-item group flex flex-col cursor-pointer"
        >
          <div class="liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[380px]">
            <img
              :src="featuredProducts[1].image"
              :alt="featuredProducts[1].name"
              class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div class="absolute top-4 left-4 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground/80 font-semibold">
              {{ featuredProducts[1].tag }}
            </div>
          </div>

          <div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line pb-3 gap-2">
            <div>
              <span class="text-[11px] uppercase tracking-eyebrow text-muted block mb-0.5">
                {{ featuredProducts[1].category }} — {{ featuredProducts[1].collection }}
              </span>
              <h3 class="font-display text-lg sm:text-xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                {{ featuredProducts[1].name }}
              </h3>
            </div>
            <span class="font-sans text-sm font-medium text-foreground tabular-nums">
              {{ featuredProducts[1].price }}
            </span>
          </div>
          <p class="mt-2 text-xs sm:text-sm text-foreground/60 font-light">
            {{ featuredProducts[1].description }}
          </p>
        </NuxtLink>

        <!-- Editorial Quote Card -->
        <div class="reveal-item p-6 bg-surface border border-line rounded-sm relative overflow-hidden">
          <div class="eyebrow-badge mb-3">
            <span class="eyebrow-dot" />
            <span class="text-xs">MANIFESTO DESAIN</span>
          </div>
          <p class="font-display text-lg sm:text-xl uppercase tracking-tight text-foreground/90 leading-snug">
            "BUSANA HARUS MENJADI PERISAI ARSITEKTURAL: DISEDERHANAKAN HINGGA ESENSI, PENUH KEKUATAN."
          </p>
          <div class="mt-5 pt-3.5 border-t border-line flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-muted">
            <span>ATELIER AVRÉN</span>
            <span class="text-accent">MILAN / JAKARTA</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { featuredProducts } from '~/data/products'
</script>
