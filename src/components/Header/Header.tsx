import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Button from "../Button/Button";
import "./header.scss";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const selectedCalss = darkMode ? "dark-mode" : "light-mode";

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="alb-header">
      <div className="alb-header__title">Where in the world?</div>
      <div className="alb-header__switch-button">
        <Button
          onClick={toggleMode}
          iconName={darkMode ? faSun : faMoon}
          modifierStyle={darkMode ? "alb-button--dark" : ""}
        >
          {darkMode ? "Lightmode" : "Darkmode"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
