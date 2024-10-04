<!--
  app.vue - Root component for the Nuxt 3 application.

  This file sets up the layout and dynamically renders the current page using Nuxt's page system.
  SEO meta tags are defined globally to improve search engine optimization (SEO) and social media sharing.
  Global styles can be applied across all components and pages.
-->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: 'My Amazing Site', // The main title for your website
  ogTitle: 'My Amazing Site', // Open Graph title, used for social sharing
  description: 'This is my amazing site, let me tell you all about it.', // General description for SEO
  ogDescription: 'This is my amazing site, let me tell you all about it.', // Open Graph description for social platforms
})
</script>

<style>
/* Global styles can be added here */
</style>
