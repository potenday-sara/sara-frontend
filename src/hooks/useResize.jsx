import { useEffect, useState } from 'react';

const useResize = () => {
  const [sizeType, setSizeType] = useState('small'); // 'small', 'medium', 'large'

  useEffect(() => {
    const setSize = () => {
      console.log('hi');
      if (window.innerWidth < 1200) setSizeType('small');
      else setSizeType('medium');
    };

    setSize();

    window.addEventListener('resize', setSize);

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return { sizeType };
};

export default useResize;
