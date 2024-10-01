<template>
  <div class="pt-16">
    <FormPayment />
  </div>
</template>

<script setup lang="ts">
// Import the renamed component
import FormPayment from '~/components/PaymentSections/FormPayment.vue';

// useSeoMeta for SEO-specific meta tags
useSeoMeta({
  title: 'Payment',
  ogTitle: 'Payment',
  description: 'Complete your payment securely.',
  ogDescription: 'Complete your payment securely.',
  ogImage: 'https://example.com/payment-image.png',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://your-app-url.com/payment'
})

// Use the custom OgExample template for OG Image Component
defineOgImageComponent('OgExample')
</script>

<style scoped>
/* Add any necessary custom styles here */
</style>
