import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/organisms/Footer';
import NavigateGoogleForm from '../../components/organisms/NavigateGoogleForm';
import SaraMaraContext from '../main/stores/SaraMaraContext';
import QuestionNavbar from './components/organisms/QuestionNavbar';
import QuestionTemplate from './components/templates/QuestionTemplate';
import SaramaraServiceTemplate from './components/templates/SaramaraServiceTemplate';

export default function QuestionPage() {
  const [keyword, setKeyword] = useState('');
  const [stage, setStage] = useState('initial');
  const setStageValue = (val) => setStage(val);

  const saramaraStore = useMemo(() => {
    return { keyword, stage, setKeyword, setStageValue };
  }, [keyword, stage]);

  return (
    <SaraMaraContext.Provider value={saramaraStore}>
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
              <NavigateGoogleForm type="mara" />
              <Footer />
            </>
          }
        />
      </Routes>
    </SaraMaraContext.Provider>
  );
}
