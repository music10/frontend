import React, { FC, useCallback } from 'react';
import { Track as TrackItem } from '../../../components';
import { ITrack } from '../../../interfaces';

interface Props {
  track: ITrack;
  selected: string;
  correct: string;
  choose: (trackId: string) => void;
}

export const Track: FC<Props> = ({ track, selected, correct, choose }) => {
  const getVariant = useCallback(
    (trackId) => {
      if (trackId === correct) {
        return 'success';
      }
      if (!selected || trackId === selected) {
        return 'default';
      }
      return 'inactive';
    },
    [correct, selected],
  );

  return (
    <TrackItem
      key={track.id + selected + correct}
      disabled={!!selected}
      onPress={() => {
        if (!selected) {
          choose(track.id);
        }
      }}
      variant={getVariant(track.id)}
      style={{ marginTop: 14 }}
      {...track}
    />
  );
};
