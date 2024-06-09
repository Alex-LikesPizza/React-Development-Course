import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPtb9NsxsQqHMPGC-zeYpHp1X7Ugd0qVI",
  authDomain: "react-c-b2815.firebaseapp.com",
  projectId: "react-c-b2815",
  storageBucket: "react-c-b2815.appspot.com",
  messagingSenderId: "313559587084",
  appId: "1:313559587084:web:0e028115bf955e3ab35129",
  measurementId: "G-2MBXDKHX5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);