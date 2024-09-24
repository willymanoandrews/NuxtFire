<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <NavBar />
    <div class="content-container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import NavBar from '~/components/Common/NavBar.vue';
</script>

<style scoped>
/* You can add styles for the layout or the content-container if needed */
.content-container {
  /* Add padding or any specific layout styles if necessary */
  padding: 2rem; /* Example padding */
}
</style>
