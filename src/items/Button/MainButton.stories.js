import { ChoiceButton } from "./MainButton";

export default {
  title: "ChoiceButton",
  tags: ["autodocs"],
  component: ChoiceButton,
  argTypes: {
    $backgroundColor: {
      control: "color",
    },
  },
};

export const SaraButton = {
  args: {
    size: "large",
    type: "sara",
    $backgroundColor: "blue",
    label: `에게 물어보기`,
  },
};

export const MaraButton = {
  args: {
    size: "large",
    type: "mara",
    $backgroundColor: "red",
    label: `에게 물어보기`,
  },
};
