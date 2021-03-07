import React, { Dispatch, useEffect, useState } from 'react';

import { usePlaying } from '../../../hooks';
import { MusicContext } from '../../../contexts';

export interface Props {
  mp3: string;
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>;
}

export const Music: React.FC<Props> = ({ mp3, setMp3Loading, children }) => {
  const { play, stop, pause, ...rest } = usePlaying(mp3, setMp3Loading);
  const [allowPlay, setAllowPlay] = useState(true);

  useEffect(() => {
    play();
    return () => {
      stop();
    };
  }, [play, stop]);

  return (
    <MusicContext.Provider
      value={{ play, stop, pause, allowPlay, setAllowPlay, ...rest }}
    >
      {children}
    </MusicContext.Provider>
  );
};
