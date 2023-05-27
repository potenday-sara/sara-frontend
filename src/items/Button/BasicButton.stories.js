import { BasicButton } from "./MainButton";

export default {
  title: "BasicButton",
  tags: ["autodocs"],
  component: BasicButton,
  argTypes: {
    $backgroundColor: {
      control: "color",
    },
  },
};

export const BasucButton = {
  args: {
    size: "medium",
    $backgroundColor: "white",
    label: `나이키 덩크 레트로 흰검`,
  },
};
