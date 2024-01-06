// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5JDT0Y8UE4Gfa9iYpTLwy_P6Q40rodPo",
  authDomain: "leetcode-da032.firebaseapp.com",
  projectId: "leetcode-da032",
  storageBucket: "leetcode-da032.appspot.com",
  messagingSenderId: "141842266982",
  appId: "1:141842266982:web:8d4f1423c81299956826a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);