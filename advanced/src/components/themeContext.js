import React from "react";

export const themes = {
  light: {
    contentBackground: "#c2c2c2",
    contentForeground: "#111111",
    foreground: "#c2c2c2",
    background: "#FFFFFF",
    color: "#000000",
    error: "#B00020",
  },
  dark: {
    contentBackground: "#1F1A24",
    contentForeground: "#332940",
    foreground: "#202020",
    background: "#000000",
    color: "#FFFFFF",
    error: "#B00020",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});
