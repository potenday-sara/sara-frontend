import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import StyledSaramaraServiceTemplate from './styles';
import SaramaraForm from '../../organisms/SaramaraForm';
import QuestionLoading from '../../organisms/QuestionLoading';
import QuestionAnwser from '../../organisms/QuestionAnswer';
import useQuestion from '../../../hooks/useQuestion';
import Tag from '../../atoms/Tag';
import QuestionFailed from '../../organisms/QuestionFailed';

export default function SaramaraServiceTemplate({ type }) {
  const {
    stage,
    refreshForm,
    QuestionFormData,
    SubmitQuestion,
    retryForm,
    progress,
    quesionId,
    gptAnswer,
    setRetryRequest,
  } = useQuestion(type);
  const navigate = useNavigate();

  return (
    <StyledSaramaraServiceTemplate>
      {/* {stage === 'initial' && (
        <>
          <SaramaraForm type={type} QuestionFormData={QuestionFormData} SubmitQuestion={SubmitQuestion} />
          <Tag
            type="sara"
            $isActive={type === 'sara'}
            onClick={() => navigate('/question/sara')}
            style={{
              top: 30,
              left: 0,
            }}
          />
          <Tag
            onClick={() => navigate('/question/mara')}
            $isActive={type === 'mara'}
            type="mara"
            style={{
              top: 78,
              left: 0,
            }}
          />
        </>
      )}

      {stage === 'process' && <QuestionLoading type={type} QuestionFormData={QuestionFormData} progress={progress} />}
      {stage === 'finish' && (
        <QuestionAnwser
          type={type}
          answer={gptAnswer?.data?.content}
          QuestionFormData={QuestionFormData}
          quesionId={quesionId}
          refreshForm={refreshForm}
        />
      )}
      {stage === 'error' && (
        <QuestionFailed
          retryForm={retryForm}
          type={type}
          QuestionFormData={QuestionFormData}
          setRetryRequest={setRetryRequest}
        />
      )} */}
      <QuestionFailed
        retryForm={retryForm}
        type={type}
        QuestionFormData={QuestionFormData}
        setRetryRequest={setRetryRequest}
      />
    </StyledSaramaraServiceTemplate>
  );
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
