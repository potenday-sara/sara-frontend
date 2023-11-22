import React from 'react';
import QuestionTemplate from './components/templates/QuestionTemplate';
import SaramaraServiceTemplate from './components/templates/SaramaraServiceTemplate';
import { Route, Routes } from 'react-router-dom';

export default function QuestionPage() {
  return (
    <Routes>
      <Route
        path="/sara"
        element={
          <QuestionTemplate type="sara">
            <SaramaraServiceTemplate type={'sara'} />
          </QuestionTemplate>
        }
      />
      <Route
        path="/mara"
        element={
          <QuestionTemplate type="mara">
            <SaramaraServiceTemplate type="mara" />
          </QuestionTemplate>
        }
      />
    </Routes>
  );
}
