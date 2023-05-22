import { NavbarButton } from "./NavbarButton";

export default {
  title: "NavbarButton",
  tags: ["autodocs"],
  component: NavbarButton,
};

export const NowPage = {
  args: {
    $primary: true,
    size: "medium",
    label: "Sara",
  },
};

export const NotNow = {
  args: {
    $primary: false,
    size: "medium",
    label: "페이지",
  },
};

export const Login = {
  args: {
    $primary: false,
    size: "small",
    label: "로그인",
  },
};

export const Test = {
  args: {
    $primary: false,
    size: "small",
    label: "로그인",
  },
};
