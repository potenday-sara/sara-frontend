import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaramaraServiceTemplate } from './styles';
import SaramaraForm from '../../organisms/SaramaraForm';

import QuestionLoading from '../../organisms/QuestionLoading/index.jsx';
import QuestionAnwser from '../../organisms/QuestionAnswer/index.jsx';
import useQuestion from '../../../hooks/useQuestion.js';

export default function SaramaraServiceTemplate({ type }) {
  const { stage, QuestionFormData, SubmitQuestion, progress, answer } =
    useQuestion(type);
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
        />
      )}
    </StyledSaramaraServiceTemplate>
  );
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
