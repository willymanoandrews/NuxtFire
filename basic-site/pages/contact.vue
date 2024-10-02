<template>

</template>

<script setup lang="ts">
// useSeoMeta for SEO-specific meta tags for the contact page
useSeoMeta({
  title: 'Contact Us - My Amazing Site',
  ogTitle: 'Contact Us - My Amazing Site',
  description: 'Get in touch with us for any inquiries or support.',
  ogDescription: 'Get in touch with us for any inquiries or support.',
  ogImage: 'https://example.com/contact-image.png',
  twitterCard: 'summary_large_image',
})

// Use the custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
})
</script>

<style scoped>
/* Add any styles specific to the contact page if needed */
</style>
