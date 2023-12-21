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

  return (
    <StyledFeedback>
      <Text
        label={`${firstChar} 가 도움이 되셨나요?`}
        bold="700"
        size="16px"
        color={Theme.color.midGray}
        style={{ marginBottom: 12 }}
      />
      <FeedbackSelect type={type} quesionId={quesionId} />
      <Form
        style={{
          position: 'relative',
          marginTop: 24,
        }}
        onSubmit={(e) => submitCSFeedback(e)}
      >
        <Form.Input>
          <Textarea
            id="feedback"
            style={{ padding: '16px 100px 16px 16px' }}
            isAutoHeight
            disabled={isFeedback}
            value={CScontent}
            onChange={onChange}
            ph={
              isFeedback ? '의견이 제출 됐습니다' : `${firstChar}에게 바라는 점 / 하고싶은 얘기가 있다면 작성해주세요`
            }
            rows={1}
            h={8}
          />
        </Form.Input>
        <Form.Button>
          <Button
            type="submit"
            className={isFeedback ? 'disabled' : ''}
            disabled={isFeedback}
            w="84px"
            h="33px"
            bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}
            onClick={(e) => submitCSFeedback(e)}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              borderRadius: 12,
            }}
          >
            <Text
              label="의견 보내기"
              color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
              size="14px"
              bold="700"
            />
          </Button>
        </Form.Button>
      </Form>
    </StyledFeedback>
  );
}

QuestionEmotionForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  quesionId: PropTypes.string.isRequired,
};
