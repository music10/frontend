import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SearchField } from './SearchField';

export default {
  component: SearchField,
  title: 'Components/SearchField',
} as Meta;

export const Default: Story = (args) => <SearchField {...args} />;
