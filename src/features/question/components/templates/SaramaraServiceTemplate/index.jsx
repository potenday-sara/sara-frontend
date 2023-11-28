import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaramaraServiceTemplate } from './styles';
import SaramaraForm from '../../organisms/SaramaraForm';

import QuestionLoading from '../../organisms/QuestionLoading/index.jsx';
import QuestionAnwser from '../../organisms/QuestionAnswer/index.jsx';
import useQuestion from '../../../hooks/useQuestion.jsx';
import { Theme } from '../../../../../Styles.js';
import Tag from '../../atoms/Tag/index.jsx';
import { useNavigate } from 'react-router-dom';

export default function SaramaraServiceTemplate({ type }) {
  const {
    stage,
    QuestionFormData,
    SubmitQuestion,
    progress,
    answer,
    quesionId,
  } = useQuestion(type);
  const navigate = useNavigate();
  return (
    <StyledSaramaraServiceTemplate>
      {stage === 'initial' && (
        <SaramaraForm
          type={type}
          QuestionFormData={QuestionFormData}
          SubmitQuestion={SubmitQuestion}
        />
      )}

      {stage === 'process' && (
        <QuestionLoading
          type={type}
          QuestionFormData={QuestionFormData}
          progress={progress}
        />
      )}
      {stage === 'finish' && (
        <QuestionAnwser
          type={type}
          answer={answer}
          QuestionFormData={QuestionFormData}
          quesionId={quesionId}
        />
      )}
      <Tag
        type={'sara'}
        isActive={type === 'sara'}
        onClick={() => navigate('/question/sara')}
        style={{
          top: 30,
          left: 0,
        }}
      />
      <Tag
        onClick={() => navigate('/question/mara')}
        isActive={type === 'mara'}
        type={'mara'}
        style={{
          top: 78,
          left: 0,
        }}
      />
    </StyledSaramaraServiceTemplate>
  );
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
