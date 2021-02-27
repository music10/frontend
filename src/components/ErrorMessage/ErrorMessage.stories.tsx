import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ErrorMessage } from './ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
} as Meta;

export const Default: Story = (args) => (
  <ErrorMessage {...args}>Ошибка: Нет соединения с сетью</ErrorMessage>
);
