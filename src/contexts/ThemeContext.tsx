import React, { createContext, useState } from "react";
import { useEffect } from "react";

import { defaultTheme, darkTheme } from "../styles/theme";

interface ThemeContextData {
  selectedTheme: typeof defaultTheme;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = loadTheme();
    const darkMode = savedTheme === "dark";

    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    saveTheme(!isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  const loadTheme = (): string => {
    const theme = localStorage.getItem("theme");
    if (!theme) return "light";
    return theme;
  };

  const saveTheme = (darkMode: boolean): void => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        selectedTheme: isDarkMode ? darkTheme : defaultTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
