import React, {
  FC,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { usePlaying } from '../../../hooks';
import { GameContext, MusicContext } from '../../../contexts';

export interface Props {
  mp3: string;
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>;
}

export const Music: FC<PropsWithChildren<Props>> = ({
  mp3,
  setMp3Loading,
  children,
}) => {
  const { play, stop, pause, ...rest } = usePlaying(mp3, setMp3Loading);
  const [allowPlay, setAllowPlay] = useState(true);
  const { isPause } = useContext(GameContext);

  useEffect(() => {
    if (!isPause) {
      play();
    }
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, stop]);

  return (
    <MusicContext.Provider
      value={{ play, stop, pause, allowPlay, setAllowPlay, ...rest }}
    >
      {children}
    </MusicContext.Provider>
  );
};
