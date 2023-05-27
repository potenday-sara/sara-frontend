import { useEffect, useState } from "react";

export const useInput = (initailValue) => {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return [value, onChange];
};

// Hook
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(250);
  useEffect(() => {
    function handleResize() {
      let width = 130 + window.innerWidth * 0.15;

      width = Math.max(width, 250);
      width = Math.min(width, 700);

      setWindowSize(width);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
