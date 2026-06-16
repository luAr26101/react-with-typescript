import React, { useState } from "react";

import { ThemeProviderContext } from "./useTheme";

import { type Theme } from "./useTheme";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export default function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps): React.JSX.Element {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
