import { useContext, useEffect, useState } from 'react';
import Sound from 'react-native-sound';

import { Bugsnag } from '../utils';
import { GameContext } from '../contexts';
import { UseSound } from './useSound.types';
import { useAppSelector } from '../store/hooks';

const defaultValue = new Sound('');

export const useSound: UseSound = (mp3) => {
  const { setLoaded } = useContext(GameContext);
  const { state } = useAppSelector((state) => state.game);
  const [sound, setSound] = useState<Sound>(defaultValue);

  useEffect(() => {
    if (!mp3) return;

    setLoaded(false);
    const sound = new Sound(`${mp3}.mp3`, '', (error) => {
      setLoaded(true);
      if (error) {
        Bugsnag.notify('Failed to load the sound', error);
        return;
      }
      setSound(sound);

      sound.setCurrentTime(
        Math.random() * (Math.max(0, sound.getDuration() - 10) + 1),
      );
      if (state === 'game') {
        sound.play((success) => {
          if (!success) {
            Bugsnag.notify('Playback error', error);
          }
        });
      }
    });

    return () => {
      sound.release();
    };
  }, [mp3, setLoaded]);

  return sound;
};
