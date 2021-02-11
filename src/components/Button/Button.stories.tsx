import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template = (props: ButtonProps) => <Button {...props}>Button</Button>;

export const Default = Template.bind({});

export const Primary = Template.bind({});
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
Primary.args = { primary: true };
// Primary.props = { primary: true };
