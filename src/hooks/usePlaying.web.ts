import useSound from 'use-sound';

import { usePlayingType } from './usePlaying.types';
import { useCallback } from 'react';

export const usePlaying: usePlayingType = (mp3, setMp3Loading) => {
  const [play, data] = useSound(mp3 ? `${mp3}.mp3` : '', {
    onload: () => setMp3Loading(false),
    sprite: {
      demo: [10000, 10000],
    },
  });

  const playFunc = useCallback(() => {
    play({ id: 'demo' });
  }, [play]);

  return {
    play: playFunc,
    ...data,
  };
};
