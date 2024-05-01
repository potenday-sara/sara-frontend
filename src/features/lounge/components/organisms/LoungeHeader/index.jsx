import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as HeaderBackArrow } from '../../../assets/HeaderBackArrow.svg';
import * as S from './styles';

export default function LoungeHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigate = () => {
    if (pathname?.endsWith('lounge')) navigate('/');
    if (pathname?.includes('community')) navigate('/lounge');
  };
  return (
    <S.StyledLoungeHeader>
      <S.StyledLoungeHeaderButton>
        <HeaderBackArrow onClick={handleNavigate} />
      </S.StyledLoungeHeaderButton>
      <p>사라마라 라운지</p>
    </S.StyledLoungeHeader>
  );
}
