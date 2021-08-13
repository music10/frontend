import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Loader } from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;

export const Default: Story = (args) => <Loader {...args} />;
