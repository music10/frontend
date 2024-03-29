import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { PlayIcon } from './Play';
import { RewindIcon } from './Rewind';
import { SearchIcon } from './Search';
import { ShareIcon } from './Share';
import { ReplayIcon } from './Replay';
import { PauseIcon } from './Pause';
import { ExitIcon } from './Exit';
import { SchevronRightIcon } from './SchevronRight';
import { SpotifyIcon } from './Spotify';

export default {
  title: 'Icons',
} as Meta;

export const Play: Story = (args) => <PlayIcon fill="white" {...args} />;
export const Rewind: Story = (args) => <RewindIcon fill="white" {...args} />;
export const Search: Story = (args) => <SearchIcon fill="white" {...args} />;
export const Share: Story = (args) => <ShareIcon fill="white" {...args} />;
export const Replay: Story = (args) => <ReplayIcon fill="white" {...args} />;
export const Spotify: Story = (args) => <SpotifyIcon fill="white" {...args} />;
export const Pause: Story = (args) => <PauseIcon fill="white" {...args} />;
export const Exit: Story = (args) => <ExitIcon fill="white" {...args} />;
export const SchevronRight: Story = (args) => (
  <SchevronRightIcon fill="white" {...args} />
);
// export const NoArtists: Story = (args) => <NoArtists {...args} />;
// export const NoPlaylists: Story = (args) => <NoPlaylists {...args} />;
