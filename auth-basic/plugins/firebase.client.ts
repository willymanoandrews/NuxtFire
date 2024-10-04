// plugins/firebase.client.ts
//
// This plugin initializes Firebase services (Authentication and Firestore) for the Nuxt 3 app.
// It configures Firebase using runtime environment variables and connects to Firebase emulators in development mode.
// Firebase Auth and Firestore instances are then provided globally for use throughout the app.

import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    measurementId: config.firebaseMeasurementId,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  // Connect to Auth and Firestore Emulators if in development mode
  if (process.env.NODE_ENV === "development") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(firestore, "localhost", 8080);
    console.log("Using Firebase Auth and Firestore Emulators");
  }

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
