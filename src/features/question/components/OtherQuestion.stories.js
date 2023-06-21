import OtherQuestion from "./OtherQuestion";

export default {
  title: "Develop System/Items/OtherQuestion",
  tags: ["autodocs"],
  component: OtherQuestion,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "400px", backgroundColor: "blue", padding: "10px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <OtherQuestion {...args} />;
export const SaraOtherQuestion = Template.bind({});
SaraOtherQuestion.args = {
  type: "sara",
  label: "아이폰",
  text: "뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글",
};

export const MaraOtherQuestion = Template.bind({});
MaraOtherQuestion.args = {
  ...SaraOtherQuestion.args,
  type: "mara",
};
