import React, { useMemo, useState } from 'react';
import TypeButtons from './components/molecules/TypeButtons';
import LoungeHeader from './components/organisms/LoungeHeader';
import QuestionCards from './components/organisms/QuestionCards';
import LoungeContext from './stores/LoungeStore';

export default function LoungePage() {
  const [type, setType] = useState('all');

  const setAll = () => {
    setType('all');
  };
  const setSara = () => {
    setType('sara');
  };
  const setMara = () => {
    setType('mara');
  };
  const loungeStore = useMemo(() => {
    return { type, setAll, setSara, setMara };
  }, [type]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LoungeContext.Provider value={loungeStore}>
        <LoungeHeader type={type} />
        <TypeButtons />
        <QuestionCards />
      </LoungeContext.Provider>
    </div>
  );
}
