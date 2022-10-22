import React, { FC, PropsWithChildren, useEffect } from 'react';

import { MusicContext } from '../../../contexts';
import { useSound } from '../../../hooks';
import { useAppSelector } from '../../../store/hooks';

export const Music: FC<PropsWithChildren> = ({ children }) => {
  const { mp3, state, isSoundEnd } = useAppSelector((state) => state.game);
  const isGame = state === 'game' && !isSoundEnd;

  const sound = useSound(mp3 ?? '');

  useEffect(() => {
    if (isGame) {
      sound.play();
    } else {
      sound.pause();
    }
  }, [isGame]);

  useEffect(() => {
    sound.play();
    return () => sound.stop();
  }, [sound]);

  return (
    <MusicContext.Provider value={sound}>{children}</MusicContext.Provider>
  );
};
