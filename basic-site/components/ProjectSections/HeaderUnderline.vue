<template>
  <section>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      {{ title }} <span class="underline underline-offset-3 decoration-8" :class="decorationClass">{{ highlightedText }}</span>
    </h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      {{ description }}
    </p>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  highlightedText: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  decorationClass: {
    type: String,
    default: 'decoration-blue-400 dark:decoration-blue-600'
  }
})
</script>

<style scoped>
/* Add your styles here */
</style>
