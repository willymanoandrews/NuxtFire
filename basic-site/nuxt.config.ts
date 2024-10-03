// This is the main configuration file for your Nuxt 3 project.
// It defines settings such as site metadata, modules, and compatibility options.
// The configuration includes modules for Tailwind CSS and SEO setup,
// along with tools for local development and production deployment.

// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  site: {
    url: "https://example.com", // Replace with your production URL
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "en",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo"],
});
