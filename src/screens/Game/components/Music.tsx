import React, { FC, PropsWithChildren, useContext, useEffect } from 'react';

import { GameContext, MusicContext } from '../../../contexts';
import { useSound } from '../../../hooks';
import { useAppSelector } from '../../../store/hooks';

export const Music: FC<PropsWithChildren> = ({ children }) => {
  const { setMsAfterStart, startTime } = useContext(GameContext);
  const { mp3, state } = useAppSelector((state) => state.game);
  console.log('renderMusic', mp3, state);
  const sound = useSound(mp3);
  const isGame = state === 'game';

  useEffect(() => {
    if (isGame) {
      startTime.current = Date.now();
      sound.play();
    } else {
      setMsAfterStart((prev) => prev + Date.now() - startTime.current);
      sound.pause();
    }
  }, [isGame, sound, startTime]);

  return (
    <MusicContext.Provider value={sound}>{children}</MusicContext.Provider>
  );
};
