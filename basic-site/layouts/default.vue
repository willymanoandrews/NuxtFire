<template>
  <div>
    <!-- Include NavBar -->
    <NavBar />

    <div class="content-container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
// Import NavBar from the components/Common directory
import NavBar from '~/components/Common/NavBar.vue';
</script>

<style scoped>
/* Add any necessary styles */
</style>
