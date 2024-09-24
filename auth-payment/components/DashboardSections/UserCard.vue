<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex items-center justify-center w-full max-w-md h-64 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
        Welcome to the Dashboard,
        <span v-if="user && user.email">{{ user.email }}</span>!
      </h5>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useFirebaseAuth(); // Automatically imported in Nuxt 3
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
