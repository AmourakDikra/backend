import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeC6S3U29M2VyQVEdY271wVGj-wmwsFpE",
  authDomain: "adminproject-8c2c6.firebaseapp.com",
  projectId: "adminproject-8c2c6",
  storageBucket: "adminproject-8c2c6.firebasestorage.app",
  messagingSenderId: "543570530653",
  appId: "1:543570530653:web:205ac87d2fe19e2540d8b4",
  measurementId: "G-BNXCQDJVG8"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
