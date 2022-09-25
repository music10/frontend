import { useCallback, useEffect, useState } from 'react';
import { Howl } from 'howler';

import { Bugsnag } from '../utils';
import { UseSound } from './useSound.types';
import { useAppDispatch } from '../store/hooks';
import { setMp3Loaded } from '../actions';

const defaultValue = {
  play: () => {},
  stop: () => {},
  pause: () => {},
  isPlaying: () => false,
};

export const useSound: UseSound = (mp3) => {
  const dispatch = useAppDispatch();
  const [sound, setSound] = useState(defaultValue);

  const onLoad = useCallback(
    (sound) => {
      sound.seek(Math.random() * (Math.max(0, sound.duration() - 10) + 1));
      setSound({
        play: sound.play.bind(sound),
        stop: sound.stop.bind(sound),
        pause: sound.pause.bind(sound),
        isPlaying: sound.playing.bind(sound),
      });
    },
    [setSound],
  );

  useEffect(() => {
    if (!mp3) return;

    const sound = new Howl({
      html5: true,
      src: mp3,
      format: 'mp3',
      preload: true,
      onload: () => {
        dispatch(setMp3Loaded());
        onLoad(sound);
      },
      onloaderror: (id, error) => Bugsnag.notify(error as Error),
      onplayerror: (id, error) => Bugsnag.notify(error as Error),
    });

    sound.load();

    return () => {
      sound.unload();
    };
  }, [mp3, dispatch]);

  return sound;
};
