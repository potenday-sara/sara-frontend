import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../../../../components/atoms/Text';
import Comment from '../../molecules/comment';
import Pagination from '../../../../../components/molecules/Pagination';
import { ReactComponent as CommentIcon } from '../../../assets/comment.svg';
import { ReactComponent as EmpaySara } from '../../../assets/emptysara.svg';
import useComment from '../../../hooks/useComment';

const StyledComments = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .wrapper {
    min-height: 120px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .empty {
      margin: auto;
    }
  }

  .comments-pagination {
    justify-content: left;
  }
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd;
`;

const StyledCommentForm = styled.form`
  width: 100%;
  display: flex;
  background-color: #f9f9f9;
  padding: 0px 8px;
  gap: 12px;

  textarea {
    width: 100%;
    padding: 11px 0px 11px 11px;
    height: 40px;
    border: none;
    background-color: transparent;
    resize: none;
    overflow: hidden;
    font-size: 13px;

    &:focus {
      outline: none;
    }
  }
  .text-count {
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

const StyledCommentSubmitButton = styled.button`
  height: 40px;
  width: auto;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border: none;
`;

export default function CommentList({ type, questionId }) {
  console.log('type:', type);
  const textareaRef = useRef(null);
  const [value, setValue] = useState('');
  const { handleCreateComment, showingComments, commentsData, page, handlePageChange, maxPage, commentsLoading } =
    useComment(questionId);
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = '40px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
    adjustTextareaHeight();
  };

  const onCreateComment = (e) => {
    e.preventDefault();
    handleCreateComment(value);
    setValue('');
  };

  console.log('comments:', commentsData);
  console.log('showingComments:', showingComments);
  return (
    <StyledComments>
      <Text bold="700" label={`${commentsData?.length} 댓글 `} size="14px" />
      <div className="wrapper">
        {!commentsLoading &&
          showingComments.length > 0 &&
          showingComments.map((comment) => <Comment comment={comment} />)}
        {!commentsLoading && commentsData.length === 0 && (
          <div className="empty">
            <EmpaySara />
          </div>
        )}
      </div>
      <Pagination
        className="comments-pagination"
        type="sara"
        leftClick={() => handlePageChange('prev')}
        rightClick={() => handlePageChange('next')}
        nowPage={page}
        maxPage={maxPage}
      />
      <StyledCommentForm placeholder="댓글을 입력해주세요" onSubmit={onCreateComment}>
        <textarea type="text" ref={textareaRef} onChange={onChange} value={value} />
        <div className="text-count">
          <Text color="#bbb" label={`${value.length}/300`} size="12px" />
        </div>
        <StyledCommentSubmitButton type="submit">
          <CommentIcon />
        </StyledCommentSubmitButton>
      </StyledCommentForm>
    </StyledComments>
  );
}

CommentList.propTypes = {
  type: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
};
