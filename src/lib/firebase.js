import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBR3BS7CtBsO9cncwP7KsWV3UrW-dbF6A4",
  authDomain: "nextjs-ecommerce-app-22bd2.firebaseapp.com",
  projectId: "nextjs-ecommerce-app-22bd2",
  storageBucket: "nextjs-ecommerce-app-22bd2.firebasestorage.app",
  messagingSenderId: "128353070604",
  appId: "1:128353070604:web:cbaa2757192a353c98c829",
  measurementId: "G-Z23KTXCRD1"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
const auth = getAuth(app);

// Initialize Analytics conditionally
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, analytics };
