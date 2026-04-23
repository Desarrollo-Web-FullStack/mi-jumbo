// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC20M5K8jujIrnReFog2VRRe1A0x0bQvD4",
    authDomain: "dev-fullstack.firebaseapp.com",
    projectId: "dev-fullstack",
    storageBucket: "dev-fullstack.firebasestorage.app",
    messagingSenderId: "842650419405",
    appId: "1:842650419405:web:a3ebb2a4fd62d515102984"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
