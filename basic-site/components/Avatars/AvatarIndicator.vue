<template>
  <div>
    <!-- First avatar with indicator at the top-left -->
    <div class="relative">
      <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/100" alt="Avatar with top-left indicator" />
      <span class="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>

    <!-- Second avatar with red indicator at the top-left with translate -->
    <div class="relative">
      <img class="w-10 h-10 rounded" src="https://via.placeholder.com/100" alt="Avatar with red indicator" />
      <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>

    <!-- Third avatar with green indicator at the bottom-left -->
    <div class="relative">
      <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/100" alt="Avatar with bottom-left indicator" />
      <span class="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>

    <!-- Fourth avatar with green indicator at the bottom-left with translate -->
    <div class="relative">
      <img class="w-10 h-10 rounded" src="https://via.placeholder.com/100" alt="Avatar with bottom-left translate indicator" />
      <span class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for this simple component
</script>

<style scoped>
/* Add any styles specific to avatars with indicators if needed */
</style>
