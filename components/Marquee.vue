<template>
  <div class="relative w-full border-y border-line py-3.5 sm:py-5 bg-surface/50 overflow-hidden select-none">
    <div class="marquee-container flex">
      <!-- Track 1 -->
      <div class="marquee-track flex items-center shrink-0">
        <template v-for="n in 2" :key="`track-a-${n}`">
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6">
            AVRÉN
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6">
            ESENSIAL MODERN
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6">
            DITEGASKAN OLEH DETAIL
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6">
            DICIPTAKAN DENGAN INTENSI
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6">
            KETENANGAN BERWIBAWA
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6">
            WUJUDKAN KEHADIRANMU
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
        </template>
      </div>

      <!-- Track 2 (Seamless loop clone) -->
      <div class="marquee-track flex items-center shrink-0" aria-hidden="true">
        <template v-for="n in 2" :key="`track-b-${n}`">
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6">
            AVRÉN
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6">
            ESENSIAL MODERN
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6">
            DITEGASKAN OLEH DETAIL
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6">
            DICIPTAKAN DENGAN INTENSI
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6">
            KETENANGAN BERWIBAWA
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
          <span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6">
            WUJUDKAN KEHADIRANMU
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Komponen Marquee Ticker dengan proporsi seimbang
</script>
