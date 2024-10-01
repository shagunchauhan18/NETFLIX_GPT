// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrUJQIV0wiJb6DrxgZPungh5IZrKbeE3Q",
  authDomain: "netflixgpt-5456b.firebaseapp.com",
  projectId: "netflixgpt-5456b",
  storageBucket: "netflixgpt-5456b.appspot.com",
  messagingSenderId: "930005978452",
  appId: "1:930005978452:web:0daceb90b3545c6a458cc1",
  measurementId: "G-NVPMFFRSTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
