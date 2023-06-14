import { MemoryRouter } from "react-router-dom";
import MainPage from "../../pages/main";

export default {
  title: "Develop System/Pages/MainPage",
  component: MainPage,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const BasicMainPage = (args) => <MainPage {...args} />;
