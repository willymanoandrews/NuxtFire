<!--
  This is the main entry point for the Nuxt app.
  It sets up the layout and renders the current page using Nuxt's dynamic page system.
  SEO meta tags are defined globally for better search engine optimization and social media sharing.
-->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
})
</script>

<style>
/* Global styles can be added here */
</style>
