export interface Product {
  id: string
  name: string
  category: string
  collection: string
  price: string
  image: string
  hoverImage?: string
  gallery?: string[]
  description: string
  story?: string
  material?: string
  silhouette?: string
  origin?: string
  care?: string
  details?: string[]
  measurements?: {
    size: string
    chest: string
    length: string
    shoulder: string
  }[]
  tag?: string
  aspectRatio?: string
}

export const featuredProducts: Product[] = [
  {
    id: 'feat-01',
    name: 'Mantel Tailored Obsidian',
    category: 'Busana Luar',
    collection: 'Edisi 01 — Monolith',
    price: 'Rp 4.850.000',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Potongan presisi dari perpaduan wol murni dengan bahu tegas dan kancing tanduk tersembunyi.',
    story: 'Mantel Tailored Obsidian merupakan manifestasi dari ketenangan berwibawa. Setiap panel dipotong tangan di Milan dengan bantalan bahu terstruktur yang memberikan siluet monolitik tanpa mengorbankan kenyamanan pemakainya.',
    material: '100% Virgin Italian Wool (480 gsm) • Lapisan Dalam Sutra Cupro Matte',
    silhouette: 'Arsitektural / Structured Drop-Shoulder / Panjang Sebetis',
    origin: 'Atelier Milan, Italia',
    care: 'Khusus cuci kering profesional (Dry clean only). Simpan pada gantungan berstruktur.',
    details: [
      'Konstruksi dada kanvas tradisional untuk mempertahankan bentuk permanen',
      'Kancing tanduk kerbau alami dengan placket tersembunyi',
      'Detail jahitan dalam beraksen merah signature AVRÉN',
      'Dua saku samping berpenutup minimalis dan saku dalam ganda'
    ],
    measurements: [
      { size: 'S / 46', chest: '110 cm', length: '118 cm', shoulder: '48 cm' },
      { size: 'M / 48', chest: '116 cm', length: '120 cm', shoulder: '50 cm' },
      { size: 'L / 50', chest: '122 cm', length: '122 cm', shoulder: '52 cm' },
      { size: 'XL / 52', chest: '128 cm', length: '124 cm', shoulder: '54 cm' }
    ],
    tag: 'Koleksi Utama'
  },
  {
    id: 'feat-02',
    name: 'Blazer Wol Arsitektural',
    category: 'Penjahitan Formal',
    collection: 'Edisi 01 — Monolith',
    price: 'Rp 3.450.000',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
    hoverImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Blazer double-breasted dengan kerah lancip tajam dan aksen jahitan merah marun di bagian dalam.',
    story: 'Diciptakan sebagai perisai modern untuk perjumpaan formal maupun kasual berkelas. Memadukan potongan tajam kerah peak lapel dengan volume relaks pada pinggang.',
    material: '92% Wol Halus, 8% Kasmir • Lapisan Satin Bernapas',
    silhouette: 'Double-Breasted / Sharp Peak Lapel / Relaxed Waist',
    origin: 'Atelier Milan, Italia',
    care: 'Dry clean only. Setrika dengan uap suhu sedang.',
    details: [
      'Kancing corozzo natural berukir micro signature',
      'Kantung bilur ganda dengan potongan sudut presisi',
      'Ventilasi ganda di bagian belakang untuk keleluasaan duduk',
      'Struktur bahu semi-ropped khas tailoring Eropa modern'
    ],
    measurements: [
      { size: 'S / 46', chest: '104 cm', length: '76 cm', shoulder: '46 cm' },
      { size: 'M / 48', chest: '110 cm', length: '78 cm', shoulder: '48 cm' },
      { size: 'L / 50', chest: '116 cm', length: '80 cm', shoulder: '50 cm' },
      { size: 'XL / 52', chest: '122 cm', length: '82 cm', shoulder: '52 cm' }
    ],
    tag: 'Potongan Ikonik'
  }
]

