// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "blog-app-cf922.firebaseapp.com",
  projectId: "blog-app-cf922",
  storageBucket: "blog-app-cf922.firebasestorage.app",
  messagingSenderId: "489570535989",
  appId: "1:489570535989:web:145d9b757ae30e0ca57f7c",
  measurementId: "G-YT49HTWLK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);