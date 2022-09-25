import React, { FC, useCallback, useContext } from 'react';
import { Animated } from 'react-native';

import { Progress } from '../../../components';
import { GameContext, MusicContext } from '../../../contexts';
import { useAppSelector } from '../../../store/hooks';

export const Progressbar: FC = () => {
  const { isLoaded } = useContext(GameContext);
  const { state } = useAppSelector((state) => state.game);
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
      state={state !== 'pause' && isLoaded ? 'start' : 'stop'}
      callback={endAnimationCallback}
    />
  );
};
