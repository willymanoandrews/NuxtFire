<template>
  <section class="pt-16">
    <!-- Use HeroBgImage component -->
    <HeroBgImage />

    <!-- Use HeaderImages component -->
    <HeaderImages />

    <!-- Use CardPricing components, center them using mx-auto -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      <!-- Basic Plan -->
      <CardPricing
        planName="Basic Plan"
        :price="29"
        :features="[
          { name: 'Placeholder Feature 1', available: true },
          { name: 'Placeholder Feature 2', available: true },
          { name: 'Placeholder Feature 3', available: true },
          { name: 'Unavailable Feature 1', available: false },
          { name: 'Unavailable Feature 2', available: false }
        ]"
        buttonLabel="Choose Basic Plan"
      />

      <!-- Standard Plan -->
      <CardPricing
        planName="Standard Plan"
        :price="59"
        :features="[
          { name: 'Placeholder Feature 1', available: true },
          { name: 'Placeholder Feature 2', available: true },
          { name: 'Placeholder Feature 3', available: true },
          { name: 'Extra Feature 1', available: true },
          { name: 'Unavailable Feature 1', available: false }
        ]"
        buttonLabel="Choose Standard Plan"
      />

      <!-- Premium Plan -->
      <CardPricing
        planName="Premium Plan"
        :price="99"
        :features="[
          { name: 'Premium Feature 1', available: true },
          { name: 'Premium Feature 2', available: true },
          { name: 'Premium Feature 3', available: true },
          { name: 'Premium Support', available: true },
          { name: 'Extra Cloud Storage', available: true }
        ]"
        buttonLabel="Choose Premium Plan"
      />
    </div>

    <!-- Add CtaImage component as the last section -->
    <CtaImage />
  </section>
</template>

<script setup lang="ts">
import HeroBgImage from '~/components/IndexSections/HeroBgImage.vue';
import HeaderImages from '~/components/IndexSections/HeaderImages.vue';
import CardPricing from '~/components/IndexSections/CardPricing.vue';
import CtaImage from '~/components/IndexSections/CtaImage.vue';  // Import CtaImage component

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
