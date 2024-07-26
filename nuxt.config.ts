// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { ssr: true },
    '/categories': { prerender: true },
    '/categories/*': { swr: 300 },
    '/posts/*': { swr: 60 }
  }
})
