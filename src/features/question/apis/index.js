const QUESTIONS = '/questions/';

const apis = {
  questions: QUESTIONS,
  questionsId: (id) => QUESTIONS + id,
  questionFeedback: (id) => QUESTIONS + id + '/feedback/',
};

export default apis;
