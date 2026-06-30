import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from '@/themes/theme';
import { ThemeContextType, ThemeMode } from '@/types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ themeMode, toggleTheme }), [themeMode]);

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  const { themeMode, toggleTheme } = context;
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  return { themeMode, toggleTheme, theme };
}
