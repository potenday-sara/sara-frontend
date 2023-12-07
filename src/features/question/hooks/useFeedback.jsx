import { useMutation } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';
import useInput from '../../../hooks/useInput';

const useFeedback = (id) => {
  const { value, onChange, setValue } = useInput('');
  const { mutate } = useMutation(async (data) => {
    await axios.post(apis.postCS(id), {
      content: data,
    });
  });

  const submitCSFeedback = (event) => {
    event.preventDefault();
    if (value.length < 1) return;
    mutate(value);
    setValue('');
  };

  return { value, onChange, submitCSFeedback };
};

export default useFeedback;
