import { useEffect, useState, useRef } from "react";

export const useInput = (initailValue) => {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    setValue(event?.target.value);
  };
  return [value, onChange];
};

// Hook
export function useWindowSize() {
  const [size, setSize] = useState(250);
  useEffect(() => {
    function handleResize() {
      let width = 50 + window.innerWidth * 0.15;

      width = Math.max(width, 250);
      width = Math.min(width, 700);

      setSize(width);
      console.log(width);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

export function useResizeObserver() {
  const [size, setSize] = useState([0, 0]);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(([obs]) => {
      setSize([obs.contentRect.width, obs.contentRect.height]);
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return [size, ref];
}
