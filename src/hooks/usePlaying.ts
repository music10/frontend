import { useEffect } from 'react';
import useSound from 'react-native-use-sound';
import { useAppState } from '@react-native-community/hooks';
import { usePlayingType } from './usePlaying.types';

export const usePlaying: usePlayingType = (mp3, setMp3Loading) => {
  const currentAppState = useAppState();
  const [play, pause, stop, { loading, isPlaying }] = useSound(mp3, {
    soundEnabled: currentAppState === 'active',
  });

  useEffect(() => {
    setMp3Loading(loading);
  }, [loading, setMp3Loading]);

  return { play, pause, stop, isPlaying };
};
