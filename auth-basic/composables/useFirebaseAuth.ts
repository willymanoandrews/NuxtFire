// composables/useFirebaseAuth.ts
//
// This composable provides Firebase authentication functionality for your Nuxt 3 app.
// It includes methods to register, login, reset password, and log out users using Firebase Authentication.
// The composable also integrates Firestore to save user details upon registration.
// It manages authentication state and error handling, with predefined error messages for common auth issues.

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useNuxtApp, useState, onMounted } from "#imports";
import { doc, setDoc } from "firebase/firestore"; // Firestore methods

export default function useFirebaseAuth() {
  const { $auth, $firestore } = useNuxtApp(); // Access Firestore instance

  const user = useState<User | null>("fb_user", () => null);
  const errorMessage = useState<string | null>("auth_error", () => null);

  // Predefined error messages
  const errorMessages: { [key: string]: string } = {
    "auth/user-not-found": "No user found with this email address.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-email": "The email address is invalid.",
    "auth/email-already-in-use": "This email address is already in use.",
    "auth/weak-password": "The password is too weak.",
    "auth/network-request-failed":
      "Network error. Please check your connection and try again.",
  };

  // Handle Firebase auth errors
  const handleAuthError = (error: any) => {
    const code = error.code;
    errorMessage.value = errorMessages[code] || "An unknown error occurred.";
  };

  // Initialize Firebase persistence and listen to auth state
  onMounted(() => {
    if ($auth) {
      setPersistence($auth, browserLocalPersistence)
        .then(() => {
          onAuthStateChanged($auth, (firebaseUser) => {
            user.value = firebaseUser ? firebaseUser : null;
          });
        })
        .catch((error) => {
          handleAuthError(error);
        });
    }
  });

  // Register user and add to Firestore
  const registerUser = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    errorMessage.value = null;
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password,
      );
      user.value = userCreds.user;

      // Add the user to the Firestore 'users' collection
      await setDoc(doc($firestore, "users", userCreds.user.uid), {
        email: email,
        createdAt: new Date(),
      });

      return true;
    } catch (error) {
      handleAuthError(error);
      return false;
    }
  };

  // Log in user
  const loginUser = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    errorMessage.value = null;
    try {
      const userCreds = await signInWithEmailAndPassword(
        $auth,
        email,
        password,
      );
      user.value = userCreds.user;
      return true;
    } catch (error) {
      handleAuthError(error);
      return false;
    }
  };

  // Send password reset email
  const resetPassword = async (email: string): Promise<boolean> => {
    errorMessage.value = null;
    try {
      await sendPasswordResetEmail($auth, email);
      return true;
    } catch (error) {
      handleAuthError(error);
      return false;
    }
  };

  // Log out user
  const logout = async (): Promise<void> => {
    try {
      await signOut($auth);
      user.value = null;
    } catch (error) {
      handleAuthError(error);
    }
  };

  return {
    user,
    errorMessage,
    registerUser,
    loginUser,
    resetPassword,
    logout,
  };
}
