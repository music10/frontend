import React, { FC, useContext } from 'react';
import { Progress } from '../../../components';
import { MusicContext } from '../../../contexts';

export const Progressbar: FC = () => {
  const { isPlaying, stop } = useContext(MusicContext);

  return (
    <Progress
      state={isPlaying ? 'start' : 'stop'}
      callback={(result) => {
        if (result.finished) {
          stop();
        }
      }}
    />
  );
};
