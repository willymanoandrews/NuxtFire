<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <!-- Display the general error message at the top -->
            <div v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input v-model="creds.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
              <div v-if="emailError" class="text-red-500 text-sm">
                {{ emailError }}
              </div>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input v-model="creds.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              <div v-if="passwordError" class="text-red-500 text-sm">
                {{ passwordError }}
              </div>
            </div>
            <div class="flex items-center justify-between">
              <a @click.prevent="handleForgotPassword" href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
          </form>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <NuxtLink to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { validateEmail, validatePassword } from '~/utils/validationRules';
const { loginUser, resetPassword, errorMessage } = useFirebaseAuth(); // auto-imported

const creds = reactive({
  email: "",
  password: ""
});

const emailError = ref("");
const passwordError = ref("");

onMounted(() => {
  // Clear any previous error messages when the component is mounted
  errorMessage.value = null;
});

async function handleLogin() {
  // Validate inputs
  emailError.value = validateEmail(creds.email);
  passwordError.value = validatePassword(creds.password);

  // If there are validation errors, do not proceed
  if (emailError.value || passwordError.value) {
    return;
  }

  // Attempt to log the user in
  const success = await loginUser(creds.email, creds.password);
  if (success) {
    navigateTo('/dashboard'); // Use navigateTo for routing
  }
}

async function handleForgotPassword() {
  if (!creds.email) {
    alert('Please enter your email to reset your password.');
    return;
  }

  const success = await resetPassword(creds.email);
  if (success) {
    alert('Password reset email sent! Please check your inbox.');
  } else {
    alert('Failed to send password reset email. Please try again.');
  }
}
</script>
