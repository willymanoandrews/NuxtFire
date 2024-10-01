// stripe.client.js
import { defineNuxtPlugin } from "#app";
import { loadStripe } from "@stripe/stripe-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const stripe = await loadStripe(config.public.VUE_APP_STRIPE_PUBLISHABLE_KEY);
  nuxtApp.provide("stripe", stripe);
});
