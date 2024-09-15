// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c7b2d.firebaseapp.com",
  projectId: "mern-estate-c7b2d",
  storageBucket: "mern-estate-c7b2d.appspot.com",
  messagingSenderId: "772212400743",
  appId: "1:772212400743:web:bde30e4dcf191f43222ac2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);