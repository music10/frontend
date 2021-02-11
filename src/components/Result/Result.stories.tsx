import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Result, ResultProps } from './Result';

export default {
  title: 'Components/Result',
  component: Result,
} as Meta;

const Template = (props: ResultProps) => <Result {...props} />;

export const Default = Template.bind({ guess: 5, all: 10 });
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
Default.args = {
  guess: 5,
  all: 10,
};
