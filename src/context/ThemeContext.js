"use client";

import React, { createContext, useContext, useState, useLayoutEffect } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState();

  useLayoutEffect(() => {
    // Media Hook to check what theme user prefers
    const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)");
    const prefersTheme = prefersLightMode.matches ? "light" : "dark";
    
    if (prefersTheme === "light" && !theme) {
      setTheme("light");
    } 
    else if (prefersTheme === "dark" && !theme) {
      setTheme("dark");
    }
    else if (theme === "light") {
      setTheme("light");
    }
    else if (theme === "dark") {
      setTheme("dark");
    }
    
    // applyTheme();
    // if state changes, repaints the app
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);



  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
