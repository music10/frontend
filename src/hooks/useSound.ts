import { useContext, useEffect, useState } from 'react';
import Sound from 'react-native-sound';

import { Bugsnag } from '../utils';
import { UseSound } from './useSound.types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setMp3Loaded } from '../actions';

const defaultValue = new Sound('');

export const useSound: UseSound = (mp3) => {
  const { state } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const [sound, setSound] = useState<Sound>(defaultValue);

  useEffect(() => {
    if (!mp3) return;

    const sound = new Sound(`${mp3}.mp3`, '', (error) => {
      dispatch(setMp3Loaded());
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
  }, [mp3, dispatch]);

  return sound;
};
