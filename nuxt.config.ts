import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

// Nuxt configuration
export default defineNuxtConfig({
  // Define the source directory
  srcDir: resolve(__dirname, 'src'),

  // Define the build directory
  buildDir: resolve(__dirname, '.nuxt'),

  // Global page headers
  head: {
    title: 'My Nuxt App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: ["@nuxtjs/tailwindcss"],


  // Axios module configuration
  axios: {
    baseURL: '/', // Used as fallback if no runtime config is provided
  },

  // Build configuration
  build: {
    // Extend webpack configuration
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'source-map';
      }
    }
  }
});
