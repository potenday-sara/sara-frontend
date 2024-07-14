import { ServerQuestionAPI } from '@/apis/question/index';

export interface GetCommentListResponseTypes {
  id: string;
  content: string;
  nickname: string;
}

export interface GetCommentListRequestTypes {
  questionId: string;
}

const getCommentList = ({ questionId }: GetCommentListRequestTypes) =>
  ServerQuestionAPI.get(`/${questionId}/comments/`).build().call<GetCommentListResponseTypes[]>();

export default getCommentList;
