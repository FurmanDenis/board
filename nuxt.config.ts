import {env} from 'node:process'
import {resolve} from 'node:path'
export default {
  ssr: false,

  head: {
    title: "board",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },


  css: [],

  plugins: [],

  components: true,

  buildModules: [
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/tailwindcss"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  features: {
    autoImports: true,
  },
  runtimeConfig: {
    databasePath: resolve(env.DATABASE_PATH),
  }
};