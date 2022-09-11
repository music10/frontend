import React, { FC, PropsWithChildren, useContext, useEffect } from 'react';

import { GameContext, MusicContext } from '../../../contexts';
import { useSound } from '../../../hooks';

export interface Props {
  mp3: string;
}

export const Music: FC<PropsWithChildren<Props>> = ({ mp3, children }) => {
  const { isPause, setMsAfterStart, startTime } = useContext(GameContext);

  const sound = useSound(mp3);

  useEffect(() => {
    if (!isPause) {
      startTime.current = Date.now();
      sound.play();
    } else {
      setMsAfterStart((prev) => prev + Date.now() - startTime.current);
      sound.pause();
    }
  }, [isPause, sound, startTime]);

  return (
    <MusicContext.Provider value={sound}>{children}</MusicContext.Provider>
  );
};
