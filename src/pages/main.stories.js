// import { within, userEvent } from '@storybook/testing-library';

import { MemoryRouter } from "react-router-dom";
import MainPage from "./main";

export default {
  title: "MainPage",
  component: MainPage,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const BasicMainPage = {};
