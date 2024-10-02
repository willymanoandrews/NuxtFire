<template>
  <div id="accordion-collapse" data-accordion="collapse" class="bg-white dark:bg-gray-900">
    <h2 id="accordion-collapse-heading-1">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>Placeholder Question 1</span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5L5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Placeholder answer 1. This is where the content for the first question will go.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Additional information can be added here with a
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">link to more details</a>.
        </p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-2">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        data-accordion-target="#accordion-collapse-body-2"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-2"
      >
        <span>Placeholder Question 2</span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5L5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Placeholder answer 2. This section contains content for the second question.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          You can add links or additional resources like
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">this one</a>.
        </p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        data-accordion-target="#accordion-collapse-body-3"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-3"
      >
        <span>Placeholder Question 3</span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5L5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
      <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Placeholder answer 3. The content here is for the third question.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">You can include a list of resources:</p>
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
