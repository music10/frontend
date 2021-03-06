import React, { Dispatch } from 'react';
import Sound from 'react-native-sound';

export type usePlayingType = (
  mp3: string,
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>,
) => {
  play: () => void;
  stop: () => void;
  pause: () => void;
  sound: Sound | null;
  isPlaying: boolean;
  duration: number | null;
};
