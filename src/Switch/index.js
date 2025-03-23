import "./Styles.css";
import { ThemeContext, useTheme } from "../ThemeContext";
import { useContext } from "react";

const Switch = () => {
  const { theme, toggleTheme} = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
