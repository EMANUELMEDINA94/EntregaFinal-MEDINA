// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf-dg4Q8eFfnSnoLEou-rb5rq044JAcso",
    authDomain: "tempo-coffee.firebaseapp.com",
    projectId: "tempo-coffee",
    storageBucket: "tempo-coffee.firebasestorage.app",
    messagingSenderId: "179200048759",
    appId: "1:179200048759:web:8445452f40a85b09d81072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);