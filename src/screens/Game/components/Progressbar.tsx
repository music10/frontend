import React, { FC, useCallback, useContext } from 'react';

import { Progress } from '../../../components';
import { MusicContext } from '../../../contexts';

export const Progressbar: FC = () => {
  const { isPlaying, stop, setAllowPlay } = useContext(MusicContext);

  const endAnimationCallback = useCallback(
    (result) => {
      if (result.finished) {
        stop();
        setAllowPlay(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stop],
  );

  return (
    <Progress
      state={isPlaying ? 'start' : 'stop'}
      callback={endAnimationCallback}
    />
  );
};
