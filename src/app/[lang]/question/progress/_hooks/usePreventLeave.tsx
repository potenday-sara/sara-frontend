import { useEffect } from 'react';

const usePreventLeave = (global = false) => {
  const handleBeforeUnload = (event) => {
    event.preventDefault();
  };
  const onPreventLeave = () => {
    window.addEventListener('beforeunload', handleBeforeUnload);
  };
  const offPreventLeave = () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [global]);

  return {
    onPreventLeave,
    offPreventLeave,
  };
};

export default usePreventLeave;
