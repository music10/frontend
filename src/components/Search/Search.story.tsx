import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Search } from './Search';

export default {
  component: Search,
  title: 'Components/Search',
} as Meta;

export const Default: Story = (args) => <Search {...args} />;
