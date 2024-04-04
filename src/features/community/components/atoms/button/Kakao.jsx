import React from 'react';
import styled from 'styled-components';
import { ReactComponent as KaKaoShare } from '../../../assets/Kakao.svg';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

const StyledKakao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 36px;
  flex-shrink: 0;

  background-color: #fee500;
`;

export default function Kakao() {
  return (
    <StyledKakao>
      <KaKaoShare style={{ cursor: 'pointer' }} />
      <Text size="12px" label="카카오톡 공유" color={Theme.color.black} />
    </StyledKakao>
  );
}
