/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Styles';
import SortButtons from './components/molecules/SortButtons';
import TypeButtons from './components/molecules/TypeButtons';
import QuestionCards from './components/organisms/QuestionCards';
import LoungeContext from './stores/LoungeStore';
import LoungeHeader from './components/organisms/LoungeHeader';
import Navbar from '../../../components/organisms/Navbar/Navbar';
import CounpangRecommend from '../../question/components/organisms/CoupangRecommend';
import KakaoAdFit from '../../../components/organisms/KaKaoAdfit.jsx';

export default function LoungeMain() {
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

  const params = new URLSearchParams(window.location.search);

  const getBackgroundColor = () => {
    if (sortType === 'like') return '#fffaed';
    if (type === 'all') return '#fffaed';
    if (type === 'sara') return '#e6f2fd';
    if (type === 'mara') return '#fdeae6';
    return '#f4f4f4';
  };
  const getDesignColor = () => {
    if (sortType === 'like') return '#FFCD4D';
    if (type === 'all') return '#FFCD4D';
    if (type === 'sara') return Theme.color.saraSecondary;
    if (type === 'mara') return Theme.color.maraSecondary;
    return '#f4f4f4';
  };
  const StyledMain = styled.div`
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
    position: relative;
    height: auto;
    display: flex;
    gap: 40px;
    justify-content: center;

    background-color: ${() => getBackgroundColor()};
    .body {
      width: 100%;
      max-width: 375px;
      z-index: 1;
      margin-top: 60px;
    }
    .footer {
      margin: 0;
      padding-left: 40px;
      background-color: #f4f4f4;
    }
    .design {
      position: absolute;
      gap: 30px;
      flex-direction: column;
      overflow-x: hidden;
      display: flex;
      top: 50vh;
      transform: translate(0, -50%);
      width: 100%;
      z-index: 0;
    }

    .ad {
      padding-top: 60px;
      width: 300px;
      height: 250px;
      margin-top: 72px;
    }

    .coupang {
      margin-top: 72px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-top: 60px;
    }

    ${Theme.deviceSize.small} {
      .body {
        margin-top: 0;
        width: 100%;
        max-width: 100%;
      }
      .design {
        display: none;
      }
      .ad {
        display: none;
      }
      .coupang {
        display: none;
      }
    }
  `;

  return (
    <StyledMain type={type}>
      <LoungeContext.Provider value={loungeStore}>
        <div className="design">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1920 40H0V0H4000V40Z"
              fill={getDesignColor()}
              fillOpacity="0.03"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1920 80H0V0H4000V80Z"
              fill={getDesignColor()}
              fillOpacity="0.03"
            />
          </svg>
        </div>
        <Navbar />
        <div className="ad">
          <KakaoAdFit unit="DAN-9ucFwjSEm5Q3qP1B" width="300" disabled={false} height="250" />
        </div>
        <div className="body">
          <LoungeHeader />
          <SortButtons />
          <TypeButtons />
          <QuestionCards />
        </div>
        <div className="coupang">
          <CounpangRecommend type="sara" />
        </div>
      </LoungeContext.Provider>
    </StyledMain>
  );
}
