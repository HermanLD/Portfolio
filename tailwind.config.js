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
    configViewer: {
      baseFontSize: 10, // default is 16
    },
    extend: {
      ...CustomTheme,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
