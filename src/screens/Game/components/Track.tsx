import { css } from '@emotion/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Track as TrackItem } from '../../../components';
import { ITrack } from '../../../interfaces';

interface Props {
  track: ITrack;
  selected: string;
  correct: string;
  choose: (trackId: string) => void;
}

export const Track: FC<Props> = ({ track, selected, correct, choose }) => (
  <View
    style={css`
      margin-bottom: 16px;
    `}
  >
    <TrackItem
      key={track.id + selected + correct}
      disabled={!!selected && track.id !== selected}
      success={track.id === correct}
      onPress={() => {
        if (!selected) {
          choose(track.id);
        }
      }}
      {...track}
    />
  </View>
);
