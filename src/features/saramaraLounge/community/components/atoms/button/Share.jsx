import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShareIcon } from '../../../../../question/assets/Share.svg';
import { Theme } from '../../../../../../Styles';
import Text from '../../../../../../components/atoms/Text';

const StyledShare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 44px;
  border-radius: 36px;
  cursor: pointer;
  background-color: #f4f4f4;
`;

export default function Share() {
  return (
    <StyledShare
      onClick={() => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
          alert('링크가 복사되었습니다');
        });
      }}
    >
      <ShareIcon fill={Theme.color.white} />
      <Text size="12px" label="공유하기" color={Theme.color.black} />
    </StyledShare>
  );
}
