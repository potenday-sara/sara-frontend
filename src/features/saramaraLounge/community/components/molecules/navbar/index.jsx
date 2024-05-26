import React from 'react';
import styled from 'styled-components';
// import Text from ';
import { useNavigate } from 'react-router-dom';
import Text from '../../../../../../components/atoms/Text';
import { ReactComponent as LeftArrow } from '../../../../../../images/svgs/leftArrow.svg';

const StyledNavbar = styled.div`
  width: 100%;
  height: 56px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  position: relative;

  button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #dddddd;
    cursor: pointer;
    background-color: #fff !important;
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledNavbar>
      <button className="button" onClick={() => navigate(-1)} type="button">
        <LeftArrow stroke="black" />{' '}
      </button>
      <Text label="사라마라 라운지" />
      <div className="" />
    </StyledNavbar>
  );
}
