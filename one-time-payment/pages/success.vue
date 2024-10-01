<template>
  <div class="min-h-screen flex items-center justify-center dark:bg-gray-900">
    <div class="w-full max-w-lg mx-auto dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
      <h1 class="text-2xl font-semibold text-white mb-4">Payment Successful!</h1>
      <p class="text-gray-400 mb-4">Thank you for your purchase. Your transaction has been completed successfully.</p>
      <p class="text-gray-400 mb-4">A receipt has been sent to your email. Please check your inbox.</p>
      <p class="text-gray-400 mb-4">Transaction ID: {{ transactionId }}</p>
      <NuxtLink
        to="/"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from '#app'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()
const transactionId = route.query.transactionId

onMounted(() => {
  if (!transactionId) {
    router.push('/') // Redirect to home if no transactionId
  }
})

// useSeoMeta for SEO-specific meta tags for the success page
useSeoMeta({
  title: 'Payment Successful - My Amazing Site',
  ogTitle: 'Payment Successful - My Amazing Site',
  description: 'Thank you for your purchase. Your transaction has been completed successfully.',
  ogDescription: 'Thank you for your purchase. Your transaction has been completed successfully.',
  ogImage: 'https://example.com/success-image.png',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://your-app-url.com/success'
})

// Use the custom OgExample template for OG Image Component
defineOgImageComponent('OgExample')
</script>

<style scoped>
/* Add any necessary custom styles here */
</style>
