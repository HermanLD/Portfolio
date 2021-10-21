const CustomTheme = require('./utils/tailwind_theme')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        'sp-1.8': '1.8rem',
        'sp-2.4': '2.4rem',
        'sp-3.6': '3.6rem',
        'sp-4.8': '4.8rem',
        'sp-6': '6rem',
        'sp-7.2': '7.2rem',
        'sp-12': '12rem',
      },
    },
    ...CustomTheme,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
