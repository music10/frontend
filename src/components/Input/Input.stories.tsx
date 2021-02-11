import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template = (props: any) => <Input {...props} />;

export const Default = Template.bind({});
