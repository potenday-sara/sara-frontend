import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import useInterval from '@/hooks/useInterval';

type SARA = 'sara';
type MARA = 'mara';

export type Theme = SARA | MARA;

type SaraMaraContextType = {
  theme: Theme;
  handleToggleTheme: (theme: Theme) => void;
  progress: number;
};

const SaraMaraContext = createContext<SaraMaraContextType>({
  theme: 'sara',
  handleToggleTheme: (theme: Theme) => {},
  progress: 0,
});

const MAX_TIME = 5000;
const INTERVAL_TIME = 10;

export default function SaraMaraProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('sara');
  const [progress, setProgress] = useState<number>(0);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'sara' ? 'mara' : 'sara'));
  }, [theme, setTheme]);

  const handleSetProgress = useCallback(() => {
    setProgress((prev) => (((prev * MAX_TIME) / 100 + INTERVAL_TIME) / MAX_TIME) * 100);
    if (progress >= 100) {
      setProgress(0);
      handleToggleTheme();
    }
  }, [progress, setProgress]);

  const handleSetTheme = useCallback(
    (theme: Theme) => {
      setTheme(theme);
    },
    [theme, progress, setProgress],
  );
  useInterval(handleSetProgress, INTERVAL_TIME);

  return <SaraMaraContext.Provider value={{ theme, handleToggleTheme, progress }}>{children}</SaraMaraContext.Provider>;
}

export const useSaraMara = () => {
  const { theme, handleToggleTheme, progress } = useContext(SaraMaraContext);
  return { theme, handleToggleTheme, progress };
};
