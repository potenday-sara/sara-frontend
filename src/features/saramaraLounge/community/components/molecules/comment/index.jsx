import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as SaraComment } from '../../../assets/saraComment.svg';
import { ReactComponent as MaraComment } from '../../../assets/maraComment.svg';
import Text from '../../../../../../components/atoms/Text';

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
  return (
    <StyledComment>
      <div className="img">{type === 'mara' ? <MaraComment /> : <SaraComment />}</div>
      <div className="contents">
        <Text label={comment.nickname} size="12px" color="#999" />
        <Text
          label={comment.content}
          size="12px"
          style={{
            wordBreak: 'break-all',
          }}
        />
        {/* <Text label={comment.date} size="12px" color="#999" /> */}
      </div>
    </StyledComment>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
