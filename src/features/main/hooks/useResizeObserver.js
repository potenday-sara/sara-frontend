import { useEffect, useState, useRef } from "react";

export default function useResizeObserver() {
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
