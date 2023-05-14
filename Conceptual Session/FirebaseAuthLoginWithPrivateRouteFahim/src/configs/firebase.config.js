import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPDhViv-kKb35IAp1Qos7JgA-k-5eR4KU",
    authDomain: "the-news-dragon-a8b43.firebaseapp.com",
    projectId: "the-news-dragon-a8b43",
    storageBucket: "the-news-dragon-a8b43.appspot.com",
    messagingSenderId: "219899643637",
    appId: "1:219899643637:web:70985da1d7fe07410ea7bc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
