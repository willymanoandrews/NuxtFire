// composables/useFirebaseAuth.ts
//
// This composable provides Firebase authentication functionality for your Nuxt 3 app.
// It includes methods to register, login, reset password, and log out users using Firebase Authentication.
// The composable integrates Firestore to store user data upon registration, including the user's role.
// It also manages authentication state and error handling with predefined error messages for common authentication issues.

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

  const errorMessages: { [key: string]: string } = {
    "auth/user-not-found": "No user found with this email address.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-email": "The email address is invalid.",
    "auth/email-already-in-use": "This email address is already in use.",
    "auth/weak-password": "The password is too weak.",
    "auth/network-request-failed":
      "Network error. Please check your connection and try again.",
  };

  onMounted(() => {
    if ($auth) {
      setPersistence($auth, browserLocalPersistence)
        .then(() => {
          onAuthStateChanged($auth, (firebaseUser) => {
            if (firebaseUser) {
              user.value = firebaseUser;
            } else {
              user.value = null;
            }
          });
        })
        .catch((error) => {
          console.error("Error setting persistence:", error.message);
          errorMessage.value = errorMessages[error.code] || error.message;
        });
    }
  });

  const handleAuthError = (error: any) => {
    const code = error.code;
    errorMessage.value = errorMessages[code] || "An unknown error occurred.";
  };

  const registerUser = async (
    email: string,
    password: string,
    role: string = "basic",
  ): Promise<boolean> => {
    errorMessage.value = null;
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password,
      );
      user.value = userCreds.user;

      // Add the user to the Firestore 'users' collection with a role
      await setDoc(doc($firestore, "users", userCreds.user.uid), {
        email: email,
        createdAt: new Date(),
        role: role,
      });

      return true;
    } catch (error) {
      handleAuthError(error);
      return false;
    }
  };

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
