/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Styles';
import SortButtons from './components/molecules/SortButtons';
import TypeButtons from './components/molecules/TypeButtons';
import QuestionCards from './components/organisms/QuestionCards';

const StyledMain = styled.div`
  ${Theme.deviceSize.large} {
    .footer {
      margin: 0;
      padding-left: 40px;
      background-color: #f4f4f4;
    }
  }
  ${Theme.deviceSize.medium} {
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
    .footer {
      margin: 0;
      padding-left: 40px;
      background-color: #f4f4f4;
    }
  }

  ${Theme.deviceSize.small} {
    .body {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    .footer {
      display: none;
    }
    .navbar {
      display: none;
    }
  }
`;

export default function LoungeMain() {
  return (
    <StyledMain>
      <div className="body">
        <SortButtons />
        <TypeButtons />
        <QuestionCards />
      </div>
    </StyledMain>
  );
}
