const QUESTIONS = '/questions/';
const ANSWER = '/answers';
const CS = '/cs';

const apis = {
  questions: QUESTIONS,
  questionsId: (id) => `${QUESTIONS}${id}/`,
  questionFeedback: (id) => {
    return `${QUESTIONS}${id}/feedback/`;
  },
  getAnswer: (id) => `${ANSWER}/${id}/`,
  cs: `${CS}/feedback/`,
};

export default apis;
