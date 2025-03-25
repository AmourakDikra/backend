import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

// Add error message handler
export const handleAuthError = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      toast.error('Cette adresse email est déjà utilisée');
      break;
    case 'auth/invalid-email':
      toast.error('Adresse email invalide');
      break;
    case 'auth/operation-not-allowed':
      toast.error('Opération non autorisée');
      break;
    case 'auth/weak-password':
      toast.error('Le mot de passe doit contenir au moins 6 caractères');
      break;
    case 'auth/user-disabled':
      toast.error('Ce compte a été désactivé');
      break;
    case 'auth/user-not-found':
      toast.error('Aucun compte trouvé avec cette adresse email');
      break;
    case 'auth/wrong-password':
      toast.error('Mot de passe incorrect');
      break;
    default:
      toast.error('Une erreur est survenue: ' + error.message);
  }
};

export { auth };
