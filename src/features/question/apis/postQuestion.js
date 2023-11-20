import  axios  from "../../../lib/axios";

export const postQuestion = (value, question, type) => {
  const data = {
    object: {
      value: value,
    },
    question: question,
    type: type,
  };

  return axios({ method: "post", data: data });
};
