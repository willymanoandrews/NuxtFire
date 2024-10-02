// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  site: {
    url: "https://example.com", // Replace with your production URL
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "en", // Omit if using @nuxtjs/i18n
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    // other modules
  ],
  // Removed colorMode configuration
});
