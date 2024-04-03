import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './Styles';
import LoungePage from './features/lounge';
import Onboarding from './features/main';
import QuestionPage from './features/question';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/question/*" element={<QuestionPage />} />
        <Route path="/lounge" element={<LoungePage />} />
      </Routes>
    </>
  );
}

export default App;
