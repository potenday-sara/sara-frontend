import PropTypes from 'prop-types';
import React from 'react';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import Form from '../../../../../components/molecules/Form';
import FeedbackSelect from '../../molecules/FeedbackSelect';
import StyledFeedback from './styles';

export default function QuestionEmotionForm({ type, quesionId }) {
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
    </StyledFeedback>
  );
}

QuestionEmotionForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  quesionId: PropTypes.string.isRequired,
};
