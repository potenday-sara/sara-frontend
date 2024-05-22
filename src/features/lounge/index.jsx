/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../../Styles';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar/Navbar';
import Community from '../community';
import SortButtons from './components/molecules/SortButtons';
import TypeButtons from './components/molecules/TypeButtons';
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

  const getBackgroundColor = () => {
    if (sortType === 'like') return '#fffaed';
    if (type === 'all') return '#f4f4f4';
    if (type === 'sara') return '#e6f2fd';
    if (type === 'mara') return '#fdeae6';
    return '#f4f4f4';
  };

  const StyledMain = styled.div`
    ${Theme.deviceSize.large} {
      background-color: ${() => getBackgroundColor()};
      .body {
        width: 375px;
        margin: 60px auto 0 auto;
        ::-webkit-scrollbar {
          width: 5px;
          height: 20px;
        }
        ::-webkit-scrollbar-button {
          display: none;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 8px;
          background-color: ${Theme.color.gray};
        }
      }
    }
    ${Theme.deviceSize.medium} {
      background-color: ${() => getBackgroundColor()};
      .body {
        width: 375px;
        margin: 60px auto 0 auto;
        ::-webkit-scrollbar {
          width: 5px;
          height: 20px;
        }
        ::-webkit-scrollbar-button {
          display: none;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 8px;
          background-color: ${Theme.color.gray};
        }
      }
    }

    ${Theme.deviceSize.small} {
      .body {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }
  `;

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
