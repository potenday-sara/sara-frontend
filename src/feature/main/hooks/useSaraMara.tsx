import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import useInterval from '@/hooks/useInterval';

type SARA = 'sara';
type MARA = 'mara';

export type Theme = SARA | MARA;

export type HandleThemeAction = {
  handleStopInterval: () => void;
  handleRestartInterval: () => void;
  handleSetTheme: (theme: Theme) => void;
};

type SaraMaraContextType = {
  theme: Theme;
  progress: number;
  handleThemeAction: HandleThemeAction;
};

const SaraMaraContext = createContext<SaraMaraContextType>({
  theme: 'sara',
  progress: 0,
  handleThemeAction: {
    handleRestartInterval: () => {},
    handleStopInterval: () => {},
    handleSetTheme: (theme: Theme) => {},
  },
});

const MAX_TIME = 5000;
const INTERVAL_TIME = 10;

export default function SaraMaraProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('sara');
  const [progress, setProgress] = useState<number>(0);
  const [intervalFlag, setIntervalFlag] = useState<boolean>(false);
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

  const { intervalId } = useInterval(handleSetProgress, INTERVAL_TIME, intervalFlag);

  const handleSetTheme = useCallback(
    (theme: Theme) => {
      setTheme(theme);
    },
    [theme, progress, setProgress],
  );

  const handleStopInterval = useCallback(() => {
    if (!intervalId) return;
    clearInterval(intervalId);
  }, [intervalId]);

  const handleRestartInterval = useCallback(() => {
    setIntervalFlag((prev) => !prev);
  }, [setIntervalFlag]);

  const handleThemeAction = {
    handleSetTheme,
    handleStopInterval,
    handleRestartInterval,
  };

  return <SaraMaraContext.Provider value={{ theme, progress, handleThemeAction }}>{children}</SaraMaraContext.Provider>;
}

export const useSaraMara = () => {
  const { theme, progress, handleThemeAction } = useContext(SaraMaraContext);

  return { theme, progress, handleThemeAction };
};
