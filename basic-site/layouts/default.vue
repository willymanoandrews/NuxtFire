<!--
This is the default layout component for the Nuxt 3 application.
It includes the NavBar at the top, the main content in the middle,
and the Footer at the bottom, ensuring a consistent layout across all pages.
-->

<template>
  <!-- Main container for the app, ensuring it takes up the full screen height -->
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">

    <!-- Include NavBar component for site navigation -->
    <NavBar />

    <!-- Main content area that grows to fill available space -->
    <div class="flex-grow">
      <NuxtPage />
    </div>

    <!-- Include Footer component for the footer section -->
    <FooterDefault />
  </div>
</template>

<script setup>
// Import NavBar and FooterDefault components from the components/Common directory
import NavBar from '~/components/Common/NavBar.vue';
import FooterDefault from '~/components/Common/FooterDefault.vue';
</script>

<style scoped>
/* Add any necessary styles for the layout here */
</style>
