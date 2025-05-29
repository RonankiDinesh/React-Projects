import {
  createContext,
  useState,
  useEffect,
} from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lighttheme: () => {},
  darktheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darktheme = () => {
    setThemeMode("dark");
  };

  const lighttheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darktheme, lighttheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

