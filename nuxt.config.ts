// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/mightchange': { swr: true },
        '/about': { static: true }
    }
})
