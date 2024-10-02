<template>
  <div>
    <section class="pt-24">
      <!-- Use HeaderUnderline component with props -->
      <HeaderUnderline
        title="Welcome to the"
        highlightedText="Services Section"
        description="This is placeholder text for the services page. Use this section to highlight the range of services you offer to help businesses succeed."
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeaderUnderline from '~/components/ServiceSections/HeaderUnderline.vue';

// useSeoMeta for SEO-specific meta tags for the services page
useSeoMeta({
  title: 'Our Services - My Amazing Site',
  ogTitle: 'Our Services - My Amazing Site',
  description: 'Discover the wide range of services we offer to help your business succeed.',
  ogDescription: 'Discover the wide range of services we offer to help your business succeed.',
  ogImage: 'https://example.com/services-image.png',
  twitterCard: 'summary_large_image',
})

// Use the custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
})
</script>

<style scoped>
/* Add any styles specific to the services page if needed */
</style>
