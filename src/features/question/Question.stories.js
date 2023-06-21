import { MemoryRouter } from "react-router-dom";
import Question from "./routes/Question";

export default {
  title: "Develop System/Pages/QuestionPage",
  component: Question,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/question"]}>{Story()}</MemoryRouter>
    ),
  ],
};

const Template = (args) => <Question {...args} />;

export const SaraQuestion = Template.bind({});
SaraQuestion.args = {
  $type: "sara",
};

export const MaraQuestion = Template.bind({});
MaraQuestion.args = {
  $type: "mara",
};
