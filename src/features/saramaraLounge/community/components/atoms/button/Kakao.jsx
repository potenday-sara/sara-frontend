import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as KaKaoShare } from '../../../assets/Kakao.svg';
import Text from '../../../../../../components/atoms/Text';
import { Theme } from '../../../../../../Styles';
import shareKakao from '../../../../../question/utils/shareKakao';

const StyledKakao = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 36px;
  flex-shrink: 0;
  cursor: pointer;

  background-color: #fee500;
`;

export default function Kakao() {
  const [seachParams] = useSearchParams();
  const qid = seachParams.get('questionId');

  return (
    <StyledKakao onClick={() => shareKakao('sara', qid, '')}>
      <KaKaoShare style={{ cursor: 'pointer' }} />
      <Text size="12px" label="카카오톡 공유" color={Theme.color.black} />
    </StyledKakao>
  );
}
