import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RewindIcon } from '../icons';
import { theme } from '../../themes';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

export const Default: Story = (args) => (
  <Button {...args}>
    <RewindIcon fill={theme.colors.main50} />
  </Button>
);
