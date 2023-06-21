import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://115.85.181.180:8080/api/question",
});
