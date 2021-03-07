import React, { Dispatch, SetStateAction } from 'react';
import Sound from 'react-native-sound';

interface MusicContextValue {
  play: () => void;
  stop: () => void;
  pause: () => void;
  sound: Sound | null;
  isPlaying: boolean;
  duration: number | null;
  allowPlay: boolean;
  setAllowPlay: Dispatch<SetStateAction<boolean>>;
}
export const MusicContext = React.createContext({} as MusicContextValue);
