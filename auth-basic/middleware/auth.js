// middleware/auth.js

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    // Skip middleware on server-side
    return;
  }

  const auth = getAuth();

  try {
    // Check if user is already authenticated
    if (auth.currentUser) {
      // User is authenticated, proceed to the page
      return;
    }

    // Wait for the authentication state to be determined
    const user = await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe(); // Unsubscribe after getting the user
          resolve(user); // Resolve the Promise with the user object
        },
        (error) => {
          console.error("Error during auth state change:", error);
          reject(error); // Reject the Promise in case of error
        },
      );
    });

    if (user) {
      // User is authenticated, proceed to the page
      return;
    } else {
      // User is not authenticated, redirect to login page
      return navigateTo("/login");
    }
  } catch (error) {
    console.error("Error during authentication check:", error);
    // Redirect to an error page
    return navigateTo("/error");
  }
});
