import "./Navigation.css";
import { FiChevronLeft } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLock, MdPeople, MdBarChart } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import Nav from "./NavIconTemplate/Nav";

const Navigation = () => {
  const [nav, setnav] = useState(false);
  const { DarkTheme } = useContext(ThemeContext);
  const [username, setusername] = useState(null);

  useEffect(() => {
    setusername(localStorage.getItem("username"));
  }, []);

  return (
    <div className={`navigation ${nav && "active"} ${DarkTheme && "dark"}`}>
      <div 
        className={`menu ${nav && "active"}`} 
        onClick={() => setnav((prevState) => !prevState)}
      >
        <FiChevronLeft className="menu-icon" />
      </div>
      <span>{username || "Nom d'utilisateur non spécifié"}</span>

      <h3 className="menu-title">Menu</h3>
      <Nav Icon={AiOutlineMenu} title="Gestion de Menu" />
      
      <h3 className="menu-title">Utilisateurs</h3>
      <Nav Icon={MdPeople} title="User" />
      <Nav Icon={MdLock} title="Changer mot de passe" />
      
      <h3 className="menu-title">Les Graphe</h3>
      <Nav Icon={MdBarChart} title="Voir les Graphes" />
    </div>
  );
};

export default Navigation;
