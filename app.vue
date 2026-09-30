<template>
  <div class="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white">
    <!-- SVG Filter Defs for Liquid Image Distortions -->
    <SvgFilters />

    <!-- Fullscreen Dark Preloader -->
    <Preloader @complete="onPreloaderComplete" />

    <!-- Fixed Editorial Navigation -->
    <Navbar @navigate="handleNavigate" />

    <!-- Main Content Flow -->
    <NuxtPage :is-ready="isReady" @navigate="handleNavigate" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Lenis from 'lenis'

const isReady = ref(false)
let lenisInstance: Lenis | null = null
let observer: IntersectionObserver | null = null
const router = useRouter()

const initLenis = () => {
  if (!process.client) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  lenisInstance = new Lenis({
    duration: 2.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -7 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.75,
    touchMultiplier: 1.0,
    infinite: false
  })

  function raf(time: number) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

const initIntersectionObserver = () => {
  if (!process.client) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.1
    }
  )

  const elements = document.querySelectorAll('.reveal-item')
  elements.forEach((el) => observer?.observe(el))
}

const onPreloaderComplete = () => {
  isReady.value = true
  initLenis()
  nextTick(() => {
    initIntersectionObserver()
  })
}

const handleNavigate = (selector: string) => {
  if (!process.client) return
  if (lenisInstance) {
    lenisInstance.scrollTo(selector, {
      offset: -40,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  } else {
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// Ensure every route change starts at the very top of the page immediately
router.afterEach((to) => {
  if (!process.client) return
  nextTick(() => {
    if (to.hash) {
      handleNavigate(to.hash)
    } else {
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true })
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    initIntersectionObserver()
  })
})

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    onPreloaderComplete()
  }
})

onUnmounted(() => {
  lenisInstance?.destroy()
  observer?.disconnect()
})
</script>
