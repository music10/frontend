import React, { FC, useCallback, useContext } from 'react';
import { Animated } from 'react-native';

import { Progress } from '../../../components';
import { GameContext, MusicContext } from '../../../contexts';

export const Progressbar: FC = () => {
  const { isPause, isLoaded } = useContext(GameContext);
  const sound = useContext(MusicContext);

  const endAnimationCallback = useCallback<Animated.EndCallback>(
    (result) => {
      if (result.finished) {
        sound.stop();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sound],
  );

  return (
    <Progress
      state={!isPause && isLoaded ? 'start' : 'stop'}
      callback={endAnimationCallback}
    />
  );
};
