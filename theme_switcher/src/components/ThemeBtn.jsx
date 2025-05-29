import { useContext } from "react";
import { ThemeContext } from "../contexts/themecontext";
const ThemeBtn = () => {
  const { themeMode, darktheme, lighttheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (themeMode === "light") {
      darktheme();
    } else {
      lighttheme();
    }
  };

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {themeMode === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeBtn;

