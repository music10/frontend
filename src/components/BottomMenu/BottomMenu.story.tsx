import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuItem } from '../MenuItem';
import { PlayIcon, ShareIcon } from '../icons';
import { BottomMenu } from './BottomMenu';

export default {
  title: 'Components/BottomMenu',
  component: BottomMenu,
} as Meta;

export const Default: Story = (args) => (
  <BottomMenu {...args}>
    <MenuItem primary text="К плейлистам" icon={PlayIcon} />
    <MenuItem text="Поделиться результатами" icon={ShareIcon} />
  </BottomMenu>
);
