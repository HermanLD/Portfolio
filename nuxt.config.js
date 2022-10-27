export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Herman Dardon | Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'My Portfolio' },
      {
        property: 'og:description',
        content: 'Showcase of my work in web development',
      },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/nimbus8/image/upload/v1636573988/Portfolio/portfolio_g9n5kf.png',
      },
      {
        property: 'og:url',
        content: 'https://portfolio-hdardon91.vercel.app',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css?family=Varela+Round',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i',
        rel: 'stylesheet',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
        defer: true,
      },
      {
        src: 'https://use.fontawesome.com/releases/v5.15.4/js/all.js',
        crossorigin: 'anonymous',
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['./plugins/nav-states.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    MY_EMAIL: process.env.MY_EMAIL,
    SECRET_TOKEN: process.env.SECRET_TOKEN,
    SECRET_SALT: process.env.SECRET_SALT,
  },
}
