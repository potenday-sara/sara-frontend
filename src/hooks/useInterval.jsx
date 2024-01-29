import { useEffect, useRef } from 'react';

const useInterval = (callback, interval) => {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};

export default useInterval;
