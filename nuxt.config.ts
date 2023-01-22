// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'KINGZ AUTO SALES LLC',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet',  href: 'https://unpkg.com/modern-css-reset/dist/reset.min.css' },
                { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Esteban&family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,800;1,900&family=Roboto+Mono:ital,wght@0,400;0,600;0,700;1,700&display=swap" }
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'https://use.fontawesome.com/releases/v6.1.0/js/all.js' }
            ]
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/scss/styles.scss',
        // CSS file in the project
        '@/assets/css/styles.css',

    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
})
