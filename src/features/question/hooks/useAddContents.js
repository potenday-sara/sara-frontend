import { useMutation } from "react-query";
import { postFeedback } from "../apis/postFeedback";
import Swal from "sweetalert2";

export default function useAddContents($type) {
  return useMutation(({ id, content }) => postFeedback(id, content), {
    onSuccess: () =>
      Swal.fire({
        icon: "info",
        text: `${$type === "sara" ? "Sara" : "Mara"}에게 의견을 전달했습니다.`,
      }),
    onError: () =>
      Swal.fire({
        icon: "error",
        text: "의견을 작성해주세요",
      }),
  });
}
