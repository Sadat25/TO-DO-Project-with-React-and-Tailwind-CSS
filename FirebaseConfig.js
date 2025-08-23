// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm-EoTDXU-dZFTMzniWLACzt77_JvE2Ig",
    authDomain: "to-do-rafin.firebaseapp.com",
    projectId: "to-do-rafin",
    storageBucket: "to-do-rafin.firebasestorage.app",
    messagingSenderId: "1004821780280",
    appId: "1:1004821780280:web:44266574478a0f85a1d3cd",
    measurementId: "G-RMRLG5XQ20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;