import React, { FC, useCallback, useContext } from 'react';
// @ts-ignore
import { usePageVisibility } from 'react-page-visibility';

import { Progress } from '../../../components';
import { MusicContext } from '../../../contexts';

export const Progressbar: FC = () => {
  const { isPlaying, play, pause, stop, setAllowPlay } = useContext(
    MusicContext,
  );

  const visibilityHandler = useCallback(
    (visible: boolean) => (visible ? play() : pause()),
    [play, pause],
  );
  usePageVisibility(visibilityHandler);

  const endAnimationCallback = useCallback(
    (result) => {
      if (result.finished) {
        stop();
        setAllowPlay(false);
      }
    },
    [setAllowPlay, stop],
  );

  return (
    <Progress
      state={isPlaying ? 'start' : 'stop'}
      callback={endAnimationCallback}
    />
  );
};
