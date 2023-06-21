import RealtimeKeyword from "./RealtimeKeyword";

export default {
  title: "Develop System/Items/RealtimeKeyword",
  tags: ["autodocs"],
  component: RealtimeKeyword,
};

const Template = (args) => <RealtimeKeyword {...args} />;

export const Default = Template.bind({});
Default.args = {
  trend: "비스포크냉장고",
};
