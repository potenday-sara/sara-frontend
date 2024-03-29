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
    if (interval !== null) {
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
    return () => {};
  }, [interval]);
};

export default useInterval;
