const QUESTIONS = '/questions/';
const CS = '/cs';

const apis = {
  questions: QUESTIONS,
  questionsId: (id) => QUESTIONS + id + '/',
  questionFeedback: (id) => {
    console.log(id);
    return QUESTIONS + id + '/feedback/';
  },

  cs: CS + '/feedback/',
};

export default apis;
