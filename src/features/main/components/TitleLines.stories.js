import TitleLines from './TitleLines';

export default {
  title: 'Develop System/Items/TitleLines',
  component: TitleLines,
};

const Template = (args) => <TitleLines {...args} />;

export const SaraTitleLines = Template.bind({});
SaraTitleLines.args = {
  $type: 'sara',
};

export const MaraTitleLines = Template.bind({});
MaraTitleLines.args = {
  $type: 'mara',
};
