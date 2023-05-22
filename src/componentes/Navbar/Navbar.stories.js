import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const BasicNavbar = {};
