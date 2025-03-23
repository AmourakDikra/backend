import { useState } from "react";
import "./App.css";
import Navigation from "./components/NavigationTemplate/Navigation";
import Main from "./Main/Main";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [DarkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div className="App">
        <Navigation />

        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
