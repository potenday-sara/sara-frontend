import { ChoiceButton } from "../../items/Button/ChoiceButton";

export default {
  title: "Develop System/Items/ChoiceButton",
  tags: ["autodocs"],
  component: ChoiceButton,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "250px" }}>
        <Story />
      </div>
    ),
  ],
};

export const SaraButton = {
  args: {
    $type: "sara",
  },
};

export const MaraButton = {
  args: {
    $type: "mara",
  },
};
