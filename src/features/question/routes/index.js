import { Route, Routes } from "react-router-dom";
import Question from "./Question";
import Navbar from "../../../componentes/Navbar/Navbar";

export const QuestionRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/sara" element={<Question $type={"sara"} />} />
        <Route path="/mara" element={<Question $type={"mara"} />} />
      </Routes>
    </>
  );
};
