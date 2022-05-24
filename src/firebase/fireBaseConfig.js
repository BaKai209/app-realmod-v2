import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNycFK2P0pDs2_gq43G9qCWcDvIkiZVfg",
  authDomain: "realmod-f4464.firebaseapp.com",
  projectId: "realmod-f4464",
  storageBucket: "realmod-f4464.appspot.com",
  messagingSenderId: "1014763526793",
  appId: "1:1014763526793:web:62b7fb68414d6abfe90458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  facebook,
  db
}