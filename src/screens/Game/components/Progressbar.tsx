import React, { FC, useContext } from 'react';

import { Progress } from '../../../components';
import { MusicContext } from '../../../contexts';

export const Progressbar: FC = () => {
  const { isPlaying, stop, setAllowPlay } = useContext(MusicContext);
  //
  // const visibilityHandler = useCallback(
  //   (visible: boolean) => (visible ? play() : pause()),
  //   [play, pause],
  // );

  // usePageVisibility(visibilityHandler);

  return (
    <Progress
      state={isPlaying ? 'start' : 'stop'}
      callback={(result) => {
        if (result.finished) {
          stop();
          setAllowPlay(false);
        }
      }}
    />
  );
};
