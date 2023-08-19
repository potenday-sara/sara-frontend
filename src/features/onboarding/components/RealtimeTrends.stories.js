import RealtimeTrends from "./RealtimeTrends";

export default {
  title: "Develop System/Components/RelatimeTrends",
  tags: ["autodocs"],
  component: RealtimeTrends,
  // decorators: [
  //   (story) => <div style={{ padding: "3rem", width: "500px" }}>{story()}</div>,
  // ],
};

const Template = (args) => <RealtimeTrends {...args} />;
export const SaraDefault = Template.bind({});
SaraDefault.args = {
  $type: "sara",
  data: [
    { object: "비스포크냉장고" },
    { object: "아이폰" },
    { object: "비스포크냉장고" },
    { object: "비스포크냉장고" },
    { object: "비스포크냉장고" },
    { object: "비스포크냉장고" },
    { object: "비스포크냉장고" },
  ],
};

export const MaraDefault = Template.bind({});
MaraDefault.args = {
  ...SaraDefault.args,
  $type: "mara",
};
