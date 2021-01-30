const path = require('path')

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Jeremy Samuel | Front-end Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Portfolio site of designer and front-end developer Jeremy Samuel',
      },
    ],

    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: ['stylesheet preload'],
        as: 'style',
        href:
          'https://fonts.googleapis.com/css?family=Palanquin:300,400,700&display=swap',
      },
    ],

    script: [
      {
        src: '/js/jquery-3.5.1.min.js',
        type: 'text/javascript',
        body: true,
        defer: true,
      },
      {
        src: '/js/jquery.scrollTo.js',
        type: 'text/javascript',
        body: true,
        defer: true,
      },
      { src: '/js/aos.js', type: 'text/javascript', body: true, defer: true },
      {
        src: '/js/global.js',
        type: 'text/javascript',
        body: true,
        defer: true,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/site.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vue-flickity', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
      })
    },
  },
}
