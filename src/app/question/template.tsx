'use client';

import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import useInterval from '@/hooks/useInterval';

interface templateProps {
  children: ReactNode;
}

export default function template({ children }: templateProps) {
  const [type, setType] = useState<'sara' | 'mara'>('sara');
  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number | null>(10);

  const setSara = () => {
    setType('sara');
    setDelay(null);
    setCount(0);
  };
  const setMara = () => {
    setType('mara');
    setDelay(null);
    setCount(0);
  };

  const intervalSaraMara = useCallback(() => {
    if (delay === null) return;
    if (count < 3000 / delay) {
      setCount(count + 1);
    } else {
      setType((prev) => (prev === 'sara' ? 'mara' : 'sara'));
      setCount(0);
    }
  }, []);

  const typeStore = useMemo(() => {
    return { type };
  }, [type]);

  const TypeContext = createContext({ type: 'sara' });

  useInterval(intervalSaraMara, 10);
  return <TypeContext.Provider value={typeStore}>{children}</TypeContext.Provider>;
}
