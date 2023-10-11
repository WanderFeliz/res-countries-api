import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
} from "react";

type ThemeContextType = {
  theme?: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const useThemeContext = () => {
  const [theme, setTheme] = useState<string>();
  useLayoutEffect(() => {
    // Media Hook to check what theme user prefers
    const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)");
    const prefersTheme = prefersLightMode.matches ? "light" : "dark";

    if (prefersTheme === "light" && !theme) {
      setTheme("light");
    } else if (prefersTheme === "dark" && !theme) {
      setTheme("dark");
    } else if (theme === "light") {
      setTheme("light");
    } else if (theme === "dark") {
      setTheme("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return { theme, toggleTheme};
};

export default useThemeContext;

export const useTheme = () => useContext(ThemeContext);