import { ClientQuestionAPI } from '@/apis/question/index';

export interface POSTQuestionResponseTypes {
  questionId: string;
  feedback: -1 | 0 | 1;
}

export interface POSTQuestionRequestTypes {
  question: string;
  feedback: -1 | 0 | 1;
}

const postQuestionFeedback = ({ question, feedback }: POSTQuestionRequestTypes) =>
  ClientQuestionAPI.post(`/${question}/feedback/`)
    .data({ question, feedback })
    .build()
    .call<POSTQuestionResponseTypes>();

export default postQuestionFeedback;
