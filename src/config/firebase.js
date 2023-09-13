// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARr3Wt-heXHmExgIIfU1d2wh-gzpXJP64",
  authDomain: "react-contact-8a325.firebaseapp.com",
  projectId: "react-contact-8a325",
  storageBucket: "react-contact-8a325.appspot.com",
  messagingSenderId: "1021234923109",
  appId: "1:1021234923109:web:f81f71ac11d2b5b12aa88c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
