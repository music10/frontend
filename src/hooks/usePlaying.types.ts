import React, { Dispatch } from 'react';

export type usePlayingType = (
  mp3: string,
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>,
) => {
  play: () => void;
  stop: () => void;
  pause: () => void;
  isPlaying: boolean;
};
