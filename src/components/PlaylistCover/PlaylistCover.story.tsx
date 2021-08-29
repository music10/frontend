import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { PLAYLIST_MOCK } from '../../mocks';
import { PlaylistCover } from './PlaylistCover';

export default {
  component: PlaylistCover,
  title: 'Components/PlaylistCover',
} as Meta;

export const Default: Story = (args) => (
  <PlaylistCover size={80} cover={PLAYLIST_MOCK.cover} {...args} />
);
