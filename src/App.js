import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/main";
import { GlobalStyles } from "./Styles";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page" element={<>안녕</>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
