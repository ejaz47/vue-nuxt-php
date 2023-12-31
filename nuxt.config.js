import { resolve } from 'path';
const fsExtra = require('fs-extra');

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vue-nuxt-php',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/bulma-vars.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', {
      css: false,
      materialDesignIcons: true,
      materialDesignIconsHRef: "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css"
    }],
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  hooks: {
    generate: {
      done(builder) {
        console.log("node-env ", process.env.NODE_ENV);
        console.log("node-env ", process.env.API_BASE_URL);
        console.log("base-path ", process.env.ROUTER_BASE_PATH)
        console.log('Copying to api folder after build...');
        fsExtra.copySync(resolve(__dirname, './api'), resolve(__dirname, './dist/api'));
        fsExtra.copySync(resolve(__dirname, './composer.json'), resolve(__dirname, './dist/composer.json'));
        fsExtra.copySync(resolve(__dirname, './composer.lock'), resolve(__dirname, './dist/composer.lock'));
        // fsExtra.copySync('./dist', './docs');
      }
    }
  },

  router: {
    base: process.env.ROUTER_BASE_PATH || "/"
  },

  googleFonts: {
    base64: true,
    families: {
      Jost: true, // Add the Jost font
    },
  },

  axios: {
    baseURL: process.env.API_BASE_URL || "/"
  },
}
