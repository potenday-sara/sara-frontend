import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './Styles';
import QuestionPage from './features/question';
import Onboarding from './features/main';
import Community from './features/community';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/question/*" element={<QuestionPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
