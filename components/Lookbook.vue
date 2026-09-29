<template>
  <section
    id="lookbook"
    class="relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 bg-surface/30 border-y border-line overflow-hidden"
  >
    <div class="max-w-[1440px] mx-auto">
      <!-- Section Header -->
      <div class="reveal-item flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-6 mb-12 gap-5">
        <div>
          <div class="eyebrow-badge mb-3">
            <span class="eyebrow-dot" />
            <span class="text-xs">04 / KAMPANYE VISUAL</span>
          </div>
          <h2 class="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest uppercase text-foreground">
            LOOKBOOK <span class="text-accent">2026</span>
          </h2>
        </div>

        <div class="max-w-md">
          <p class="text-xs sm:text-sm text-foreground/70 font-light leading-relaxed">
            Bayangan obsidian dan kontur arsitektural tegas yang diabadikan dalam kampanye musim dingin Eropa.
          </p>
        </div>
      </div>

      <!-- Lookbook Dynamic Asymmetric Composition Grid -->
      <div class="grid grid-cols-12 gap-5 lg:gap-8 items-stretch">
        <div
          v-for="item in lookbookItems"
          :key="item.id"
          class="reveal-item group flex flex-col"
          :class="item.span"
        >
          <div
            class="liquid-img-wrapper relative w-full rounded-sm overflow-hidden bg-surface-2 border border-line"
            :class="item.aspect"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="liquid-img w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />

            <!-- Editorial Overlay Frame -->
            <div class="absolute inset-0 p-5 md:p-6 flex flex-col justify-between bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <div class="flex items-center justify-between">
                <span class="text-[10px] uppercase tracking-widest text-accent font-semibold px-2 py-0.5 bg-background/80 backdrop-blur-md rounded-sm border border-line">
                  {{ item.subtitle }}
                </span>
              </div>

              <div>
                <h3 class="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { lookbookItems } from '~/data/products'
</script>
