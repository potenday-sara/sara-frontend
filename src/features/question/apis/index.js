const QUESTIONS = '/questions/';

const apis = {
  questions: QUESTIONS,
  questionsId: (id) => QUESTIONS + id + '/',
  questionFeedback: (id) => {
    console.log(id);
    return QUESTIONS + id + '/feedback/';
  },
};

export default apis;
