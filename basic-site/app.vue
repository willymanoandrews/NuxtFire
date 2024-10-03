<!--
  This is the main entry point for the Nuxt app.
  It sets up the layout and renders the current page using Nuxt's dynamic page system.
  SEO meta tags are defined globally for better search engine optimization and social media sharing.
-->

<template>
  <!-- NuxtLayout provides the layout for the current page -->
  <NuxtLayout>
    <!-- NuxtPage dynamically renders the current page -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Set up SEO meta tags for the entire application
// These tags are used for search engine optimization (SEO) and social media sharing

useSeoMeta({
  title: 'My Amazing Site', // The main title for your website
  ogTitle: 'My Amazing Site', // Open Graph title, used when sharing on social platforms
  description: 'This is my amazing site, let me tell you all about it.', // General description for search engines
  ogDescription: 'This is my amazing site, let me tell you all about it.', // Open Graph description for social platforms
  ogImage: 'https://example.com/image.png', // Image URL used when sharing links to your site
  twitterCard: 'summary_large_image', // Twitter card type for social sharing
})
</script>

<style>
/* Global styles can be added here */
/* These styles will be applied across all components and pages */
</style>
