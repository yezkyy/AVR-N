import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { a as _imports_0 } from "../server.mjs";
const featuredProducts = [
  {
    id: "feat-01",
    name: "Mantel Tailored Obsidian",
    category: "Busana Luar",
    collection: "Edisi 01 — Monolith",
    price: "Rp 4.850.000",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Potongan presisi dari perpaduan wol murni dengan bahu tegas dan kancing tanduk tersembunyi.",
    story: "Mantel Tailored Obsidian merupakan manifestasi dari ketenangan berwibawa. Setiap panel dipotong tangan di Milan dengan bantalan bahu terstruktur yang memberikan siluet monolitik tanpa mengorbankan kenyamanan pemakainya.",
    material: "100% Virgin Italian Wool (480 gsm) • Lapisan Dalam Sutra Cupro Matte",
    silhouette: "Arsitektural / Structured Drop-Shoulder / Panjang Sebetis",
    origin: "Atelier Milan, Italia",
    care: "Khusus cuci kering profesional (Dry clean only). Simpan pada gantungan berstruktur.",
    details: [
      "Konstruksi dada kanvas tradisional untuk mempertahankan bentuk permanen",
      "Kancing tanduk kerbau alami dengan placket tersembunyi",
      "Detail jahitan dalam beraksen merah signature AVRÉN",
      "Dua saku samping berpenutup minimalis dan saku dalam ganda"
    ],
    measurements: [
      { size: "S / 46", chest: "110 cm", length: "118 cm", shoulder: "48 cm" },
      { size: "M / 48", chest: "116 cm", length: "120 cm", shoulder: "50 cm" },
      { size: "L / 50", chest: "122 cm", length: "122 cm", shoulder: "52 cm" },
      { size: "XL / 52", chest: "128 cm", length: "124 cm", shoulder: "54 cm" }
    ],
    tag: "Koleksi Utama"
  },
  {
    id: "feat-02",
    name: "Blazer Wol Arsitektural",
    category: "Penjahitan Formal",
    collection: "Edisi 01 — Monolith",
    price: "Rp 3.450.000",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Blazer double-breasted dengan kerah lancip tajam dan aksen jahitan merah marun di bagian dalam.",
    story: "Diciptakan sebagai perisai modern untuk perjumpaan formal maupun kasual berkelas. Memadukan potongan tajam kerah peak lapel dengan volume relaks pada pinggang.",
    material: "92% Wol Halus, 8% Kasmir • Lapisan Satin Bernapas",
    silhouette: "Double-Breasted / Sharp Peak Lapel / Relaxed Waist",
    origin: "Atelier Milan, Italia",
    care: "Dry clean only. Setrika dengan uap suhu sedang.",
    details: [
      "Kancing corozzo natural berukir micro signature",
      "Kantung bilur ganda dengan potongan sudut presisi",
      "Ventilasi ganda di bagian belakang untuk keleluasaan duduk",
      "Struktur bahu semi-ropped khas tailoring Eropa modern"
    ],
    measurements: [
      { size: "S / 46", chest: "104 cm", length: "76 cm", shoulder: "46 cm" },
      { size: "M / 48", chest: "110 cm", length: "78 cm", shoulder: "48 cm" },
      { size: "L / 50", chest: "116 cm", length: "80 cm", shoulder: "50 cm" },
      { size: "XL / 52", chest: "122 cm", length: "82 cm", shoulder: "52 cm" }
    ],
    tag: "Potongan Ikonik"
  }
];
const productCatalog = [
  {
    id: "p-01",
    name: "Trench Coat Monolitik",
    category: "Busana Luar",
    collection: "Koleksi 2026",
    price: "Rp 5.200.000",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Bahan gabardine katun tahan cuaca dengan storm flap tegas dan sabuk pinggang minimalis.",
    story: "Penafsiran ulang atas jas hujan klasik. Menghilangkan elemen visual yang tidak perlu demi menciptakan mantel pelindung bersiluet ramping dan bersih.",
    material: "100% Japanese Bonded Cotton Gabardine (Tahan Angin & Gerimis)",
    silhouette: "Oversized Column / Raglan Sleeve / Extra Long",
    origin: "Kyoto / Jakarta",
    care: "Cuci tangan dingin dengan deterjen lembut atau dry clean.",
    details: [
      "Lapisan membran kedap air micro-porous",
      "Gesper sabuk logam berlapis matte black",
      "Storm flap dada geometris dengan pengait tersembunyi",
      "Kerah storm collar yang dapat dinaikkan"
    ],
    measurements: [
      { size: "S / 46", chest: "114 cm", length: "122 cm", shoulder: "Raglan" },
      { size: "M / 48", chest: "120 cm", length: "124 cm", shoulder: "Raglan" },
      { size: "L / 50", chest: "126 cm", length: "126 cm", shoulder: "Raglan" },
      { size: "XL / 52", chest: "132 cm", length: "128 cm", shoulder: "Raglan" }
    ],
    tag: "Edisi Baru"
  },
  {
    id: "p-02",
    name: "Kemeja Drape Asimetris",
    category: "Kemeja & Atasan",
    collection: "Koleksi 2026",
    price: "Rp 1.850.000",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Perpaduan sutra murbei mengalir dan serat cupro matte dengan penutup kancing diagonal.",
    story: "Kemeja yang menjembatani keanggunan fluiditas dan ketegasan garis modern. Jatuh alami di badan dengan kelembutan luar biasa.",
    material: "60% Mulberry Silk, 40% Cupro Matte",
    silhouette: "Fluid Drape / Asymmetric Hem / Relaxed Collar",
    origin: "Atelier Milan, Italia",
    care: "Cuci kering khusus sutra atau cuci tangan suhu ruang.",
    details: [
      "Placket kancing miring unik tanpa jahitan luar",
      "Manset panjang dengan kancing ganda tersembunyi",
      "Keliman melengkung asimetris yang elegan saat dikeluarkan"
    ],
    measurements: [
      { size: "S / 46", chest: "106 cm", length: "74 cm", shoulder: "47 cm" },
      { size: "M / 48", chest: "112 cm", length: "76 cm", shoulder: "49 cm" },
      { size: "L / 50", chest: "118 cm", length: "78 cm", shoulder: "51 cm" },
      { size: "XL / 52", chest: "124 cm", length: "80 cm", shoulder: "53 cm" }
    ],
    tag: "Esensial"
  },
  {
    id: "p-03",
    name: "Celana Lipit Lebar Dalam",
    category: "Bawahan",
    collection: "Koleksi 2026",
    price: "Rp 2.250.000",
    image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Siluet santai berpotongan tinggi dengan lipit ganda ke depan dan ban pinggang terstruktur.",
    story: "Fondasi sempurna dari setiap setelan modern. Memberikan volume dramatis yang tetap seimbang dan rapi pada bagian mata kaki.",
    material: "100% Wool Crepe Bertekstur",
    silhouette: "High-Waist / Deep Double Pleat / Wide Leg",
    origin: "Atelier Milan, Italia",
    care: "Dry clean only. Gantung menggunakan penjepit kain.",
    details: [
      "Ban pinggang lebar tanpa tali sabuk (clean waist)",
      "Pengait logam samping untuk penyesuaian ukuran 2-3 cm",
      "Keliman bawah lebar 4 cm dengan finishing tangan"
    ],
    measurements: [
      { size: "S / 46", chest: "Pinggang: 78 cm", length: "106 cm", shoulder: "Paha: 68 cm" },
      { size: "M / 48", chest: "Pinggang: 82 cm", length: "108 cm", shoulder: "Paha: 70 cm" },
      { size: "L / 50", chest: "Pinggang: 86 cm", length: "110 cm", shoulder: "Paha: 72 cm" },
      { size: "XL / 52", chest: "Pinggang: 90 cm", length: "112 cm", shoulder: "Paha: 74 cm" }
    ],
    tag: "Koleksi Pokok"
  },
  {
    id: "p-04",
    name: "Turtleneck Rajut Terstruktur",
    category: "Rajut & Knitwear",
    collection: "Koleksi 2026",
    price: "Rp 2.650.000",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Rajutan wol merino Italia yang padat dengan detail keliman raw-edge dan leher patung yang santai.",
    story: "Rajutan hangat dengan kepadatan tinggi yang tidak mudah kendur, menjaga siluet leher tetap kokoh tanpa mencekik.",
    material: "100% Extra-fine Merino Wool (7-gauge knit)",
    silhouette: "Sculpted Neck / Regular Structured Fit",
    origin: "Biella, Italia",
    care: "Cuci tangan dingin dengan sabun wol khusus. Keringkan mendatar.",
    details: [
      "Jahitan rajut rib presisi pada kerah dan manset",
      "Tekstur permukaan lembut tahan gesekan (anti-pilling)",
      "Tanpa jahitan samping (seamless knit body)"
    ],
    measurements: [
      { size: "S / 46", chest: "102 cm", length: "68 cm", shoulder: "44 cm" },
      { size: "M / 48", chest: "108 cm", length: "70 cm", shoulder: "46 cm" },
      { size: "L / 50", chest: "114 cm", length: "72 cm", shoulder: "48 cm" },
      { size: "XL / 52", chest: "120 cm", length: "74 cm", shoulder: "50 cm" }
    ],
    tag: "Musiman"
  },
  {
    id: "p-05",
    name: "Gaun Mantel Kolom Minimalis",
    category: "Busana Luar",
    collection: "Koleksi 2026",
    price: "Rp 4.400.000",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Mantel kolom panjang wol-kasmir dengan belahan tunggal di bagian belakang.",
    story: "Keanggunan monolitik dalam potongan busana panjang yang memperpanjang postur tubuh dengan garis vertikal tak terputus.",
    material: "85% Virgin Wool, 15% Kasmir",
    silhouette: "Floor-Length Column / Minimalist Lapel",
    origin: "Atelier Milan, Italia",
    care: "Dry clean only.",
    details: [
      "Potongan vertikal langsing tanpa garis jahitan melintang",
      "Saku samping seamless menyatu dengan garis konstruksi",
      "Kancing snap tersembunyi berdaya rekat tinggi"
    ],
    measurements: [
      { size: "S / 46", chest: "100 cm", length: "130 cm", shoulder: "42 cm" },
      { size: "M / 48", chest: "106 cm", length: "132 cm", shoulder: "44 cm" },
      { size: "L / 50", chest: "112 cm", length: "134 cm", shoulder: "46 cm" },
      { size: "XL / 52", chest: "118 cm", length: "136 cm", shoulder: "48 cm" }
    ],
    tag: "Terbatas"
  },
  {
    id: "p-06",
    name: "Overshirt Boxy Minimalis",
    category: "Kemeja & Atasan",
    collection: "Koleksi 2026",
    price: "Rp 2.100.000",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Poplin Jepang berbobot dengan potongan keliman geometris dan saku dada tersembunyi.",
    story: "Lapisan luar multifungsi yang dapat dikenakan tertutup sebagai kemeja struktural atau terbuka sebagai jaket ringan transisi musim.",
    material: "100% Japanese High-Density Cotton Poplin",
    silhouette: "Boxy Square Fit / Dropped Shoulder / Straight Hem",
    origin: "Osaka / Jakarta",
    care: "Cuci mesin dengan air dingin, gantung untuk mengeringkan.",
    details: [
      "Saku dada arsitektural dengan jahitan kantong terbalik",
      "Kancing ritsleting dua arah matte black (YKK Excella)",
      "Keliman lurus sempurna dengan belahan samping mikro"
    ],
    measurements: [
      { size: "S / 46", chest: "112 cm", length: "70 cm", shoulder: "50 cm" },
      { size: "M / 48", chest: "118 cm", length: "72 cm", shoulder: "52 cm" },
      { size: "L / 50", chest: "124 cm", length: "74 cm", shoulder: "54 cm" },
      { size: "XL / 52", chest: "130 cm", length: "76 cm", shoulder: "56 cm" }
    ],
    tag: "Esensial"
  }
];
const getAllProducts = () => {
  return [...featuredProducts, ...productCatalog];
};
const getProductById = (id) => {
  return getAllProducts().find((p) => p.id === id);
};
const lookbookItems = [
  {
    id: "look-01",
    title: "PROFIL BAYANGAN",
    subtitle: "Look 01 — Esensial Modern",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85",
    span: "col-span-12 lg:col-span-7",
    aspect: "aspect-[4/5]"
  },
  {
    id: "look-02",
    title: "DRAPING ARSITEKTURAL",
    subtitle: "Look 02 — Struktur Mengalir",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    span: "col-span-12 lg:col-span-5",
    aspect: "aspect-[3/4]"
  },
  {
    id: "look-03",
    title: "KETEGANGAN MONOKROM",
    subtitle: "Look 03 — Wujud Obsidian",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    span: "col-span-12 lg:col-span-5",
    aspect: "aspect-[3/4]"
  },
  {
    id: "look-04",
    title: "KEHADIRAN DALAM DIAM",
    subtitle: "Look 04 — Minimalis Kuat",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85",
    span: "col-span-12 lg:col-span-7",
    aspect: "aspect-[16/10]"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emailInput = ref("");
    const subscribedMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "footer",
        class: "relative bg-background pt-20 md:pt-28 pb-10 px-5 sm:px-8 md:px-12 text-foreground overflow-hidden border-t border-line"
      }, _attrs))}><div class="absolute bottom-0 right-1/4 w-[40vw] h-[20vw] rounded-full bg-accent/4 blur-[140px] pointer-events-none" aria-hidden="true"></div><div class="max-w-[1440px] mx-auto flex flex-col space-y-16 relative z-10"><div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line pb-8 gap-6"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", _imports_0)} alt="Logo AVRÉN" class="h-7 w-auto object-contain"><span class="font-display text-2xl sm:text-3xl tracking-wider text-foreground">AVRÉN</span><span class="h-4 w-[1px] bg-line-strong mx-1"></span><span class="text-[11px] uppercase tracking-eyebrow text-muted">ATELIER FASHION</span></div><button type="button" class="group self-start sm:self-auto inline-flex items-center gap-3 text-xs uppercase tracking-eyebrow text-foreground/80 hover:text-accent transition-colors" aria-label="Kembali ke bagian atas halaman"><span>KEMBALI KE ATAS</span><div class="w-8 h-8 rounded-full border border-line group-hover:border-accent flex items-center justify-center transition-colors"><svg class="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></div></button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 items-start"><div class="lg:col-span-4 flex flex-col space-y-6"><p class="text-sm text-foreground/75 font-light leading-relaxed max-w-sm"> Busana esensial modern berkarakter arsitektural. Diciptakan melalui disiplin ketat, material murni, dan keanggunan dalam keheningan. </p><div class="pt-4 border-t border-line flex flex-col space-y-3"><span class="text-[10px] uppercase tracking-widest text-muted font-semibold"> KANTOR &amp; ATELIER UTAMA </span><div class="grid grid-cols-3 gap-2 text-xs uppercase tracking-eyebrow text-foreground/80"><div class="flex flex-col"><span class="text-foreground font-medium">JAKARTA</span><span class="text-[10px] text-muted">WIB (UTC+7)</span></div><div class="flex flex-col"><span class="text-foreground font-medium">MILAN</span><span class="text-[10px] text-muted">CET (UTC+1)</span></div><div class="flex flex-col"><span class="text-foreground font-medium">TOKYO</span><span class="text-[10px] text-muted">JST (UTC+9)</span></div></div></div><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-line w-fit"><span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span><span class="text-[10px] uppercase tracking-eyebrow text-foreground/80">LAYANAN CONCIERGE TERSEDIA</span></div></div><div class="lg:col-span-2 flex flex-col space-y-4"><h4 class="text-xs uppercase tracking-eyebrow text-muted font-semibold flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-accent"></span><span>EKSPLORASI</span></h4><ul class="space-y-2.5 text-xs uppercase tracking-eyebrow text-foreground/80"><li><a href="#hero" class="hover:text-accent transition-colors block py-0.5"> Beranda </a></li><li><a href="#featured" class="hover:text-accent transition-colors block py-0.5"> Koleksi Pilihan </a></li><li><a href="#story" class="hover:text-accent transition-colors block py-0.5"> Filosofi Kami </a></li><li><a href="#catalog" class="hover:text-accent transition-colors block py-0.5"> Katalog 2026 </a></li><li><a href="#lookbook" class="hover:text-accent transition-colors block py-0.5"> Lookbook Visual </a></li></ul></div><div class="lg:col-span-2 flex flex-col space-y-4"><h4 class="text-xs uppercase tracking-eyebrow text-muted font-semibold flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-accent"></span><span>LAYANAN KLIEN</span></h4><ul class="space-y-2.5 text-xs uppercase tracking-eyebrow text-foreground/80"><li><a href="mailto:layanan@avren.studio" class="hover:text-accent transition-colors block py-0.5"> Konsultasi Privat </a></li><li><a href="mailto:layanan@avren.studio" class="hover:text-accent transition-colors block py-0.5"> Panduan Ukuran </a></li><li><a href="mailto:layanan@avren.studio" class="hover:text-accent transition-colors block py-0.5"> Perawatan Tekstil </a></li><li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors block py-0.5"> Instagram </a></li><li><a href="https://threads.net" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors block py-0.5"> Threads </a></li></ul></div><div class="lg:col-span-4 flex flex-col space-y-4 bg-surface/50 border border-line p-6 rounded-sm"><div class="flex items-center justify-between"><h4 class="text-xs uppercase tracking-eyebrow text-foreground font-semibold flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span><span>WARTA PRIBADI AVRÉN</span></h4><span class="text-[10px] uppercase tracking-widest text-muted">TERBATAS</span></div><p class="text-xs text-foreground/70 font-light leading-relaxed"> Daftarkan surel Anda untuk menerima undangan peluncuran privat, rilis bernomor, dan dokumentasi editorial eksklusif. </p><form class="flex flex-col sm:flex-row items-stretch gap-2.5 mt-2"><input${ssrRenderAttr("value", emailInput.value)} type="email" placeholder="ALAMAT SUREL ANDA" class="flex-1 bg-surface-2 border border-line px-3.5 py-3 text-xs uppercase tracking-eyebrow text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent rounded-sm transition-colors" required><button type="submit" class="px-5 py-3 bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-eyebrow rounded-sm shrink-0"> DAFTAR </button></form><div class="flex items-center justify-between text-[10px] text-muted"><span>Privasi terjaga. Tanpa spam.</span>`);
      if (subscribedMessage.value) {
        _push(`<span class="text-accent font-semibold animate-pulse">${ssrInterpolate(subscribedMessage.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="border-t border-line pt-10 flex flex-col space-y-8"><div class="w-full flex items-center justify-between overflow-hidden py-2 select-none pointer-events-none"><span class="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-tightest text-surface-2/90 leading-none block"> AVR<span class="text-accent/30">É</span>N </span><span class="hidden md:block font-display text-4xl lg:text-7xl tracking-tightest text-surface-2/50 uppercase leading-none"> MODERN ESSENTIALS </span></div><div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-eyebrow text-muted"><span>© 2026 AVRÉN BRAND ATELIER. HAK CIPTA DILINDUNGI.</span><div class="flex items-center gap-6"><a href="#hero" class="hover:text-foreground transition-colors">KETENTUAN</a><span class="text-line-strong">•</span><a href="#hero" class="hover:text-foreground transition-colors">KEBIJAKAN PRIVASI</a><span class="text-line-strong">•</span><span>EDISI 01</span></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  getAllProducts as a,
  featuredProducts as f,
  getProductById as g,
  lookbookItems as l,
  productCatalog as p
};
//# sourceMappingURL=Footer-DGkzhE-q.js.map
