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
