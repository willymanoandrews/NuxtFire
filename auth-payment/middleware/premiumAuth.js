// middleware/premiumAuth.js
//
// This middleware checks if the user is authenticated and has a 'premium' role.
// If the user is not authenticated, they are redirected to the login page.
// If the user is authenticated but does not have the 'premium' role, they are redirected to the payment page.
// If an error occurs while checking the user's role, the middleware redirects to an error page.

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = getAuth();
  const db = getFirestore();

  // Function to get the current authenticated user
  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe();
          resolve(user);
        },
        reject,
      );
    });
  };

  const user = await getCurrentUser();

  if (!user) {
    // User is not authenticated, redirect to login
    return navigateTo("/login");
  } else {
    // User is authenticated, check the role
    try {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userRole = userDoc.data().role;
        if (userRole === "premium") {
          // User has 'premium' role, allow access
          return;
        } else {
          // User does not have 'premium' role, redirect to payment
          return navigateTo("/payment");
        }
      } else {
        // User document does not exist, redirect to payment
        return navigateTo("/payment");
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
      // Handle error, perhaps redirect to an error page
      return navigateTo("/error");
    }
  }
});
