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
export const Hover: Story = (args) => (
  <Track variant="hover" {...TRACK} {...args} />
);
export const Active: Story = (args) => (
  <Track variant="active" {...TRACK} {...args} />
);
export const Inactive: Story = (args) => (
  <Track variant="inactive" {...TRACK} {...args} />
);
export const Focus: Story = (args) => (
  <Track variant="focused" {...TRACK} {...args} />
);
export const Success: Story = (args) => (
  <Track variant="success" {...TRACK} {...args} />
);
