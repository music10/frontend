import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuProvider } from 'react-native-popup-menu';
import { PLAYLIST_MOCK } from '../../mocks';
import { PlaylistItem } from './PlaylistItem';

export default {
  component: PlaylistItem,
  title: 'Components/PlaylistItem',
} as Meta;

export const Default: Story = (args) => (
  <MenuProvider>
    <PlaylistItem {...PLAYLIST_MOCK} {...args} />
  </MenuProvider>
);
