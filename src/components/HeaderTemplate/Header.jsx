import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { HiOutlineMoon, HiOutlineLogout } from "react-icons/hi";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth"; 

const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null); 

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Déconnexion réussie");
      })
      .catch((error) => {
        console.error("Une erreur est survenue lors de la déconnexion : ", error.message);
      });
  };


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
        console.log("Utilisateur connecté: ", currentUser.email);
      } else {
        setUser(null); 
        console.log("Utilisateur connecté : ", currentUser.email);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className={`${DarkTheme && "dark"}`}>
      <div className="search-bar">
        <input type="text" placeholder="rechercher..." />
        <BiSearch className="icon" />
      </div>

      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />

        <div className="divider"></div>

        <HiOutlineMoon className="icon" onClick={changeTheme} />
        <RiSettingsLine className="icon" />
        <HiOutlineLogout className="icon" onClick={logout} />

        <div className="divider"></div>

        <div className="user">
          <img
            src="https://logodix.com/logo/1625240.jpg"
            alt="Profile"
            className="profile-img"
          />
          {user && <p>{user.email}</p>} 
        </div>
      </div>
    </header>
  );
};

export default Header;
