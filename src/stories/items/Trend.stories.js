import RealtimeTrend from "../../items/RealtimeTrend/RealtimeTrend";

export default {
  title: "Develop System/Items/Trend",
  tags: ["autodocs"],
  component: RealtimeTrend,
};

const Template = (args) => <RealtimeTrend {...args} />;

export const Default = Template.bind({});
Default.args = {
  trend: "비스포크냉장고",
};
