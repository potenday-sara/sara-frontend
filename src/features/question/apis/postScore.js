import { axios } from "../../../lib/axios";

export const postScore = (id, score) => {
  const data = {
    score: score,
    questionId: id,
  };

  return axios({ method: "post", url: "/assess/score", data });
};
