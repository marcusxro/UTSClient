// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPtB-ZYdXuFcO_hEm2pwl7lEUpuU05j78",
  authDomain: "bpi-auth-b08e3.firebaseapp.com",
  projectId: "bpi-auth-b08e3",
  storageBucket: "bpi-auth-b08e3.appspot.com",
  messagingSenderId: "15076881155",
  appId: "1:15076881155:web:8aa983184326c49259ef36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth  = getAuth(app)