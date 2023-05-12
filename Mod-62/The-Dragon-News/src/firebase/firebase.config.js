// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPDhViv-kKb35IAp1Qos7JgA-k-5eR4KU",
  authDomain: "the-news-dragon-a8b43.firebaseapp.com",
  projectId: "the-news-dragon-a8b43",
  storageBucket: "the-news-dragon-a8b43.appspot.com",
  messagingSenderId: "219899643637",
  appId: "1:219899643637:web:70985da1d7fe07410ea7bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;