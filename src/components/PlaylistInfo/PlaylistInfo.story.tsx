import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PLAYLIST_MOCK } from '../../mocks';
import { PlaylistInfo } from './PlaylistInfo';

export default {
  component: PlaylistInfo,
  title: 'Components/PlaylistInfo',
} as Meta;

export const Default: Story = (args) => (
  <PlaylistInfo {...PLAYLIST_MOCK} {...args} />
);
export const Hover: Story = (args) => (
  <PlaylistInfo {...PLAYLIST_MOCK} variant="hover" {...args} />
);
export const Active: Story = (args) => (
  <PlaylistInfo {...PLAYLIST_MOCK} variant="active" {...args} />
);
export const Focus: Story = (args) => (
  <PlaylistInfo {...PLAYLIST_MOCK} variant="focused" {...args} />
);
