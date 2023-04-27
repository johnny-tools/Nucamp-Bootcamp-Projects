// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2peJLvMlY4HTUcZcp9Ybt_JRGpAdxxlQ",
  authDomain: "nucampfire-383620.firebaseapp.com",
  projectId: "nucampfire-383620",
  storageBucket: "nucampfire-383620.appspot.com",
  messagingSenderId: "870144557974",
  appId: "1:870144557974:web:7727be8a46e60412e153b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);