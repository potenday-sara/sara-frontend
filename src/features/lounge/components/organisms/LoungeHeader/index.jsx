import React from 'react';
import { ReactComponent as HeaderBackArrow } from '../../../assets/HeaderBackArrow.svg';
import * as S from './styles';

export default function LoungeHeader() {
  return (
    <S.StyledLoungeHeader>
      <S.StyledLoungeHeaderButton>
        <HeaderBackArrow />
      </S.StyledLoungeHeaderButton>
      <p>사라마라 라운지</p>
    </S.StyledLoungeHeader>
  );
}
