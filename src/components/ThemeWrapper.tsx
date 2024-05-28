import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

type THEME = "light" | "dark";

interface ThemeContextType {
  theme: THEME;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<THEME>("dark");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      setTheme(selectedTheme as THEME);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
