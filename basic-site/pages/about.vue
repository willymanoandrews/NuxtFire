<template>
  <div>
    <!-- Sections have been removed -->
  </div>
</template>

<script setup lang="ts">
// useSeoMeta for SEO-specific meta tags for the about page
useSeoMeta({
  title: 'About Us - My Amazing Site',
  ogTitle: 'About Us - My Amazing Site',
  description: 'Learn more about our amazing site and our journey.',
  ogDescription: 'Learn more about our amazing site and our journey.',
  ogImage: 'https://example.com/about-image.png',
  twitterCard: 'summary_large_image',
})

// Use the custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
})
</script>

<style scoped>
/* Add any styles specific to the about page if needed */
</style>
