// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKpnjp8YgfHqdnnRg98B_HYjGuYpuF-q0",
  authDomain: "web-novel-324fa.firebaseapp.com",
  projectId: "web-novel-324fa",
  storageBucket: "web-novel-324fa.appspot.com",
  messagingSenderId: "655590259143",
  appId: "1:655590259143:web:6a79620f0311edd4a801e2",
  measurementId: "G-JJ93SNT9RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };