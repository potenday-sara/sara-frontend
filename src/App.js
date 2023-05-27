import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/main";
import { GlobalStyles } from "./Styles";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import Question from "./pages/questionpage";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sara" element={<Question />} />
        <Route path="/mara" element={<Question />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
