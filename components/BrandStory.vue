<template>
  <section
    id="story"
    class="relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 bg-surface/40 border-y border-line overflow-hidden"
  >
    <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <!-- Left Column: Eyebrow + Scaled Editorial Statement -->
      <div class="reveal-item lg:col-span-6 flex flex-col justify-between">
        <div>
          <div class="eyebrow-badge mb-4">
            <span class="eyebrow-dot" />
            <span class="text-xs">02 / FILOSOFI KAMI</span>
          </div>

          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[0.96] tracking-tightest uppercase text-foreground">
            KAMI MEMBENTUK BUSANA BAGI MEREKA YANG MENGUASAI RUANG <span class="text-accent">TANPA BANYAK BICARA.</span>
          </h2>
        </div>

        <div class="mt-8 hidden lg:block pt-6 border-t border-line">
          <div class="flex items-center gap-4 text-xs uppercase tracking-eyebrow text-muted">
            <span>PROPORSI</span>
            <span class="text-accent">•</span>
            <span>TEKSTUR</span>
            <span class="text-accent">•</span>
            <span>KETENANGAN</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Supporting Manifesto & Pillars -->
      <div class="reveal-item lg:col-span-6 flex flex-col space-y-6 lg:pl-6">
        <p class="text-base sm:text-lg md:text-xl text-foreground/85 font-light leading-relaxed">
          AVRÉN dibangun atas satu keyakinan teguh: kemewahan sejati bukan tentang ornamen berlebihan, melainkan pemurnian radikal. Setiap siluet disederhanakan hingga yang tersisa hanyalah integritas struktural murni.
        </p>

        <p class="text-xs sm:text-sm text-foreground/65 font-light leading-relaxed">
          Kami menolak tren musiman demi melahirkan karya monolitik abadi. Memadukan wol dua lapis berbobot, gabardine bonded, dan sutra bertekstur, setiap potongan dirancang untuk mempertahankan struktur tanpa membatasi kebebasan gerak.
        </p>

        <!-- Brand Pillars Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-line">
          <div class="flex flex-col">
            <span class="font-display text-xl text-accent mb-1.5">01</span>
            <h3 class="font-display text-base uppercase tracking-tight text-foreground mb-1">
              ARSITEKTURAL
            </h3>
            <p class="text-[11px] text-muted leading-normal">
              Garis tegas dan bahu berstruktur yang membingkai tubuh dengan tujuan jelas.
            </p>
          </div>

          <div class="flex flex-col">
            <span class="font-display text-xl text-accent mb-1.5">02</span>
            <h3 class="font-display text-base uppercase tracking-tight text-foreground mb-1">
              KEMURNIAN TEKSTIL
            </h3>
            <p class="text-[11px] text-muted leading-normal">
              Material alami tanpa kompromi yang diproduksi langsung dari pabrik wol bersejarah Eropa.
            </p>
          </div>

          <div class="flex flex-col">
            <span class="font-display text-xl text-accent mb-1.5">03</span>
            <h3 class="font-display text-base uppercase tracking-tight text-foreground mb-1">
              KEMEWAHAN HALUS
            </h3>
            <p class="text-[11px] text-muted leading-normal">
              Tanpa logo mencolok. Keberadaan dan martabat busana terpancar murni dari keahlian pengerjaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Komponen Filosofi & Kisah Brand AVRÉN dengan skala yang seimbang
</script>
