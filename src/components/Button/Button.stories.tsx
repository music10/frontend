import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
