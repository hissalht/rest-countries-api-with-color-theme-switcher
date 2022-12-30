// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/color-mode"],

  colorMode: {
    preference: "system",
    fallback: "dark",
  },

  nitro: {
    preset: "netlify-edge",
  },
});
