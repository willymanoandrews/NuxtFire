// nuxt.config.ts
//
// This file defines the main configuration for the Nuxt 3 application.
// It includes runtime environment variables for Firebase and Stripe, compatibility settings, and modules like Tailwind CSS and SEO.
// Specific route rules are set up for SSR and client-side rendering, particularly for the dashboard.
// Additionally, site metadata for SEO and sitemap configuration are defined for optimal search engine visibility.

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      stripePriceId: process.env.STRIPE_PRICE_ID,
      paymentApiUrl: process.env.NUXT_PUBLIC_PAYMENT_API_URL,
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
