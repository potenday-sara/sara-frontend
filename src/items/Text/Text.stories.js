import { MainText } from "./Text";

export default {
  title: "Text",
  tags: ["autodocs"],
  component: MainText,
  argTypes: {
    color: {
      control: "color",
    },
  },
};

export const BigTitleText = {
  args: {
    type: "h1",
    color: "black",
    label: "살까말까할땐",
  },
};

export const MediumTitleText = {
  args: {
    type: "h2",
    color: "blue",
    label: "사라",
  },
};

export const BasicText = {
  args: {
    type: "p",
    color: "red",
    label: "마라",
  },
};
