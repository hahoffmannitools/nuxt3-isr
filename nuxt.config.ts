// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/isr': { swr: 120 },
        '/static': { static: true }
    }
})
