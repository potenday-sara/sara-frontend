import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './Styles';
import { QuestionRoutes } from './features/question';
import Footer from './components/Footer/Footer';
import Onboarding from './features/onboarding';
import Navbar from './components/Navbar/Navbar';
import React from 'react';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/question/*" element={<QuestionRoutes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
