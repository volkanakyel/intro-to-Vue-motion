// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', 'motion-v/nuxt'],
  compatibilityDate: '2025-06-18',
})