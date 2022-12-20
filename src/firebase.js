// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAubtxjDMmCjMUUuBdVQAUX0g6xijo0JnA",
  authDomain: "social2-a76c4.firebaseapp.com",
  projectId: "social2-a76c4",
  storageBucket: "social2-a76c4.appspot.com",
  messagingSenderId: "186816809349",
  appId: "1:186816809349:web:0f6669e614f50d866edcec",
  measurementId: "G-PR8M3XZ4HL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
// const analytics = getAnalytics(app);