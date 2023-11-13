import { axios } from "../../../lib/axios";

export const getRangking = ($type) => {
  let type = $type === "sara" ? "SARA" : "MARA";

  return axios({
    method: "get",
    url: `/${type}/ranking`,
  });
};
