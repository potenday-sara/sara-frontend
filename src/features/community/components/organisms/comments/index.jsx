import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../../../../components/atoms/Text';
import Comment from '../../molecules/comment';

const StyledComments = styled.div`
  width: 100%;

  .wrapper {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default function CommentList({ comments, type }) {
  console.log('type', type);
  return (
    <StyledComments>
      <Text bold="700" label={`${comments.length} 댓글 `} size="14px" />
      <div className="wrapper">
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </StyledComments>
  );
}

CommentList.propTypes = {
  type: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
