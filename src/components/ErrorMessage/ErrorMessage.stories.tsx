import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ErrorMessage } from './ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
} as Meta;

const Template = () => (
  <ErrorMessage>Ошибка: Нет соединения с сетью</ErrorMessage>
);

export const Default = Template.bind({});
