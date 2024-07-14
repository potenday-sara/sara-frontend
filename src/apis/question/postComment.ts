import { ClientQuestionAPI } from '@/apis/question/index';

export interface POSTCommentResponseTypes {
  id: string;
  content: string;
  nickname: string;
}

export interface POSTCommentRequestTypes {
  nickname: string;
  content: string;
  questionId: string;
}

const postComment = ({ questionId, nickname, content }: POSTCommentRequestTypes) =>
  ClientQuestionAPI.post(`/${questionId}/comments/`)
    .data({ nickname, content })
    .build()
    .call<POSTCommentResponseTypes>();

export default postComment;
