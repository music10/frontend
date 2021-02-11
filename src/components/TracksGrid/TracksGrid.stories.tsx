import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Track, TrackCardVariant } from '../Track';
import { TracksGrid } from './TracksGrid';

export default {
  title: 'Components/TracksGrid',
  component: TracksGrid,
} as Meta;

const Template = () => (
  <TracksGrid>
    <Track
      author="CENTR"
      track="Город Дорог"
      type={TrackCardVariant.Success}
      onPress={() => {
        void 0;
      }}
    />
    <Track
      author="Каста"
      track="Вокруг Шум"
      type={TrackCardVariant.Default}
      onPress={() => {
        void 0;
      }}
    />
    <Track
      author="Guf"
      track="Ice Baby"
      type={TrackCardVariant.Default}
      onPress={() => {
        void 0;
      }}
    />
    <Track
      author="N.W.A"
      track="Fuck Tha Police"
      type={TrackCardVariant.Wrong}
      onPress={() => {
        void 0;
      }}
    />
  </TracksGrid>
);

export const Default = Template.bind({});
