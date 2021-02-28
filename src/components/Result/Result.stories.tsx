import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Result } from './Result';

export default {
  title: 'Components/Result',
  component: Result,
} as Meta;

export const Default: Story = (args) => <Result guess={6} all={10} {...args} />;
