<template>
  <div class="flex items-center justify-center min-h-screen">
    <UserCard />
  </div>
</template>

<script setup lang="ts">
import UserCard from '~/components/DashboardSections/UserCard.vue';

// Apply the 'premium-auth' middleware (note the hyphen)
definePageMeta({
  middleware: 'premium-auth',
});

// SEO-specific meta tags for the dashboard page
useSeoMeta({
  title: 'Dashboard - My Amazing Site',
  ogTitle: 'Dashboard - My Amazing Site',
  description: 'Access your personalized dashboard on my amazing site.',
  ogDescription: 'Access your personalized dashboard on my amazing site.',
});

// Custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
});
</script>

<style scoped>
/* Add any custom styles specific to the dashboard here */
</style>
