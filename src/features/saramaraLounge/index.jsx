import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/organisms/Navbar/Navbar';
import Footer from '../../components/organisms/Footer';
import LoungeContext from './lounge/stores/LoungeStore';
import Community from './community';
import LoungeMain from './lounge';

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

  const StyledMain = styled.div``;

  const params = new URLSearchParams(window.location.search);
  const paramType = params.get('type');

  return (
    <StyledMain style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar className="navbar" />
      <LoungeContext.Provider value={loungeStore}>
        {/* <LoungeHeader type={type} /> */}
        <div className="body">
          <Routes>
            <Route path="/community" element={<Community />} />
            <Route exact path="/" element={<LoungeMain />} />
          </Routes>
        </div>
      </LoungeContext.Provider>
      <Footer className="footer" />
    </StyledMain>
  );
}
