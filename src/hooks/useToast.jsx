import { useState } from 'react';

const useToast = (time) => {
  const [isToast, setIsToast] = useState(false);

  const openToast = () => {
    if (isToast === true) return;
    setIsToast(true);

    setTimeout(() => {
      setIsToast(false);
    }, [time || 1500]);
  };

  return { isToast, openToast };
};

export default useToast;
