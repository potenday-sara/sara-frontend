import { ClientQuestionAPI } from '@/apis/question/index';

export interface POSTIsLikeTypes {
  questionId: string;
}

const deleteIsLike = ({ questionId }: POSTIsLikeTypes) =>
  ClientQuestionAPI.delete(`/${questionId}/like/`).build().call();

export default deleteIsLike;
