import { useMutation } from "react-query";
import { postScore } from "../apis/postScore";

export default function useAddScore() {
  return useMutation(
    ({ id, score }) => postScore(id, score),

    {
      onSuccess: (data) => {},
      onError: (data) => {
      },
    }
  );
}
