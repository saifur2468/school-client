// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXBzv7LuyYGzKlmEyJsGmdM0BnB2cCkUs",
  authDomain: "school-web-394ef.firebaseapp.com",
  projectId: "school-web-394ef",
  storageBucket: "school-web-394ef.firebasestorage.app",
  messagingSenderId: "932332963744",
  appId: "1:932332963744:web:36a0c7ed92acb5833d86c5",
  measurementId: "G-8GTVQ0V5SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();