import { useCallback, useContext, useEffect, useState } from 'react';
import { Howl } from 'howler';

import { Bugsnag } from '../utils';
import { GameContext } from '../contexts';
import { UseSound } from './useSound.types';

const defaultValue = {
  play: () => {},
  stop: () => {},
  pause: () => {},
  isPlaying: () => false,
};

export const useSound: UseSound = (mp3) => {
  const { isPause, setLoaded } = useContext(GameContext);
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
    [isPause, setSound],
  );

  useEffect(() => {
    if (!mp3) return;

    setLoaded(false);
    const sound = new Howl({
      html5: true,
      src: mp3,
      format: 'mp3',
      preload: true,
      onload: () => {
        setLoaded(true);
        onLoad(sound);
      },
      onloaderror: (id, error) => Bugsnag.notify(error as Error),
      onplayerror: (id, error) => Bugsnag.notify(error as Error),
    });

    sound.load();

    return () => {
      sound.unload();
    };
  }, [mp3, setLoaded]);

  return sound;
};
