import { MemoryRouter } from "react-router-dom";
import QuestionPage from "../../pages/questionpage";

export default {
  title: "Develop System/Pages/QuestionPage",
  component: QuestionPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/sara"]}>{Story()}</MemoryRouter>
    ),
  ],
};

export const SaraQuestionPage = (args) => <QuestionPage {...args} />;
