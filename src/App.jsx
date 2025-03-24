import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/NavigationTemplate/Navigation";
import Main from './Main/Main';
import { ThemeContext } from "./ThemeContext";
import Login from "./Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

function App() {
  const [DarkTheme, setDarkTheme] = useState(true);
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div className="App">
        {LoggedIn ? (
          <>
            <Navigation />
            <Main />
          </>
        ) : (
          <Login />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
