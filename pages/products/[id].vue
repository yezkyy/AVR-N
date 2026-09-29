<template>
  <div class="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
    <!-- Fixed Navigation Header -->
    <Navbar @navigate="handleNavigate" />

    <main class="w-full relative pt-24 md:pt-32 pb-24 px-5 sm:px-8 md:px-12 max-w-[1440px] mx-auto">
      <!-- Top Navigation & Breadcrumb Bar -->
      <div class="flex items-center justify-between border-b border-line pb-4 mb-8 sm:mb-12">
        <NuxtLink
          to="/#catalog"
          class="group inline-flex items-center gap-2.5 text-xs uppercase tracking-eyebrow text-muted hover:text-accent transition-colors"
        >
          <div class="w-6 h-6 rounded-full border border-line group-hover:border-accent flex items-center justify-center transition-colors">
            <svg class="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span>KEMBALI KE KATALOG</span>
        </NuxtLink>

        <!-- Right Share & Wishlist quick actions -->
        <div class="flex items-center gap-4">
          <button
            type="button"
            class="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-muted hover:text-foreground transition-colors"
            @click="toggleWishlist"
          >
            <svg
              class="w-4 h-4 transition-colors"
              :class="isWishlisted ? 'text-accent fill-accent' : 'stroke-current fill-none'"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span class="hidden sm:inline">{{ isWishlisted ? 'TERSUSUN DALAM KURASI' : 'SIMPAN KURASI' }}</span>
          </button>
        </div>
      </div>

      <!-- Product Not Found State -->
      <div v-if="!product" class="py-24 text-center">
        <h1 class="font-display text-4xl sm:text-6xl uppercase tracking-tight text-foreground mb-4">
          PRODUK TIDAK DITEMUKAN
        </h1>
        <p class="text-sm text-muted mb-8 max-w-md mx-auto">
          Busana yang Anda tuju mungkin merupakan rilisan kapsul khusus yang telah diarsipkan.
        </p>
        <NuxtLink
          to="/"
          class="inline-flex px-8 py-4 bg-foreground text-background text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent hover:text-white transition-colors"
        >
          KEMBALI KE BERANDA
        </NuxtLink>
      </div>

      <!-- Main Product Experience Grid -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        <!-- Left Column: Scaled & Balanced Editorial Image Gallery (Col 1-5) -->
        <div class="lg:col-span-5 flex flex-col space-y-3.5 max-w-md mx-auto lg:max-w-none w-full">
          <!-- Main Hero Image Frame with Zoom / Lightbox Trigger -->
          <div
            class="liquid-img-wrapper relative aspect-[3/4] max-h-[460px] lg:max-h-[480px] w-full rounded-sm overflow-hidden bg-surface-2 border border-line shadow-xl group cursor-zoom-in"
            @click="isLightboxOpen = true"
          >
            <img
              :src="activeImage"
              :alt="product.name"
              class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />

            <!-- Top Left Tag -->
            <div
              v-if="product.tag"
              class="absolute top-3.5 left-3.5 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-accent font-semibold"
            >
              {{ product.tag }}
            </div>

            <!-- Top Right Image Counter -->
            <div class="absolute top-3.5 right-3.5 px-2 py-0.5 bg-background/80 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-widest text-muted">
              {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
            </div>

            <!-- Bottom Hover Hint -->
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="flex items-center gap-1.5">
                <svg class="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                KLIK PERBESAR TEKSTUR
              </span>
              <span class="text-muted text-[9px]">HD</span>
            </div>
          </div>

          <!-- Thumbnail Gallery Selector -->
          <div v-if="galleryImages.length > 1" class="grid grid-cols-4 gap-2.5 pt-1">
            <button
              v-for="(img, idx) in galleryImages"
              :key="idx"
              type="button"
              class="aspect-[3/4] max-h-20 sm:max-h-24 rounded-sm overflow-hidden border transition-all duration-300 relative group bg-surface-2"
              :class="[
                activeImage === img
                  ? 'border-accent ring-1 ring-accent opacity-100'
                  : 'border-line opacity-50 hover:opacity-100 hover:border-line-strong'
              ]"
              @click="setActiveImage(img, idx)"
            >
              <img
                :src="img"
                :alt="`${product.name} sudut ${idx + 1}`"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span class="absolute bottom-1 right-1 text-[8px] uppercase tracking-widest text-white/90 bg-background/80 px-1 py-0.5 rounded-xs font-mono">
                0{{ idx + 1 }}
              </span>
            </button>
          </div>

          <!-- Material Feature Badges -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-line">
            <div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col">
              <span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">MATERIAL</span>
              <span class="text-[11px] text-foreground/80 font-medium truncate">100% Wol Murni</span>
            </div>
            <div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col">
              <span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">PENGERJAAN</span>
              <span class="text-[11px] text-foreground/80 font-medium truncate">Jahit Tangan</span>
            </div>
            <div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col">
              <span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">EDISI</span>
              <span class="text-[11px] text-foreground/80 font-medium truncate">Bernomor Seri</span>
            </div>
            <div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col">
              <span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">PENGIRIMAN</span>
              <span class="text-[11px] text-foreground/80 font-medium truncate">Kurir Khusus</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Product Information & Concierge Consultation (Col 6-12) -->
        <div class="lg:col-span-7 flex flex-col space-y-6 lg:sticky lg:top-24">
          <!-- Title & Collection Header -->
          <div>
            <div class="flex items-center justify-between text-xs uppercase tracking-eyebrow text-muted mb-2">
              <span class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-accent" />
                {{ product.category }}
              </span>
              <span class="text-foreground/60">{{ product.collection }}</span>
            </div>

            <h1 class="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-foreground leading-[0.95]">
              {{ product.name }}
            </h1>

            <div class="mt-4 flex items-baseline justify-between border-b border-line pb-4">
              <div class="flex items-baseline gap-3">
                <span class="font-sans text-2xl sm:text-3xl font-medium text-foreground tabular-nums">
                  {{ product.price }}
                </span>
                <span class="text-[10px] uppercase tracking-widest text-muted">BEBAS BIAYA ATELIER</span>
              </div>
              <span class="text-[10px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                SIAP DISPATCH
              </span>
            </div>
          </div>

          <!-- Short Narrative & Fit Advice -->
          <div class="space-y-3">
            <p class="text-xs sm:text-sm text-foreground/80 font-light leading-relaxed">
              {{ product.description }}
            </p>
            <p v-if="product.story" class="text-xs text-foreground/60 font-light leading-relaxed italic border-l-2 border-accent pl-3">
              "{{ product.story }}"
            </p>
          </div>

          <!-- Size Selector & Stock Availability -->
          <div class="space-y-3 bg-surface/60 border border-line p-5 rounded-sm">
            <div class="flex items-center justify-between text-xs uppercase tracking-eyebrow">
              <span class="text-foreground font-semibold flex items-center gap-1.5">
                <span>PILIH UKURAN</span>
                <span class="text-accent font-normal">({{ selectedSize }})</span>
              </span>
              <button
                type="button"
                class="text-[11px] text-muted hover:text-accent underline underline-offset-4 transition-colors"
                @click="openAccordion = 'measurements'"
              >
                PANDUAN DIMENSI
              </button>
            </div>

            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="size in sizes"
                :key="size"
                type="button"
                class="py-3 text-xs uppercase tracking-eyebrow rounded-sm border transition-all duration-200 font-medium"
                :class="[
                  selectedSize === size
                    ? 'bg-foreground text-background border-foreground font-semibold shadow-lg'
                    : 'bg-surface-2 border-line text-foreground/80 hover:border-line-strong hover:text-foreground'
                ]"
                @click="selectedSize = size"
              >
                {{ size }}
              </button>
            </div>

            <div class="flex items-center justify-between text-[10px] uppercase tracking-eyebrow text-muted pt-2 border-t border-line/60">
              <span>MODEL: 188 CM, UKURAN M / 48</span>
              <span class="text-accent">HANYA TERSISA 3 PCS</span>
            </div>
          </div>

          <!-- Primary Concierge Action & Appointment Trigger -->
          <div class="space-y-3">
            <button
              type="button"
              class="w-full py-4 bg-accent text-white font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent-2 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              @click="isConciergeModalOpen = true"
            >
              <span>BUAT JANJI TEMU / KONSULTASI CONCIERGE</span>
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              type="button"
              class="w-full py-3.5 bg-surface border border-line hover:border-line-strong text-foreground text-xs uppercase tracking-eyebrow font-medium rounded-sm transition-colors flex items-center justify-center gap-2"
              @click="toggleWishlist"
            >
              <svg class="w-3.5 h-3.5" :class="isWishlisted ? 'text-accent fill-accent' : 'stroke-current fill-none'" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{{ isWishlisted ? 'HAPUS DARI KURASI PRIBADI' : 'SIMPAN KE KURASI PRIBADI' }}</span>
            </button>
          </div>

          <!-- Editorial Accordion Specifications -->
          <div class="border-t border-line divide-y divide-line pt-2">
            <!-- Accordion 01: Material & Asal -->
            <div class="py-3.5">
              <button
                type="button"
                class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"
                @click="toggleAccordion('material')"
              >
                <span>01. MATERIAL & ASAL USUL</span>
                <span class="text-accent text-sm font-mono">{{ openAccordion === 'material' ? '−' : '+' }}</span>
              </button>
              <div v-show="openAccordion === 'material'" class="mt-3 text-xs text-foreground/75 font-light space-y-2 leading-relaxed">
                <p><strong>Komposisi Tekstil:</strong> {{ product.material || 'Wol Murni Italia kualitas tertinggi' }}</p>
                <p><strong>Lokasi Pengerjaan:</strong> {{ product.origin || 'Atelier Milan, Italia' }}</p>
                <p><strong>Siluet Potongan:</strong> {{ product.silhouette || 'Arsitektural / Relaks' }}</p>
              </div>
            </div>

            <!-- Accordion 02: Detail Penjahitan -->
            <div class="py-3.5">
              <button
                type="button"
                class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"
                @click="toggleAccordion('details')"
              >
                <span>02. DETAIL PENJAHITAN & KONSTRUKSI</span>
                <span class="text-accent text-sm font-mono">{{ openAccordion === 'details' ? '−' : '+' }}</span>
              </button>
              <div v-show="openAccordion === 'details'" class="mt-3 text-xs text-foreground/75 font-light space-y-2">
                <ul v-if="product.details" class="space-y-1.5 list-disc list-inside">
                  <li v-for="(detail, dIdx) in product.details" :key="dIdx">
                    {{ detail }}
                  </li>
                </ul>
                <p v-else>Dikerjakan dengan jahitan tangan presisi pada area krusial.</p>
              </div>
            </div>

            <!-- Accordion 03: Panduan Dimensi -->
            <div class="py-3.5">
              <button
                type="button"
                class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"
                @click="toggleAccordion('measurements')"
              >
                <span>03. PANDUAN DIMENSI LENGKAP (CM)</span>
                <span class="text-accent text-sm font-mono">{{ openAccordion === 'measurements' ? '−' : '+' }}</span>
              </button>
              <div v-show="openAccordion === 'measurements'" class="mt-3 overflow-x-auto">
                <table v-if="product.measurements" class="w-full text-[11px] text-left border-collapse">
                  <thead>
                    <tr class="border-b border-line text-muted uppercase tracking-wider">
                      <th class="py-2">Ukuran</th>
                      <th class="py-2">Dada / Pinggang</th>
                      <th class="py-2">Panjang</th>
                      <th class="py-2">Bahu / Paha</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-line/40 text-foreground/80">
                    <tr
                      v-for="m in product.measurements"
                      :key="m.size"
                      :class="selectedSize === m.size ? 'bg-surface text-accent font-medium' : ''"
                    >
                      <td class="py-2.5 font-medium">{{ m.size }}</td>
                      <td class="py-2.5">{{ m.chest }}</td>
                      <td class="py-2.5">{{ m.length }}</td>
                      <td class="py-2.5">{{ m.shoulder }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Accordion 04: Pengiriman & Perawatan -->
            <div class="py-3.5">
              <button
                type="button"
                class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"
                @click="toggleAccordion('care')"
              >
                <span>04. PENGIRIMAN & PERAWATAN</span>
                <span class="text-accent text-sm font-mono">{{ openAccordion === 'care' ? '−' : '+' }}</span>
              </button>
              <div v-show="openAccordion === 'care'" class="mt-3 text-xs text-foreground/75 font-light space-y-2 leading-relaxed">
                <p><strong>Perawatan:</strong> {{ product.care || 'Khusus cuci kering profesional (Dry Clean Only).' }}</p>
                <p><strong>Kemasan:</strong> Disertakan tas pelindung kain breathable berlogo AVRÉN dan gantungan kayu bersertifikat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom: Related Products Recommendation -->
      <div v-if="relatedProducts.length > 0" class="mt-24 sm:mt-32 border-t border-line pt-16">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div class="eyebrow-badge mb-2">
              <span class="eyebrow-dot" />
              <span>EDISI PELENGKAP</span>
            </div>
            <h2 class="font-display text-2xl sm:text-4xl uppercase tracking-tight text-foreground">
              BUSANA PELENGKAP SILUET
            </h2>
          </div>
          <NuxtLink
            to="/#catalog"
            class="text-xs uppercase tracking-eyebrow text-accent hover:underline underline-offset-4"
          >
            LIHAT SELURUH KATALOG →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <NuxtLink
            v-for="rel in relatedProducts"
            :key="rel.id"
            :to="`/products/${rel.id}`"
            class="group flex flex-col cursor-pointer"
          >
            <div class="liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line">
              <img
                :src="rel.image"
                :alt="rel.name"
                class="liquid-img w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div class="absolute top-3 left-3 px-2.5 py-1 bg-background/80 backdrop-blur-md rounded-sm text-[10px] uppercase tracking-eyebrow text-muted">
                {{ rel.category }}
              </div>
            </div>

            <div class="mt-3 flex items-baseline justify-between border-b border-line pb-2">
              <h3 class="font-display text-lg uppercase tracking-tight text-foreground group-hover:text-accent transition-colors">
                {{ rel.name }}
              </h3>
              <span class="font-sans text-xs font-medium text-foreground tabular-nums">
                {{ rel.price }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>

    <!-- Interactive Lightbox Modal for High-Resolution Image Zoom -->
    <div
      v-if="isLightboxOpen"
      class="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 select-none animate-fadeIn"
      @click.self="isLightboxOpen = false"
    >
      <div class="flex items-center justify-between border-b border-line pb-4">
        <div class="flex items-center gap-3">
          <span class="font-display text-xl tracking-wider text-foreground">AVRÉN</span>
          <span class="text-xs uppercase tracking-eyebrow text-muted">{{ product?.name }}</span>
        </div>
        <button
          type="button"
          class="text-xs uppercase tracking-eyebrow text-foreground hover:text-accent flex items-center gap-2 p-2"
          @click="isLightboxOpen = false"
        >
          <span>TUTUP</span>
          <span class="text-lg">✕</span>
        </button>
      </div>

      <div class="my-auto max-w-4xl mx-auto flex items-center justify-center p-4">
        <img
          :src="activeImage"
          :alt="product?.name"
          class="max-h-[80vh] w-auto object-contain rounded-sm shadow-2xl border border-line"
        />
      </div>

      <div class="flex items-center justify-center gap-3 border-t border-line pt-4">
        <button
          v-for="(img, idx) in galleryImages"
          :key="idx"
          type="button"
          class="w-12 h-16 rounded-xs overflow-hidden border transition-all"
          :class="activeImage === img ? 'border-accent ring-1 ring-accent' : 'border-line opacity-50'"
          @click="setActiveImage(img, idx)"
        >
          <img :src="img" :alt="`Thumbnail ${idx + 1}`" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>

    <!-- Interactive Concierge Appointment Drawer Modal -->
    <div
      v-if="isConciergeModalOpen"
      class="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn"
      @click.self="isConciergeModalOpen = false"
    >
      <div class="bg-surface border border-line-strong rounded-sm p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6">
        <div class="flex items-start justify-between border-b border-line pb-4">
          <div>
            <div class="eyebrow-badge mb-1">
              <span class="eyebrow-dot" />
              <span>LAYANAN CONCIERGE PRIBADI</span>
            </div>
            <h3 class="font-display text-2xl uppercase tracking-tight text-foreground">
              JANJI TEMU FITTING / KONSULTASI
            </h3>
          </div>
          <button
            type="button"
            class="text-muted hover:text-foreground text-sm p-1"
            @click="isConciergeModalOpen = false"
          >
            ✕
          </button>
        </div>

        <div class="text-xs text-foreground/75 leading-relaxed">
          Pilih preferensi konsultasi untuk <strong>{{ product?.name }}</strong> (Ukuran {{ selectedSize }}). Tim concierge atelier kami akan menghubungi Anda dalam 24 jam.
        </div>

        <form class="space-y-4" @submit.prevent="submitAppointment">
          <div>
            <label class="block text-[10px] uppercase tracking-eyebrow text-muted mb-1.5">NAMA LENGKAP</label>
            <input
              v-model="conciergeForm.name"
              type="text"
              placeholder="NAMA LENGKAP ANDA"
              class="w-full bg-surface-2 border border-line px-3.5 py-2.5 text-xs text-foreground uppercase tracking-wider focus:outline-none focus:border-accent rounded-sm"
              required
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[10px] uppercase tracking-eyebrow text-muted mb-1.5">NOMOR WHATSAPP</label>
              <input
                v-model="conciergeForm.phone"
                type="tel"
                placeholder="+62 8..."
                class="w-full bg-surface-2 border border-line px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-accent rounded-sm"
                required
              />
            </div>
            <div>
              <label class="block text-[10px] uppercase tracking-eyebrow text-muted mb-1.5">LOKASI ATELIER / KONSULTASI</label>
              <select
                v-model="conciergeForm.location"
                class="w-full bg-surface-2 border border-line px-3.5 py-2.5 text-xs text-foreground uppercase tracking-wider focus:outline-none focus:border-accent rounded-sm"
              >
                <option value="Jakarta Atelier">Atelier Jakarta</option>
                <option value="Milan Atelier">Atelier Milan</option>
                <option value="Virtual Concierge">Konsultasi Virtual (Video)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            class="w-full py-4 bg-accent text-white font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent-2 transition-all duration-300 shadow-xl"
          >
            {{ appointmentSubmitted ? 'PERMINTAAN DITERIMA • CONCIERGE AKAN MENGHUBUNGI' : 'KONFIRMASI JADWAL KONSULTASI' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Global Footer -->
    <Footer @navigate="handleNavigate" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProductById, getAllProducts, type Product } from '~/data/products'

const route = useRoute()
const router = useRouter()

const productId = computed(() => route.params.id as string)
const product = computed<Product | undefined>(() => getProductById(productId.value))

const activeImage = ref('')
const currentImageIndex = ref(0)
const selectedSize = ref('M / 48')
const sizes = ['S / 46', 'M / 48', 'L / 50', 'XL / 52']
const openAccordion = ref<string | null>('material')
const isWishlisted = ref(false)
const isLightboxOpen = ref(false)
const isConciergeModalOpen = ref(false)
const appointmentSubmitted = ref(false)

const conciergeForm = ref({
  name: '',
  phone: '',
  location: 'Jakarta Atelier'
})

const galleryImages = computed(() => {
  if (!product.value) return []
  if (product.value.gallery && product.value.gallery.length > 0) {
    return product.value.gallery
  }
  const imgs = [product.value.image]
  if (product.value.hoverImage) imgs.push(product.value.hoverImage)
  return imgs
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return getAllProducts()
    .filter(p => p.id !== product.value?.id)
    .slice(0, 3)
})

const setActiveImage = (img: string, index: number) => {
  activeImage.value = img
  currentImageIndex.value = index
}

const toggleAccordion = (key: string) => {
  openAccordion.value = openAccordion.value === key ? null : key
}

const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value
}

const submitAppointment = () => {
  appointmentSubmitted.value = true
  setTimeout(() => {
    isConciergeModalOpen.value = false
    appointmentSubmitted.value = false
  }, 2500)
}

const handleNavigate = (selector: string) => {
  if (selector.startsWith('#')) {
    router.push(`/${selector}`)
  }
}

onMounted(() => {
  if (product.value) {
    activeImage.value = product.value.image
    currentImageIndex.value = 0
  }
  window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>
