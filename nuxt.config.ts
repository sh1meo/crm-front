// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 8080,
  },

  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})