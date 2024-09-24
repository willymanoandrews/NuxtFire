<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account and complete your payment
          </h1>

          <!-- Display the general error message at the top -->
          <div v-if="errorMessage" class="text-red-500 text-sm">
            {{ errorMessage }}
          </div>

          <form class="space-y-4 md:space-y-6" @submit.prevent="handleRegistrationAndPayment">
            <!-- Registration Fields -->
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input v-model="creds.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
              <div v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</div>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input v-model="creds.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              <div v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</div>
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
              <input v-model="creds.confirmPassword" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              <div v-if="confirmPasswordError" class="text-red-500 text-sm">{{ confirmPasswordError }}</div>
            </div>

            <!-- Payment Fields -->
            <div class="relative z-0 w-full mb-5 group">
              <label for="card-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name on card</label>
              <input
                v-model="cardName"
                type="text"
                name="card-name"
                id="card-name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="John Doe"
                required
              />
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <div id="card-element" class="p-2.5 bg-gray-100 dark:bg-gray-700 rounded"></div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
              </div>
            </div>

            <button :disabled="loading" type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {{ loading ? 'Processing...' : 'Create Account and Pay Now' }}
            </button>
          </form>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <NuxtLink to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'; // Only import axios as needed

const { registerUser, user, errorMessage } = useFirebaseAuth(); // Access errorMessage for Firebase errors
const { $stripe } = useNuxtApp();
const router = useRouter();
const config = useRuntimeConfig();

const creds = reactive({
  email: "",
  password: "",
  confirmPassword: ""
});

let cardName = ref('');
let cardElement = ref(null);
let emailError = ref("");
let passwordError = ref("");
let confirmPasswordError = ref("");
let isError = ref(true);
let loading = ref(false);

const handleRegistrationAndPayment = async () => {
  // Validate form inputs
  emailError.value = validateEmail(creds.email);
  passwordError.value = validatePassword(creds.password);
  confirmPasswordError.value = validateConfirmPassword(creds.password, creds.confirmPassword);

  if (emailError.value || passwordError.value || confirmPasswordError.value) {
    return;
  }

  if (loading.value) return; // Prevent multiple submissions
  loading.value = true;

  try {
    // Step 1: Register the user
    const success = await registerUser(creds.email, creds.password);
    if (!success) return;

    // Step 2: Create a payment method
    const { paymentMethod, error: stripeError } = await $stripe.createPaymentMethod({
      type: 'card',
      card: cardElement.value,
      billing_details: {
        name: cardName.value,
        email: creds.email
      }
    });

    if (stripeError) {
      errorMessage.value = 'Error creating payment method: ' + stripeError.message;
      return;
    }

    // Step 3: Create a subscription on the server
    const apiUrl = `${config.public.apiBaseUrl}/create_subscription`;
    const response = await axios.post(apiUrl, {
      email: creds.email,
      uid: user.value.uid, // Send the user's UID to the server
      payment_method_id: paymentMethod.id,
      price_id: config.public.stripePriceId
    });

    const data = response.data;
    const clientSecret = data.paymentIntentClientSecret;

    if (!clientSecret) {
      throw new Error('Missing clientSecret in response');
    }

    // Step 4: Confirm the payment
    const { error, paymentIntent } = await $stripe.confirmCardPayment(clientSecret);

    if (error) {
      errorMessage.value = 'Payment failed: ' + error.message;
    } else if (paymentIntent.status === 'succeeded') {
      errorMessage.value = 'Payment succeeded!';
      router.push('/dashboard');
    }
  } catch (error) {
    errorMessage.value = 'Error: ' + error.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  const elements = $stripe.elements();
  cardElement.value = elements.create('card', {
    style: {
      base: {
        color: '#ffffff',
        '::placeholder': {
          color: '#a0aec0'
        }
      },
      invalid: {
        color: '#e3342f',
      }
    }
  });
  cardElement.value.mount('#card-element');
});
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 1000px #2d3748 inset !important;
  -webkit-text-fill-color: #ffffff !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
