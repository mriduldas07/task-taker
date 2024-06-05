// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATlGXcSJDFyEPQZ_Rl8AAOabUrHazU4Mk",
  authDomain: "shoe-house-c65b4.firebaseapp.com",
  projectId: "shoe-house-c65b4",
  storageBucket: "shoe-house-c65b4.appspot.com",
  messagingSenderId: "406153418084",
  appId: "1:406153418084:web:8b98596d5ef7cf0bcb9671",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
