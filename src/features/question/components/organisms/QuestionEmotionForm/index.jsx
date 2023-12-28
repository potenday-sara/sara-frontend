import React from 'react';
import PropTypes from 'prop-types';
import StyledFeedback from './styles';
import FeedbackSelect from '../../molecules/FeedbackSelect';
import Text from '../../../../../components/atoms/Text';
import Form from '../../../../../components/molecules/Form';
import Textarea from '../../../../../components/atoms/Textarea';
import Button from '../../../../../components/atoms/Button';
import { Theme } from '../../../../../Styles';
import useFeedback from '../../../hooks/useFeedback';

export default function QuestionEmotionForm({ type, quesionId }) {
  const firstChar = type.charAt(0).toUpperCase() + type.slice(1);
  const { value: CScontent, onChange, submitCSFeedback, isFeedback } = useFeedback(quesionId);

  const checkDisabled = () => {
    return !!!CScontent?.length;
  };

  const checkCSLenght = (e) => {
    if (e.target?.value.length <= 500) onChange(e);
    else return;
  };
  return (
    <StyledFeedback>
      <Form>
        <Text
          label={`${firstChar} 가 도움이 되셨나요?`}
          bold="700"
          size="16px"
          color={Theme.color.midGray}
          style={{ marginBottom: 12, textAlign: 'center' }}
        />
        <FeedbackSelect type={type} quesionId={quesionId} />
      </Form>
      <Form onSubmit={(e) => submitCSFeedback(e)}>
        <Form.Input>
          <Textarea
            id="feedback"
            className="feedback-text"
            isAutoHeight
            disabled={isFeedback}
            value={CScontent}
            onChange={(e) => checkCSLenght(e)}
            ph={isFeedback ? '의견이 제출 됐습니다' : `${firstChar}에게 바라는 점 하고싶은\n얘기가 있다면 작성해주세요`}
            rows={1}
            h={8}
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
      </Form>
    </StyledFeedback>
  );
}

QuestionEmotionForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  quesionId: PropTypes.string.isRequired,
};
