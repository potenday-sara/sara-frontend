import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from '../../../../../Styles';
import useQuestion from '../../../hooks/useQuestion';
import Form from '../../../../../components/molecules/Form';
import Label from '../../../../../components/atoms/Label';
import Input from '../../../../../components/atoms/Input';
import Textarea from '../../../../../components/atoms/Textarea';
import Button from '../../../../../components/atoms/Button';
import Text from '../../../../../components/atoms/Text';
import StyledSaramaraForm from './styles';
import Logo from '../../../../../components/atoms/Logo';

export default function SaramaraForm({
  type,
  QuestionFormData,
  SubmitQuestion,
}) {
  return (
    <StyledSaramaraForm>
      <Logo
        w={'148px'}
        logoType={
          type === 'sara'
            ? 'SaraTextWithCircleWithText'
            : 'MaraTextWithCircleWithText'
        }
      />
      <Logo
        w={'180px'}
        m={'24px'}
        logoType={
          type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'
        }
      />
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
            style={{
              padding: '24px 32px',
            }}
            value={QuestionFormData.ContentsValue}
            onChange={QuestionFormData.ContentsChange}
            ph={
              'ex) 벌써 세 번 잃어버렸는데,이번에 사면 또 잃어버릴 것 같아서 못 사겠어...'
            }
          />
        </Form.Input>
        <Form.Button>
          <Button
            m={'16px 0 0'}
            bg={
              type === 'sara'
                ? Theme.color.saraPrimary
                : Theme.color.maraPrimary
            }
            type={'submit'}
            onClick={SubmitQuestion}
          >
            <Text
              label={`${QuestionFormData?.ItemValue || ''} 사야할까?`}
              color={'white'}
            />
          </Button>
        </Form.Button>
      </Form>
    </StyledSaramaraForm>
  );
}

SaramaraForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
