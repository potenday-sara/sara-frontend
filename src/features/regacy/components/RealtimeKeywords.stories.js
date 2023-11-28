import RealtimeKeywords from "./RealtimeKeywords";

export default {
  title: "Develop System/Components/RelatimeKeywords",
  tags: ["autodocs"],
  component: RealtimeKeywords,
  argTypes: {},
  decorators: [
    (story) => <div style={{ padding: "3rem", width: "500px" }}>{story()}</div>,
  ],
};

const Template = (args) => <RealtimeKeywords {...args} />;
export const Sara = Template.bind({});

Sara.args = {
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

export const Mara = Template.bind({});
Mara.args = {
  $type: "mara",
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
