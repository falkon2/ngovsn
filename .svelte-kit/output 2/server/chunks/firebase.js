import { I as getContext } from "./index.js";
import "./client.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { isSupported, getAnalytics } from "firebase/analytics";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const navigating = {
  subscribe(fn) {
    const store = getStores().navigating;
    return store.subscribe(fn);
  }
};
const firebaseConfig = {
  apiKey: "AIzaSyDPWsekBVRrH_ehi-rWpR6mg5ctoeio1u0",
  authDomain: "voiceofstraysandnature.firebaseapp.com",
  projectId: "voiceofstraysandnature",
  storageBucket: "voiceofstraysandnature.firebasestorage.app",
  messagingSenderId: "726443990023",
  appId: "1:726443990023:web:b0632315e4d9ecd9b55ea2",
  measurementId: "G-CTGF41GG3Z"
};
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized with config:", {
  projectId: firebaseConfig.projectId,
  measurementId: firebaseConfig.measurementId
});
let analytics = null;
const initAnalytics = async () => {
  try {
    if (await isSupported()) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized successfully");
    } else {
      console.warn("Firebase Analytics is not supported in this environment");
    }
  } catch (error) {
    console.error("Failed to initialize Firebase Analytics:", error);
  }
};
initAnalytics();
getFirestore(app);
getStorage(app);
export {
  navigating as n
};
