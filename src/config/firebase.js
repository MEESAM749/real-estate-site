// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBzpYJ9nbSYoK6VfjsK73jZayMwVGbVr8",
    authDomain: "al-rafay.firebaseapp.com",
    projectId: "al-rafay",
    storageBucket: "al-rafay.firebasestorage.app",
    messagingSenderId: "269505093508",
    appId: "1:269505093508:web:aa4f24137de54e224787d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
