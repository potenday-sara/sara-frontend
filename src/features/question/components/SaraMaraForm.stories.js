import { MemoryRouter } from "react-router-dom";
import SaraMaraForm from "./SaraMaraForm";

export default {
  title: "Develop System/Components/Question",
  tags: ["autodocs"],
  component: SaraMaraForm,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "350px", padding: "10px" }}>
        <MemoryRouter>{Story()}</MemoryRouter>,
      </div>
    ),
  ],
};

const Template = (args) => <SaraMaraForm {...args} />;
export const Sarablank = Template.bind({});

Sarablank.args = {
  $type: "sara",
};

export const SaraText = Template.bind({});

SaraText.args = {
  $type: "sara",
  item: "맥북 프로 M2 14인치",
  explanation:
    "나는 작업도 하고 게임도 하는데 맥북은 게임 호환이 잘 안돼. 하지만 맥북은 이뻐",
};
