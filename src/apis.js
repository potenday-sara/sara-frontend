import axios from "axios";

const BASE_URL = "http://115.85.181.180:8080/api/question";

export const getRangking = ($type) => {
  let type = $type === "sara" ? "SARA" : "MARA";

  return axios({
    method: "get",
    url: `${BASE_URL}/${type}/ranking`,
  });
};

export const getQuestions = ($type) => {
  let type = $type === "/sara" ? "SARA" : "MARA";

  return axios({
    method: "get",
    url: `${BASE_URL}/${type}/questions`,
  });
};

export const postQuestion = (value, question, type) => {
  const data = {
    object: {
      value: value,
    },
    question: question,
    type: type,
  };

  return axios({ method: "post", url: `${BASE_URL}`, data: data });
};
