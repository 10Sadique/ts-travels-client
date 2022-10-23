// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv55xJVPZnijeANGeWTDfEMUTKEpM5IPw",
  authDomain: "ts-travels.firebaseapp.com",
  projectId: "ts-travels",
  storageBucket: "ts-travels.appspot.com",
  messagingSenderId: "73817499526",
  appId: "1:73817499526:web:16760c123b0c8e65f46e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app