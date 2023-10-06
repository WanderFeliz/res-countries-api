"use client";
import React from "react";
import styles from "./navbar.module.scss";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={styles.navbar} data-theme={theme}>
      <div className={styles.left}>
        <h2>Where in the world?</h2>
      </div>
      <div className={styles.right}>
        <button className={styles.themeButton} onClick={toggleTheme}>
          {theme === "light" ? (
            <LightModeIcon className={styles.themeIcon} />
          ) : (
            <DarkModeIcon className={styles.themeIcon} />
          )}

          {theme === "light" ? <p>Light Mode</p> : <p>Dark Mode</p>}
        </button>
      </div>
    </nav>
  );
};
`
  
`

export default Navbar;
