<template>
  <section
    id="catalog"
    class="relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 max-w-[1440px] mx-auto overflow-hidden"
  >
    <!-- Section Header -->
    <div class="reveal-item flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-6 mb-12 gap-5">
      <div>
        <div class="eyebrow-badge mb-3">
          <span class="eyebrow-dot" />
          <span class="text-xs">03 / KOLEKSI PERMANEN</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest uppercase text-foreground">
          KATALOG <span class="text-accent">2026</span>
        </h2>
      </div>

      <div class="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-muted">
        <span>6 BUSANA ARSITEKTURAL</span>
        <span>•</span>
        <span>PRODUKSI TERBATAS</span>
      </div>
    </div>

    <!-- Editorial Staggered Product Grid (2 Columns with Vertical Offset) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-12 lg:gap-y-20">
      <NuxtLink
        v-for="(product, idx) in productCatalog"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="reveal-item group flex flex-col cursor-pointer"
        :class="[
          idx % 2 === 1 ? 'md:mt-10 lg:mt-16' : ''
        ]"
      >
        <!-- Product Image Frame with Liquid / Hover Transition -->
        <div class="liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[520px]">
          <img
            :src="product.image"
            :alt="product.name"
            class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />

          <!-- Badge tag -->
          <div
            v-if="product.tag"
            class="absolute top-3.5 left-3.5 px-2.5 py-1 bg-background/80 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground/80 font-semibold"
          >
            {{ product.tag }}
          </div>

          <!-- Bottom Action Bar on Hover -->
          <div class="absolute bottom-0 inset-x-0 p-3 bg-background/90 backdrop-blur-md border-t border-line translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
            <span class="text-[10px] uppercase tracking-eyebrow text-accent font-medium">
              TELUSURI DETAIL & SPESIFIKASI
            </span>
            <span class="text-xs text-foreground">→</span>
          </div>
        </div>

        <!-- Product Meta Information -->
        <div class="mt-4 flex flex-col gap-1.5">
          <div class="flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-muted">
            <span>{{ product.category }}</span>
            <span class="text-foreground/50">{{ product.collection }}</span>
          </div>

          <div class="flex items-baseline justify-between border-b border-line pb-2.5">
            <h3 class="font-display text-xl sm:text-2xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {{ product.name }}
            </h3>
            <span class="font-sans text-sm sm:text-base font-medium text-foreground tabular-nums ml-3 shrink-0">
              {{ product.price }}
            </span>
          </div>

          <p class="text-xs text-foreground/60 font-light line-clamp-2">
            {{ product.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { productCatalog } from '~/data/products'
</script>
