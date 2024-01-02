import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuestionTemplate from './components/templates/QuestionTemplate';
import SaramaraServiceTemplate from './components/templates/SaramaraServiceTemplate';
import Footer from '../../components/organisms/Footer';
import QuestionNavbar from './components/organisms/QuestionNavbar';
import NavigateGoogleForm from '../../components/organisms/NavigateGoogleForm';

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
            <NavigateGoogleForm type="sara" />
            <Footer style={{ minWidth: 1200 }} />
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
            <NavigateGoogleForm type="mara" />
            <Footer style={{ minWidth: 1200 }} />
          </>
        }
      />
    </Routes>
  );
}
