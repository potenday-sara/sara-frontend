import { useEffect, useRef, useState } from 'react';

const useInterval = (callback, interval, flag): { intervalId } => {
  const savedCallback = useRef<(() => void) | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, interval);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [interval, flag]);

  return {
    intervalId,
  };
};

export default useInterval;
