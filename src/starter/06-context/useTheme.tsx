import { createContext, useContext } from "react";

export type Theme = "light" | "dark" | "system";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeProviderContext = createContext<
  ThemeProviderState | undefined
>(undefined);

export default function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within the ThemeProvider");
  }
  return context;
}
