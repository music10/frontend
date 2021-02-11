import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Loader } from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;

const Template = () => <Loader />;

export const Default = Template.bind({});
