<template>
  <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Logo and Home Link -->
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <!-- Navbar Links -->
      <div class="hidden w-full" id="navbar-hamburger">
        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <NuxtLink
              to="/"
              class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
              aria-current="page"
            >Home</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >About</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Services</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projects"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue';
import { useFlowbite } from '~/composables/useFlowbite';

// Initialize Flowbite for any dropdown functionality
onMounted(() => {
  useFlowbite(() => {
    initCollapses();
  });
});
</script>

<style scoped>
/* Add any specific styles for the navbar if needed */
</style>
