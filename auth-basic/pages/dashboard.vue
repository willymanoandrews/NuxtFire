<template>
  <section class="min-h-screen flex items-center justify-center">
    <UserCard />
  </section>
</template>

<script setup lang="ts">
import UserCard from '~/components/DashboardSections/UserCard.vue';

// SEO-specific meta tags for the dashboard page
useSeoMeta({
  title: 'Dashboard - My Amazing Site',
  ogTitle: 'Dashboard - My Amazing Site',
  description: 'Access your personalized dashboard on my amazing site.',
  ogDescription: 'Access your personalized dashboard on my amazing site.',
});

// Apply the 'auth' middleware to this page
definePageMeta({
  middleware: 'auth',
});

// Custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
});
</script>

<style scoped>
/* Add any custom styles specific to the dashboard here */
</style>
