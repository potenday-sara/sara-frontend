// 사라마라 테마를 정할 수 있는 컨텍스트를 만들어보자.
import React, { createContext, useCallback, useState } from 'react';

export type Theme = 'sara' | 'mara';

type ThemeContextType = {
  theme: Theme;
  handleSetTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<Theme>('sara');

  const handleSetTheme = useCallback(
    (selectedTheme: Theme) => {
      setTheme(selectedTheme);
    },
    [setTheme],
  );

  return <ThemeContext.Provider value={{ theme, handleSetTheme }}>{children}</ThemeContext.Provider>;
}

export function useSaraMara() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useSaraMara must be used within a ThemeProvider');
  }
  return context;
}
