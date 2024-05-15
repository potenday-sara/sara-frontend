import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Community from '../community';
import SortButtons from './components/molecules/SortButtons';
import TypeButtons from './components/molecules/TypeButtons';
// import LoungeHeader from './components/organisms/LoungeHeader';
import QuestionCards from './components/organisms/QuestionCards';
import LoungeContext from './stores/LoungeStore';
import Navbar from '../../components/organisms/Navbar/Navbar';
import { Theme } from '../../Styles';
import KakaoAdFit from '../../components/organisms/KaKaoAdfit.jsx';

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

  const StyledMain = styled.div`
    .body {
    }

    ${Theme.deviceSize.small} {
      .body {
      }
    }
  `;

  const params = new URLSearchParams(window.location.search);
  const paramType = params.get('type');

  return (
    <StyledMain style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LoungeContext.Provider value={loungeStore}>
        {/* <LoungeHeader type={type} /> */}
        <div className="body">
          <Routes>
            <Route path="/community" element={<Community />} />
            <Route exact path="/" element={<LoungeMain />} />
          </Routes>
        </div>
      </LoungeContext.Provider>
    </StyledMain>
  );
}
