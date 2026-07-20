export default defineNuxtConfig({
  compatibilityDate: '2026-01-31',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components' }
  ],
  app: {
    head: {
      title: 'Koeuk Dev - Web Developer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Premium portfolio showcasing web development projects and skills' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/images/profile.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Instrument+Sans:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      web3formsKey: ''
    }
  }
})
