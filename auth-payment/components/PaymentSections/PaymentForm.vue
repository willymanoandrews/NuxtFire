<template>
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Complete Your Payment
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handlePayment">
            <div>
              <label for="card-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name on card</label>
              <input
                v-model="cardName"
                type="text"
                id="card-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <div id="card-element" class="p-2.5 bg-gray-100 dark:bg-gray-700 rounded"></div>
            </div>
            <div v-if="errorMessage" :class="{'text-red-500': isError, 'text-green-500': !isError}" class="mt-4">{{ errorMessage }}</div>
            <button
              :disabled="loading"
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ loading ? 'Processing...' : 'Pay Now' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNuxtApp, useRuntimeConfig } from '#imports';
import { useRouter } from 'vue-router'; // Import useRouter
import axios from 'axios';

// Access the injected services
const { $auth, $stripe } = useNuxtApp();

// Get the router instance
const router = useRouter();

// Access runtime configuration
const config = useRuntimeConfig();

const cardName = ref('');
const cardElement = ref(null);
const errorMessage = ref('');
const isError = ref(true);
const loading = ref(false);

const handlePayment = async () => {
  if (loading.value) return; // Prevent multiple submissions
  loading.value = true; // Disable the button

  try {
    // Ensure the user is authenticated before accessing currentUser
    const currentUser = $auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    // Step 1: Create a payment method
    const { paymentMethod, error: stripeError } = await $stripe.createPaymentMethod({
      type: 'card',
      card: cardElement.value,
      billing_details: {
        name: cardName.value,
        email: currentUser.email, // Include email in the billing details
      },
    });

    if (stripeError) {
      errorMessage.value = 'Error creating payment method: ' + stripeError.message;
      isError.value = true;
      return;
    }

    // Step 2: Send payment method, price, email, and uid to the server
    const apiUrl = config.public.paymentApiUrl;
    const response = await axios.post(apiUrl, {
      uid: currentUser.uid,          // Add the user's UID
      email: currentUser.email,      // Add the user's email
      payment_method_id: paymentMethod.id,
      price_id: config.public.stripePriceId, // Use the price ID from runtime config
    });

    const data = response.data;
    const clientSecret = data.paymentIntentClientSecret;
    if (!clientSecret) {
      throw new Error('Missing clientSecret in response');
    }

    // Step 3: Confirm the payment
    const { error, paymentIntent } = await $stripe.confirmCardPayment(clientSecret);

    if (error) {
      errorMessage.value = 'Payment failed: ' + error.message;
      isError.value = true;
    } else if (paymentIntent.status === 'succeeded') {
      errorMessage.value = 'Payment succeeded!';
      isError.value = false;

      // Redirect to the dashboard after successful payment
      router.push('/dashboard');
    }
  } catch (error) {
    console.error('Payment error:', error);
    errorMessage.value = 'Error: ' + error.message;
    isError.value = true;
  } finally {
    loading.value = false; // Re-enable the button
  }
};

onMounted(() => {
  // Ensure $stripe is available
  if (!$stripe) {
    console.error('$stripe is not initialized');
    errorMessage.value = 'Payment service is unavailable. Please try again later.';
    isError.value = true;
    return;
  }

  const elements = $stripe.elements();
  cardElement.value = elements.create('card', {
    style: {
      base: {
        color: '#ffffff',
        '::placeholder': {
          color: '#a0aec0',
        },
      },
      invalid: {
        color: '#e3342f',
      },
    },
  });
  cardElement.value.mount('#card-element');
});
</script>
