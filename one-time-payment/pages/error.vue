<!-- pages/error.vue -->
<template>
  <section class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4 text-red-600 dark:text-red-400">Oops! Something went wrong.</h1>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
        An unexpected error occurred. Please try again later.
      </p>
      <NuxtLink to="/" class="text-blue-500 hover:underline dark:text-blue-300">
        Return to Home
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// You can add additional error handling or logging here if needed
</script>

<style scoped>
/* Custom styles specific to the error page */
</style>
