// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGdLJptiX5zCteLfAA5k7-a7O_6-uMFCI",
  authDomain: "react-p-social-16788.firebaseapp.com",
  projectId: "react-p-social-16788",
  storageBucket: "react-p-social-16788.appspot.com",
  messagingSenderId: "688646081955",
  appId: "1:688646081955:web:96b922e0f77c8dacffde16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);