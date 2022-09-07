import React, { FC, useCallback, useContext } from 'react';
import { Animated } from 'react-native';

import { Progress } from '../../../components';
import { MusicContext } from '../../../contexts';

export const Progressbar: FC = () => {
  const { isPlaying, stop } = useContext(MusicContext);

  const endAnimationCallback = useCallback<Animated.EndCallback>(
    (result) => {
      if (result.finished) {
        stop();
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
