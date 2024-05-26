import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as LineHeart } from '../../../assets/line_heart.svg';
import Text from '../../../../../../components/atoms/Text';

const StyledLikeButton = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0px 12px;
  gap: 8px;
  border-radius: 36px;
  background-color: ${({ like }) => (like ? '#EF2B00' : 'white')};
  border: 1px solid ${({ like }) => (like ? '#EF2B00' : '#dddddd')};
  cursor: pointer;
`;

export default function Like({ count, onClick, isLike }) {
  return (
    <StyledLikeButton onClick={onClick} like={isLike}>
      <LineHeart fill="white" />
      <Text size="14px" label={count} color={isLike ? 'white' : '#666'} />
    </StyledLikeButton>
  );
}

Like.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isLike: PropTypes.bool.isRequired,
};
