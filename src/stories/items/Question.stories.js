import Article from "../../items/Article/Article";

export default {
  title: "Develop System/Items/Question",
  tags: ["autodocs"],
  component: Article,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "400px", backgroundColor: "blue", padding: "10px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Article {...args} />;
export const SaraQuestion = Template.bind({});
SaraQuestion.args = {
  type: "sara",
  label: "아이폰",
  text: "뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글뭔가 긴글",
};

export const MaraQuestion = Template.bind({});
MaraQuestion.args = {
  ...SaraQuestion.args,
  type: "mara",
};
