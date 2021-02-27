import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PlayIcon } from './Play';
import { RewindIcon } from './Rewind';
import { SearchIcon } from './Search';

export default {
  title: 'Icons',
} as Meta;

export const Play: Story = (args) => <PlayIcon fill="white" {...args} />;
export const Rewind: Story = (args) => <RewindIcon fill="white" {...args} />;
export const Search: Story = (args) => <SearchIcon fill="white" {...args} />;
export const NoArtists: Story = (args) => <NoArtists {...args} />;
export const NoPlaylists: Story = (args) => <NoPlaylists {...args} />;
