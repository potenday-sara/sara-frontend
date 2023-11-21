import React from 'react';
import QuestionTemplate from './components/templates/QuestionTemplate';
import SaramaraServiceTemplate from './components/templates/SaramaraServiceTemplate';

export default function QuestionPage() {
  return (
    <>
      <QuestionTemplate>
        <SaramaraServiceTemplate />
      </QuestionTemplate>
    </>
  );
}
