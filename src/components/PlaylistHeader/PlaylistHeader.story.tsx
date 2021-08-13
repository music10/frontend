import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { PLAYLIST_MOCK } from '../../mocks';
import { PlaylistHeader } from './PlaylistHeader';

export default {
  component: PlaylistHeader,
  title: 'Components/PlaylistHeader',
} as Meta;

export const Default: Story = (args) => (
  <PlaylistHeader {...PLAYLIST_MOCK} {...args} />
);
