// composables/useFlowbite.js
//
// This composable dynamically loads and initializes Flowbite components.
// It ensures Flowbite is only imported on the client-side to avoid issues during server-side rendering (SSR).
// The provided `callback` function is executed after Flowbite has been successfully imported.

export function useFlowbite(callback) {
  if (process.client) {
    import("flowbite").then((flowbite) => {
      callback(flowbite);
    });
  }
}
