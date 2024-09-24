// middleware/nonPremium.js

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    // Skip middleware on server-side
    return;
  }

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
          // User already has 'premium' role, redirect to dashboard
          return navigateTo("/dashboard");
        } else {
          // User does not have 'premium' role, allow access to payment page
          return;
        }
      } else {
        // User document does not exist, allow access to payment page
        return;
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
      // Handle error, perhaps redirect to an error page
      return navigateTo("/error");
    }
  }
});
