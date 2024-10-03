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

</style>
