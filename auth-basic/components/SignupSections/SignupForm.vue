<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleRegistration">

            <!-- Display the general error message at the top -->
            <div v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </div>

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

            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
              </div>
            </div>

            <button :disabled="loading" type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {{ loading ? 'Processing...' : 'Create Account' }}
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

const { registerUser, errorMessage } = useFirebaseAuth(); // Auto-imported composable with error handling
const router = useRouter();

const creds = reactive({
  email: "",
  password: "",
  confirmPassword: ""
});

let emailError = ref("");
let passwordError = ref("");
let confirmPasswordError = ref("");
let loading = ref(false);

const handleRegistration = async () => {
  // Perform validation
  emailError.value = validateEmail(creds.email);
  passwordError.value = validatePassword(creds.password);
  confirmPasswordError.value = validateConfirmPassword(creds.password, creds.confirmPassword);

  // Stop if there are validation errors
  if (emailError.value || passwordError.value || confirmPasswordError.value) {
    return;
  }

  if (loading.value) return; // Prevent multiple submissions
  loading.value = true; // Disable the button

  try {
    // Step 1: Register the user using the composable
    const success = await registerUser(creds.email, creds.password);
    if (success) {
      router.push('/dashboard'); // Navigate to dashboard on successful registration
    }
  } finally {
    loading.value = false; // Re-enable the button
  }
};
</script>
