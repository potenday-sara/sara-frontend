import React from 'react';
import { Theme } from '../../../../../Styles';
import useQuestion from '../../../hooks/useQuestion';
import Form from '../../../../../components/molecules/Form';
import Label from '../../../../../components/atoms/Label';
import Input from '../../../../../components/atoms/Input';
import Textarea from '../../../../../components/atoms/Textarea';
import Button from '../../../../../components/atoms/Button';
import Text from '../../../../../components/atoms/Text';

export default function SaramaraForm({ type }) {
  const { QuestionFormData, SubmitQuestion } = useQuestion();
  return (
    <Form onSubmit={SubmitQuestion}>
      <Form.Label>
        <Label
          m={'0 0 8px 0px'}
          htmlFor="item"
          text={<Text bold={'lg'} label={'어떤걸 사고싶어?'} />}
        />
      </Form.Label>
      <Form.Input>
        <Input
          id="item"
          h="56px"
          ph={'고민하는 물건을 적어주세요'}
          value={QuestionFormData.ItemValue}
          onChange={QuestionFormData.ItemChange}
        />
      </Form.Input>
      <Form.Label>
        <Label
          m={'16px 0 8px'}
          htmlFor="contents"
          text={<Text bold={'lg'} label={'왜 고민하고 있어?'} />}
        />
      </Form.Label>
      <Form.Input>
        <Textarea
          id="contents"
          h="88px"
          value={QuestionFormData.ContentsValue}
          onChange={QuestionFormData.ContentsChange}
          ph={
            'ex) 벌써 세 번 잃어버렸는데,이번에 사면 또 잃어버릴 것 같아서 못 사겠어...'
          }
        />
      </Form.Input>
      <Form.Button>
        <Button
          label={<Text label={'사야할까?'} color={'white'} />}
          m={'16px 0 0'}
          bg={
            type === 'sara' ? Theme.color.maraPrimary : Theme.color.saraPrimary
          }
          type={'submit'}
        />
      </Form.Button>
    </Form>
  );
}
