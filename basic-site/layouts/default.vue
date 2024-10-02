<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">
    <!-- Include NavBar -->
    <NavBar />

    <div class="flex-grow">
      <NuxtPage />
    </div>

    <!-- Include Footer -->
    <FooterDefault />
  </div>
</template>

<script setup>
// Import NavBar and FooterDefault from the components/Common directory
import NavBar from '~/components/Common/NavBar.vue';
import FooterDefault from '~/components/Common/FooterDefault.vue';
</script>

<style scoped>
/* Add any necessary styles */
</style>
