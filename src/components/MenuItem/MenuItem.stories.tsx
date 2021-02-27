import { Meta, Story } from '@storybook/react/types-6-0';
import { PlayIcon } from '../icons';
import { MenuItem } from './MenuItem';

export default {
  component: MenuItem,
  title: 'Components/MenuItem/Default',
} as Meta;

export const Default: Story = (args) => (
  <MenuItem icon={PlayIcon} to="#" text="Text" {...args} />
);
export const Hover: Story = (args) => (
  <MenuItem icon={PlayIcon} to="#" text="Text" variant="hover" {...args} />
);
export const Active: Story = (args) => (
  <MenuItem icon={PlayIcon} to="#" text="Text" variant="active" {...args} />
);
export const Focus: Story = (args) => (
  <MenuItem icon={PlayIcon} to="#" text="Text" variant="focused" {...args} />
);
