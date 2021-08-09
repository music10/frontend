import { createContext, Dispatch, SetStateAction } from 'react';
import { SoundData } from 'react-native-use-sound/src/types';

interface IMusicContext {
  play: () => void;
  stop: () => void;
  pause: () => void;
  sound: SoundData | null;
  isPlaying: boolean;
  duration: number | null;
  allowPlay: boolean;
  setAllowPlay: Dispatch<SetStateAction<boolean>>;
}
export const MusicContext = createContext({} as IMusicContext);
