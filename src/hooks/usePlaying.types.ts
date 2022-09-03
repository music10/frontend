import React, { Dispatch } from 'react';
import { SoundData } from 'react-native-use-sound/src/types';

export type usePlayingType = (
  mp3: string,
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>,
) => {
  play: () => void;
  stop: () => void;
  pause: () => void;
  sound: SoundData | null;
  isPlaying?: boolean;
  duration: number | null;
};
