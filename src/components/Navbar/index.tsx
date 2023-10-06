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
        <button className={styles.themIcon} onClick={toggleTheme}>
          {theme === "light" ? (
            <>
              <LightModeIcon />
              <h2>Light Mode</h2>
            </>
          ) : (
            <>
              <DarkModeIcon />
              <h2>Dark Mode</h2>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
