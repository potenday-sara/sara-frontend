import React, { useState } from 'react';
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
  const [itemError, setItemError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [failedSubmit, setFailedSubmit] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    let itemFailed = false;
    let contentFailed = false;
    e.preventDefault();
    if (!checkItemLength(QuestionFormData.ItemValue)) {
      setItemError(true);
      itemFailed = true;
    }

    if (!checkContentLegth(QuestionFormData.ContentsValue)) {
      setContentError(true);
      contentFailed = true;
    }

    if (!itemFailed && !contentFailed) SubmitQuestion();
    else {
      setFailedSubmit(true);

      setTimeout(() => {
        setFailedSubmit(false);
      }, 400);
    }
  };

  const ItemChange = (event) => {
    if (event?.target?.value.length > 30) setItemError(true);
    else QuestionFormData.ItemChange(event);
    setItemError(false);
  };
  const contentChange = (event) => {
    if (event?.target?.value.length > 200) setContentError(true);
    else QuestionFormData.ContentsChange(event);
    setContentError(false);
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
            htmlFor="item"
            text={<Text bold="700" size="14px" label="어떤걸 사고싶어?" color={Theme.color.midGray} />}
          />
        </Form.Label>
        <Form.Error>{itemError ? <Text label="1자 ~ 30자 이내로 입력해주세요" size="13px" /> : null}</Form.Error>
        <Form.Input isError={itemError}>
          <Input id="item" h="56px" ph="블루투스 이어폰" value={QuestionFormData.ItemValue} onChange={ItemChange} />
        </Form.Input>
        <Form.Label className="second-input">
          <Label
            htmlFor="contents"
            text={<Text bold="700" size="14px" label="왜 고민하고 있어?" color={Theme.color.midGray} />}
          />
        </Form.Label>
        <Form.Error>{contentError ? <Text label="5자 ~ 200자 이내로 입력해주세요" size="13px" /> : null}</Form.Error>
        <Form.Input isError={contentError}>
          <Textarea
            id="contents"
            h="88px"
            style={{
              padding: '24px 32px',
            }}
            value={QuestionFormData.ContentsValue}
            onChange={contentChange}
            ph="고민하고있는 이유를 알려주세요! &#13; ex)비싸서 / 유행인데 사도될까?"
          />
        </Form.Input>

        <Form.Button>
          <Button
            className={failedSubmit ? 'failed-submit' : ''}
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
