import { BasicText } from "./Text";

export default {
  title: "Develop System/Items/BasicText",
  component: BasicText,
};

const Template = (args) => <BasicText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '안녕하세요 디폴트 문자입니다',
};


export const SaraText = Template.bind({});
SaraText.args = {
  ...Default.args,
  $color: 'blue'
}

export const MaraText = Template.bind({});
SaraText.args = {
  ...Default.args,
  $color: 'red'
}
