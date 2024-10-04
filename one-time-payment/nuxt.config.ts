// nuxt.config.ts - Main configuration file for your Nuxt 3 application.
//
// This file defines runtime configurations, compatibility settings, and modules used throughout the app.
// It also sets up the environment variables, Tailwind CSS integration, and SEO module for better optimization.
// Additionally, the site information such as URL, name, and description are configured here for global use.

export default defineNuxtConfig({
  // Runtime Configuration
  runtimeConfig: {
    public: {
      VUE_APP_STRIPE_PUBLISHABLE_KEY:
        process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY, // Stripe public key
      NUXT_PUBLIC_PAYMENT_API_URL: process.env.NUXT_PUBLIC_PAYMENT_API_URL, // Payment API URL
    },
  },

  // Compatibility Settings
  compatibilityDate: "2024-04-03", // Compatibility date for Nuxt features

  // Development Tools
  devtools: { enabled: true }, // Enable Nuxt devtools for development

  // Nuxt Modules
  modules: [
    "@nuxtjs/tailwindcss", // Tailwind CSS module
    "@nuxtjs/seo", // SEO module for better search optimization
  ],

  // Site Configuration
  site: {
    url: "https://your-app-url.com", // Replace with your actual site URL
    name: "My Awesome Nuxt App", // Site name
    description: "Welcome to my awesome Nuxt app!", // Meta description
    defaultLocale: "en", // Default language locale (optional if not using i18n)
  },
});
