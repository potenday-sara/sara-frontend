import React, { useMemo, useState } from 'react';
import SortButtons from './components/molecules/SortButtons';
import TypeButtons from './components/molecules/TypeButtons';
import LoungeHeader from './components/organisms/LoungeHeader';
import QuestionCards from './components/organisms/QuestionCards';
import LoungeContext from './stores/LoungeStore';

export default function LoungePage() {
  const [type, setType] = useState('all');
  const [sortType, setSortType] = useState('recent');

  const setAll = () => {
    setType('all');
  };
  const setSara = () => {
    setType('sara');
  };
  const setMara = () => {
    setType('mara');
  };
  const setSort = (s) => {
    setSortType(s);
  };

  const loungeStore = useMemo(() => {
    return { type, sortType, setAll, setSara, setMara, setSort };
  }, [type, sortType]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LoungeContext.Provider value={loungeStore}>
        <LoungeHeader type={type} />
        <SortButtons />
        <TypeButtons />
        <QuestionCards />
      </LoungeContext.Provider>
    </div>
  );
}
