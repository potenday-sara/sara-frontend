import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router';
import { Theme } from '../../../../../Styles';
import Button from '../../../../../components/atoms/Button';
import Logo from '../../../../../components/atoms/Logo';
import Text from '../../../../../components/atoms/Text';
import Title from '../../../../../components/molecules/Title';
import useInterval from '../../../../../hooks/useInterval';
import AnswerContent from '../../molecules/AnswerContent';
import QuestionInfo from '../../molecules/QuestionInfo';
import QuestionFeedback from '../QuestionEmotionForm';
import StyledQuestionAnswer from './styles';
import { ReactComponent as Share } from '../../../assets/Share.svg';
import SaraMaraContext from '../../../../main/stores/SaraMaraContext';
import useFeedback from '../../../hooks/useFeedback';
import Form from '../../../../../components/molecules/Form';
import Textarea from '../../../../../components/atoms/Textarea';
import Toast from '../../../../../components/molecules/Toast';
import StyledFeedback from '../QuestionEmotionForm/styles';

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

export default function QuestionAnwser({ type, answer, QuestionFormData, quesionId, refreshForm }) {
  const [completedAnswer, setCompletedAnswer] = useState('');
  const [landingAnswer, setLandingAnswer] = useState('');
  const [count, setCount] = useState(0);
  const { setKeyword } = useContext(SaraMaraContext);
  const { value: CScontent, onChange, submitCSFeedback, isFeedback, returnFeedback } = useFeedback(quesionId);
  useEffect(() => {
    setCompletedAnswer(answer);
  }, [answer]);
  useInterval(() => {
    if (count >= completedAnswer.length) {
      return;
    }

    setLandingAnswer((prev) => {
      const result = prev ? prev + completedAnswer[count] : completedAnswer[0];
      setCount((prevCount) => prevCount + 1);
      return result;
    });
  }, 50);

  const navigate = useNavigate('');
  const QuestionNavigator = (from) => {
    refreshForm();
    navigate(from);
  };
  useEffect(() => {
    setKeyword(QuestionFormData.ItemValue);
  }, [QuestionFormData.ItemValue]);

  const firstChar = type.charAt(0).toUpperCase() + type.slice(1);

  const checkDisabled = () => {
    return !CScontent?.length;
  };

  const checkCSLenght = (e) => {
    if (e.target?.value.length <= 500) onChange(e);
  };
  return (
    <StyledQuestionAnswer>
      <section className="question-top">
        <Logo
          style={{
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          w="148px"
          className="logo"
          logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'}
        />
        <QuestionInfo type={type} QuestionFormData={QuestionFormData} style={{ marginBottom: 24 }} />
      </section>
      <section className="question-mid">
        <Logo
          w="180px"
          m="24px"
          className="logo"
          logoType={type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'}
        />
        <div style={{ position: 'relative' }}>
          <AnswerContent type={type} answer={landingAnswer} />
        </div>
        <section className="answer-bottom">
          <QuestionFeedback type={type} quesionId={quesionId} />
        </section>
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
                label="에게 한번 더!"
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
                label="에게도 물어볼까?"
              />
            </Title>
          </Button>
        </div>

        <section className="share">
          <Text size="14px" label="공유하기" />
          <Share
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
            }}
          />
        </section>
        <StyledFeedback>
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
                  <Text
                    size="12px"
                    label={`${CScontent?.length ? CScontent?.length : 0}/500`}
                    color="#ddd"
                    bold="500"
                  />
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
