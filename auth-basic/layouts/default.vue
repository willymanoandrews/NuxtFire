<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <NavbarColormode />
    <div class="content-container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import NavbarColormode from '~/components/Common/NavbarColormode.vue';
</script>

<style scoped>

</style>
