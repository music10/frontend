import React, { Dispatch, useEffect, useState } from 'react';
import useSound from 'react-native-use-sound';
import { useAppState } from '@react-native-community/hooks';
import { TRACK_DURATION } from '../../../utils';

interface Props {
  mp3: string;
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>;
}

export const Music: React.FC<Props> = ({ mp3, setMp3Loading }) => {
  const currentAppState = useAppState();
  const [timer, setTimer] = useState(0);
  const [play, , stop, { loading }] = useSound(mp3, {
    soundEnabled: currentAppState === 'active',
  });

  useEffect(() => {
    setMp3Loading(loading);
  }, [loading, setMp3Loading]);

  useEffect(() => {
    play();
    setTimer(setTimeout(stop, TRACK_DURATION));
    return () => {
      stop();
      clearTimeout(timer);
    };
  }, [play, stop]);

  return null;
};
