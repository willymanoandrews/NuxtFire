// stripe.client.js
import { defineNuxtPlugin } from "#app";
import { loadStripe } from "@stripe/stripe-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const stripe = await loadStripe(config.public.stripePublishableKey);
  nuxtApp.provide("stripe", stripe);
});
