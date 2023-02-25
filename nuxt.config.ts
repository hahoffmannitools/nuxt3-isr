// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/mightchange': { swr: 30 },
        '/about': { static: true }
    }
})
