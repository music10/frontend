import { Meta, Story } from '@storybook/react/types-6-0';
import { SearchField } from './SearchField';

export default {
  component: SearchField,
  title: 'Components/SearchField',
} as Meta;

export const Default: Story = (args) => <SearchField {...args} />;
export const Hover: Story = (args) => <SearchField variant="hover" {...args} />;
export const Active: Story = (args) => (
  <SearchField variant="active" {...args} />
);
export const Focus: Story = (args) => (
  <SearchField variant="focused" {...args} />
);
