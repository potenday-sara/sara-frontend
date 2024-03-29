import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './Styles';
import QuestionPage from './features/question';
import Onboarding from './features/main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/question/*" element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
