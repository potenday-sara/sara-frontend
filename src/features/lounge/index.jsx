import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Community from '../community';
import SortButtons from './components/molecules/SortButtons';
import TypeButtons from './components/molecules/TypeButtons';
import LoungeHeader from './components/organisms/LoungeHeader';
import QuestionCards from './components/organisms/QuestionCards';
import LoungeContext from './stores/LoungeStore';

export function LoungeMain() {
  return (
    <>
      <SortButtons />
      <TypeButtons />
      <QuestionCards />
    </>
  );
}

export default function LoungePage() {
  const [type, setType] = useState('all');
  const [sortType, setSortType] = useState('time');

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
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route exact path="/" element={<LoungeMain />} />
        </Routes>
      </LoungeContext.Provider>
    </div>
  );
}
