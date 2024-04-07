import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as SaraComment } from '../../../assets/saraComment.svg';
import Text from '../../../../../components/atoms/Text';

const StyledComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;

  .contents {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 4px;
  }
`;

export default function Comment({ comment, type }) {
  console.log('type', type);
  return (
    <StyledComment>
      <div className="img">
        <SaraComment />
      </div>
      <div className="contents">
        <Text label={comment.name} size="12px" color="#999" />
        <Text label={comment.content} size="12px" />
        <Text label={comment.date} size="12px" color="#999" />
      </div>
    </StyledComment>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
