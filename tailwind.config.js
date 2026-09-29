/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        background: '#08080a',
        foreground: '#f3f1ea',
        surface: '#111114',
        'surface-2': '#17171b',
        muted: '#807f78',
        line: 'rgba(243, 241, 234, 0.1)',
        'line-strong': 'rgba(243, 241, 234, 0.22)',
        accent: '#ff3b1d',
        'accent-2': '#ff6a3d'
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Onest', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      spacing: {
        'desktop-gutter': '2.5rem',
        'mobile-gutter': '1rem'
      },
      letterSpacing: {
        eyebrow: '0.2em',
        condensed: '-0.02em',
        tightest: '-0.04em'
      }
    }
  },
  plugins: []
}
