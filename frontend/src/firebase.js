// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-6.firebaseapp.com",
  projectId: "mern-realestate-6",
  storageBucket: "mern-realestate-6.firebasestorage.app",
  messagingSenderId: "790325930703",
  appId: "1:790325930703:web:a1ad1938f5bc083b0e65ba",
  measurementId: "G-X7CX5ECSQZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);