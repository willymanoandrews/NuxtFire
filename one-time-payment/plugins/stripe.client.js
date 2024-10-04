// stripe.client.js - Plugin to integrate Stripe with the Nuxt 3 app.
//
// This plugin loads the Stripe.js library on the client-side and provides the Stripe instance globally.
// It retrieves the Stripe public key from the runtime configuration and makes it available for use throughout the app.

import { defineNuxtPlugin } from "#app";
import { loadStripe } from "@stripe/stripe-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const stripe = await loadStripe(config.public.VUE_APP_STRIPE_PUBLISHABLE_KEY);
  nuxtApp.provide("stripe", stripe);
});
