import { ChoiceButton } from "./ChoiceButton";

export default {
  title: "Develop System/Items/ChoiceButton",
  component: ChoiceButton,
};

const Template = (args) => <ChoiceButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  $type: "sara",
  size: "medium",
};
