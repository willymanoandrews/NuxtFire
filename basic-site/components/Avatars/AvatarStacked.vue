<template>
  <div>
    <!-- First avatar stack -->
    <div class="flex -space-x-4 rtl:space-x-reverse">
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://via.placeholder.com/100" alt="Avatar 1" />
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://via.placeholder.com/100" alt="Avatar 2" />
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://via.placeholder.com/100" alt="Avatar 3" />
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://via.placeholder.com/100" alt="Avatar 4" />
    </div>

    <!-- Second avatar stack with a "+99" indicator -->
    <div class="flex -space-x-4 rtl:space-x-reverse mt-4">
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://via.placeholder.com/100" alt="Avatar 1" />
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://via.placeholder.com/100" alt="Avatar 2" />
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://via.placeholder.com/100" alt="Avatar 3" />
      <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for this simple component
</script>

<style scoped>
/* Add any styles specific to avatars if needed */
</style>
