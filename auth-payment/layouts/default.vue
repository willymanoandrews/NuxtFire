<!--
  layouts/default.vue

  This layout file provides a default structure for the Nuxt 3 application.
  It includes a navigation bar and renders the current page content dynamically using <NuxtPage>.
  The layout also supports dark mode by applying appropriate background styles and ensures the layout adapts to screen height.
-->

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
