<template>
  <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
    <h2 id="accordion-flush-heading-1">
      <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <span>Placeholder Question 1</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5L5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
      <div class="py-5 border-b border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Placeholder answer 1. This section contains the content for the first question.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          You can add additional information or links here, like <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">this one</a>.
        </p>
      </div>
    </div>

    <h2 id="accordion-flush-heading-2">
      <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
        <span>Placeholder Question 2</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5L5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
      <div class="py-5 border-b border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Placeholder answer 2. This section contains the content for the second question.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          More resources can be added here, such as <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">this one</a>.
        </p>
      </div>
    </div>

    <h2 id="accordion-flush-heading-3">
      <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
        <span>Placeholder Question 3</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5L5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
      <div class="py-5 border-b border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Placeholder answer 3. This section contains the content for the third question.
        </p>
        <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
          <li><a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Resource 1</a></li>
          <li><a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Resource 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useFlowbite } from '~/composables/useFlowbite';

// Initialize Flowbite accordion
onMounted(() => {
  useFlowbite(() => {
    initAccordions();
  });
});
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
