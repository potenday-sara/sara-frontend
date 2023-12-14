import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './Styles';
import QuestionPage from './features/question';
import Onboarding from './features/main';
import NavigateGoogleForm from './components/organisms/NavigateGoogleForm';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/question/*" element={<QuestionPage />} />
      </Routes>
      <NavigateGoogleForm />
    </>
  );
}

export default App;
