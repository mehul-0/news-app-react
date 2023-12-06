// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJtifeqr0Cie8d4awuflIFBAp_bcJRw3I",
  authDomain: "news-app-c25cb.firebaseapp.com",
  projectId: "news-app-c25cb",
  storageBucket: "news-app-c25cb.appspot.com",
  messagingSenderId: "523079101365",
  appId: "1:523079101365:web:5eb57f1b0beaaa16af87fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();