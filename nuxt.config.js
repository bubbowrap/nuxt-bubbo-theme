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
      // { property: 'og:url', content: 'https://jeremysamuel.dev' },
      { property: 'og:title', content: 'Jeremy Samuel | Front-end Designer' },
      {
        property: 'og:description',
        content:
          'Jeremy Samuel is a designer and front-end developer from Orlando, FL who loves building awesome things for the web and mobile devices.',
      },
      { name: 'theme-color', content: '#1b1b1b' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Jeremy Samuel is a designer and front-end developer from Orlando, FL who loves building awesome things for the web and mobile devices.',
      },
      {
        name: 'keywords',
        content:
          'Jeremy Samuel, Jeremy, Samuel, bubbowrap, designer, web designer, web developer, front-end designer, front-end developer, front-end engineer, javascript',
      },
    ],

    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'canonical', href: 'https://jeremysamuel.dev' },
    ],

    script: [
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
  plugins: [{ src: '~/plugins/flickity', ssr: false }],

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
