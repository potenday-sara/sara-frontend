import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './Styles';
import Community from './features/community';
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
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
