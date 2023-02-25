// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/isr': { swr: true, headers: { 'cache-control': 's-maxage=30' } },
        '/static': { static: true }
    }
})
