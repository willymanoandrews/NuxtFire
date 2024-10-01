<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <NavbarDefault />
    <div class="main-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import NavbarDefault from '~/components/Common/NavBarDefault.vue';
</script>

<style>
/* Add any global styles here */
</style>
