<template>
  <main class="w-full relative">
    <Hero :ready="isReady" @navigate="$emit('navigate', $event)" />
    <Marquee />
    <FeaturedCollection />
    <BrandStory />
    <ProductGrid />
    <Lookbook />
    <BrandCTA @navigate="$emit('navigate', $event)" />
    <Footer @navigate="$emit('navigate', $event)" />
  </main>
</template>

<script setup lang="ts">
defineProps<{
  isReady: boolean
}>()

defineEmits<{
  (e: 'navigate', selector: string): void
}>()
</script>
