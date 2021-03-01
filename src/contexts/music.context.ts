import React from 'react';
import Sound from 'react-native-sound';

interface MusicContextValue {
  play: () => void;
  stop: () => void;
  pause: () => void;
  sound: Sound | null;
  isPlaying: boolean;
  duration: number | null;
}
export const MusicContext = React.createContext({} as MusicContextValue);
