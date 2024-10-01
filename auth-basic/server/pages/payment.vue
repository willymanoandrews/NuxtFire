<template>
  <div class="pt-16">
    <PaymentForm />
  </div>
</template>

<script setup lang="ts">
import PaymentForm from '~/components/PaymentSections/PaymentForm.vue';

// Apply the 'non-premium-auth' middleware (note the hyphens)
definePageMeta({
  middleware: 'non-premium-auth',
});
</script>

<style scoped>
/* Add any custom styles specific to the payment page here */
</style>
