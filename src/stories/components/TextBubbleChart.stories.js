import BubbleChartLayout from "../../componentes/BubbleChart/BubbleChartLayout";
import { getColor } from "../../layout/QuestionLayout";

export default {
  title: "Develop System/Components/TextBubbleChart",
  tags: ["autodocs"],
  component: BubbleChartLayout,
  argTypes: {},
  decorators: [
    (story) => <div style={{ padding: "3rem", width: "500px" }}>{story()}</div>,
  ],
};

const Template = (args) => <BubbleChartLayout {...args} />;
export const SaraTextBubbleChart = Template.bind({});
SaraTextBubbleChart.args = {
  data: [
    {
      label: "아이폰12",
      value: 10,
      color: getColor(10, "sara"),
    },
    {
      label: "아이폰11",
      value: 5,
      color: getColor(5, "sara"),
    },
    {
      label: "아이폰10",
      value: 2,
      color: getColor(2, "sara"),
    },
    {
      label: "아이폰9",
      value: 7,
      color: getColor(7, "sara"),
    },
    {
      label: "아이폰3",
      value: 3,
      color: getColor(3, "sara"),
    },
    {
      label: "맥북",
      value: 12,
      color: getColor(12, "sara"),
    },
    {
      label: "아반떼",
      value: 90,
      color: getColor(90, "sara"),
    },
  ],
};

export const MaraTextBubbleChart = Template.bind({});
MaraTextBubbleChart.args = {
  data: [
    {
      label: "아이폰12",
      value: 10,
      color: getColor(10, "mara"),
    },
    {
      label: "아이폰11",
      value: 5,
      color: getColor(5, "mara"),
    },
    {
      label: "아이폰10",
      value: 2,
      color: getColor(2, "mara"),
    },
    {
      label: "아이폰9",
      value: 7,
      color: getColor(7, "mara"),
    },
    {
      label: "아이폰3",
      value: 3,
      color: getColor(3, "mara"),
    },
    {
      label: "맥북",
      value: 12,
      color: getColor(12, "mara"),
    },
    {
      label: "아반떼",
      value: 90,
      color: getColor(90, "mara"),
    },
  ],
};
