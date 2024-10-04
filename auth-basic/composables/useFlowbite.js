// composables/useFlowbite.js
//
// This composable is used to dynamically load and initialize Flowbite on the client-side.
// It ensures that Flowbite components are only imported when the app is running in a browser (client-side).
// The provided `callback` function is executed once Flowbite has been successfully loaded.

export function useFlowbite(callback) {
  if (process.client) {
    import("flowbite").then((flowbite) => {
      callback(flowbite);
    });
  }
}
