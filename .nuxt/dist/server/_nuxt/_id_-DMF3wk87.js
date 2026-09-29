import { _ as _sfc_main$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-DYY2yAdV.js";
import { g as getProductById, a as getAllProducts, _ as _sfc_main$2 } from "./Footer-DGkzhE-q.js";
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import "D:/Project/AVRÉN/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/Project/AVRÉN/node_modules/hookable/dist/index.mjs";
import "D:/Project/AVRÉN/node_modules/unctx/dist/index.mjs";
import "D:/Project/AVRÉN/node_modules/h3/dist/index.mjs";
import "D:/Project/AVRÉN/node_modules/defu/dist/defu.mjs";
import "D:/Project/AVRÉN/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const productId = computed(() => route.params.id);
    const product = computed(() => getProductById(productId.value));
    const activeImage = ref("");
    const currentImageIndex = ref(0);
    const selectedSize = ref("M / 48");
    const sizes = ["S / 46", "M / 48", "L / 50", "XL / 52"];
    const openAccordion = ref("material");
    const isWishlisted = ref(false);
    const isLightboxOpen = ref(false);
    const isConciergeModalOpen = ref(false);
    const appointmentSubmitted = ref(false);
    const conciergeForm = ref({
      name: "",
      phone: "",
      location: "Jakarta Atelier"
    });
    const galleryImages = computed(() => {
      if (!product.value) return [];
      if (product.value.gallery && product.value.gallery.length > 0) {
        return product.value.gallery;
      }
      const imgs = [product.value.image];
      if (product.value.hoverImage) imgs.push(product.value.hoverImage);
      return imgs;
    });
    const relatedProducts = computed(() => {
      if (!product.value) return [];
      return getAllProducts().filter((p) => p.id !== product.value?.id).slice(0, 3);
    });
    const handleNavigate = (selector) => {
      if (selector.startsWith("#")) {
        router.push(`/${selector}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background text-foreground selection:bg-accent selection:text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, { onNavigate: handleNavigate }, null, _parent));
      _push(`<main class="w-full relative pt-24 md:pt-32 pb-24 px-5 sm:px-8 md:px-12 max-w-[1440px] mx-auto"><div class="flex items-center justify-between border-b border-line pb-4 mb-8 sm:mb-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#catalog",
        class: "group inline-flex items-center gap-2.5 text-xs uppercase tracking-eyebrow text-muted hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-6 h-6 rounded-full border border-line group-hover:border-accent flex items-center justify-center transition-colors"${_scopeId}><svg class="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg></div><span${_scopeId}>KEMBALI KE KATALOG</span>`);
          } else {
            return [
              createVNode("div", { class: "w-6 h-6 rounded-full border border-line group-hover:border-accent flex items-center justify-center transition-colors" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 19l-7-7 7-7"
                  })
                ]))
              ]),
              createVNode("span", null, "KEMBALI KE KATALOG")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4"><button type="button" class="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-muted hover:text-foreground transition-colors"><svg class="${ssrRenderClass([isWishlisted.value ? "text-accent fill-accent" : "stroke-current fill-none", "w-4 h-4 transition-colors"])}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg><span class="hidden sm:inline">${ssrInterpolate(isWishlisted.value ? "TERSUSUN DALAM KURASI" : "SIMPAN KURASI")}</span></button></div></div>`);
      if (!product.value) {
        _push(`<div class="py-24 text-center"><h1 class="font-display text-4xl sm:text-6xl uppercase tracking-tight text-foreground mb-4"> PRODUK TIDAK DITEMUKAN </h1><p class="text-sm text-muted mb-8 max-w-md mx-auto"> Busana yang Anda tuju mungkin merupakan rilisan kapsul khusus yang telah diarsipkan. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-flex px-8 py-4 bg-foreground text-background text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` KEMBALI KE BERANDA `);
            } else {
              return [
                createTextVNode(" KEMBALI KE BERANDA ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"><div class="lg:col-span-5 flex flex-col space-y-3.5 max-w-md mx-auto lg:max-w-none w-full"><div class="liquid-img-wrapper relative aspect-[3/4] max-h-[460px] lg:max-h-[480px] w-full rounded-sm overflow-hidden bg-surface-2 border border-line shadow-xl group cursor-zoom-in"><img${ssrRenderAttr("src", activeImage.value)}${ssrRenderAttr("alt", product.value.name)} class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">`);
        if (product.value.tag) {
          _push(`<div class="absolute top-3.5 left-3.5 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-accent font-semibold">${ssrInterpolate(product.value.tag)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute top-3.5 right-3.5 px-2 py-0.5 bg-background/80 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-widest text-muted">${ssrInterpolate(currentImageIndex.value + 1)} / ${ssrInterpolate(galleryImages.value.length)}</div><div class="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"><span class="flex items-center gap-1.5"><svg class="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg> KLIK PERBESAR TEKSTUR </span><span class="text-muted text-[9px]">HD</span></div></div>`);
        if (galleryImages.value.length > 1) {
          _push(`<div class="grid grid-cols-4 gap-2.5 pt-1"><!--[-->`);
          ssrRenderList(galleryImages.value, (img, idx) => {
            _push(`<button type="button" class="${ssrRenderClass([[
              activeImage.value === img ? "border-accent ring-1 ring-accent opacity-100" : "border-line opacity-50 hover:opacity-100 hover:border-line-strong"
            ], "aspect-[3/4] max-h-20 sm:max-h-24 rounded-sm overflow-hidden border transition-all duration-300 relative group bg-surface-2"])}"><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `${product.value.name} sudut ${idx + 1}`)} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"><span class="absolute bottom-1 right-1 text-[8px] uppercase tracking-widest text-white/90 bg-background/80 px-1 py-0.5 rounded-xs font-mono"> 0${ssrInterpolate(idx + 1)}</span></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-line"><div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col"><span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">MATERIAL</span><span class="text-[11px] text-foreground/80 font-medium truncate">100% Wol Murni</span></div><div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col"><span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">PENGERJAAN</span><span class="text-[11px] text-foreground/80 font-medium truncate">Jahit Tangan</span></div><div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col"><span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">EDISI</span><span class="text-[11px] text-foreground/80 font-medium truncate">Bernomor Seri</span></div><div class="p-2.5 bg-surface border border-line rounded-sm flex flex-col"><span class="text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">PENGIRIMAN</span><span class="text-[11px] text-foreground/80 font-medium truncate">Kurir Khusus</span></div></div></div><div class="lg:col-span-7 flex flex-col space-y-6 lg:sticky lg:top-24"><div><div class="flex items-center justify-between text-xs uppercase tracking-eyebrow text-muted mb-2"><span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> ${ssrInterpolate(product.value.category)}</span><span class="text-foreground/60">${ssrInterpolate(product.value.collection)}</span></div><h1 class="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-foreground leading-[0.95]">${ssrInterpolate(product.value.name)}</h1><div class="mt-4 flex items-baseline justify-between border-b border-line pb-4"><div class="flex items-baseline gap-3"><span class="font-sans text-2xl sm:text-3xl font-medium text-foreground tabular-nums">${ssrInterpolate(product.value.price)}</span><span class="text-[10px] uppercase tracking-widest text-muted">BEBAS BIAYA ATELIER</span></div><span class="text-[10px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span> SIAP DISPATCH </span></div></div><div class="space-y-3"><p class="text-xs sm:text-sm text-foreground/80 font-light leading-relaxed">${ssrInterpolate(product.value.description)}</p>`);
        if (product.value.story) {
          _push(`<p class="text-xs text-foreground/60 font-light leading-relaxed italic border-l-2 border-accent pl-3"> &quot;${ssrInterpolate(product.value.story)}&quot; </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-3 bg-surface/60 border border-line p-5 rounded-sm"><div class="flex items-center justify-between text-xs uppercase tracking-eyebrow"><span class="text-foreground font-semibold flex items-center gap-1.5"><span>PILIH UKURAN</span><span class="text-accent font-normal">(${ssrInterpolate(selectedSize.value)})</span></span><button type="button" class="text-[11px] text-muted hover:text-accent underline underline-offset-4 transition-colors"> PANDUAN DIMENSI </button></div><div class="grid grid-cols-4 gap-2"><!--[-->`);
        ssrRenderList(sizes, (size) => {
          _push(`<button type="button" class="${ssrRenderClass([[
            selectedSize.value === size ? "bg-foreground text-background border-foreground font-semibold shadow-lg" : "bg-surface-2 border-line text-foreground/80 hover:border-line-strong hover:text-foreground"
          ], "py-3 text-xs uppercase tracking-eyebrow rounded-sm border transition-all duration-200 font-medium"])}">${ssrInterpolate(size)}</button>`);
        });
        _push(`<!--]--></div><div class="flex items-center justify-between text-[10px] uppercase tracking-eyebrow text-muted pt-2 border-t border-line/60"><span>MODEL: 188 CM, UKURAN M / 48</span><span class="text-accent">HANYA TERSISA 3 PCS</span></div></div><div class="space-y-3"><button type="button" class="w-full py-4 bg-accent text-white font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent-2 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"><span>BUAT JANJI TEMU / KONSULTASI CONCIERGE</span><span class="transform group-hover:translate-x-1 transition-transform">→</span></button><button type="button" class="w-full py-3.5 bg-surface border border-line hover:border-line-strong text-foreground text-xs uppercase tracking-eyebrow font-medium rounded-sm transition-colors flex items-center justify-center gap-2"><svg class="${ssrRenderClass([isWishlisted.value ? "text-accent fill-accent" : "stroke-current fill-none", "w-3.5 h-3.5"])}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg><span>${ssrInterpolate(isWishlisted.value ? "HAPUS DARI KURASI PRIBADI" : "SIMPAN KE KURASI PRIBADI")}</span></button></div><div class="border-t border-line divide-y divide-line pt-2"><div class="py-3.5"><button type="button" class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"><span>01. MATERIAL &amp; ASAL USUL</span><span class="text-accent text-sm font-mono">${ssrInterpolate(openAccordion.value === "material" ? "−" : "+")}</span></button><div class="mt-3 text-xs text-foreground/75 font-light space-y-2 leading-relaxed" style="${ssrRenderStyle(openAccordion.value === "material" ? null : { display: "none" })}"><p><strong>Komposisi Tekstil:</strong> ${ssrInterpolate(product.value.material || "Wol Murni Italia kualitas tertinggi")}</p><p><strong>Lokasi Pengerjaan:</strong> ${ssrInterpolate(product.value.origin || "Atelier Milan, Italia")}</p><p><strong>Siluet Potongan:</strong> ${ssrInterpolate(product.value.silhouette || "Arsitektural / Relaks")}</p></div></div><div class="py-3.5"><button type="button" class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"><span>02. DETAIL PENJAHITAN &amp; KONSTRUKSI</span><span class="text-accent text-sm font-mono">${ssrInterpolate(openAccordion.value === "details" ? "−" : "+")}</span></button><div class="mt-3 text-xs text-foreground/75 font-light space-y-2" style="${ssrRenderStyle(openAccordion.value === "details" ? null : { display: "none" })}">`);
        if (product.value.details) {
          _push(`<ul class="space-y-1.5 list-disc list-inside"><!--[-->`);
          ssrRenderList(product.value.details, (detail, dIdx) => {
            _push(`<li>${ssrInterpolate(detail)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<p>Dikerjakan dengan jahitan tangan presisi pada area krusial.</p>`);
        }
        _push(`</div></div><div class="py-3.5"><button type="button" class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"><span>03. PANDUAN DIMENSI LENGKAP (CM)</span><span class="text-accent text-sm font-mono">${ssrInterpolate(openAccordion.value === "measurements" ? "−" : "+")}</span></button><div class="mt-3 overflow-x-auto" style="${ssrRenderStyle(openAccordion.value === "measurements" ? null : { display: "none" })}">`);
        if (product.value.measurements) {
          _push(`<table class="w-full text-[11px] text-left border-collapse"><thead><tr class="border-b border-line text-muted uppercase tracking-wider"><th class="py-2">Ukuran</th><th class="py-2">Dada / Pinggang</th><th class="py-2">Panjang</th><th class="py-2">Bahu / Paha</th></tr></thead><tbody class="divide-y divide-line/40 text-foreground/80"><!--[-->`);
          ssrRenderList(product.value.measurements, (m) => {
            _push(`<tr class="${ssrRenderClass(selectedSize.value === m.size ? "bg-surface text-accent font-medium" : "")}"><td class="py-2.5 font-medium">${ssrInterpolate(m.size)}</td><td class="py-2.5">${ssrInterpolate(m.chest)}</td><td class="py-2.5">${ssrInterpolate(m.length)}</td><td class="py-2.5">${ssrInterpolate(m.shoulder)}</td></tr>`);
          });
          _push(`<!--]--></tbody></table>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="py-3.5"><button type="button" class="w-full flex items-center justify-between text-xs uppercase tracking-eyebrow text-foreground font-medium text-left"><span>04. PENGIRIMAN &amp; PERAWATAN</span><span class="text-accent text-sm font-mono">${ssrInterpolate(openAccordion.value === "care" ? "−" : "+")}</span></button><div class="mt-3 text-xs text-foreground/75 font-light space-y-2 leading-relaxed" style="${ssrRenderStyle(openAccordion.value === "care" ? null : { display: "none" })}"><p><strong>Perawatan:</strong> ${ssrInterpolate(product.value.care || "Khusus cuci kering profesional (Dry Clean Only).")}</p><p><strong>Kemasan:</strong> Disertakan tas pelindung kain breathable berlogo AVRÉN dan gantungan kayu bersertifikat.</p></div></div></div></div></div>`);
      }
      if (relatedProducts.value.length > 0) {
        _push(`<div class="mt-24 sm:mt-32 border-t border-line pt-16"><div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"><div><div class="eyebrow-badge mb-2"><span class="eyebrow-dot"></span><span>EDISI PELENGKAP</span></div><h2 class="font-display text-2xl sm:text-4xl uppercase tracking-tight text-foreground"> BUSANA PELENGKAP SILUET </h2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#catalog",
          class: "text-xs uppercase tracking-eyebrow text-accent hover:underline underline-offset-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` LIHAT SELURUH KATALOG → `);
            } else {
              return [
                createTextVNode(" LIHAT SELURUH KATALOG → ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
        ssrRenderList(relatedProducts.value, (rel) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: rel.id,
            to: `/products/${rel.id}`,
            class: "group flex flex-col cursor-pointer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line"${_scopeId}><img${ssrRenderAttr("src", rel.image)}${ssrRenderAttr("alt", rel.name)} class="liquid-img w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"${_scopeId}><div class="absolute top-3 left-3 px-2.5 py-1 bg-background/80 backdrop-blur-md rounded-sm text-[10px] uppercase tracking-eyebrow text-muted"${_scopeId}>${ssrInterpolate(rel.category)}</div></div><div class="mt-3 flex items-baseline justify-between border-b border-line pb-2"${_scopeId}><h3 class="font-display text-lg uppercase tracking-tight text-foreground group-hover:text-accent transition-colors"${_scopeId}>${ssrInterpolate(rel.name)}</h3><span class="font-sans text-xs font-medium text-foreground tabular-nums"${_scopeId}>${ssrInterpolate(rel.price)}</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line" }, [
                    createVNode("img", {
                      src: rel.image,
                      alt: rel.name,
                      class: "liquid-img w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "absolute top-3 left-3 px-2.5 py-1 bg-background/80 backdrop-blur-md rounded-sm text-[10px] uppercase tracking-eyebrow text-muted" }, toDisplayString(rel.category), 1)
                  ]),
                  createVNode("div", { class: "mt-3 flex items-baseline justify-between border-b border-line pb-2" }, [
                    createVNode("h3", { class: "font-display text-lg uppercase tracking-tight text-foreground group-hover:text-accent transition-colors" }, toDisplayString(rel.name), 1),
                    createVNode("span", { class: "font-sans text-xs font-medium text-foreground tabular-nums" }, toDisplayString(rel.price), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
      if (isLightboxOpen.value) {
        _push(`<div class="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 select-none animate-fadeIn"><div class="flex items-center justify-between border-b border-line pb-4"><div class="flex items-center gap-3"><span class="font-display text-xl tracking-wider text-foreground">AVRÉN</span><span class="text-xs uppercase tracking-eyebrow text-muted">${ssrInterpolate(product.value?.name)}</span></div><button type="button" class="text-xs uppercase tracking-eyebrow text-foreground hover:text-accent flex items-center gap-2 p-2"><span>TUTUP</span><span class="text-lg">✕</span></button></div><div class="my-auto max-w-4xl mx-auto flex items-center justify-center p-4"><img${ssrRenderAttr("src", activeImage.value)}${ssrRenderAttr("alt", product.value?.name)} class="max-h-[80vh] w-auto object-contain rounded-sm shadow-2xl border border-line"></div><div class="flex items-center justify-center gap-3 border-t border-line pt-4"><!--[-->`);
        ssrRenderList(galleryImages.value, (img, idx) => {
          _push(`<button type="button" class="${ssrRenderClass([activeImage.value === img ? "border-accent ring-1 ring-accent" : "border-line opacity-50", "w-12 h-16 rounded-xs overflow-hidden border transition-all"])}"><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `Thumbnail ${idx + 1}`)} class="w-full h-full object-cover"></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isConciergeModalOpen.value) {
        _push(`<div class="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn"><div class="bg-surface border border-line-strong rounded-sm p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6"><div class="flex items-start justify-between border-b border-line pb-4"><div><div class="eyebrow-badge mb-1"><span class="eyebrow-dot"></span><span>LAYANAN CONCIERGE PRIBADI</span></div><h3 class="font-display text-2xl uppercase tracking-tight text-foreground"> JANJI TEMU FITTING / KONSULTASI </h3></div><button type="button" class="text-muted hover:text-foreground text-sm p-1"> ✕ </button></div><div class="text-xs text-foreground/75 leading-relaxed"> Pilih preferensi konsultasi untuk <strong>${ssrInterpolate(product.value?.name)}</strong> (Ukuran ${ssrInterpolate(selectedSize.value)}). Tim concierge atelier kami akan menghubungi Anda dalam 24 jam. </div><form class="space-y-4"><div><label class="block text-[10px] uppercase tracking-eyebrow text-muted mb-1.5">NAMA LENGKAP</label><input${ssrRenderAttr("value", conciergeForm.value.name)} type="text" placeholder="NAMA LENGKAP ANDA" class="w-full bg-surface-2 border border-line px-3.5 py-2.5 text-xs text-foreground uppercase tracking-wider focus:outline-none focus:border-accent rounded-sm" required></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label class="block text-[10px] uppercase tracking-eyebrow text-muted mb-1.5">NOMOR WHATSAPP</label><input${ssrRenderAttr("value", conciergeForm.value.phone)} type="tel" placeholder="+62 8..." class="w-full bg-surface-2 border border-line px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-accent rounded-sm" required></div><div><label class="block text-[10px] uppercase tracking-eyebrow text-muted mb-1.5">LOKASI ATELIER / KONSULTASI</label><select class="w-full bg-surface-2 border border-line px-3.5 py-2.5 text-xs text-foreground uppercase tracking-wider focus:outline-none focus:border-accent rounded-sm"><option value="Jakarta Atelier"${ssrIncludeBooleanAttr(Array.isArray(conciergeForm.value.location) ? ssrLooseContain(conciergeForm.value.location, "Jakarta Atelier") : ssrLooseEqual(conciergeForm.value.location, "Jakarta Atelier")) ? " selected" : ""}>Atelier Jakarta</option><option value="Milan Atelier"${ssrIncludeBooleanAttr(Array.isArray(conciergeForm.value.location) ? ssrLooseContain(conciergeForm.value.location, "Milan Atelier") : ssrLooseEqual(conciergeForm.value.location, "Milan Atelier")) ? " selected" : ""}>Atelier Milan</option><option value="Virtual Concierge"${ssrIncludeBooleanAttr(Array.isArray(conciergeForm.value.location) ? ssrLooseContain(conciergeForm.value.location, "Virtual Concierge") : ssrLooseEqual(conciergeForm.value.location, "Virtual Concierge")) ? " selected" : ""}>Konsultasi Virtual (Video)</option></select></div></div><button type="submit" class="w-full py-4 bg-accent text-white font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent-2 transition-all duration-300 shadow-xl">${ssrInterpolate(appointmentSubmitted.value ? "PERMINTAAN DITERIMA • CONCIERGE AKAN MENGHUBUNGI" : "KONFIRMASI JADWAL KONSULTASI")}</button></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Footer, { onNavigate: handleNavigate }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-DMF3wk87.js.map
