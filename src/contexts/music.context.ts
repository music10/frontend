import { createContext } from 'react';
import { SoundData } from 'react-native-use-sound/src/types';

interface IMusicContext {
  play: () => void;
  stop: () => void;
  pause: () => void;
  sound: SoundData | null;
  isPlaying?: boolean;
  duration: number | null;
}

export const MusicContext = createContext({} as IMusicContext);
