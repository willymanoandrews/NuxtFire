<template>
  <section class="bg-gray-50 dark:bg-gray-900 pt-16">
    <!-- Use Timeline components -->
    <TimelineDefault />
    <TimelineStepper />
    <TimelineVertical />
  </section>
</template>

<script setup lang="ts">
import TimelineDefault from '~/components/Timelines/TimelineDefault.vue';
import TimelineStepper from '~/components/Timelines/TimelineStepper.vue';
import TimelineVertical from '~/components/Timelines/TimelineVertical.vue';

// SEO meta for the home page
useSeoMeta({
  title: 'Home - My Awesome Site',
  ogTitle: 'Home - My Awesome Site',
  description: 'Welcome to the home page of my awesome site!',
  ogDescription: 'Welcome to the home page of my awesome site!',
  ogImage: 'https://example.com/home-image.png',
  twitterCard: 'summary_large_image',
});

// Use the custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
});
</script>

<style scoped>
/* Your specific styles for the section can go here */
</style>
