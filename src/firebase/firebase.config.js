// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7pkiYrnVU3pMhFAykN5bp-HyKRD4qdes",
    authDomain: "chefs-choice-client.firebaseapp.com",
    projectId: "chefs-choice-client",
    storageBucket: "chefs-choice-client.appspot.com",
    messagingSenderId: "997188678402",
    appId: "1:997188678402:web:557fc848051746ed35881b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app