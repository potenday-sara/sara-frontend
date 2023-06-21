import { MemoryRouter } from "react-router-dom";
import Main from ".";

export default {
  title: "Develop System/Pages/MainPage",
  component: Main,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const BasicMainPage = (args) => <Main {...args} />;
