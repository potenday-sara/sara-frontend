import { useMutation } from 'react-query';
import useInput from '../../../hooks/useInput';
import axios from '../../../lib/axios';
import apis from '../apis';

/**
 * 질문 전송 및 데이터 관리 훅
 * @returns QuestionFormData
 */
const useQuestion = (type) => {
  const { value: ItemValue, onChange: ItemChange } = useInput('');
  const { value: ContentsValue, onChange: ContentsChange } = useInput('');
  const { mutate } = useMutation((data) => postQuestion(data));

  const QuestionFormData = {
    ItemValue,
    ItemChange,
    ContentsValue,
    ContentsChange,
  };

  const SubmitQuestion = (event) => {
    event.preventDefault();
    console.log(ItemValue, ContentsValue);
    const data = mutate(ItemValue, ContentsValue, type);

    console.log(data);
  };

  return { QuestionFormData, SubmitQuestion };
};

export default useQuestion;
