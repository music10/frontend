import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PlaylistItem } from './PlaylistItem';

export default {
  component: PlaylistItem,
  title: 'Components/PlaylistItem',
} as Meta;

export const Default: Story = (args) => (
  <PlaylistItem
    cover="https://music.dergunov.net/images/hiphop.svg"
    id="playlist"
    name="Русский рэп"
    {...args}
  />
);
