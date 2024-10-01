<template>
  <div class="pt-16">
    <SignupForm />
  </div>
</template>

<script setup>
import SignupForm from '~/components/SignupSections/SignupForm.vue'

// SEO-specific meta tags for the sign-up page
useSeoMeta({
  title: 'Sign Up - My Amazing Site',
  ogTitle: 'Sign Up - My Amazing Site',
  description: 'Create a new account on my amazing site and join our community.',
  ogDescription: 'Create a new account on my amazing site and join our community.',
})

// Custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
})

</script>

<style scoped>
/* Styles will be added later */
</style>