export const productCatalog: Product[] = [
  {
    id: 'p-01',
    name: 'Trench Coat Monolitik',
    category: 'Busana Luar',
    collection: 'Koleksi 2026',
    price: 'Rp 5.200.000',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=85',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Bahan gabardine katun tahan cuaca dengan storm flap tegas dan sabuk pinggang minimalis.',
    story: 'Penafsiran ulang atas jas hujan klasik. Menghilangkan elemen visual yang tidak perlu demi menciptakan mantel pelindung bersiluet ramping dan bersih.',
    material: '100% Japanese Bonded Cotton Gabardine (Tahan Angin & Gerimis)',
    silhouette: 'Oversized Column / Raglan Sleeve / Extra Long',
    origin: 'Kyoto / Jakarta',
    care: 'Cuci tangan dingin dengan deterjen lembut atau dry clean.',
    details: [
      'Lapisan membran kedap air micro-porous',
      'Gesper sabuk logam berlapis matte black',
      'Storm flap dada geometris dengan pengait tersembunyi',
      'Kerah storm collar yang dapat dinaikkan'
    ],
    measurements: [
      { size: 'S / 46', chest: '114 cm', length: '122 cm', shoulder: 'Raglan' },
      { size: 'M / 48', chest: '120 cm', length: '124 cm', shoulder: 'Raglan' },
      { size: 'L / 50', chest: '126 cm', length: '126 cm', shoulder: 'Raglan' },
      { size: 'XL / 52', chest: '132 cm', length: '128 cm', shoulder: 'Raglan' }
    ],
    tag: 'Edisi Baru'
  },
  {
    id: 'p-02',
    name: 'Kemeja Drape Asimetris',
    category: 'Kemeja & Atasan',
    collection: 'Koleksi 2026',
    price: 'Rp 1.850.000',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Perpaduan sutra murbei mengalir dan serat cupro matte dengan penutup kancing diagonal.',
    story: 'Kemeja yang menjembatani keanggunan fluiditas dan ketegasan garis modern. Jatuh alami di badan dengan kelembutan luar biasa.',
    material: '60% Mulberry Silk, 40% Cupro Matte',
    silhouette: 'Fluid Drape / Asymmetric Hem / Relaxed Collar',
    origin: 'Atelier Milan, Italia',
    care: 'Cuci kering khusus sutra atau cuci tangan suhu ruang.',
    details: [
      'Placket kancing miring unik tanpa jahitan luar',
      'Manset panjang dengan kancing ganda tersembunyi',
      'Keliman melengkung asimetris yang elegan saat dikeluarkan'
    ],
    measurements: [
      { size: 'S / 46', chest: '106 cm', length: '74 cm', shoulder: '47 cm' },
      { size: 'M / 48', chest: '112 cm', length: '76 cm', shoulder: '49 cm' },
      { size: 'L / 50', chest: '118 cm', length: '78 cm', shoulder: '51 cm' },
      { size: 'XL / 52', chest: '124 cm', length: '80 cm', shoulder: '53 cm' }
    ],
    tag: 'Esensial'
  },
  {
    id: 'p-03',
    name: 'Celana Lipit Lebar Dalam',
    category: 'Bawahan',
    collection: 'Koleksi 2026',
    price: 'Rp 2.250.000',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Siluet santai berpotongan tinggi dengan lipit ganda ke depan dan ban pinggang terstruktur.',
    story: 'Fondasi sempurna dari setiap setelan modern. Memberikan volume dramatis yang tetap seimbang dan rapi pada bagian mata kaki.',
    material: '100% Wool Crepe Bertekstur',
    silhouette: 'High-Waist / Deep Double Pleat / Wide Leg',
    origin: 'Atelier Milan, Italia',
    care: 'Dry clean only. Gantung menggunakan penjepit kain.',
    details: [
      'Ban pinggang lebar tanpa tali sabuk (clean waist)',
      'Pengait logam samping untuk penyesuaian ukuran 2-3 cm',
      'Keliman bawah lebar 4 cm dengan finishing tangan'
    ],
    measurements: [
      { size: 'S / 46', chest: 'Pinggang: 78 cm', length: '106 cm', shoulder: 'Paha: 68 cm' },
      { size: 'M / 48', chest: 'Pinggang: 82 cm', length: '108 cm', shoulder: 'Paha: 70 cm' },
      { size: 'L / 50', chest: 'Pinggang: 86 cm', length: '110 cm', shoulder: 'Paha: 72 cm' },
      { size: 'XL / 52', chest: 'Pinggang: 90 cm', length: '112 cm', shoulder: 'Paha: 74 cm' }
    ],
    tag: 'Koleksi Pokok'
  },
  {
    id: 'p-04',
    name: 'Turtleneck Rajut Terstruktur',
    category: 'Rajut & Knitwear',
    collection: 'Koleksi 2026',
    price: 'Rp 2.650.000',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Rajutan wol merino Italia yang padat dengan detail keliman raw-edge dan leher patung yang santai.',
    story: 'Rajutan hangat dengan kepadatan tinggi yang tidak mudah kendur, menjaga siluet leher tetap kokoh tanpa mencekik.',
    material: '100% Extra-fine Merino Wool (7-gauge knit)',
    silhouette: 'Sculpted Neck / Regular Structured Fit',
    origin: 'Biella, Italia',
    care: 'Cuci tangan dingin dengan sabun wol khusus. Keringkan mendatar.',
    details: [
      'Jahitan rajut rib presisi pada kerah dan manset',
      'Tekstur permukaan lembut tahan gesekan (anti-pilling)',
      'Tanpa jahitan samping (seamless knit body)'
    ],
    measurements: [
      { size: 'S / 46', chest: '102 cm', length: '68 cm', shoulder: '44 cm' },
      { size: 'M / 48', chest: '108 cm', length: '70 cm', shoulder: '46 cm' },
      { size: 'L / 50', chest: '114 cm', length: '72 cm', shoulder: '48 cm' },
      { size: 'XL / 52', chest: '120 cm', length: '74 cm', shoulder: '50 cm' }
    ],
    tag: 'Musiman'
  },
  {
    id: 'p-05',
    name: 'Gaun Mantel Kolom Minimalis',
    category: 'Busana Luar',
    collection: 'Koleksi 2026',
    price: 'Rp 4.400.000',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Mantel kolom panjang wol-kasmir dengan belahan tunggal di bagian belakang.',
    story: 'Keanggunan monolitik dalam potongan busana panjang yang memperpanjang postur tubuh dengan garis vertikal tak terputus.',
    material: '85% Virgin Wool, 15% Kasmir',
    silhouette: 'Floor-Length Column / Minimalist Lapel',
    origin: 'Atelier Milan, Italia',
    care: 'Dry clean only.',
    details: [
      'Potongan vertikal langsing tanpa garis jahitan melintang',
      'Saku samping seamless menyatu dengan garis konstruksi',
      'Kancing snap tersembunyi berdaya rekat tinggi'
    ],
    measurements: [
      { size: 'S / 46', chest: '100 cm', length: '130 cm', shoulder: '42 cm' },
      { size: 'M / 48', chest: '106 cm', length: '132 cm', shoulder: '44 cm' },
      { size: 'L / 50', chest: '112 cm', length: '134 cm', shoulder: '46 cm' },
      { size: 'XL / 52', chest: '118 cm', length: '136 cm', shoulder: '48 cm' }
    ],
    tag: 'Terbatas'
  },
  {
    id: 'p-06',
    name: 'Overshirt Boxy Minimalis',
    category: 'Kemeja & Atasan',
    collection: 'Koleksi 2026',
    price: 'Rp 2.100.000',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Poplin Jepang berbobot dengan potongan keliman geometris dan saku dada tersembunyi.',
    story: 'Lapisan luar multifungsi yang dapat dikenakan tertutup sebagai kemeja struktural atau terbuka sebagai jaket ringan transisi musim.',
    material: '100% Japanese High-Density Cotton Poplin',
    silhouette: 'Boxy Square Fit / Dropped Shoulder / Straight Hem',
    origin: 'Osaka / Jakarta',
    care: 'Cuci mesin dengan air dingin, gantung untuk mengeringkan.',
    details: [
      'Saku dada arsitektural dengan jahitan kantong terbalik',
      'Kancing ritsleting dua arah matte black (YKK Excella)',
      'Keliman lurus sempurna dengan belahan samping mikro'
    ],
    measurements: [
      { size: 'S / 46', chest: '112 cm', length: '70 cm', shoulder: '50 cm' },
      { size: 'M / 48', chest: '118 cm', length: '72 cm', shoulder: '52 cm' },
      { size: 'L / 50', chest: '124 cm', length: '74 cm', shoulder: '54 cm' },
      { size: 'XL / 52', chest: '130 cm', length: '76 cm', shoulder: '56 cm' }
    ],
    tag: 'Esensial'
  }
]

export const getAllProducts = (): Product[] => {
  return [...featuredProducts, ...productCatalog]
}

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(p => p.id === id)
}

export const lookbookItems = [
  {
    id: 'look-01',
    title: 'PROFIL BAYANGAN',
    subtitle: 'Look 01 — Esensial Modern',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85',
    span: 'col-span-12 lg:col-span-7',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'look-02',
    title: 'DRAPING ARSITEKTURAL',
    subtitle: 'Look 02 — Struktur Mengalir',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-12 lg:col-span-5',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'look-03',
    title: 'KETEGANGAN MONOKROM',
    subtitle: 'Look 03 — Wujud Obsidian',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-12 lg:col-span-5',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'look-04',
    title: 'KEHADIRAN DALAM DIAM',
    subtitle: 'Look 04 — Minimalis Kuat',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85',
    span: 'col-span-12 lg:col-span-7',
    aspect: 'aspect-[16/10]'
  }
]
