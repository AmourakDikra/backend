import "./Login.css";
import infinity from "../assets/téléchargement.jpeg";
import { useState } from "react";
import { auth } from "../Firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  setPersistence, 
  browserLocalPersistence, 
  browserSessionPersistence 
} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // State management
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    rememberMe: false,
    isLogin: true
  });

  const { email, password, username, rememberMe, isLogin } = formData;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Toggle login/register mode
  const toggleMode = () => {
    setFormData(prev => ({
      ...prev,
      isLogin: !prev.isLogin
    }));
  };

  // Authentication handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Connexion réussie !');
    } catch (error) {
      toast.error(getErrorMessage(error.code));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username) {
      toast.error('Le nom d\'utilisateur est requis');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Compte créé avec succès !');
    } catch (error) {
      toast.error(getErrorMessage(error.code));
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error('Veuillez saisir votre adresse email');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Email de réinitialisation envoyé !');
    } catch (error) {
      toast.error(getErrorMessage(error.code));
    }
  };

  // Common toast configuration
  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    theme: "colored"
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src={infinity} alt="Logo" className="auth-logo" />
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p>{isLogin ? 'Login to your account' : 'Register a new account'}</p>
        </div>

        <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder=" "
                value={username}
                onChange={handleChange}
                required
              />
              <label htmlFor="username">Username</label>
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          {isLogin && (
            <div className="form-options">
              <button 
                type="button"
                className="forgot-link"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <p className="switch-mode">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={toggleMode}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
        </form>
      </div>
      <ToastContainer {...toastConfig} />
    </div>
  );
};

export default Login;
