const QUESTIONS = '/questions/';
const ANSWER = '/answers';

const apis = {
  questions: QUESTIONS,
  questionsId: (id) => `${QUESTIONS}${id}/`,
  questionFeedback: (id) => {
    return `${QUESTIONS}${id}/feedback/`;
  },
  getAnswer: (id) => `${ANSWER}/${id}/`,
  postCS: (id) => `${QUESTIONS}${id}/cs/`,
};

export default apis;
