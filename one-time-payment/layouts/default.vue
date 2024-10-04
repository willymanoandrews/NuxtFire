<!--
  default.vue - Layout file for the Nuxt application.
  This layout includes a default navbar and renders the current page inside the main content area.
  It provides basic light/dark mode styling and ensures that the layout adapts to the theme.
  The <NuxtPage> component is used to dynamically render the current page content.
-->

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
