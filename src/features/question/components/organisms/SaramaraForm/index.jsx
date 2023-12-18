import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../../../../Styles';
import Form from '../../../../../components/molecules/Form';
import Label from '../../../../../components/atoms/Label';
import Input from '../../../../../components/atoms/Input';
import Textarea from '../../../../../components/atoms/Textarea';
import Button from '../../../../../components/atoms/Button';
import Text from '../../../../../components/atoms/Text';
import StyledSaramaraForm from './styles';
import Logo from '../../../../../components/atoms/Logo';

const checkItemLength = (string) => string.length > 0 && string.length <= 30;
const checkContentLegth = (string) => string.length > 4 && string.length <= 200;

export default function SaramaraForm({ type, QuestionFormData, SubmitQuestion }) {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!checkItemLength(QuestionFormData.ItemValue)) {
      console.log('아이템 유효성 검사 실패');
      return;
    }

    if (!checkContentLegth(QuestionFormData.ContentsValue)) {
      console.log('콘텐츠 유효성 검사 실패');
      return;
    }

    SubmitQuestion();
  };
  return (
    <StyledSaramaraForm>
      <Logo
        style={{
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
        w="148px"
        logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'}
      />
      <Logo w="180px" m="24px" logoType={type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'} />
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label>
          <Label
            m="0 0 8px 0px"
            htmlFor="item"
            text={<Text bold="700" size="14px" label="어떤걸 사고싶어?" color={Theme.color.midGray} />}
          />
        </Form.Label>
        <Form.Input>
          <Input
            id="item"
            h="56px"
            ph="고민하는 물건을 적어주세요"
            value={QuestionFormData.ItemValue}
            onChange={QuestionFormData.ItemChange}
          />
        </Form.Input>
        <Form.Label>
          <Label
            m="16px 0 8px"
            htmlFor="contents"
            text={<Text bold="700" size="14px" label="왜 고민하고 있어?" color={Theme.color.midGray} />}
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
            ph="ex) 벌써 세 번 잃어버렸는데,이번에 사면 또 잃어버릴 것 같아서 못 사겠어..."
          />
        </Form.Input>
        <Form.Button>
          <Button
            m="16px 0 0"
            h="56px"
            bg={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            type="submit"
            onClick={onSubmit}
          >
            <Text
              label={`${QuestionFormData?.ItemValue || ''} 사야할까?`}
              size="14px"
              bold="700"
              color={Theme.color.white}
            />
          </Button>
        </Form.Button>
      </Form>
    </StyledSaramaraForm>
  );
}

SaramaraForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  QuestionFormData: PropTypes.shape({
    ItemValue: PropTypes.string,
    ItemChange: PropTypes.func,
    ContentsValue: PropTypes.string,
    ContentsChange: PropTypes.func,
  }),
  SubmitQuestion: PropTypes.func,
};

SaramaraForm.defaultProps = {
  QuestionFormData: {},
  SubmitQuestion: undefined,
};
