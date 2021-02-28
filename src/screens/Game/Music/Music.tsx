import React, { Dispatch, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Pressable } from 'react-native';
import { TRACK_DURATION } from '../../../utils';
import { PauseIcon } from '../../../components/icons/Pause';
import { PlayIcon } from '../../../components/icons';
import { usePlaying } from '../../../hooks';

export interface Props {
  mp3: string;
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>;
}

export const Music: React.FC<Props> = ({ mp3, setMp3Loading }) => {
  const { play, stop, pause, isPlaying } = usePlaying(mp3, setMp3Loading);
  const [timer, setTimer] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    play();
    setTimer(+setTimeout(stop, TRACK_DURATION));

    return () => {
      stop();
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, stop]);

  return isPlaying ? (
    <Pressable onPress={() => pause()}>
      <PauseIcon fill={theme.colors.main50} />
    </Pressable>
  ) : (
    <Pressable onPress={() => play()}>
      <PlayIcon fill={theme.colors.main50} />
    </Pressable>
  );
};
