import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionAnswer from './styles';
import Logo from '../../../../../components/atoms/Logo';
import QuestionInfo from '../../molecules/QuestionInfo';
import AnswerContent from '../../molecules/AnswerContent';
import Button from '../../../../../components/atoms/Button';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import QuestionFeedback from '../QuestionEmotionForm';

export default function QuestionAnwser({ type, answer, QuestionFormData, quesionId }) {
  return (
    <StyledQuestionAnswer>
      <section className="question-top">
        <Logo w="148px" logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'} />
        <QuestionInfo type="sara" QuestionFormData={QuestionFormData} />
      </section>
      <section className="question-mid">
        <Logo w="180px" m="24px" logoType={type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'} />
        <AnswerContent type={type} answer={answer} />
        <div className="button-wrap">
          <Button bg={Theme.color.saraSecondary}>
            <div className="button">
              <Logo w="74px" logoType="SaraTextWithCircleWhite" fill={Theme.color.saraPrimary} />
              <Text
                size="md"
                color={Theme.color.saraPrimary}
                label={type === 'sara' ? '에게 다른것 묻기' : '에게 물어보기'}
              />
            </div>
          </Button>
          <Button bg={Theme.color.maraSecondary}>
            <div className="button">
              <Logo w="74px" logoType="MaraTextWithCircleWhite" fill={Theme.color.maraPrimary} />
              <Text
                size="md"
                color={Theme.color.maraPrimary}
                label={type === 'mara' ? '에게 다른것 묻기' : '에게 물어보기'}
              />
            </div>
          </Button>
        </div>
        <section className="answer-bottom">
          <QuestionFeedback type={type} quesionId={quesionId} />
        </section>
      </section>
    </StyledQuestionAnswer>
  );
}

QuestionAnwser.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  answer: PropTypes.string,
  QuestionFormData: PropTypes.objectOf,
  quesionId: PropTypes.string.isRequired,
};

QuestionAnwser.defaultProps = {
  answer: '',
  QuestionFormData: {},
};