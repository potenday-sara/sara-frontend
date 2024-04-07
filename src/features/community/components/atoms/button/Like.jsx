import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LineHeart } from '../../../assets/line_heart.svg';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

const StyledLikeButton = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0px 12px;
  gap: 8px;
  border-radius: 36px;
  border: 1px solid #ddd;
`;

export default function Like() {
  return (
    <StyledLikeButton>
      <LineHeart />
      <Text size="12px" label="좋아요" color={Theme.color.black} />
    </StyledLikeButton>
  );
}
