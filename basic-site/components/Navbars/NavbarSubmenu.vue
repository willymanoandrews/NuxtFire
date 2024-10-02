<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </NuxtLink>
      <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="tel:5541251234" class="text-sm text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
        <NuxtLink to="/login" class="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</NuxtLink>
      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <li>
            <NuxtLink to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-gray-900 dark:text-white hover:underline">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" class="text-gray-900 dark:text-white hover:underline">Services</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="text-gray-900 dark:text-white hover:underline">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="text-gray-900 dark:text-white hover:underline">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Add any specific styles for the navbar if necessary */
</style>
