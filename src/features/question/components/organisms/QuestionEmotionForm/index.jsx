import PropTypes from 'prop-types';
import React from 'react';
import { Theme } from '../../../../../Styles';
import Button from '../../../../../components/atoms/Button';
import Text from '../../../../../components/atoms/Text';
import Textarea from '../../../../../components/atoms/Textarea';
import Form from '../../../../../components/molecules/Form';
import Toast from '../../../../../components/molecules/Toast';
import useFeedback from '../../../hooks/useFeedback';
import FeedbackSelect from '../../molecules/FeedbackSelect';
import StyledFeedback from './styles';

export default function QuestionEmotionForm({ type, quesionId }) {
  const firstChar = type.charAt(0).toUpperCase() + type.slice(1);
  const { value: CScontent, onChange, submitCSFeedback, isFeedback, returnFeedback } = useFeedback(quesionId);

  const checkDisabled = () => {
    return !CScontent?.length;
  };

  const checkCSLenght = (e) => {
    if (e.target?.value.length <= 500) onChange(e);
  };
  return (
    <StyledFeedback type={type}>
      <Form>
        <Text
          label={type === 'sara' ? '도움됐샤?' : '도움됐먀?'}
          bold="700"
          size="16px"
          color={Theme.color.midGray}
          style={{ marginBottom: 12, textAlign: 'center' }}
        />
        <FeedbackSelect type={type} quesionId={quesionId} />
      </Form>
      <Form onSubmit={(e) => submitCSFeedback(e)} className={isFeedback ? 'cs-form is-feedback' : 'cs-form'}>
        {!isFeedback ? (
          <>
            <Form.Input>
              <Textarea
                id="feedback"
                className="feedback-text"
                isAutoHeight
                disabled={isFeedback}
                value={CScontent}
                onChange={(e) => checkCSLenght(e)}
                h="94px"
                ph={
                  isFeedback
                    ? '의견이 제출 됐습니다'
                    : `${firstChar}에게 바라는 점 하고싶은\n얘기가 있다면 작성해주세요`
                }
                rows={1}
              />
            </Form.Input>
            <div className="button-wrap">
              <Text size="12px" label={`${CScontent?.length ? CScontent?.length : 0}/500`} color="#ddd" bold="500" />
              <Form.Button>
                <Button
                  type="submit"
                  className={checkDisabled() ? 'disable-button' : ''}
                  disabled={checkDisabled()}
                  bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}
                  onClick={(e) => submitCSFeedback(e)}
                >
                  <Text
                    label="의견 보내기"
                    color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
                    size="14px"
                    bold="700"
                  />
                </Button>
              </Form.Button>
            </div>
          </>
        ) : (
          <Toast>
            <div className="image" />
            <Text
              size="14px"
              style={{ marginTop: 'auto' }}
              bold="700"
              color={Theme.color.black}
              label={
                type === 'sara'
                  ? `${type.charAt(0).toUpperCase() + type.slice(1)} 에게 의견을 보내줘서 고맙샤`
                  : `${type.charAt(0).toUpperCase() + type.slice(1)} 에게 의견을 보내줘서 고맙다먀`
              }
            />
            <Text
              label="의견 다시보내기"
              style={{ marginBottom: 'auto', cursor: 'pointer' }}
              color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
              size="12px"
              bold="700"
              onClick={returnFeedback}
            />
          </Toast>
        )}
      </Form>
    </StyledFeedback>
  );
}

QuestionEmotionForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  quesionId: PropTypes.string.isRequired,
};
