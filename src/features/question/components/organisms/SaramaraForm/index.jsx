import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../../../../Styles';
import Button from '../../../../../components/atoms/Button';
import Input from '../../../../../components/atoms/Input';
import Label from '../../../../../components/atoms/Label';
import Logo from '../../../../../components/atoms/Logo';
import Text from '../../../../../components/atoms/Text';
import Textarea from '../../../../../components/atoms/Textarea';
import Form from '../../../../../components/molecules/Form';
import StyledSaramaraForm from './styles';

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
    else {
      QuestionFormData.ItemChange(event);
      setItemError(false);
    }
  };
  const contentChange = (event) => {
    if (event?.target?.value.length > 200) setContentError(true);
    else {
      QuestionFormData.ContentsChange(event);
      setContentError(false);
    }
  };

  const checkDisabled = () => {
    return !QuestionFormData.ItemValue && !QuestionFormData.ContentsValue;
  };

  const isInputing = (text) => {
    return !!text.length;
  };

  return (
    <StyledSaramaraForm>
      <Logo
        className="type-logo"
        style={{
          cursor: 'pointer',
        }}
        fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        onClick={() => navigate('/')}
        logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'}
      />
      <Logo className="character-logo" logoType={type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'} />
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label>
          <Label
            htmlFor="item"
            text={
              <Text
                bold="700"
                size="14px"
                label={type === 'sara' ? '어떤 걸 사고싶샤?' : '뭘 사고 싶먀?'}
                color={Theme.color.midGray}
              />
            }
          />
        </Form.Label>
        <Form.Error>{itemError ? <Text label="1자 ~ 30자 이내로 입력해주세요" size="13px" /> : null}</Form.Error>
        <Form.Input isError={itemError}>
          <Input
            id="item"
            h="56px"
            ph="블루투스 이어폰"
            className={isInputing(QuestionFormData.ItemValue) ? `${type}-inputing ${type}-input` : `${type}-input`}
            value={QuestionFormData.ItemValue}
            onChange={ItemChange}
          />
        </Form.Input>
        <Form.Label className="second-input">
          <Label
            htmlFor="contents"
            text={
              <Text
                bold="700"
                size="14px"
                label={type === 'sara' ? '왜 고민하고 있샤?' : '뭔데 고민하고 있먀?'}
                color={Theme.color.midGray}
              />
            }
          />
        </Form.Label>
        <Form.Error>{contentError ? <Text label="5자 ~ 200자 이내로 입력해주세요" size="13px" /> : null}</Form.Error>
        <Form.Input isError={contentError}>
          <Textarea
            className={isInputing(QuestionFormData.ContentsValue) ? `${type}-inputing ${type}-input` : `${type}-input`}
            id="contents"
            h="88px"
            value={QuestionFormData.ContentsValue}
            onChange={contentChange}
            ph="고민하고있는 이유를 알려주세요! &#13; ex)비싸서 / 유행인데 사도될까?"
          />
        </Form.Input>

        <Form.Button>
          <Button
            className={
              failedSubmit ? `${type}-basic failed-submit` : checkDisabled() ? `${type}-disabled` : `${type}-basic`
            }
            type="submit"
            disabled={checkDisabled()}
            onClick={onSubmit}
          >
            <Text
              label={`${QuestionFormData.ItemValue || '고민되는 물건을 '} ${
                type === 'sara' ? '사고 싶샤?' : '사도 될 것 같먀?'
              }`}
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
