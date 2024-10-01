export default defineNuxtConfig({
  // Runtime configuration for Firebase
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },

  // Compatibility date for Nuxt features
  compatibilityDate: "2024-04-03",

  // Enable devtools for development
  devtools: { enabled: true },

  // Nuxt modules
  modules: [
    "@nuxtjs/tailwindcss", // Tailwind CSS module
    "@nuxtjs/seo", // SEO module
  ],

  // Route rules
  routeRules: {
    "/": { prerender: true }, // Homepage pre-rendered at build time
    "/login": {}, // Login page - uses default SSR mode
    "/signup": {}, // Signup page - uses default SSR mode
    "/dashboard/**": { ssr: false }, // Dashboard rendered only on client-side
  },

  // Site configuration for SEO modules
  site: {
    url: "https://example.com",
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "en", // Not needed if @nuxtjs/i18n is installed
  },

  // Sitemap configuration
  sitemap: {
    sources: [
      // Custom endpoint that generates dynamic URLs
      "/api/__sitemap__/urls",
    ],
  },
});
