import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button } from '../Button';
import { PlaylistGrid } from './PlaylistGrid';

export default {
  title: 'Components/PlaylistGrid',
  component: PlaylistGrid,
} as Meta;

const Template = () => (
  <PlaylistGrid>
    <Button>Русский рэп</Button>
    <Button>Топ 100</Button>
    <Button>Альтернатива</Button>
    <Button>Hip-Hop 90's</Button>
    <Button>Евровидение 2020</Button>
    <Button>Дискотека 90х</Button>
    <Button>Тем, кому за 20</Button>
    <Button>Тем, кому за 30</Button>
  </PlaylistGrid>
);

export const Default = Template.bind({});
