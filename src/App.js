import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/main";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
