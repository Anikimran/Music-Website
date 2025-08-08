// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC5q5_TY9FfZ4_BdxHSdk9AUp1MJVjrkeM",
  authDomain: "componient.firebaseapp.com",
  projectId: "componient",
  storageBucket: "componient.firebasestorage.app",
  messagingSenderId: "784605317491",
  appId: "1:784605317491:web:df59bc9e9d014df5675d06"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
