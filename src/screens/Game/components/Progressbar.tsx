import React, { FC, useCallback, useContext } from 'react';
import { Animated } from 'react-native';

import { Progress } from '../../../components';
import { MusicContext } from '../../../contexts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { soundEnd } from '../../../actions';

export const Progressbar: FC = () => {
  const { state, mp3Loaded } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const sound = useContext(MusicContext);

  const endAnimationCallback = useCallback<Animated.EndCallback>(
    (result) => {
      if (result.finished) {
        dispatch(soundEnd());
        sound.stop();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sound],
  );

  return (
    <Progress
      state={state === 'game' && mp3Loaded ? 'start' : 'stop'}
      callback={endAnimationCallback}
    />
  );
};
