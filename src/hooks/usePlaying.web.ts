import useSound from 'use-sound';
import { usePlayingType } from './usePlaying.types';

export const usePlaying: usePlayingType = (mp3, setMp3Loading) => {
  const [play, data] = useSound(`${mp3.split('?')[0]}.mp3`, {
    onload: () => setMp3Loading(false),
  });

  return {
    play,
    ...data,
  };
};
