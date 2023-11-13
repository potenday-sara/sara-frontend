import { axios } from "../../../lib/axios";

export const getRealtimeTrendsAPI = ($type) => {
  let type = $type === "sara" ? "SARA" : "MARA";

  return axios({
    method: "get",
    url: `/${type}/ranking`,
  });
};
