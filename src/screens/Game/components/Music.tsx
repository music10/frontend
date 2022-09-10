import React, { FC, PropsWithChildren, useContext, useEffect } from 'react';

import { GameContext, MusicContext } from '../../../contexts';
import { useSound } from '../../../hooks';

export interface Props {
  mp3: string;
}

export const Music: FC<PropsWithChildren<Props>> = ({ mp3, children }) => {
  const { isPause } = useContext(GameContext);
  const sound = useSound(mp3);

  useEffect(() => {
    !isPause ? sound.play() : sound.pause();
  }, [isPause, sound]);

  return (
    <MusicContext.Provider value={sound}>{children}</MusicContext.Provider>
  );
};
