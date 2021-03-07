import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PLAYLIST_MOCK } from '../../mocks';
import { PlaylistInfo } from './PlaylistInfo';
import { PlaylistInfo as PlaylistInfoStatic } from './PlaylistInfoStatic';

export default {
  component: PlaylistInfo,
  title: 'Components/PlaylistInfo',
} as Meta;

export const Default: Story = (args) => (
  <PlaylistInfo {...PLAYLIST_MOCK} {...args} />
);
export const Static: Story = (args) => (
  <PlaylistInfoStatic {...PLAYLIST_MOCK} {...args} />
);
