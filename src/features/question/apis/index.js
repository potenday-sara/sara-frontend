const QUESTIONS = '/questions/';
const ANSWER = '/answers';
const SHOP = '/shop';
const apis = {
  questions: QUESTIONS,
  questionsId: (id) => `${QUESTIONS}${id}/`,
  questionFeedback: (id) => {
    return `${QUESTIONS}${id}/feedback/`;
  },
  getAnswer: (id) => `${ANSWER}/${id}/`,
  postCS: (id) => `${QUESTIONS}${id}/cs/`,

  getCategories: `${SHOP}/categories/`,
  getItemsByCategories: (id) => `${SHOP}/categories/${id}/goods/`,
};

export default apis;
