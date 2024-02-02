// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWQ9D-PhbU0yBDQo5a9CWC_5y9wEhtrJU",
  authDomain: "allotrix-3f348.firebaseapp.com",
  projectId: "allotrix-3f348",
  storageBucket: "allotrix-3f348.appspot.com",
  messagingSenderId: "485301413574",
  appId: "1:485301413574:web:5d26c15dec3330fe3bd9c7",
  measurementId: "G-W1GT9HY2YE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };