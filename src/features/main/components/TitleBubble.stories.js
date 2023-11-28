import TitleBubble from './TitleBubble';

export default {
  title: 'Develop System/Items/TitleBubble',
  component: TitleBubble,
};

const Template = (args) => <TitleBubble {...args} />;

export const SaraTitleBubble = Template.bind({});
TitleBubble.args = {
  $type: 'sara',
};

export const MaraTitleBubble = Template.bind({});
TitleBubble.args = {
  $type: 'mara',
};
