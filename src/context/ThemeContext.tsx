"use client";
import useThemeContext, { ThemeContext } from "@/hooks/useTheme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme} className="globalContainer">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
