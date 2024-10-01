<template>
  <form @submit.prevent="handleSubmit" class="w-full max-w-lg mx-auto dark:bg-gray-800 p-8 rounded-lg shadow-md">
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="email"
        name="email"
        v-model="email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Email address</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <div id="card-element" class="p-2.5 bg-gray-100 dark:bg-gray-700 rounded"></div>
    </div>
    <button
      :disabled="loading"
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {{ loading ? 'Processing...' : 'Pay Now' }}
    </button>
    <div v-if="errorMessage" :class="{'text-red-500': isError, 'text-green-500': !isError}" class="mt-4">{{ errorMessage }}</div>
  </form>
</template>

<script setup>
import axios from 'axios'

const { $stripe } = useNuxtApp()
const router = useRouter()

let cardElement = ref(null)
let email = ref('')
let errorMessage = ref('')
let isError = ref(true)
let loading = ref(false) // Add loading state

const handleSubmit = async () => {
  if (loading.value) return // Prevent multiple submissions
  loading.value = true // Disable the button

  try {
    // Use runtime configuration for the API URL
    const config = useRuntimeConfig()
    const apiUrl = config.public.NUXT_PUBLIC_PAYMENT_API_URL;

    // Create a payment intent on the server
    const response = await axios.post(apiUrl, {
      email: email.value
    })

    const data = response.data
    const clientSecret = data.clientSecret
    if (!clientSecret) {
      throw new Error('Missing clientSecret in response')
    }

    // Confirm the payment on the client
    const { error, paymentIntent } = await $stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement.value,
        billing_details: {
          email: email.value
        }
      }
    })

    if (error) {
      errorMessage.value = 'Payment failed: ' + error.message
      isError.value = true
    } else if (paymentIntent.status === 'succeeded') {
      errorMessage.value = 'Payment succeeded!'
      isError.value = false

      const transactionId = paymentIntent.id
      router.push({ path: '/success', query: { transactionId } }) // Navigate to the success page with transactionId
    }
  } catch (error) {
    errorMessage.value = 'Error: ' + error.message
    isError.value = true
  } finally {
    loading.value = false // Re-enable the button
  }
}

onMounted(() => {
  const elements = $stripe.elements()
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
  })
  cardElement.value.mount('#card-element')
})
</script>


<style scoped>
/* Autofill styles */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 1000px #2d3748 inset !important;
  -webkit-text-fill-color: #ffffff !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
