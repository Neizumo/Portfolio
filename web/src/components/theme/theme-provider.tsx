import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
    }
    return context;
};

// Função para obter o tema inicial de forma segura
function getInitialTheme(storageKey: string, defaultTheme: Theme): Theme {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme === "dark" || storedTheme === "light" || storedTheme === "system") {
        return storedTheme;
    }
    return defaultTheme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultTheme = "system", storageKey = "user-theme-preference" }) => {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme(storageKey, defaultTheme as "dark" | "light" | "system"));

    useEffect(() => {
        const applyTheme = (theme: Theme) => {
            const root = window.document.documentElement;
            root.classList.remove("dark", "light");
            const effectiveTheme = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
            root.classList.add(effectiveTheme);
            localStorage.setItem(storageKey, theme);
        };

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const mediaQueryChangeListener = () => applyTheme(theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme);

        mediaQuery.addEventListener("change", mediaQueryChangeListener);
        applyTheme(theme);

        return () => mediaQuery.removeEventListener("change", mediaQueryChangeListener);
    }, [theme, storageKey]);

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme);
            setTheme(newTheme);
        },
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, useTheme };
