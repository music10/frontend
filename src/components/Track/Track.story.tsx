import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TRACK_MOCK } from '../../mocks';
import { Track } from './Track';

export default {
  component: Track,
  title: 'Components/Track',
} as Meta;

export const Default: Story = (args) => <Track {...TRACK_MOCK} {...args} />;
export const Success: Story = (args) => (
  <Track success {...TRACK_MOCK} {...args} />
);
export const Selected: Story = (args) => (
  <Track selected {...TRACK_MOCK} {...args} />
);

export const Disabled: Story = (args) => (
  <Track disabled {...TRACK_MOCK} {...args} />
);
export const DisabledSelected: Story = (args) => (
  <Track disabled {...TRACK_MOCK} {...args} />
);
export const DisabledSuccess: Story = (args) => (
  <Track disabled success {...TRACK_MOCK} {...args} />
);
