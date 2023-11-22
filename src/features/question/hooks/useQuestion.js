import { useMutation } from 'react-query';
import useInput from '../../../hooks/useInput';
import axios from '../../../lib/axios';
import apis from '../apis';

/**
 * 질문 전송 및 데이터 관리 훅
 * @returns QuestionFormData
 */
const useQuestion = () => {
  const { value: ItemValue, onChange: ItemChange } = useInput();
  const { value: ContentsValue, onChange: ContentsChange } = useInput();
  const { mutate } = useMutation((data) => postQuestion(data));

  const QuestionFormData = {
    ItemValue,
    ItemChange,
    ContentsValue,
    ContentsChange,
  };

  const postQuestion = async () => {
    const data = await axios({
      url: apis.questions,
      method: 'post',
      data: {
        product: ItemValue,
        content: ContentsValue,
        type: 'sara',
      },
    });
    console.log(data);
    return data;
  };
  const SubmitQuestion = (event) => {
    event.preventDefault();
    console.log(ItemValue, ContentsValue);
    const data = mutate(ItemValue, ContentsValue, 'sara');

    console.log(data);
  };

  return { QuestionFormData, SubmitQuestion };
};

export default useQuestion;
