import { ClientQuestionAPI } from '@/apis/question/index';

export interface POSTIsLikeTypes {
  questionId: string;
}

const postIsLike = ({ questionId }: POSTIsLikeTypes) => ClientQuestionAPI.post(`/${questionId}/like/`).build().call();

export default postIsLike;
