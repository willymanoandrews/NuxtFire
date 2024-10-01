<template>
  <div class="pt-16">
    <HeroSection />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '~/components/IndexSections/HeroSection.vue'

// SEO-specific meta tags for the home page
useSeoMeta({
  title: 'Home - My Amazing Site',
  ogTitle: 'Home - My Amazing Site',
  description: 'Welcome to the home page of my amazing site!',
  ogDescription: 'Welcome to the home page of my amazing site!',
})

// Custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
})

</script>

<style scoped>
/* Add your styles here if needed */
</style>
