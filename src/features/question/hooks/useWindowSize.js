import { useEffect, useState, useRef } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState(250);
  useEffect(() => {
    function handleResize() {
      let width = 50 + window.innerWidth * 0.2;

      // width = Math.max(width, 100);
      width = Math.min(width, 500);

      setSize(width);
      console.log(width);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}
