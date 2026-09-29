<template>
  <svg class="hidden absolute w-0 h-0 pointer-events-none" aria-hidden="true">
    <defs>
      <filter id="liquid-filter" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence
          id="liquid-turbulence"
          type="fractalNoise"
          baseFrequency="0.015 0.015"
          numOctaves="2"
          result="noise"
        />
        <feDisplacementMap
          id="liquid-displacement"
          in="SourceGraphic"
          in2="noise"
          scale="16"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
// Provides SVG filter definitions for liquid image distortion effects
</script>
