import { getChartColor } from "../utils/getStyles";
import BubbleChartLayout from "./BubbleChartLayout";

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
      color: getChartColor(10, "sara"),
    },
    {
      label: "아이폰11",
      value: 5,
      color: getChartColor(5, "sara"),
    },
    {
      label: "아이폰10",
      value: 2,
      color: getChartColor(2, "sara"),
    },
    {
      label: "아이폰9",
      value: 7,
      color: getChartColor(7, "sara"),
    },
    {
      label: "아이폰3",
      value: 3,
      color: getChartColor(3, "sara"),
    },
    {
      label: "맥북",
      value: 12,
      color: getChartColor(12, "sara"),
    },
    {
      label: "아반떼",
      value: 90,
      color: getChartColor(90, "sara"),
    },
  ],
};

export const MaraTextBubbleChart = Template.bind({});
MaraTextBubbleChart.args = {
  data: [
    {
      label: "아이폰12",
      value: 10,
      color: getChartColor(10, "mara"),
    },
    {
      label: "아이폰11",
      value: 5,
      color: getChartColor(5, "mara"),
    },
    {
      label: "아이폰10",
      value: 2,
      color: getChartColor(2, "mara"),
    },
    {
      label: "아이폰9",
      value: 7,
      color: getChartColor(7, "mara"),
    },
    {
      label: "아이폰3",
      value: 3,
      color: getChartColor(3, "mara"),
    },
    {
      label: "맥북",
      value: 12,
      color: getChartColor(12, "mara"),
    },
    {
      label: "아반떼",
      value: 90,
      color: getChartColor(90, "mara"),
    },
  ],
};
