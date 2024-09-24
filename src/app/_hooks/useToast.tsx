import { useState } from 'react';

const useToast = (time: number) => {
  const [isToast, setIsToast] = useState(false);

  const handleToastOpen = () => {
    if (isToast) return;
    setIsToast(true);

    setTimeout(() => {
      setIsToast(false);
    }, time || 1500);
  };

  return { isToast, handleToastOpen };
};

export default useToast;
