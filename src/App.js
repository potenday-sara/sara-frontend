import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./Styles";
import Main from "./features/main";
import { QuestionRoutes } from "./features/question";
import Footer from "./components/Footer/Footer";
import Onboarding from "./features/onboarding";

function App() {

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question/*" element={<QuestionRoutes />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
