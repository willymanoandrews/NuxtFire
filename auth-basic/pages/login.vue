<template>
  <div class="pt-16">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from '~/components/LoginSections/LoginForm.vue';

// SEO-specific meta tags for the login page
useSeoMeta({
  title: 'Login - My Amazing Site',
  ogTitle: 'Login - My Amazing Site',
  description: 'Log in to your account on my amazing site.',
  ogDescription: 'Log in to your account on my amazing site.',
})

// Custom ExampleOg template for OG Image Component with default props
defineOgImageComponent('ExampleOg', {
  // No props provided
})

</script>

<style scoped>
/* Styles specific to the login page, if any, can go here */
</style>
