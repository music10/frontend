import React, { Dispatch, useEffect, useState } from 'react';
import useSound from 'use-sound';
import { TRACK_DURATION } from '../../../utils';

interface Props {
  mp3: string;
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>;
}

export const Music: React.FC<Props> = ({ mp3, setMp3Loading }) => {
  const [timer, setTimer] = useState(0);
  const [play, { stop }] = useSound(`${mp3.split('?')[0]}.mp3`, {
    onload: () => setMp3Loading(false),
  });

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
