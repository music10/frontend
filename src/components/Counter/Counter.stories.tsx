import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Counter } from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
} as Meta;

export const Default: Story = (args) => <Counter {...args} />;
