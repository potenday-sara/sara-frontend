import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './Styles';
import Onboarding from './features/main';
import QuestionPage from './features/question';
import LoungePage from './features/saramaraLounge';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/question/*" element={<QuestionPage />} />
        <Route path="/lounge/*" element={<LoungePage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
