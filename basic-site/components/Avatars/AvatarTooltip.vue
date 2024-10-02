<template>
  <div>
    <!-- Jese Leos Avatar with Tooltip -->
    <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      Jese Leos
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <img data-tooltip-target="tooltip-jese" class="w-10 h-10 rounded" src="https://via.placeholder.com/100" alt="Medium avatar" />
  </div>

  <div>
    <!-- Roberta Casas Avatar with Tooltip -->
    <div id="tooltip-roberta" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      Roberta Casas
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <img data-tooltip-target="tooltip-roberta" class="w-10 h-10 rounded" src="https://via.placeholder.com/100" alt="Medium avatar" />
  </div>

  <div>
    <!-- Bonnie Green Avatar with Tooltip -->
    <div id="tooltip-bonnie" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      Bonnie Green
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded" src="https://via.placeholder.com/100" alt="Medium avatar" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useFlowbite } from '~/composables/useFlowbite';

// Initialize Flowbite accordion
onMounted(() => {
  useFlowbite(() => {
    initTooltips();
  });
});</script>

<style scoped>
/* Add any styles specific to avatars or tooltips if needed */
</style>
