import RealtimeTrend from './RealtimeTrend';

export default {
  title: 'Develop System/Items/RealtimeTrend',
  tags: ['autodocs'],
  component: RealtimeTrend,
  decorators: [
    (Story) => (
      <div style={{ width: '206px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <RealtimeTrend {...args} />;

export const SaraDefault = Template.bind({});
SaraDefault.args = {
  $type: 'sara',
  trend: '비스포크냉장고',
  idx: '1',
};

export const MaraDefault = Template.bind({});
MaraDefault.args = {
  ...SaraDefault.args,
  $type: 'mara',
};
