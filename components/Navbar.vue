<template>
  <header
    class="fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out"
    :class="[
      isScrolled
        ? 'bg-background/85 backdrop-blur-md border-b border-line py-3.5'
        : 'bg-transparent py-5 md:py-6'
    ]"
  >
    <div class="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
      <!-- Logo Brand -->
      <a
        href="#hero"
        class="group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-85 z-50"
        @click.prevent="scrollTo('#hero')"
      >
        <img
          src="/logo.png"
          alt="Logo AVRÉN"
          class="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span class="font-display text-xl sm:text-2xl tracking-wider text-foreground">
          AVRÉN
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Navigasi Utama">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="relative text-xs uppercase tracking-eyebrow text-foreground/80 hover:text-foreground font-medium transition-colors duration-300 py-1 group"
          @click.prevent="scrollTo(item.href)"
        >
          <span>{{ item.label }}</span>
          <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
        </a>
      </nav>

      <!-- Desktop Right Action -->
      <div class="hidden md:flex items-center gap-3">
        <a
          href="#cta"
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line-strong text-[11px] uppercase tracking-eyebrow text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
          @click.prevent="scrollTo('#cta')"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Edisi 01</span>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        type="button"
        class="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 z-50 text-foreground focus:outline-none"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Buka navigasi menu"
        @click="toggleMobileMenu"
      >
        <span
          class="w-5 h-[2px] bg-foreground transition-all duration-300 transform origin-center"
          :class="{ 'rotate-45 translate-y-1.5 bg-accent': isMobileMenuOpen }"
        />
        <span
          class="w-5 h-[2px] bg-foreground transition-all duration-300"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        />
        <span
          class="w-5 h-[2px] bg-foreground transition-all duration-300 transform origin-center"
          :class="{ '-rotate-45 -translate-y-1.5 bg-accent': isMobileMenuOpen }"
        />
      </button>
    </div>

    <!-- Mobile Fullscreen Overlay Menu -->
    <Transition
      enter-active-class="transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
      leave-active-class="transition-all duration-400 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col justify-between p-7 pt-24 md:hidden"
      >
        <div class="flex flex-col space-y-5">
          <div class="eyebrow-badge mb-1">
            <span class="eyebrow-dot" />
            <span class="text-xs">MENU NAVIGASI</span>
          </div>
          <a
            v-for="(item, idx) in navItems"
            :key="item.href"
            :href="item.href"
            class="font-display text-3xl sm:text-4xl uppercase tracking-tight text-foreground hover:text-accent transition-colors duration-200 flex items-center justify-between border-b border-line pb-3.5"
            :style="{ transitionDelay: `${idx * 60}ms` }"
            @click.prevent="handleMobileNavClick(item.href)"
          >
            <span>{{ item.label }}</span>
            <span class="text-xs font-sans tracking-widest text-muted">0{{ idx + 1 }}</span>
          </a>
        </div>

        <div class="border-t border-line pt-5 flex flex-col gap-3.5">
          <div class="flex items-center justify-between text-xs uppercase tracking-eyebrow text-muted">
            <span>KAMPANYE AVRÉN</span>
            <span class="text-accent">EDISI 2026</span>
          </div>
          <a
            href="#cta"
            class="w-full py-3 text-center border border-accent text-accent hover:bg-accent hover:text-white uppercase tracking-eyebrow text-xs transition-colors rounded-sm font-semibold"
            @click.prevent="handleMobileNavClick('#cta')"
          >
            JELAJAHI KOLEKSI
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'navigate', selector: string): void
}>()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'Koleksi', href: '#featured' },
  { label: 'Filosofi', href: '#story' },
  { label: 'Katalog', href: '#catalog' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Layanan', href: '#footer' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const handleMobileNavClick = (href: string) => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
  scrollTo(href)
}

const scrollTo = (selector: string) => {
  emit('navigate', selector)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>
