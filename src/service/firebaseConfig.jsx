// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "first-9afb4.firebaseapp.com",
  databaseURL: "https://first-9afb4-default-rtdb.firebaseio.com",
  projectId: "first-9afb4",
  storageBucket: "first-9afb4.firebasestorage.app",
  messagingSenderId: "1040052986353",
  appId: "1:1040052986353:web:8775f85e15d70f4e962450",
  measurementId: "G-D284QF6X4Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
