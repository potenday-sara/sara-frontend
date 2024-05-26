import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/organisms/Navbar/Navbar';
import Footer from '../../components/organisms/Footer';
import Community from './community';
import LoungeMain from './lounge';

const StyledMain = styled.div`
  .footer {
    margin: 0;
    padding-left: 40px;
    background-color: #f4f4f4;
  }
`;

export default function LoungePage() {
  return (
    <div>
      <div className="body">
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route exact path="/" element={<LoungeMain />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}
