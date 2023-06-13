import { object } from "prop-types";
import RealtimeTrends from "../../componentes/RealtimeTrends/RealtimeTrends";
import RealtimeTrend from "../../items/RealtimeTrend/RealtimeTrend";
import * as RealtimeTrendStories from "../../stories/items/Trend.stories";
import { useResizeObserver } from "../../hooks/hooks";
import { useEffect } from "react";
import { useState } from "react";

export default {
  title: "Develop System/Components/RealtimeTrends",
  tags: ["autodocs"],
  component: RealtimeTrends,
  argTypes: {},
  decorators: [
    (story) => <div style={{ padding: "3rem", width: "500px" }}>{story()}</div>,
  ],
};

const Template = (args) => <RealtimeTrends {...args} />;
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
