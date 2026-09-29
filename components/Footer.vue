<template>
  <footer
    id="footer"
    class="relative bg-background pt-20 md:pt-28 pb-10 px-5 sm:px-8 md:px-12 text-foreground overflow-hidden border-t border-line"
  >
    <!-- Background subtle ambient glow -->
    <div
      class="absolute bottom-0 right-1/4 w-[40vw] h-[20vw] rounded-full bg-accent/4 blur-[140px] pointer-events-none"
      aria-hidden="true"
    />

    <div class="max-w-[1440px] mx-auto flex flex-col space-y-16 relative z-10">
      <!-- Section 1: Top Bar with Brand Badge & Back-to-Top CTA -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line pb-8 gap-6">
        <div class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo AVRÉN"
            class="h-7 w-auto object-contain"
          />
          <span class="font-display text-2xl sm:text-3xl tracking-wider text-foreground">AVRÉN</span>
          <span class="h-4 w-[1px] bg-line-strong mx-1" />
          <span class="text-[11px] uppercase tracking-eyebrow text-muted">ATELIER FASHION</span>
        </div>

        <button
          type="button"
          class="group self-start sm:self-auto inline-flex items-center gap-3 text-xs uppercase tracking-eyebrow text-foreground/80 hover:text-accent transition-colors"
          aria-label="Kembali ke bagian atas halaman"
          @click="scrollToTop"
        >
          <span>KEMBALI KE ATAS</span>
          <div class="w-8 h-8 rounded-full border border-line group-hover:border-accent flex items-center justify-center transition-colors">
            <svg
              class="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </button>
      </div>

      <!-- Section 2: Main 4-Column Editorial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <!-- Col 1-4: Brand Philosophy & Global Locations -->
        <div class="lg:col-span-4 flex flex-col space-y-6">
          <p class="text-sm text-foreground/75 font-light leading-relaxed max-w-sm">
            Busana esensial modern berkarakter arsitektural. Diciptakan melalui disiplin ketat, material murni, dan keanggunan dalam keheningan.
          </p>

          <!-- Presence Hubs with live time indicator -->
          <div class="pt-4 border-t border-line flex flex-col space-y-3">
            <span class="text-[10px] uppercase tracking-widest text-muted font-semibold">
              KANTOR & ATELIER UTAMA
            </span>
            <div class="grid grid-cols-3 gap-2 text-xs uppercase tracking-eyebrow text-foreground/80">
              <div class="flex flex-col">
                <span class="text-foreground font-medium">JAKARTA</span>
                <span class="text-[10px] text-muted">WIB (UTC+7)</span>
              </div>
              <div class="flex flex-col">
                <span class="text-foreground font-medium">MILAN</span>
                <span class="text-[10px] text-muted">CET (UTC+1)</span>
              </div>
              <div class="flex flex-col">
                <span class="text-foreground font-medium">TOKYO</span>
                <span class="text-[10px] text-muted">JST (UTC+9)</span>
              </div>
            </div>
          </div>

          <!-- Status Beacon -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-line w-fit">
            <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span class="text-[10px] uppercase tracking-eyebrow text-foreground/80">LAYANAN CONCIERGE TERSEDIA</span>
          </div>
        </div>

        <!-- Col 5-6: Navigation Links -->
        <div class="lg:col-span-2 flex flex-col space-y-4">
          <h4 class="text-xs uppercase tracking-eyebrow text-muted font-semibold flex items-center gap-2">
            <span class="w-1 h-1 rounded-full bg-accent" />
            <span>EKSPLORASI</span>
          </h4>
          <ul class="space-y-2.5 text-xs uppercase tracking-eyebrow text-foreground/80">
            <li>
              <a
                href="#hero"
                class="hover:text-accent transition-colors block py-0.5"
                @click.prevent="$emit('navigate', '#hero')"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#featured"
                class="hover:text-accent transition-colors block py-0.5"
                @click.prevent="$emit('navigate', '#featured')"
              >
                Koleksi Pilihan
              </a>
            </li>
            <li>
              <a
                href="#story"
                class="hover:text-accent transition-colors block py-0.5"
                @click.prevent="$emit('navigate', '#story')"
              >
                Filosofi Kami
              </a>
            </li>
            <li>
              <a
                href="#catalog"
                class="hover:text-accent transition-colors block py-0.5"
                @click.prevent="$emit('navigate', '#catalog')"
              >
                Katalog 2026
              </a>
            </li>
            <li>
              <a
                href="#lookbook"
                class="hover:text-accent transition-colors block py-0.5"
                @click.prevent="$emit('navigate', '#lookbook')"
              >
                Lookbook Visual
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 7-8: Concierge & Client Care -->
        <div class="lg:col-span-2 flex flex-col space-y-4">
          <h4 class="text-xs uppercase tracking-eyebrow text-muted font-semibold flex items-center gap-2">
            <span class="w-1 h-1 rounded-full bg-accent" />
            <span>LAYANAN KLIEN</span>
          </h4>
          <ul class="space-y-2.5 text-xs uppercase tracking-eyebrow text-foreground/80">
            <li>
              <a
                href="mailto:layanan@avren.studio"
                class="hover:text-accent transition-colors block py-0.5"
              >
                Konsultasi Privat
              </a>
            </li>
            <li>
              <a
                href="mailto:layanan@avren.studio"
                class="hover:text-accent transition-colors block py-0.5"
              >
                Panduan Ukuran
              </a>
            </li>
            <li>
              <a
                href="mailto:layanan@avren.studio"
                class="hover:text-accent transition-colors block py-0.5"
              >
                Perawatan Tekstil
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-accent transition-colors block py-0.5"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-accent transition-colors block py-0.5"
              >
                Threads
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 9-12: Private Newsletter Bulletin -->
        <div class="lg:col-span-4 flex flex-col space-y-4 bg-surface/50 border border-line p-6 rounded-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-xs uppercase tracking-eyebrow text-foreground font-semibold flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>WARTA PRIBADI AVRÉN</span>
            </h4>
            <span class="text-[10px] uppercase tracking-widest text-muted">TERBATAS</span>
          </div>

          <p class="text-xs text-foreground/70 font-light leading-relaxed">
            Daftarkan surel Anda untuk menerima undangan peluncuran privat, rilis bernomor, dan dokumentasi editorial eksklusif.
          </p>

          <form
            class="flex flex-col sm:flex-row items-stretch gap-2.5 mt-2"
            @submit.prevent="handleSubscribe"
          >
            <input
              v-model="emailInput"
              type="email"
              placeholder="ALAMAT SUREL ANDA"
              class="flex-1 bg-surface-2 border border-line px-3.5 py-3 text-xs uppercase tracking-eyebrow text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent rounded-sm transition-colors"
              required
            />
            <button
              type="submit"
              class="px-5 py-3 bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-eyebrow rounded-sm shrink-0"
            >
              DAFTAR
            </button>
          </form>

          <div class="flex items-center justify-between text-[10px] text-muted">
            <span>Privasi terjaga. Tanpa spam.</span>
            <span
              v-if="subscribedMessage"
              class="text-accent font-semibold animate-pulse"
            >
              {{ subscribedMessage }}
            </span>
          </div>
        </div>
      </div>

      <!-- Section 3: Large Sculptural Watermark & Legal Sub-footer -->
      <div class="border-t border-line pt-10 flex flex-col space-y-8">
        <!-- Giant Stylized Brand Banner -->
        <div class="w-full flex items-center justify-between overflow-hidden py-2 select-none pointer-events-none">
          <span class="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-tightest text-surface-2/90 leading-none block">
            AVR<span class="text-accent/30">É</span>N
          </span>
          <span class="hidden md:block font-display text-4xl lg:text-7xl tracking-tightest text-surface-2/50 uppercase leading-none">
            MODERN ESSENTIALS
          </span>
        </div>

        <!-- Bottom Copyright & Policies -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-eyebrow text-muted">
          <span>© 2026 AVRÉN BRAND ATELIER. HAK CIPTA DILINDUNGI.</span>
          <div class="flex items-center gap-6">
            <a href="#hero" class="hover:text-foreground transition-colors" @click.prevent="$emit('navigate', '#hero')">KETENTUAN</a>
            <span class="text-line-strong">•</span>
            <a href="#hero" class="hover:text-foreground transition-colors" @click.prevent="$emit('navigate', '#hero')">KEBIJAKAN PRIVASI</a>
            <span class="text-line-strong">•</span>
            <span>EDISI 01</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'navigate', selector: string): void
}>()

const emailInput = ref('')
const subscribedMessage = ref('')

const scrollToTop = () => {
  emit('navigate', '#hero')
}

const handleSubscribe = () => {
  if (emailInput.value) {
    subscribedMessage.value = 'TERIMA KASIH. AKSES DIBERIKAN.'
    emailInput.value = ''
    setTimeout(() => {
      subscribedMessage.value = ''
    }, 4500)
  }
}
</script>
