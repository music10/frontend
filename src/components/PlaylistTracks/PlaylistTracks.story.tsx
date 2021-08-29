import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TRACK_MOCK } from '../../mocks';
import { PlaylistTracks } from './PlaylistTracks';

export default {
  component: PlaylistTracks,
  title: 'Components/PlaylistTracks',
} as Meta;

export const Default: Story = (args) => (
  <PlaylistTracks tracks={Array(20).fill(TRACK_MOCK)} {...args} />
);
