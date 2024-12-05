// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
});
