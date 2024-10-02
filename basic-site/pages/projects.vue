<template>
  <div>
    <section class="pt-24">
      <!-- Use HeaderUnderline component with props -->
      <HeaderUnderline
        title="Welcome to the"
        highlightedText="Projects Section"
        description="This is placeholder text for the projects page. Use this section to showcase the quality and craftsmanship of your completed projects."
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeaderUnderline from '~/components/ProjectSections/HeaderUnderline.vue';

// useSeoMeta for SEO-specific meta tags for the projects page
useSeoMeta({
  title: 'Our Projects - My Amazing Site',
  ogTitle: 'Our Projects - My Amazing Site',
  description: 'Explore our completed projects showcasing the quality and craftsmanship of our services.',
  ogDescription: 'Explore our completed projects showcasing the quality and craftsmanship of our services.',
  ogImage: 'https://example.com/projects-image.png',
  twitterCard: 'summary_large_image',
})

// Use the custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
})
</script>

<style scoped>
/* Add any styles specific to the projects page if needed */
</style>
