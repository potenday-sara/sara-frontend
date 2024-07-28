// 사라마라 테마를 정할 수 있는 컨텍스트를 만들어보자.
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { useSearchParams, useRouter, useParams, usePathname } from 'next/navigation';

export type Theme = 'sara' | 'mara';

type ThemeContextType = {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const theme = useMemo<Theme>(() => (searchParams?.get('theme') as Theme) || 'sara', [searchParams]);
  const router = useRouter();

  const updateTheme = useCallback(
    (selectedTheme: Theme) => {
      router.push(`${pathname}?theme=${selectedTheme}`, { scroll: true });
    },
    [router, pathname, searchParams],
  );

  return <ThemeContext.Provider value={{ theme, updateTheme }}>{children}</ThemeContext.Provider>;
}

export function useSaraMara() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useSaraMara must be used within a ThemeProvider');
  }
  return context;
}
