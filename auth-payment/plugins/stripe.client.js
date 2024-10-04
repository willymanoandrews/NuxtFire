// plugins/stripe.client.js
//
// This plugin integrates Stripe with the Nuxt 3 application.
// It loads the Stripe.js library on the client-side and initializes it using the publishable key from the runtime configuration.
// Once loaded, the Stripe instance is provided globally for use throughout the app.

import { defineNuxtPlugin } from "#app";
import { loadStripe } from "@stripe/stripe-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const stripe = await loadStripe(config.public.stripePublishableKey);
  nuxtApp.provide("stripe", stripe);
});
