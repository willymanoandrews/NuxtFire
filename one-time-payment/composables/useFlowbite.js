// This composable is used to dynamically import the Flowbite library
// on the client side in Nuxt 3. It ensures that Flowbite is only loaded
// in the browser, and allows you to execute a callback function once Flowbite is loaded.

// composables/useFlowbite.js

export function useFlowbite(callback) {
  if (process.client) {
    import("flowbite").then((flowbite) => {
      callback(flowbite);
    });
  }
}
