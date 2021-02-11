import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { PROGRESS_MOCK } from '../../mocks';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template = (props: ProgressBarProps) => <ProgressBar {...props} />;

export const Default = Template.bind({ progress: PROGRESS_MOCK });
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
Default.args = { progress: PROGRESS_MOCK };

export const SelectTrack = Template.bind({
  progress: PROGRESS_MOCK,
  isSelectTrack: true,
});
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
SelectTrack.args = { progress: PROGRESS_MOCK, isSelectTrack: true };

export const Vertical = Template.bind({
  vertical: true,
  progress: PROGRESS_MOCK,
});
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
Vertical.args = { progress: PROGRESS_MOCK, vertical: true };
