import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PlayIcon } from '../icons';
import { MenuItem } from './MenuItem';

export default {
  component: MenuItem,
  title: 'Components/MenuItem',
} as Meta;

export const Default: Story = (args) => (
  <MenuItem icon={PlayIcon} text="Text" {...args} />
);

export const Primary: Story = (args) => (
  <MenuItem icon={PlayIcon} primary text="Text" {...args} />
);
