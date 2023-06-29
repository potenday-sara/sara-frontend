import { axios } from "../../../lib/axios";

export const postScore = (id, score) => {
  const data = {
    questionId: id,
    score,
  };

  return axios({ method: "post", url: "/assess/score", data: data });
};
