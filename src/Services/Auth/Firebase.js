// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection,addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDm6_BZzfpjyF0sAx_zcTkO1Tb1pht_QdA",
  authDomain: "gestion-des-colis-36e74.firebaseapp.com",
  projectId: "gestion-des-colis-36e74",
  storageBucket: "gestion-des-colis-36e74.appspot.com",
  messagingSenderId: "286227910330",
  appId: "1:286227910330:web:86bc0f8503f35fa52ffc83",
  measurementId: "G-C6RNKHHD3C"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export {app, db, getFirestore, collection, addDoc};