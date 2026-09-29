import { defineComponent, mergeProps, ref, watch, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file://D:/Project/AVR%C3%89N/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'file://D:/Project/AVR%C3%89N/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DYY2yAdV.mjs';
import { _ as _sfc_main$8, f as featuredProducts, p as productCatalog, l as lookbookItems } from './Footer-DGkzhE-q.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/destr/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/hookable/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/Project/AVR%C3%89N/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://D:/Project/AVR%C3%89N/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/ohash/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/klona/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/defu/dist/defu.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/scule/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/Project/AVR%C3%89N/node_modules/pathe/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://D:/Project/AVR%C3%89N/node_modules/devalue/index.js';
import 'file://D:/Project/AVR%C3%89N/node_modules/unhead/dist/utils.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/unctx/dist/index.mjs';
import 'file://D:/Project/AVR%C3%89N/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    ready: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props) {
    const props = __props;
    const heroRef = ref(null);
    watch(() => props.ready, (isReady) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        ref_key: "heroRef",
        ref: heroRef,
        class: "relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 pb-8 md:pb-12 px-5 sm:px-8 md:px-12 overflow-hidden bg-background"
      }, _attrs))}><div class="absolute top-1/4 -right-24 w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" aria-hidden="true"></div><div class="relative z-10 my-auto py-6 md:py-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"><div class="lg:col-span-7 flex flex-col justify-center select-none"><h1 class="flex flex-col font-display leading-[0.88] tracking-tightest"><div class="overflow-hidden py-0.5"><span class="hero-title-line inline-block text-[15vw] sm:text-[13vw] md:text-8xl lg:text-[7rem] xl:text-[8.5rem] text-foreground transition-transform"> AVR<span class="text-accent">\xC9</span>N </span></div><div class="overflow-hidden py-0.5"><span class="hero-title-line-2 inline-block text-[6vw] sm:text-[5vw] md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] text-foreground/80 tracking-tight"> ESENSIAL MODERN </span></div></h1><div class="hero-fade mt-5 md:mt-6 max-w-lg"><p class="text-sm sm:text-base text-foreground/75 font-light leading-relaxed"> Diciptakan untuk era minimalisme mutakhir. Siluet arsitektural yang dirancang dengan serat wol murni dan ketenangan berwibawa. </p><div class="mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"><a href="#featured" class="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-foreground text-background font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-xl"><span>JELAJAHI KOLEKSI</span><svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a><a href="#story" class="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 border border-line text-foreground/80 hover:text-foreground hover:border-line-strong text-xs uppercase tracking-eyebrow font-medium transition-colors rounded-sm"><span>FILOSOFI KAMI</span></a></div></div></div><div class="lg:col-span-5 relative mt-4 lg:mt-0"><div class="hero-image-wrapper relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden bg-surface-2 shadow-2xl border border-line"><img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="Tampilan Kampanye AVR\xC9N 2026" class="hero-image w-full h-full object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-700" loading="eager"><div class="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground"><span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> LOOK 01 / OBSIDIAN FORM </span><span class="text-muted">GUGUR 2026</span></div></div><div class="hidden xl:block absolute -bottom-4 -left-6 bg-surface/95 backdrop-blur-md border border-line p-3.5 rounded-sm shadow-xl max-w-[240px] z-20"><p class="text-[10px] uppercase tracking-widest text-accent font-semibold mb-0.5"> KEMURNIAN MATERIAL </p><p class="text-[11px] text-foreground/70 leading-snug"> 100% Wol Virgin Italia &amp; Gabardine Bonded Jepang. </p></div></div></div><div class="relative z-20 flex items-center justify-between max-w-[1440px] w-full mx-auto pt-3 border-t border-line text-[11px] uppercase tracking-eyebrow text-muted"><div class="flex items-center gap-2"><span class="w-2 h-[1px] bg-accent"></span><span>GULIR UNTUK MENJELAJAHI</span></div><a href="#featured" class="group flex items-center gap-2.5 text-foreground hover:text-accent transition-colors" aria-label="Gulir ke koleksi pilihan"><span class="hidden sm:inline">BABAK 01</span><div class="w-7 h-7 rounded-full border border-line group-hover:border-accent flex items-center justify-center transition-colors"><svg class="w-3 h-3 text-foreground group-hover:text-accent transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></a></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full border-y border-line py-3.5 sm:py-5 bg-surface/50 overflow-hidden select-none" }, _attrs))}><div class="marquee-container flex"><div class="marquee-track flex items-center shrink-0"><!--[-->`);
      ssrRenderList(2, (n) => {
        _push(`<!--[--><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6"> AVR\xC9N </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6"> ESENSIAL MODERN </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6"> DITEGASKAN OLEH DETAIL </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6"> DICIPTAKAN DENGAN INTENSI </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6"> KETENANGAN BERWIBAWA </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6"> WUJUDKAN KEHADIRANMU </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><!--]-->`);
      });
      _push(`<!--]--></div><div class="marquee-track flex items-center shrink-0" aria-hidden="true"><!--[-->`);
      ssrRenderList(2, (n) => {
        _push(`<!--[--><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6"> AVR\xC9N </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6"> ESENSIAL MODERN </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6"> DITEGASKAN OLEH DETAIL </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6"> DICIPTAKAN DENGAN INTENSI </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground px-4 sm:px-6"> KETENANGAN BERWIBAWA </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><span class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-condensed text-foreground/75 px-4 sm:px-6"> WUJUDKAN KEHADIRANMU </span><span class="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0 mx-1.5"></span><!--]-->`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Marquee.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FeaturedCollection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "featured",
        class: "relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 max-w-[1440px] mx-auto overflow-hidden"
      }, _attrs))}><div class="reveal-item flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-6 mb-12 gap-5"><div><div class="eyebrow-badge mb-3"><span class="eyebrow-dot"></span><span class="text-xs">01 / KOLEKSI PILIHAN</span></div><h2 class="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest uppercase text-foreground"> EDISI <span class="text-accent">MONOLITH</span></h2></div><div class="max-w-md"><p class="text-xs sm:text-sm text-foreground/70 font-light leading-relaxed"> Sebuah eksplorasi penjahitan tegas, proporsi tanpa kompromi, dan kedalaman tekstil. Didedikasikan bagi mereka yang melangkah di garis depan. </p></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">`);
      if (unref(featuredProducts)[0]) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${unref(featuredProducts)[0].id}`,
          class: "reveal-item lg:col-span-7 group flex flex-col cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="liquid-img-wrapper relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[580px]"${_scopeId}><img${ssrRenderAttr("src", unref(featuredProducts)[0].image)}${ssrRenderAttr("alt", unref(featuredProducts)[0].name)} class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700" loading="lazy"${_scopeId}><div class="absolute top-4 left-4 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-accent font-semibold"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[0].tag)}</div><div class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"${_scopeId}><span class="text-xs uppercase tracking-eyebrow text-foreground font-medium flex items-center gap-2"${_scopeId}><span${_scopeId}>LIHAT DETAIL &amp; SPESIFIKASI</span><span class="text-accent"${_scopeId}>\u2192</span></span></div></div><div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line pb-3 gap-2"${_scopeId}><div${_scopeId}><span class="text-[11px] uppercase tracking-eyebrow text-muted block mb-0.5"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[0].category)} \u2014 ${ssrInterpolate(unref(featuredProducts)[0].collection)}</span><h3 class="font-display text-xl sm:text-2xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[0].name)}</h3></div><span class="font-sans text-base font-medium text-foreground tabular-nums"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[0].price)}</span></div><p class="mt-2 text-xs sm:text-sm text-foreground/60 font-light max-w-lg"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[0].description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "liquid-img-wrapper relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[580px]" }, [
                  createVNode("img", {
                    src: unref(featuredProducts)[0].image,
                    alt: unref(featuredProducts)[0].name,
                    class: "liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "absolute top-4 left-4 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-accent font-semibold" }, toDisplayString(unref(featuredProducts)[0].tag), 1),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6" }, [
                    createVNode("span", { class: "text-xs uppercase tracking-eyebrow text-foreground font-medium flex items-center gap-2" }, [
                      createVNode("span", null, "LIHAT DETAIL & SPESIFIKASI"),
                      createVNode("span", { class: "text-accent" }, "\u2192")
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line pb-3 gap-2" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-[11px] uppercase tracking-eyebrow text-muted block mb-0.5" }, toDisplayString(unref(featuredProducts)[0].category) + " \u2014 " + toDisplayString(unref(featuredProducts)[0].collection), 1),
                    createVNode("h3", { class: "font-display text-xl sm:text-2xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300" }, toDisplayString(unref(featuredProducts)[0].name), 1)
                  ]),
                  createVNode("span", { class: "font-sans text-base font-medium text-foreground tabular-nums" }, toDisplayString(unref(featuredProducts)[0].price), 1)
                ]),
                createVNode("p", { class: "mt-2 text-xs sm:text-sm text-foreground/60 font-light max-w-lg" }, toDisplayString(unref(featuredProducts)[0].description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="lg:col-span-5 flex flex-col space-y-10 lg:pt-8">`);
      if (unref(featuredProducts)[1]) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${unref(featuredProducts)[1].id}`,
          class: "reveal-item group flex flex-col cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[380px]"${_scopeId}><img${ssrRenderAttr("src", unref(featuredProducts)[1].image)}${ssrRenderAttr("alt", unref(featuredProducts)[1].name)} class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700" loading="lazy"${_scopeId}><div class="absolute top-4 left-4 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground/80 font-semibold"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[1].tag)}</div></div><div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line pb-3 gap-2"${_scopeId}><div${_scopeId}><span class="text-[11px] uppercase tracking-eyebrow text-muted block mb-0.5"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[1].category)} \u2014 ${ssrInterpolate(unref(featuredProducts)[1].collection)}</span><h3 class="font-display text-lg sm:text-xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[1].name)}</h3></div><span class="font-sans text-sm font-medium text-foreground tabular-nums"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[1].price)}</span></div><p class="mt-2 text-xs sm:text-sm text-foreground/60 font-light"${_scopeId}>${ssrInterpolate(unref(featuredProducts)[1].description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[380px]" }, [
                  createVNode("img", {
                    src: unref(featuredProducts)[1].image,
                    alt: unref(featuredProducts)[1].name,
                    class: "liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "absolute top-4 left-4 px-2.5 py-1 bg-background/85 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground/80 font-semibold" }, toDisplayString(unref(featuredProducts)[1].tag), 1)
                ]),
                createVNode("div", { class: "mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line pb-3 gap-2" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-[11px] uppercase tracking-eyebrow text-muted block mb-0.5" }, toDisplayString(unref(featuredProducts)[1].category) + " \u2014 " + toDisplayString(unref(featuredProducts)[1].collection), 1),
                    createVNode("h3", { class: "font-display text-lg sm:text-xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300" }, toDisplayString(unref(featuredProducts)[1].name), 1)
                  ]),
                  createVNode("span", { class: "font-sans text-sm font-medium text-foreground tabular-nums" }, toDisplayString(unref(featuredProducts)[1].price), 1)
                ]),
                createVNode("p", { class: "mt-2 text-xs sm:text-sm text-foreground/60 font-light" }, toDisplayString(unref(featuredProducts)[1].description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="reveal-item p-6 bg-surface border border-line rounded-sm relative overflow-hidden"><div class="eyebrow-badge mb-3"><span class="eyebrow-dot"></span><span class="text-xs">MANIFESTO DESAIN</span></div><p class="font-display text-lg sm:text-xl uppercase tracking-tight text-foreground/90 leading-snug"> &quot;BUSANA HARUS MENJADI PERISAI ARSITEKTURAL: DISEDERHANAKAN HINGGA ESENSI, PENUH KEKUATAN.&quot; </p><div class="mt-5 pt-3.5 border-t border-line flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-muted"><span>ATELIER AVR\xC9N</span><span class="text-accent">MILAN / JAKARTA</span></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturedCollection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BrandStory",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "story",
        class: "relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 bg-surface/40 border-y border-line overflow-hidden"
      }, _attrs))}><div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"><div class="reveal-item lg:col-span-6 flex flex-col justify-between"><div><div class="eyebrow-badge mb-4"><span class="eyebrow-dot"></span><span class="text-xs">02 / FILOSOFI KAMI</span></div><h2 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[0.96] tracking-tightest uppercase text-foreground"> KAMI MEMBENTUK BUSANA BAGI MEREKA YANG MENGUASAI RUANG <span class="text-accent">TANPA BANYAK BICARA.</span></h2></div><div class="mt-8 hidden lg:block pt-6 border-t border-line"><div class="flex items-center gap-4 text-xs uppercase tracking-eyebrow text-muted"><span>PROPORSI</span><span class="text-accent">\u2022</span><span>TEKSTUR</span><span class="text-accent">\u2022</span><span>KETENANGAN</span></div></div></div><div class="reveal-item lg:col-span-6 flex flex-col space-y-6 lg:pl-6"><p class="text-base sm:text-lg md:text-xl text-foreground/85 font-light leading-relaxed"> AVR\xC9N dibangun atas satu keyakinan teguh: kemewahan sejati bukan tentang ornamen berlebihan, melainkan pemurnian radikal. Setiap siluet disederhanakan hingga yang tersisa hanyalah integritas struktural murni. </p><p class="text-xs sm:text-sm text-foreground/65 font-light leading-relaxed"> Kami menolak tren musiman demi melahirkan karya monolitik abadi. Memadukan wol dua lapis berbobot, gabardine bonded, dan sutra bertekstur, setiap potongan dirancang untuk mempertahankan struktur tanpa membatasi kebebasan gerak. </p><div class="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-line"><div class="flex flex-col"><span class="font-display text-xl text-accent mb-1.5">01</span><h3 class="font-display text-base uppercase tracking-tight text-foreground mb-1"> ARSITEKTURAL </h3><p class="text-[11px] text-muted leading-normal"> Garis tegas dan bahu berstruktur yang membingkai tubuh dengan tujuan jelas. </p></div><div class="flex flex-col"><span class="font-display text-xl text-accent mb-1.5">02</span><h3 class="font-display text-base uppercase tracking-tight text-foreground mb-1"> KEMURNIAN TEKSTIL </h3><p class="text-[11px] text-muted leading-normal"> Material alami tanpa kompromi yang diproduksi langsung dari pabrik wol bersejarah Eropa. </p></div><div class="flex flex-col"><span class="font-display text-xl text-accent mb-1.5">03</span><h3 class="font-display text-base uppercase tracking-tight text-foreground mb-1"> KEMEWAHAN HALUS </h3><p class="text-[11px] text-muted leading-normal"> Tanpa logo mencolok. Keberadaan dan martabat busana terpancar murni dari keahlian pengerjaan. </p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandStory.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProductGrid",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "catalog",
        class: "relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 max-w-[1440px] mx-auto overflow-hidden"
      }, _attrs))}><div class="reveal-item flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-6 mb-12 gap-5"><div><div class="eyebrow-badge mb-3"><span class="eyebrow-dot"></span><span class="text-xs">03 / KOLEKSI PERMANEN</span></div><h2 class="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest uppercase text-foreground"> KATALOG <span class="text-accent">2026</span></h2></div><div class="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-muted"><span>6 BUSANA ARSITEKTURAL</span><span>\u2022</span><span>PRODUKSI TERBATAS</span></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-12 lg:gap-y-20"><!--[-->`);
      ssrRenderList(unref(productCatalog), (product, idx) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: product.id,
          to: `/products/${product.id}`,
          class: ["reveal-item group flex flex-col cursor-pointer", [
            idx % 2 === 1 ? "md:mt-10 lg:mt-16" : ""
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[520px]"${_scopeId}><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} class="liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy"${_scopeId}>`);
              if (product.tag) {
                _push2(`<div class="absolute top-3.5 left-3.5 px-2.5 py-1 bg-background/80 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground/80 font-semibold"${_scopeId}>${ssrInterpolate(product.tag)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="absolute bottom-0 inset-x-0 p-3 bg-background/90 backdrop-blur-md border-t border-line translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between"${_scopeId}><span class="text-[10px] uppercase tracking-eyebrow text-accent font-medium"${_scopeId}> TELUSURI DETAIL &amp; SPESIFIKASI </span><span class="text-xs text-foreground"${_scopeId}>\u2192</span></div></div><div class="mt-4 flex flex-col gap-1.5"${_scopeId}><div class="flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-muted"${_scopeId}><span${_scopeId}>${ssrInterpolate(product.category)}</span><span class="text-foreground/50"${_scopeId}>${ssrInterpolate(product.collection)}</span></div><div class="flex items-baseline justify-between border-b border-line pb-2.5"${_scopeId}><h3 class="font-display text-xl sm:text-2xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300"${_scopeId}>${ssrInterpolate(product.name)}</h3><span class="font-sans text-sm sm:text-base font-medium text-foreground tabular-nums ml-3 shrink-0"${_scopeId}>${ssrInterpolate(product.price)}</span></div><p class="text-xs text-foreground/60 font-light line-clamp-2"${_scopeId}>${ssrInterpolate(product.description)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "liquid-img-wrapper relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-2 border border-line max-h-[520px]" }, [
                  createVNode("img", {
                    src: product.image,
                    alt: product.name,
                    class: "liquid-img w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  product.tag ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute top-3.5 left-3.5 px-2.5 py-1 bg-background/80 backdrop-blur-md border border-line rounded-sm text-[10px] uppercase tracking-eyebrow text-foreground/80 font-semibold"
                  }, toDisplayString(product.tag), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "absolute bottom-0 inset-x-0 p-3 bg-background/90 backdrop-blur-md border-t border-line translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between" }, [
                    createVNode("span", { class: "text-[10px] uppercase tracking-eyebrow text-accent font-medium" }, " TELUSURI DETAIL & SPESIFIKASI "),
                    createVNode("span", { class: "text-xs text-foreground" }, "\u2192")
                  ])
                ]),
                createVNode("div", { class: "mt-4 flex flex-col gap-1.5" }, [
                  createVNode("div", { class: "flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-muted" }, [
                    createVNode("span", null, toDisplayString(product.category), 1),
                    createVNode("span", { class: "text-foreground/50" }, toDisplayString(product.collection), 1)
                  ]),
                  createVNode("div", { class: "flex items-baseline justify-between border-b border-line pb-2.5" }, [
                    createVNode("h3", { class: "font-display text-xl sm:text-2xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300" }, toDisplayString(product.name), 1),
                    createVNode("span", { class: "font-sans text-sm sm:text-base font-medium text-foreground tabular-nums ml-3 shrink-0" }, toDisplayString(product.price), 1)
                  ]),
                  createVNode("p", { class: "text-xs text-foreground/60 font-light line-clamp-2" }, toDisplayString(product.description), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductGrid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Lookbook",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "lookbook",
        class: "relative py-16 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 bg-surface/30 border-y border-line overflow-hidden"
      }, _attrs))}><div class="max-w-[1440px] mx-auto"><div class="reveal-item flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-6 mb-12 gap-5"><div><div class="eyebrow-badge mb-3"><span class="eyebrow-dot"></span><span class="text-xs">04 / KAMPANYE VISUAL</span></div><h2 class="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest uppercase text-foreground"> LOOKBOOK <span class="text-accent">2026</span></h2></div><div class="max-w-md"><p class="text-xs sm:text-sm text-foreground/70 font-light leading-relaxed"> Bayangan obsidian dan kontur arsitektural tegas yang diabadikan dalam kampanye musim dingin Eropa. </p></div></div><div class="grid grid-cols-12 gap-5 lg:gap-8 items-stretch"><!--[-->`);
      ssrRenderList(unref(lookbookItems), (item) => {
        _push(`<div class="${ssrRenderClass([item.span, "reveal-item group flex flex-col"])}"><div class="${ssrRenderClass([item.aspect, "liquid-img-wrapper relative w-full rounded-sm overflow-hidden bg-surface-2 border border-line"])}"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="liquid-img w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy"><div class="absolute inset-0 p-5 md:p-6 flex flex-col justify-between bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"><div class="flex items-center justify-between"><span class="text-[10px] uppercase tracking-widest text-accent font-semibold px-2 py-0.5 bg-background/80 backdrop-blur-md rounded-sm border border-line">${ssrInterpolate(item.subtitle)}</span></div><div><h3 class="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-foreground">${ssrInterpolate(item.title)}</h3></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Lookbook.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BrandCTA",
  __ssrInlineRender: true,
  emits: ["navigate"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "cta",
        class: "relative py-20 md:py-28 lg:py-32 px-5 sm:px-8 md:px-12 bg-background overflow-hidden border-b border-line"
      }, _attrs))}><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[25vw] rounded-full bg-accent/8 blur-[140px] pointer-events-none" aria-hidden="true"></div><div class="max-w-[1440px] mx-auto text-center relative z-10 flex flex-col items-center"><div class="reveal-item eyebrow-badge mb-6"><span class="eyebrow-dot"></span><span class="text-xs">EDISI 01 / TERSEDIA DI SELURUH DUNIA</span></div><h2 class="reveal-item font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.88] tracking-tightest uppercase text-foreground select-none"> WUJUDKAN<br><span class="text-accent">KEHADIRAN</span><br> DIRIMU. </h2><p class="reveal-item mt-6 max-w-md text-sm sm:text-base text-foreground/70 font-light leading-relaxed"> Sempurnakan ritual harian Anda. Koleksi Musim Gugur-Dingin 2026 kini tersedia dalam jumlah produksi bernomor yang sangat terbatas. </p><div class="reveal-item mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"><a href="#featured" class="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-sans text-xs uppercase tracking-eyebrow font-semibold rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl"> JELAJAHI KOLEKSI </a><a href="#footer" class="w-full sm:w-auto px-7 py-4 border border-line hover:border-line-strong text-foreground text-xs uppercase tracking-eyebrow font-medium transition-colors rounded-sm"> HUBUNGI LAYANAN PRIBADI </a></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandCTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    isReady: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = _sfc_main$7;
      const _component_Marquee = _sfc_main$6;
      const _component_FeaturedCollection = _sfc_main$5;
      const _component_BrandStory = _sfc_main$4;
      const _component_ProductGrid = _sfc_main$3;
      const _component_Lookbook = _sfc_main$2;
      const _component_BrandCTA = _sfc_main$1;
      const _component_Footer = _sfc_main$8;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Hero, {
        ready: __props.isReady,
        onNavigate: ($event) => _ctx.$emit("navigate", $event)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Marquee, null, null, _parent));
      _push(ssrRenderComponent(_component_FeaturedCollection, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandStory, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductGrid, null, null, _parent));
      _push(ssrRenderComponent(_component_Lookbook, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandCTA, {
        onNavigate: ($event) => _ctx.$emit("navigate", $event)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Footer, {
        onNavigate: ($event) => _ctx.$emit("navigate", $event)
      }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CXyq1V0M.mjs.map
