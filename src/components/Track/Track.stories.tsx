import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Track } from './Track';

export default {
  component: Track,
  title: 'Components/Track',
} as Meta;

const TRACK = {
  id: 'track',
  artist: 'CENTR',
  name: 'Город дорог',
};

export const Default: Story = (args) => <Track {...TRACK} {...args} />;
export const Success: Story = (args) => <Track success {...TRACK} {...args} />;
export const Selected: Story = (args) => (
  <Track selected {...TRACK} {...args} />
);
export const Disabled: Story = (args) => (
  <Track disabled {...TRACK} {...args} />
);
export const DisabledSelected: Story = (args) => (
  <Track disabled {...TRACK} {...args} />
);
export const DisabledSuccess: Story = (args) => (
  <Track disabled success {...TRACK} {...args} />
);
