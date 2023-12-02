import { useEffect, useRef, useState } from 'react';

const useTooltip = () => {
  const ref = useRef(null);
  const [isTooltip, setIsTooltip] = useState(false);

  const setTooltipTrue = () => {
    setIsTooltip(true);
  };
  const setTooltipFalse = () => {
    setIsTooltip(false);
  };

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseenter', setTooltipTrue, false);
      ref.current.addEventListener('mouseleave', setTooltipFalse, false);
    }
    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('mouseenter', setTooltipTrue, false);
        ref.current.removeEventListener('mouseleave', setTooltipFalse, false);
      }
    };
  }, []);

  return { ref, isTooltip };
};

export default useTooltip;
