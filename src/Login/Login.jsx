import "./Login.css";
import infinity from "../assets/téléchargement.jpeg";
import { useState } from "react";
import warning from "../assets/téléchargement.png";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { MdErrorOutline } from "react-icons/md";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [NewUser, setNewUser] = useState(true);
  const [error, seterror] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    seterror(false);

    if (NewUser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((UserDetails) => {
          console.log(UserDetails);
          localStorage.setItem("username", email); 
        })
        .catch((error) => {
          seterror(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((UserDetails) => {
          console.log(UserDetails);
        })
        .catch((error) => {
          seterror(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div className="login-page">
      <header>
        <span>
          from <i>infinitiy</i>
        </span>
      </header>
      <img className="logo" src={infinity} alt="" />
      <h2 className="title">Sub-Min <br /> Dashboard</h2>
      <form onSubmit={submit}>
        {NewUser && (
          <div className="username">
            <input
              type="text"
              id="username"
              onChange={(e) => setemail(e.target.value)}
              required
            />
<label htmlFor="username">Username</label>
          </div>
        )}
        <div className="email">
          <input
            type="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <label htmlFor="email">email</label>
        </div>
        <div className="password">
          <input
            type="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <label htmlFor="password">Mot de passe</label>
        </div>
        {error && <img src={warning} alt="" className="status" />}
        {error && <span className="error">Échec de l'opération</span>}
        {error && <span className="error">{errorMsg}</span>}
        <button type="submit">{NewUser ? "S'inscrire" : "Se connecter"}</button>
        {NewUser ? (
          <span className="user-stat">
            vous avez un compte?{" "}
            <b
              onClick={() => {
                setNewUser(false);
                seterror(false);
              }}
            >
                    Connexion</b>
          </span>
        ) : (
          <span className="user-stat">
            Vous n'avez pas de compte{" "}
            <b
              onClick={() => {
                setNewUser(true);
                seterror(false);
              }}
            >
                  S'inscrire</b>
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
