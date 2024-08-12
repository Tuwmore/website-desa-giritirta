// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC36JGxaL1nGAi_Lm4xIWKBz7dO616FNAQ",
  authDomain: "website-desa-giritirta-banjar.firebaseapp.com",
  projectId: "website-desa-giritirta-banjar",
  storageBucket: "website-desa-giritirta-banjar.appspot.com",
  messagingSenderId: "122683674714",
  appId: "1:122683674714:web:74e7e4f4081adbc9da8863",
  measurementId: "G-VY1RM4BT4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db, storage, auth};