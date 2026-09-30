import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 60,
        behavior: 'smooth'
      }
    }
    return { top: 0, left: 0, behavior: 'instant' }
  }
}
