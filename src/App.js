import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./Styles";
import Footer from "./componentes/Footer/Footer";
import Main from "./features/main";
import { QuestionRoutes } from "./features/question";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question/*" element={<QuestionRoutes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
