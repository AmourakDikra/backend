import { useContext, useState } from "react";
import "./Content.css";
import { ThemeContext } from "../ThemeContext";
import Analytics from "../Components/AnalyticsTemplate/Analytics";

const Content = () => {
  const { DarkTheme } = useContext(ThemeContext);

  const [value_i] = useState(Math.floor(Math.random() * 100));
  const [value_i_offset] = useState(315 - (value_i / 100) * 315);

  const [value_ii] = useState(Math.floor(Math.random() * 100));
  const [value_ii_offset] = useState(315 - (value_ii / 100) * 315);

  return (
    <div className={`content ${DarkTheme && "dark"}`}>

      <span className="section-title">Gestion des factures</span>

      <div className="row square">
        <Analytics chart_i />
      </div>

      <div className="row square">
        <Analytics chart_ii/>
      </div>
    </div>
  );
};

export default Content;
