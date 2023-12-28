import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import StyledQuestionAnswer from './styles';
import Logo from '../../../../../components/atoms/Logo';
import QuestionInfo from '../../molecules/QuestionInfo';
import AnswerContent from '../../molecules/AnswerContent';
import Button from '../../../../../components/atoms/Button';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import QuestionFeedback from '../QuestionEmotionForm';
import Title from '../../../../../components/molecules/Title';

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

export default function QuestionAnwser({ type, answer, QuestionFormData, quesionId, refreshForm }) {
  const navigate = useNavigate('');
  const QuestionNavigator = (from) => {
    refreshForm();
    navigate(from);
  };
  return (
    <StyledQuestionAnswer>
      <section className="question-top">
        <Logo
          style={{
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
          w="148px"
          logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'}
        />
        <QuestionInfo type={type} QuestionFormData={QuestionFormData} style={{ marginBottom: 24 }} />
      </section>
      <section className="question-mid">
        <Logo w="180px" m="24px" logoType={type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'} />
        <AnswerContent type={type} answer={answer} />
        <div className="button-wrap">
          <Button
            bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}
            style={buttonStyle}
            onClick={
              type === 'sara' ? () => QuestionNavigator('/question/sara') : () => QuestionNavigator('/question/mara')
            }
          >
            <Title>
              <Logo
                w="73px"
                logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
                fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
              />
              <Text
                color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
                label={type === 'sara' ? '에게 물어보기' : '에게 물어보기'}
                size="14px"
                bold="700"
              />
            </Title>
          </Button>
          <Button
            bg={type === 'sara' ? Theme.color.maraSecondary : Theme.color.saraSecondary}
            style={buttonStyle}
            onClick={
              type === 'sara' ? () => QuestionNavigator('/question/mara') : () => QuestionNavigator('/question/sara')
            }
          >
            <Title>
              <Logo
                w="73px"
                logoType={type === 'mara' ? 'SaraTextOnly' : 'MaraTextOnly'}
                fill={type === 'mara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
              />
              <Text
                size="14px"
                bold="700"
                color={type === 'sara' ? Theme.color.maraPrimary : Theme.color.saraPrimary}
                label={type === 'mara' ? '에게 물어보기' : '에게 물어보기'}
              />
            </Title>
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
  QuestionFormData: PropTypes.shape({
    ItemValue: PropTypes.string,
    ItemChange: PropTypes.func,
    ContentsValue: PropTypes.string,
    ContentsChange: PropTypes.func,
  }).isRequired,

  quesionId: PropTypes.string.isRequired,
  refreshForm: PropTypes.func.isRequired,
};

QuestionAnwser.defaultProps = {
  answer: '',
};
