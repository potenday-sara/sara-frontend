import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuestionTemplate from './components/templates/QuestionTemplate';
import SaramaraServiceTemplate from './components/templates/SaramaraServiceTemplate';
import Footer from '../../components/organisms/Footer';
import QuestionNavbar from './components/organisms/QuestionNavbar';

export default function QuestionPage() {
  return (
    <Routes>
      <Route
        path="/sara"
        element={
          <>
            <QuestionNavbar type="sara" />
            <QuestionTemplate type="sara">
              <SaramaraServiceTemplate type="sara" />
            </QuestionTemplate>
            <Footer />
          </>
        }
      />
      <Route
        path="/mara"
        element={
          <>
            <QuestionNavbar type="mara" />
            <QuestionTemplate type="mara">
              <SaramaraServiceTemplate type="mara" />
            </QuestionTemplate>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
